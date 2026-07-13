export const SERVICES = [
  {
    slug: 'desarrollo-web',
    title: 'Desarrollo Web',
    shortDescription: 'Sitios y aplicaciones web hechos para convertir visitas en clientes.',
    heroDescription: 'Construimos presencia digital que refleja la calidad de tu negocio y facilita que tus clientes te encuentren y te elijan.',
    whatWeDo: 'Trabajamos contigo desde la idea hasta el lanzamiento, diseñando y desarrollando sitios y plataformas web pensadas para tus clientes reales, no para impresionar a otros programadores.',
    approach: [
      { title: 'Entendemos tu negocio antes de construir', description: 'Investigamos tu industria, tu competencia y a tus clientes para construir algo que realmente funcione para ti.' },
      { title: 'Diseño que genera confianza', description: 'Un sitio bien diseñado transmite profesionalismo y hace que la gente confíe en tu marca.' },
      { title: 'Velocidad como prioridad', description: 'Cada segundo de carga cuenta. Optimizamos todo para que nadie se vaya antes de conocerte.' },
      { title: 'Se adapta a cualquier pantalla', description: 'Tus clientes te visitan desde el celular tanto como desde la computadora, y tu sitio debe verse bien en ambos.' },
      { title: 'Preparado para crecer contigo', description: 'Construimos sobre una base sólida que soporta nuevas funciones a medida que tu negocio evoluciona.' }
    ],
    whyChooseUs: [
      'Procesos claros y comunicación constante durante todo el proyecto',
      'Diseño pensado en tus clientes, no en tendencias pasajeras',
      'Un sitio que sigue funcionando bien mucho después del lanzamiento',
      'Acompañamiento cercano, no un proyecto que desaparece al entregarlo'
    ]
  },
  {
    slug: 'aplicaciones-moviles',
    title: 'Aplicaciones Móviles',
    shortDescription: 'Apps móviles simples de usar, hechas para que tus clientes vuelvan.',
    heroDescription: 'Llevamos tu negocio al bolsillo de tus clientes con una app pensada para ser fácil, rápida y confiable.',
    whatWeDo: 'Creamos aplicaciones para iOS y Android acompañándote en cada etapa: desde la primera idea hasta que tu app esté disponible para descargar.',
    approach: [
      { title: 'Empezamos por tus usuarios', description: 'Antes de diseñar una sola pantalla, entendemos qué necesitan las personas que usarán tu app.' },
      { title: 'Una sola app para todos', description: 'Desarrollamos pensando en iOS y Android desde el principio, sin duplicar esfuerzo ni presupuesto.' },
      { title: 'Pensada para el uso real', description: 'Diseñamos también para conexiones lentas o inestables, porque así navegan muchos usuarios en el día a día.' },
      { title: 'Conectada con lo que ya tienes', description: 'Tu app puede hablar con tus sistemas actuales sin que tengas que empezar de cero.' },
      { title: 'Ligera y rápida', description: 'Cuidamos cada detalle técnico detrás de escena para que tu app nunca se sienta pesada.' },
      { title: 'Te acompañamos después del lanzamiento', description: 'Publicamos tu app en las tiendas y seguimos ahí para mantenerla al día.' }
    ],
    whyChooseUs: [
      'Un proceso pensado para lanzar rápido sin sacrificar calidad',
      'Diseño simple que reduce la curva de aprendizaje de tus usuarios',
      'Soporte continuo más allá del día del lanzamiento',
      'Una app que crece contigo, no que hay que rehacer en un año'
    ]
  },
  {
    slug: 'integracion',
    title: 'Integración',
    shortDescription: 'Hacemos que tus herramientas trabajen juntas, no por separado.',
    heroDescription: 'Eliminamos el trabajo duplicado conectando tus sistemas para que la información se mueva sola entre ellos.',
    whatWeDo: 'Analizamos cómo operan tus herramientas hoy y construimos conexiones que hacen que compartan información automáticamente, sin depender de copiar y pegar datos entre plataformas.',
    approach: [
      { title: 'Primero entendemos, después construimos', description: 'Antes de conectar nada, mapeamos cómo se mueve la información en tu negocio actualmente.' },
      { title: 'Sin depender de una sola herramienta', description: 'Conectamos las plataformas que ya usas, sin obligarte a cambiar de sistema.' },
      { title: 'Datos siempre al día', description: 'La información se actualiza automáticamente en todos lados, sin retrasos ni versiones desactualizadas.' },
      { title: 'Menos pasos manuales', description: 'Cada conexión que construimos elimina una tarea repetitiva de tu día a día.' },
      { title: 'Con la seguridad como base', description: 'Cuidamos que la información que viaja entre tus sistemas esté siempre protegida.' }
    ],
    whyChooseUs: [
      'Menos tiempo perdido moviendo información a mano',
      'Datos consistentes en todas tus plataformas',
      'Soluciones adaptadas a las herramientas que ya usas',
      'Soporte si algo cambia en tus sistemas más adelante'
    ]
  },
  {
    slug: 'automatizacion',
    title: 'Automatización',
    shortDescription: 'Convertimos tareas repetitivas en procesos que funcionan solos.',
    heroDescription: 'Le devolvemos tiempo a tu equipo automatizando el trabajo que hoy se hace a mano y de forma repetida.',
    whatWeDo: 'Observamos cómo trabaja tu equipo día a día, identificamos las tareas que consumen más tiempo sin agregar valor, y las convertimos en procesos automáticos.',
    approach: [
      { title: 'Empezamos observando cómo trabajas hoy', description: 'Antes de automatizar nada, entendemos tu operación real, no la ideal.' },
      { title: 'Priorizamos lo que más tiempo consume', description: 'Nos enfocamos primero en las tareas que más impactan a tu equipo.' },
      { title: 'Menos espacio para errores humanos', description: 'Los procesos automáticos hacen lo mismo cada vez, sin fallas por cansancio o distracción.' },
      { title: 'Información lista cuando la necesitas', description: 'Generamos reportes automáticos para que dejes de armarlos manualmente.' },
      { title: 'Crece con tu operación', description: 'Las soluciones que construimos se ajustan a medida que tu negocio cambia.' }
    ],
    whyChooseUs: [
      'Horas de trabajo manual que se recuperan cada semana',
      'Procesos más consistentes, con menos errores',
      'Tu equipo enfocado en tareas que realmente importan',
      'Automatizaciones que evolucionan junto a tu negocio'
    ]
  }
];

export function getServiceBySlug(slug) {
  return SERVICES.find((service) => service.slug === slug);
}
