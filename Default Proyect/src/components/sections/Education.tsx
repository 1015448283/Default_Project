import { useState } from 'react';

interface StudyItem {
  id: string;
  category: 'formal' | 'specialization' | 'certification';
  title: string;
  institution: string;
  period: string;
  status: string;
  description: string;
  skills: string[];
  highlight?: string;
}

const studiesData: StudyItem[] = [
  {
    id: '1',
    category: 'formal',
    title: 'Ingeniería de Sistemas y Computación',
    institution: 'Educación Superior Universitaria',
    period: '2020 - En curso / Egresado',
    status: 'Formación Profesional',
    description: 'Estudios enfocados en la fundamentación algorítmica, ingeniería de software, arquitectura de sistemas distribuidos, bases de datos relacionales, estructuras de datos y metodologías de desarrollo ágil.',
    skills: ['Estructuras de Datos', 'Algoritmia', 'Bases de Datos', 'Arquitectura de Software', 'POO', 'Metodologías Ágiles'],
    highlight: 'Enfoque en desarrollo de software y sistemas de información'
  },
  {
    id: '2',
    category: 'specialization',
    title: 'Especialización en Desarrollo Frontend & UI Moderna',
    institution: 'Formación Tecnológica Avanzada',
    period: '2022 - 2024',
    status: 'Certificado & Especializado',
    description: 'Profundización en construcción de aplicaciones web de alto rendimiento y diseño de interfaces reactivas con React, TypeScript, gestión de estados complejos, integración de APIs RESTful y optimización de carga.',
    skills: ['React', 'TypeScript', 'Tailwind CSS', 'Vite', 'TanStack Query', 'Zustand', 'Responsive Design'],
    highlight: 'Desarrollo web moderno con tipado estricto y componentes reutilizables'
  },
  {
    id: '3',
    category: 'specialization',
    title: 'Gestión y Arquitectura de Bases de Datos Relacionales',
    institution: 'Especialización en PostgreSQL & SQL Avanzado',
    period: '2023 - 2024',
    status: 'Especialización Técnica',
    description: 'Diseño de modelos relacionales, normalización, optimización de queries con EXPLAIN ANALYZE, triggers, funciones almacenadas, políticas de seguridad a nivel de fila (RLS) y sincronización con Supabase.',
    skills: ['PostgreSQL', 'Modelado Relacional', 'Supabase', 'SQL Avanzado', 'Políticas RLS', 'Indexación'],
    highlight: 'Optimización de rendimiento y seguridad de datos en producción'
  },
  {
    id: '4',
    category: 'certification',
    title: 'Buenas Prácticas, Control de Versiones & DevOps Essentials',
    institution: 'Formación Continua & Certificaciones Tech',
    period: '2023 - Presente',
    status: 'Certificación Continua',
    description: 'Dominio de flujos de trabajo colaborativos con Git/GitHub, containerización con Docker, despliegues continuos (CI/CD) en plataformas cloud (Netlify, Vercel, Docker) y principios SOLID.',
    skills: ['Git & GitHub', 'Docker', 'CI/CD', 'Clean Code', 'Seguridad Web', 'Netlify / Vercel'],
    highlight: 'Flujos automatizados y código limpio preparado para producción'
  }
];

export function Education() {
  const [filter, setFilter] = useState<'all' | 'formal' | 'specialization' | 'certification'>('all');

  const filteredStudies = filter === 'all'
    ? studiesData
    : studiesData.filter(s => s.category === filter);

  return (
    <section id="estudios" className="py-20 px-6 bg-dark-900/40 relative overflow-hidden">
      {/* Background ambient decorative light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary-950/80 border border-primary-800/60 text-primary-300 text-xs font-semibold mb-4 backdrop-blur-sm">
            <svg className="w-4 h-4 text-primary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
            </svg>
            Trayectoria Académica
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight mb-4">
            Mis Estudios & <span className="bg-gradient-to-r from-primary-400 to-cyan-300 bg-clip-text text-transparent">Formación Profesional</span>
          </h2>
          <p className="text-gray-400 text-base md:text-lg">
            Combinación de fundamentos sólidos de ingeniería, desarrollo frontend de vanguardia y especialización en bases de datos relacionales.
          </p>
        </div>

        {/* Filter buttons */}
        <div className="flex flex-wrap justify-center gap-2.5 mb-12">
          {[
            { key: 'all', label: 'Todos los Estudios' },
            { key: 'formal', label: 'Formación Superior' },
            { key: 'specialization', label: 'Especializaciones' },
            { key: 'certification', label: 'Certificaciones' },
          ].map(tab => (
            <button
              key={tab.key}
              onClick={() => setFilter(tab.key as any)}
              className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${filter === tab.key
                  ? 'bg-primary-600 text-white shadow-lg shadow-primary-600/30 scale-105'
                  : 'bg-dark-800/80 text-gray-400 hover:text-white hover:bg-dark-700/80 border border-dark-700'
                }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Studies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredStudies.map((study) => (
            <div
              key={study.id}
              className="group relative bg-dark-800/70 hover:bg-dark-800 border border-dark-700/80 hover:border-primary-500/50 rounded-2xl p-6 transition-all duration-300 hover:shadow-xl hover:shadow-primary-950/40 flex flex-col justify-between"
            >
              <div>
                {/* Header card info */}
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="p-3 rounded-xl bg-primary-950 border border-primary-800/70 text-primary-400 group-hover:scale-110 transition-transform">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                  <div className="flex flex-col items-end">
                    <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-dark-700 text-primary-300 border border-dark-600">
                      {study.status}
                    </span>
                    <span className="text-xs text-gray-400 mt-1.5 flex items-center gap-1">
                      <svg className="w-3.5 h-3.5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      {study.period}
                    </span>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white mb-1 group-hover:text-primary-300 transition-colors">
                  {study.title}
                </h3>
                <p className="text-sm font-medium text-primary-400/90 mb-3 flex items-center gap-1.5">
                  <svg className="w-4 h-4 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                  {study.institution}
                </p>

                <p className="text-gray-300 text-sm leading-relaxed mb-4">
                  {study.description}
                </p>

                {study.highlight && (
                  <div className="p-2.5 rounded-lg bg-dark-900/70 border border-dark-700/80 mb-4 text-xs text-gray-300 flex items-center gap-2">
                    <span className="text-primary-400">⚡</span>
                    <span className="font-medium text-gray-200">{study.highlight}</span>
                  </div>
                )}
              </div>

              {/* Skills Tags */}
              <div className="pt-3 border-t border-dark-700/60">
                <div className="flex flex-wrap gap-1.5">
                  {study.skills.map((skill, index) => (
                    <span
                      key={index}
                      className="text-xs px-2.5 py-1 rounded-md bg-dark-900 text-gray-300 border border-dark-700 font-medium group-hover:border-primary-900/60 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Informative footer card */}
        <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-dark-800 to-dark-800/80 border border-dark-700 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4 text-center sm:text-left">
            <div className="w-12 h-12 rounded-xl bg-primary-900/40 border border-primary-700/50 flex items-center justify-center text-primary-400 shrink-0">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <div>
              <h4 className="text-white font-semibold text-base">Aprendizaje Continuo & Enfoque Práctico</h4>
              <p className="text-gray-400 text-sm">Constante actualización en arquitecturas escalables, diseño de bases de datos y rendimiento frontend.</p>
            </div>
          </div>
          <a
            href="/contacto"
            className="whitespace-nowrap px-5 py-2.5 rounded-xl bg-primary-600 hover:bg-primary-500 text-white font-medium text-sm transition-all shadow-md shadow-primary-600/30"
          >
            Hablemos de tu proyecto
          </a>
        </div>
      </div>
    </section>
  );
}

export default Education;
