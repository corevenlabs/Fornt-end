const http = require('http');
const fs = require('fs');
const path = require('path');
const { pathToFileURL } = require('url');

const BUILD_DIR = path.join(__dirname, '..', 'build');
const PORT = 5001;

// Vercel's build container (and most serverless/CI Linux images) lacks the
// system libraries (libnspr4, libnss3, ...) that puppeteer's bundled full
// Chrome needs. @sparticuz/chromium ships a Chromium build packaged for
// exactly these minimal environments. It doesn't support local Windows/Mac
// dev, so we only use it when running on Vercel; puppeteer's full Chrome
// still runs the same script locally.
async function launchBrowser() {
  if (process.env.VERCEL) {
    const puppeteerCore = require('puppeteer-core');
    // @sparticuz/chromium ships as an ESM default export; under CommonJS
    // require() the real API lands on .default, not the module root.
    const chromium = require('@sparticuz/chromium').default;
    return puppeteerCore.launch({
      args: chromium.args,
      executablePath: await chromium.executablePath(),
      headless: true
    });
  }

  const puppeteer = require('puppeteer');
  return puppeteer.launch({
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
}

const MIME_TYPES = {
  '.html': 'text/html',
  '.js': 'text/javascript',
  '.css': 'text/css',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.txt': 'text/plain',
  '.xml': 'application/xml',
  '.webmanifest': 'application/manifest+json'
};

async function getRoutes() {
  const servicesModulePath = path.join(__dirname, '..', 'src', 'data', 'services.js');
  const { SERVICES } = await import(pathToFileURL(servicesModulePath).href);

  return [
    { route: '/', outFile: 'index.html' },
    { route: '/comenzar', outFile: 'comenzar/index.html' },
    ...SERVICES.map(({ slug }) => ({
      route: `/servicios/${slug}`,
      outFile: `servicios/${slug}/index.html`
    }))
  ];
}

function serve(indexTemplate) {
  return (req, res) => {
    const urlPath = decodeURIComponent(req.url.split('?')[0]);
    const filePath = path.join(BUILD_DIR, urlPath);
    const isHtmlNavigation = urlPath === '/' || path.extname(urlPath) === '';

    if (!isHtmlNavigation && fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
      const ext = path.extname(filePath);
      res.writeHead(200, { 'Content-Type': MIME_TYPES[ext] || 'application/octet-stream' });
      fs.createReadStream(filePath).pipe(res);
      return;
    }

    // Always serve the pristine template (never the progressively-overwritten
    // build/index.html), so each route starts from a clean, un-prerendered
    // document instead of inheriting an earlier route's baked-in tags.
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(indexTemplate);
  };
}

async function prerender() {
  const routes = await getRoutes();
  const indexTemplate = fs.readFileSync(path.join(BUILD_DIR, 'index.html'), 'utf8');
  const server = http.createServer(serve(indexTemplate));
  await new Promise((resolve) => server.listen(PORT, resolve));

  let browser;
  try {
    browser = await launchBrowser();
    const page = await browser.newPage();

    for (const { route, outFile } of routes) {
      await page.goto(`http://localhost:${PORT}${route}`, { waitUntil: 'networkidle0' });
      await page.waitForSelector('[data-app-ready="true"]', { timeout: 10000 });

      const html = await page.content();
      const outPath = path.join(BUILD_DIR, outFile);
      fs.mkdirSync(path.dirname(outPath), { recursive: true });
      fs.writeFileSync(outPath, html);
      console.log(`Prerendered ${route} -> build/${outFile}`);
    }
  } finally {
    if (browser) await browser.close();
    server.close();
  }
}

prerender().catch((err) => {
  // Prerendering is an SEO enhancement, not a hard requirement — the app
  // still works correctly client-side rendered without it. Fail loudly but
  // don't block the deploy, so an environment-specific issue here (browser
  // launch, missing libs, etc.) can never take down an otherwise-working build.
  console.error('\n========================================');
  console.error('WARNING: Prerendering failed, shipping without it.');
  console.error('SEO tags will only be set client-side (see src/components/Seo/Seo.js).');
  console.error(err);
  console.error('========================================\n');
});
