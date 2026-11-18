import { Link } from 'react-router-dom';
import { getAssetUrl } from '../../utils/asset';

// ============================================================
//  ✏️  Estos proyectos se muestran en la PÁGINA PRINCIPAL
//  Deben ser los mismos que en src/pages/public/Testimonials.tsx
// ============================================================
const proyectos = [
  {
    nombre: 'Nomi',
    descripcion: 'Plataforma de gestión para optimización de tiempos de entrega.',
    tecnologias: ['Android Studio'],
    anio: '2026',
    rol: 'Desarrollador Frontend',
    enlace: '',
    imagen: '/nomi.png',
  },

  {
    nombre: 'T-Smarket',
    descripcion: 'pagina web para una tienda o un comercio',
    tecnologias: ['HTML', 'CSS', 'JavaScript'],
    anio: '2024',
    rol: 'diseñador',
    enlace: '',
    imagen: '/t-Smarket.png',
  }
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

export function Testimonials() {
  return (
    <section className="py-16 px-6 bg-dark-900">
      <div className="max-w-7xl mx-auto">

        {/* Encabezado */}
        <div className="flex justify-between items-end mb-8">
          <div>
            <h2 className="text-3xl font-bold text-white mb-2">Proyectos</h2>
            <p className="text-gray-400">Una muestra de los proyectos en los que he participado.</p>
          </div>
          <Link to="/testimonios" className="text-primary-400 hover:text-primary-300 text-sm font-medium">
            Ver todos →
          </Link>
        </div>

        {/* Grid — muestra máximo 3 en la página principal */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {proyectos.slice(0, 3).map((proyecto, index) => (
            <div
              key={index}
              className="flex flex-col bg-dark-800 border border-dark-700 rounded-2xl shadow-lg hover:border-primary-600/50 transition-colors overflow-hidden"
            >
              {/* Imagen o placeholder */}
              {proyecto.imagen ? (
                <div className="w-full h-40 overflow-hidden bg-dark-900">
                  <img
                    src={getAssetUrl(proyecto.imagen)}
                    alt={`Captura de ${proyecto.nombre}`}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              ) : (
                <div className="w-full h-40 bg-dark-900 flex items-center justify-center border-b border-dark-700">
                  <div className="w-14 h-14 rounded-2xl bg-primary-500/10 border border-primary-500/20 flex items-center justify-center text-primary-400">
                    <CodeIcon />
                  </div>
                </div>
              )}

              {/* Contenido */}
              <div className="flex flex-col justify-between flex-1 p-5">
                <div>
                  <h3 className="text-white font-bold text-lg mb-1">{proyecto.nombre}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-3">{proyecto.descripcion}</p>
                  <div className="flex flex-wrap gap-2 mb-3">
                    {proyecto.tecnologias.map((tech, i) => (
                      <span key={i} className="bg-primary-500/10 text-primary-300 text-xs font-medium px-2.5 py-1 rounded-full border border-primary-500/20">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Footer tarjeta */}
                <div className="border-t border-dark-700 pt-3 flex items-center justify-between">
                  <div>
                    <p className="text-white text-sm font-medium">{proyecto.rol}</p>
                    <div className="flex items-center gap-1 text-gray-500 text-xs mt-0.5">
                      <CalendarIcon />
                      <span>{proyecto.anio}</span>
                    </div>
                  </div>
                  {proyecto.enlace && (
                    <a href={proyecto.enlace} target="_blank" rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-primary-400 hover:text-primary-300 text-xs font-medium transition-colors">
                      <LinkIcon />
                      Ver proyecto
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
