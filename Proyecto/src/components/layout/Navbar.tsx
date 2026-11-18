import { useAuthStore } from '../../stores/authStore';
import { Link, NavLink } from 'react-router-dom';
import { Footer } from './Footer';

export function Navbar() {
  const { user, signOut } = useAuthStore();
  const navClass = ({ isActive }: { isActive: boolean }) =>
    `text-sm font-medium transition-colors ${isActive ? 'text-primary-400' : 'text-gray-300 hover:text-white'}`;

  return (
    <nav className="bg-dark-800/90 backdrop-blur-md border-b border-dark-700 px-6 py-4 sticky top-0 z-40">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link to="/" className="text-primary-500 text-xl font-bold tracking-tight flex items-center gap-2">
          Oliver Prada <span className="hidden sm:inline-block text-xs font-semibold px-2 py-0.5 rounded-full bg-primary-950/70 border border-primary-800 text-primary-300">Web Platforms</span>
        </Link>
        <div className="flex gap-6 items-center">
          <NavLink to="/servicios" className={navClass}>Servicios</NavLink>
          <NavLink to="/portafolio" className={navClass}>Portafolio</NavLink>
          <NavLink to="/agendar" className={navClass}>Agendar</NavLink>
          <NavLink to="/contacto" className={navClass}>Contacto</NavLink>
          {user && (
            <div className="flex items-center gap-3">
              <Link to="/admin" className="text-xs bg-dark-700 hover:bg-dark-600 px-3 py-1.5 rounded-lg text-white border border-dark-600 transition-colors">Admin Panel</Link>
              <button onClick={() => signOut()} className="text-xs bg-red-600 hover:bg-red-700 px-3 py-1.5 rounded-lg text-white transition-colors">Salir</button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}

export { Footer };
export default Navbar;
