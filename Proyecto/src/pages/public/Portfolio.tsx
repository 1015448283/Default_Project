import { useState } from 'react';
import { Link } from 'react-router-dom';
import { getAssetUrl } from '../../utils/asset';

// ============================================================
//  ✏️  AGREGA O EDITA TUS PROYECTOS AQUÍ
//  Copia un bloque { } y pégalo dentro del array para agregar
//  un nuevo proyecto. Separa cada bloque con una coma.
// ============================================================
export const proyectosRealizados = [
  {
    nombre: 'Nomi',
    descripcion: 'Plataforma de gestión para optimización de tiempos de entrega.',
    tecnologias: ['Android Studio'],
    anio: '2026',
    rol: 'Desarrollador Frontend',
    enlace: '',          // URL si tienes (GitHub, demo, etc.)
    imagen: '/nomi.png', // Imagen ubicada en la carpeta /public
  },
  {
    nombre: 'T-Smarket',
    descripcion: 'Página web para una tienda o un comercio.',
    tecnologias: ['HTML', 'CSS', 'JavaScript'],
    anio: '2024',
    rol: 'Scrum Master',
    enlace: '',
    imagen: '/t-Smarket.png',
  },

  {
    nombre: 'Football Analytics-lab',
    descripcion: 'Plataforma de analítica deportiva.',
    tecnologias: ['HTML', 'CSS', 'JavaScript'],
    anio: '2026',
    rol: 'Desarrollador Full Stack',
    enlace: '',
    imagen: '/Soccer.jpg',
  },
  // ── EJEMPLO: copia desde aquí para agregar otro proyecto ─────
  // {
  //   nombre: 'Nombre del proyecto',
  //   descripcion: 'Descripción breve de qué hace el proyecto.',
  //   tecnologias: ['React', 'Node.js', 'MySQL'],
  //   anio: '2025',
  //   rol: 'Desarrollador Full Stack',
  //   enlace: 'https://github.com/Oliver-Prada/nombre-repo',
  //   imagen: '/nombre-imagen.png',
  // },
  // ── hasta aquí ──────────────────────────────────────────────
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

function ProjectAvatar({ imagen, nombre }: { imagen?: string; nombre: string }) {
  const [hasError, setHasError] = useState(false);

  if (!imagen || hasError) {
    return (
      <div className="w-12 h-12 rounded-full bg-primary-500/10 flex items-center justify-center text-primary-400">
        <CodeIcon />
      </div>
    );
  }

  return (
    <img
      src={getAssetUrl(imagen)}
      alt={`Logo o captura de ${nombre}`}
      onError={() => setHasError(true)}
      className="w-full h-full object-contain p-2.5 rounded-full group-hover:scale-110 group-hover:brightness-110 transition-all duration-300"
    />
  );
}

export default function Portfolio() {
  return (
    <div className="py-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Encabezado */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">Portafolio de Plataformas Web</h1>
          <p className="text-gray-400">
            Explora las plataformas web y proyectos en los que he participado, el rol desempeñado y el stack tecnológico implementado.
          </p>
        </div>

        {/* Grid de proyectos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {proyectosRealizados.map((proyecto, index) => (
            <div
              key={index}
              className="group flex flex-col justify-between bg-dark-800 border border-dark-700 rounded-2xl shadow-lg hover:border-primary-500/60 transition-all duration-300 overflow-hidden"
            >
              {/* Contenedor tipo Moneda / Medallón Circular */}
              <div className="pt-8 pb-4 flex items-center justify-center bg-gradient-to-b from-dark-900 to-dark-800 border-b border-dark-700/60">
                <div className="relative">
                  {/* Halo de luz / Resplandor (Glow) al pasar el cursor */}
                  <div className="absolute -inset-1.5 rounded-full bg-gradient-to-r from-primary-500 via-primary-400 to-primary-600 opacity-0 group-hover:opacity-80 blur-md transition-all duration-500" />

                  {/* Aro exterior tipo moneda */}
                  <div className="relative w-32 h-32 rounded-full p-1 bg-gradient-to-b from-primary-400/40 via-dark-700 to-primary-600/40 shadow-xl group-hover:shadow-[0_0_30px_rgba(59,130,246,0.6)] group-hover:scale-105 transition-all duration-300">
                    <div className="w-full h-full rounded-full overflow-hidden bg-dark-950 flex items-center justify-center p-1 border-2 border-dark-700 group-hover:border-primary-400 transition-colors">
                      <ProjectAvatar imagen={proyecto.imagen} nombre={proyecto.nombre} />
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col justify-between flex-1 p-6">
                <div>
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

        {/* Banner CTA */}
        <div className="mt-16 text-center bg-gradient-to-r from-primary-900/30 to-dark-800 border border-primary-800/40 rounded-2xl p-8 max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-2">¿Tienes una plataforma web en mente?</h2>
          <p className="text-gray-400 mb-6">Trabajemos juntos para diseñar y construir tu aplicación web con los más altos estándares.</p>
          <Link to="/contacto" className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-lg font-medium transition-colors inline-block">
            Cotizar plataforma web
          </Link>
        </div>
      </div>
    </div>
  );
}
