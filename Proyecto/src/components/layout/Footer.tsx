import { Link } from 'react-router-dom';

const PhoneIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.9 13.5 19.79 19.79 0 0 1 1.84 4.87 2 2 0 0 1 3.81 2.7h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 10.09a16 16 0 0 0 6 6l1.56-1.56a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);

const MailIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="16" x="2" y="4" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
);

const MapPinIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

const GithubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const WhatsAppIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
  </svg>
);

export function Footer() {
  return (
    <footer className="bg-dark-800 border-t border-dark-700 px-6 pt-10 pb-6 mt-auto">
      <div className="max-w-7xl mx-auto">

        {/* Fila principal */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">

          {/* Columna 1: Marca */}
          <div>
            <span className="text-primary-500 text-lg font-bold">Oliver Prada</span>
            <p className="text-gray-400 text-sm mt-2 leading-relaxed">
              Desarrollo de Plataformas Web — Soluciones web modernas, interactivas y escalables.
            </p>
          </div>

          {/* Columna 2: Navegación */}
          <div>
            <h3 className="text-white text-sm font-semibold uppercase tracking-wider mb-4">Navegación</h3>
            <ul className="flex flex-col gap-2 text-sm text-gray-400">
              <li><Link to="/servicios" className="hover:text-primary-400 transition-colors">Servicios</Link></li>
              <li><Link to="/portafolio" className="hover:text-primary-400 transition-colors">Portafolio</Link></li>
              <li><Link to="/contacto" className="hover:text-primary-400 transition-colors">Contacto</Link></li>
            </ul>
          </div>

          {/* Columna 3: Contacto */}
          <div>
            <h3 className="text-white text-sm font-semibold uppercase tracking-wider mb-4">Contacto</h3>
            <ul className="flex flex-col gap-3 text-sm text-gray-400">
              <li>
                <a href="tel:+573005662559"
                  className="flex items-center gap-2 hover:text-primary-400 transition-colors">
                  <span className="text-primary-400 shrink-0"><PhoneIcon /></span>
                  +57 300 566 2559
                </a>
              </li>
              <li>
                <a href="mailto:oliverpradagomez@gmail.com"
                  className="flex items-center gap-2 hover:text-primary-400 transition-colors break-all">
                  <span className="text-primary-400 shrink-0"><MailIcon /></span>
                  oliverpradagomez@gmail.com
                </a>
              </li>
              <li>
                <span className="flex items-center gap-2">
                  <span className="text-primary-400 shrink-0"><MapPinIcon /></span>
                  Bogotá D.C., Colombia
                </span>
              </li>
              <li>
                <a href="https://github.com/Oliver-Prada" target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-primary-400 transition-colors">
                  <span className="text-primary-400 shrink-0"><GithubIcon /></span>
                  Oliver Prada
                </a>
              </li>
              <li className="pt-2">
                <a
                  href="https://wa.me/573005662559?text=Hola%20Oliver,%20te%20contacto%20desde%20tu%20sitio%20web"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 hover:bg-emerald-500 hover:text-white transition-all text-xs font-semibold group shadow-sm hover:shadow-emerald-500/20"
                >
                  <span className="text-emerald-400 group-hover:text-white transition-colors">
                    <WhatsAppIcon />
                  </span>
                  Chatear por WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Línea divisora + copyright */}
        <div className="border-t border-dark-700 pt-5 text-center text-gray-500 text-xs">
          © {new Date().getFullYear()} Oliver Prada. Todos los derechos reservados.
        </div>

      </div>
    </footer>
  );
}

export default Footer;
