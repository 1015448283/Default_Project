import { useState } from 'react';
import { Link } from 'react-router-dom';
import { proyectosRealizados } from '../../pages/public/Portfolio';

const CodeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>
  </svg>
);

const CalendarIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="18" height="18" x="3" y="4" rx="2" ry="2"/>
    <line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/>
    <line x1="3" x2="21" y1="10" y2="10"/>
  </svg>
);

const LinkIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/>
    <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>
  </svg>
);

function ProjectAvatar({ imagen, nombre }: { imagen?: string; nombre: string }) {
  const [hasError, setHasError] = useState(false);

  if (!imagen || hasError) {
    return (
      <div className="w-10 h-10 rounded-full bg-primary-500/10 flex items-center justify-center text-primary-400">
        <CodeIcon />
      </div>
    );
  }

  return (
    <img
      src={imagen}
      alt={`Logo o captura de ${nombre}`}
      onError={() => setHasError(true)}
      className="w-full h-full object-contain p-2 rounded-full group-hover:scale-110 group-hover:brightness-110 transition-all duration-300"
    />
  );
}

export function Portfolio() {
  return (
    <section className="py-16 px-6 bg-dark-900/50 border-y border-dark-800">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-8">
          <div>
            <h2 className="text-3xl font-bold text-white mb-2">Plataformas Web Destacadas</h2>
            <p className="text-gray-400">Plataformas y proyectos web desarrollados con tecnologías modernas.</p>
          </div>
          <Link to="/portafolio" className="text-primary-400 hover:text-primary-300 text-sm font-medium">
            Ver todas →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {proyectosRealizados.slice(0, 3).map((proyecto, index) => (
            <div
              key={index}
              className="group flex flex-col justify-between bg-dark-800 border border-dark-700 rounded-2xl shadow-lg hover:border-primary-500/60 transition-all duration-300 overflow-hidden"
            >
              {/* Contenedor tipo Moneda / Medallón Circular */}
              <div className="pt-7 pb-4 flex items-center justify-center bg-gradient-to-b from-dark-900 to-dark-800 border-b border-dark-700/60">
                <div className="relative">
                  {/* Halo de luz / Resplandor (Glow) al pasar el cursor */}
                  <div className="absolute -inset-1.5 rounded-full bg-gradient-to-r from-primary-500 via-primary-400 to-primary-600 opacity-0 group-hover:opacity-80 blur-md transition-all duration-500" />

                  {/* Aro exterior tipo moneda */}
                  <div className="relative w-28 h-28 rounded-full p-1 bg-gradient-to-b from-primary-400/40 via-dark-700 to-primary-600/40 shadow-xl group-hover:shadow-[0_0_25px_rgba(59,130,246,0.6)] group-hover:scale-105 transition-all duration-300">
                    <div className="w-full h-full rounded-full overflow-hidden bg-dark-950 flex items-center justify-center p-1 border-2 border-dark-700 group-hover:border-primary-400 transition-colors">
                      <ProjectAvatar imagen={proyecto.imagen} nombre={proyecto.nombre} />
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col justify-between flex-1 p-5">
                <div>
                  <h3 className="text-white font-bold text-lg mb-1">{proyecto.nombre}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-3">{proyecto.descripcion}</p>
                  <div className="flex flex-wrap gap-2 mb-3">
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
      </div>
    </section>
  );
}
