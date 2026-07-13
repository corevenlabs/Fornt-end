const http = require('http');
const fs = require('fs');
const path = require('path');
const { pathToFileURL } = require('url');
const puppeteer = require('puppeteer');

const BUILD_DIR = path.join(__dirname, '..', 'build');
const PORT = 5001;

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

  const browser = await puppeteer.launch({
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  const page = await browser.newPage();

  try {
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
    await browser.close();
    server.close();
  }
}

prerender().catch((err) => {
  console.error('Prerender failed:', err);
  process.exit(1);
});
