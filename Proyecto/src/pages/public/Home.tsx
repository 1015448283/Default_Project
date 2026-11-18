import { Hero } from '../../components/sections/Hero';
import { Education } from '../../components/sections/Education';
import { ServicesGrid } from '../../components/sections/ServicesGrid';
import { Portfolio } from '../../components/sections/Portfolio';
import { SocialLinks } from '../../components/sections/SocialLinks';

export default function Home() {
  return (
    <div className="space-y-12 pb-16">
      <Hero />
      <Education />
      <ServicesGrid />
      <Portfolio />
      <section className="py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Conéctate en Redes</h2>
          <p className="text-gray-400 mb-6">Sígueme para contenido sobre desarrollo de plataformas web, arquitectura y tendencias frontend.</p>
          <SocialLinks />
        </div>
      </section>
    </div>
  );
}
