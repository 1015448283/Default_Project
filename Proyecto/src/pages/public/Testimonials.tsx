import { Link } from 'react-router-dom';
import { getAssetUrl } from '../../utils/asset';

// ============================================================
//  ✏️  AGREGA O EDITA TUS PROYECTOS AQUÍ
//  Copia un bloque { } y pégalo dentro del array para agregar
//  un nuevo proyecto. Separa cada bloque con una coma.
// ============================================================
const proyectos = [
  {
    nombre: 'Nomi',
    descripcion: 'Plataforma de gestión para optimización de tiempos de entrega.',
    tecnologias: ['Android Studio'],
    anio: '2026',
    rol: 'Desarrollador Frontend',
    enlace: '',      // <-- pega aquí la URL si tienes (GitHub, demo, etc.)
    imagen: '/nomi.png',  // <-- nombre de tu archivo en la carpeta /public
  },

  {
    nombre: 'T-Smarket',
    descripcion: 'Tienda online',
    tecnologias: ['Html', 'Css', 'Javascript', 'Node'],
    anio: '2025',
    rol: 'Scrum Master',
    enlace: '',      // <-- pega aquí la URL si tienes (GitHub, demo, etc.)
    imagen: '/nomi.png',  // <-- nombre de tu archivo en la carpeta /public
  }

  // ── EJEMPLO: copia desde aquí ──────────────────────────────
  // {
  //   nombre: 'Nombre del proyecto',
  //   descripcion: 'Descripción breve de qué hace el proyecto.',
  //   tecnologias: ['React', 'Node.js', 'MySQL'],
  //   anio: '2025',
  //   rol: 'Desarrollador Full Stack',
  //   enlace: 'https://github.com/Oliver-Prada/nombre-repo',
  //   imagen: '/nombre-imagen.png',  // archivo en la carpeta /public
  // },
  // ── hasta aquí ─────────────────────────────────────────────
];

const CodeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" />
  </svg>
);

const CalendarIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
    <line x1="16" x2="16" y1="2" y2="6" /><line x1="8" x2="8" y1="2" y2="6" />
    <line x1="3" x2="21" y1="10" y2="10" />
  </svg>
);

const LinkIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
    <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
  </svg>
);

export default function Testimonials() {
  return (
    <div className="py-16 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Encabezado */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">Proyectos en los que he Participado</h1>
          <p className="text-gray-400">
            Una muestra de los proyectos que he desarrollado, con las tecnologías y el rol que desempeñé en cada uno.
          </p>
        </div>

        {/* Grid de proyectos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {proyectos.map((proyecto, index) => (
            <div
              key={index}
              className="flex flex-col justify-between bg-dark-800 border border-dark-700 rounded-2xl shadow-lg hover:border-primary-600/50 transition-colors overflow-hidden"
            >
              {/* Imagen del proyecto (si existe) */}
              {proyecto.imagen ? (
                <div className="w-full h-44 overflow-hidden bg-dark-900">
                  <img
                    src={getAssetUrl(proyecto.imagen)}
                    alt={`Captura de ${proyecto.nombre}`}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              ) : (
                <div className="w-full h-44 bg-dark-900 flex items-center justify-center border-b border-dark-700">
                  <div className="w-14 h-14 rounded-2xl bg-primary-500/10 border border-primary-500/20 flex items-center justify-center text-primary-400">
                    <CodeIcon />
                  </div>
                </div>
              )}

              <div className="flex flex-col justify-between flex-1 p-6">
                {/* Icono + nombre */}
                <div>
                  {!proyecto.imagen && (
                    <div className="w-11 h-11 rounded-xl bg-primary-500/10 border border-primary-500/20 flex items-center justify-center text-primary-400 mb-4">
                      <CodeIcon />
                    </div>
                  )}
                  <h2 className="text-xl font-bold text-white mb-2">{proyecto.nombre}</h2>
                  <p className="text-gray-400 text-sm leading-relaxed mb-4">{proyecto.descripcion}</p>

                  {/* Tecnologías */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {proyecto.tecnologias.map((tech, i) => (
                      <span
                        key={i}
                        className="bg-primary-500/10 text-primary-300 text-xs font-medium px-2.5 py-1 rounded-full border border-primary-500/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Footer de tarjeta */}
                <div className="border-t border-dark-700 pt-4 flex items-center justify-between">
                  <div>
                    <p className="text-white text-sm font-medium">{proyecto.rol}</p>
                    <div className="flex items-center gap-1 text-gray-500 text-xs mt-0.5">
                      <CalendarIcon />
                      <span>{proyecto.anio}</span>
                    </div>
                  </div>
                  {proyecto.enlace && (
                    <a
                      href={proyecto.enlace}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-primary-400 hover:text-primary-300 text-xs font-medium transition-colors"
                    >
                      <LinkIcon />
                      Ver proyecto
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center bg-gradient-to-r from-primary-900/30 to-dark-800 border border-primary-800/40 rounded-2xl p-8 max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-2">¿Listo para comenzar tu proyecto?</h2>
          <p className="text-gray-400 mb-6">Trabajemos juntos para llevar tu presencia web y base de datos al siguiente nivel.</p>
          <Link to="/contacto" className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-lg font-medium transition-colors inline-block">
            Solicitar Cotización
          </Link>
        </div>

      </div>
    </div>
  );
}
