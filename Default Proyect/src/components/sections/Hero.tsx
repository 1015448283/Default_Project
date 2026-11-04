import { useState } from 'react';
import { Link } from 'react-router-dom';

export function Hero() {
  const [imageError, setImageError] = useState(false);

  const scrollToEducation = () => {
    const el = document.getElementById('estudios');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-[90vh] flex items-center justify-center bg-dark-900 px-6 py-12 relative overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary-600/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        
        {/* Left Column: Presentation & Info */}
        <div className="lg:col-span-7 text-center lg:text-left flex flex-col items-center lg:items-start">
          
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-dark-800/90 border border-dark-700 text-xs font-semibold text-gray-300 mb-6 shadow-md backdrop-blur-sm">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
            Disponible para proyectos & consultoría técnica
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight mb-4">
            Hola, soy{' '}
            <span className="bg-gradient-to-r from-primary-400 via-blue-300 to-cyan-300 bg-clip-text text-transparent">
              Oliver Prada
            </span>
          </h1>

          <h2 className="text-xl sm:text-2xl text-primary-400 font-semibold mb-6">
            Desarrollo Frontend & Gestión de Bases de Datos
          </h2>

          <p className="text-gray-300 text-base sm:text-lg max-w-2xl leading-relaxed mb-8">
            Apasionado por la creación de aplicaciones web escalables, arquitecturas de software robustas y diseño de bases de datos relacionales de alto rendimiento. Descubre mi trayectoria académica, proyectos y servicios profesionales.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4 justify-center lg:justify-start w-full sm:w-auto mb-10">
            <button
              onClick={scrollToEducation}
              className="px-7 py-3.5 rounded-xl bg-primary-600 hover:bg-primary-500 text-white font-semibold text-base transition-all duration-200 shadow-lg shadow-primary-600/30 hover:scale-105 flex items-center justify-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
              </svg>
              Conocer Mis Estudios
            </button>

            <Link
              to="/portafolio"
              className="px-7 py-3.5 rounded-xl bg-dark-800 hover:bg-dark-700 text-white font-semibold text-base border border-dark-600 hover:border-gray-500 transition-all duration-200 flex items-center justify-center gap-2"
            >
              Ver Portafolio
            </Link>

            <Link
              to="/contacto"
              className="px-6 py-3.5 rounded-xl text-gray-300 hover:text-white font-medium text-base hover:bg-dark-800/60 transition-all duration-200 flex items-center justify-center"
            >
              Contacto →
            </Link>
          </div>

          {/* Quick Metrics / Highlights */}
          <div className="grid grid-cols-3 gap-4 sm:gap-8 pt-6 border-t border-dark-800 w-full max-w-lg">
            <div>
              <div className="text-2xl sm:text-3xl font-black text-white">Ingeniería</div>
              <div className="text-xs sm:text-sm text-gray-400 font-medium">Formación sólida</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-black text-primary-400">React + TS</div>
              <div className="text-xs sm:text-sm text-gray-400 font-medium">Especialización</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-black text-cyan-400">PostgreSQL</div>
              <div className="text-xs sm:text-sm text-gray-400 font-medium">Bases de datos</div>
            </div>
          </div>
        </div>

        {/* Right Column: Profile Photo Card */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end">
          <div className="relative group">
            
            {/* Glowing gradient background border */}
            <div className="absolute -inset-1.5 bg-gradient-to-tr from-primary-600 via-cyan-400 to-blue-500 rounded-3xl blur-md opacity-75 group-hover:opacity-100 transition duration-500 group-hover:blur-lg" />

            {/* Photo Card Container */}
            <div className="relative bg-dark-900 border border-dark-700/80 rounded-3xl p-3 sm:p-4 shadow-2xl overflow-hidden max-w-[340px] sm:max-w-[380px]">
              
              <div className="relative aspect-square w-full rounded-2xl overflow-hidden bg-dark-800">
                {!imageError ? (
                  <img
                    src="/profile.jpg"
                    alt="Oliver Prada"
                    onError={() => setImageError(true)}
                    className="w-full h-full object-cover object-top transition duration-500 group-hover:scale-105"
                  />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center bg-gradient-to-b from-dark-800 to-dark-900">
                    <div className="w-20 h-20 rounded-full bg-primary-950 border border-primary-800 flex items-center justify-center text-primary-400 mb-3">
                      <span className="text-2xl font-bold">OP</span>
                    </div>
                    <span className="text-sm font-semibold text-white">Oliver Prada</span>
                    <span className="text-xs text-gray-400 mt-1">Coloca tu foto en public/profile.jpg</span>
                  </div>
                )}

                {/* Subtle dark gradient overlay at bottom of photo for contrast */}
                <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-dark-900/90 via-dark-900/40 to-transparent pointer-events-none" />

                {/* Bottom name badge on photo */}
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between pointer-events-none">
                  <div>
                    <p className="text-white font-bold text-sm drop-shadow-md">Oliver Prada</p>
                    <p className="text-primary-300 text-xs drop-shadow-md">Desarrollador Web</p>
                  </div>
                  <span className="bg-primary-950/90 border border-primary-700/80 text-primary-300 text-[10px] font-bold px-2 py-0.5 rounded-full backdrop-blur-md">
                    PRO
                  </span>
                </div>
              </div>

              {/* Card Footer Features */}
              <div className="mt-4 pt-3 border-t border-dark-800 grid grid-cols-2 gap-2 text-xs">
                <div className="flex items-center gap-2 text-gray-300 bg-dark-800/80 p-2 rounded-xl">
                  <span className="text-primary-400">🎓</span>
                  <span className="truncate">Formación Técnica</span>
                </div>
                <div className="flex items-center gap-2 text-gray-300 bg-dark-800/80 p-2 rounded-xl">
                  <span className="text-cyan-400">⚡</span>
                  <span className="truncate">Código Limpio</span>
                </div>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

export default Hero;
