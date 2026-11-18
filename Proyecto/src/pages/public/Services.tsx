import { useQuery } from '@tanstack/react-query';
import { serviceService } from '../../services/projectService';
import { Card, Button } from '../../components/common';
import { Link } from 'react-router-dom';
import { getAssetUrl } from '../../utils/asset';

export const DEFAULT_SERVICES = [
  {
    id: 'default-1',
    nombre: 'Desarrollo Frontend con React & TypeScript',
    descripcion: 'Construcción de aplicaciones web interactivas SPA y PWA responsivas, con arquitectura limpia, alto rendimiento y diseño moderno con Tailwind CSS.',
    precio_base: 4500000,
    duracion_estimada: 20,
    imagen_url: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&auto=format&fit=crop&q=80',
  },
  {
    id: 'default-2',
    nombre: 'Plataformas Web Full-Stack a Medida',
    descripcion: 'Desarrollo integral de sitios web con backend en Supabase, autenticación de usuarios, roles de acceso, lógica de negocio y base de datos relacional.',
    precio_base: 9000000,
    duracion_estimada: 35,
    imagen_url: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=80',
  },
  {
    id: 'default-3',
    nombre: 'E-Commerce & Pasarelas de Pago',
    descripcion: 'Tiendas virtuales modernas con catálogo de productos, carrito de compras, cobro en línea con Stripe / PSE / Mercado Pago y webhooks seguros.',
    precio_base: 6500000,
    duracion_estimada: 25,
    imagen_url: '/e-commerce.jpg',
  },
  {
    id: 'default-4',
    nombre: 'Dashboards & Paneles de Administración',
    descripcion: 'Sistemas internos para gestión de clientes, métricas en tiempo real, gráficos analíticos y reportes para la toma de decisiones empresariales.',
    precio_base: 5500000,
    duracion_estimada: 20,
    imagen_url: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=80',
  },
  {
    id: 'default-5',
    nombre: 'Diseño y Optimización de Bases de Datos',
    descripcion: 'Modelado entidad-relación, esquemas PostgreSQL en Supabase, funciones SQL, triggers, índices y políticas de seguridad avanzadas (RLS).',
    precio_base: 3500000,
    duracion_estimada: 15,
    imagen_url: 'https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=800&auto=format&fit=crop&q=80',
  },
  {
    id: 'default-6',
    nombre: 'Sistema de Agendamiento y Automatizaciones',
    descripcion: 'Implementación de reserva de citas en línea con selección de fecha/hora, confirmaciones automáticas y notificaciones integradas.',
    precio_base: 3000000,
    duracion_estimada: 12,
    imagen_url: 'https://images.unsplash.com/photo-1506784983877-45594efa4cbe?w=800&auto=format&fit=crop&q=80',
  },
];

export default function Services() {
  const { data: services = DEFAULT_SERVICES } = useQuery({
    queryKey: ['servicios'],
    queryFn: async () => {
      const res = await serviceService.getServicios();
      if (res.error) throw res.error;
      return res.data && res.data.length > 0 ? res.data : DEFAULT_SERVICES;
    },
    initialData: DEFAULT_SERVICES,
    staleTime: 10 * 60 * 1000,
    retry: 1,
  });

  return (
    <div className="py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h1 className="text-4xl font-extrabold text-white mb-4 tracking-tight">
            Servicios de Desarrollo Web
          </h1>
          <p className="text-gray-400 text-base leading-relaxed">
            Especializado en la creación, diseño e implementación de plataformas web modernas, reactivas y de alto rendimiento.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((s: any) => (
              <Card
                key={s.id}
                className="flex flex-col justify-between border border-dark-700 bg-dark-800 overflow-hidden rounded-2xl group hover:border-primary-500/50 transition-all duration-300 shadow-lg hover:shadow-primary-500/5"
              >
                <div>
                  {/* Espacio para imagen de referencia */}
                  <div className="relative w-full h-52 bg-dark-900 border-b border-dark-700/80 overflow-hidden flex items-center justify-center">
                    {s.imagen_url ? (
                      <img
                        src={getAssetUrl(s.imagen_url)}
                        alt={s.nombre}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                    ) : (
                      <div className="flex flex-col items-center justify-center text-gray-500 gap-2 p-6 text-center">
                        <svg className="w-12 h-12 text-dark-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.5"
                            d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                          />
                        </svg>
                        <span className="text-xs font-medium text-gray-400">Espacio para imagen de referencia</span>
                      </div>
                    )}
                    {s.duracion_estimada && (
                      <span className="absolute top-3 right-3 bg-dark-900/85 backdrop-blur-md border border-dark-700 text-gray-200 text-xs px-3 py-1 rounded-full font-medium shadow-md">
                        ⏱️ ~{s.duracion_estimada} días
                      </span>
                    )}
                  </div>

                  {/* Contenido del servicio */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white group-hover:text-primary-400 transition-colors mb-3">
                      {s.nombre}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed mb-4">
                      {s.descripcion}
                    </p>
                  </div>
                </div>

                {/* Footer de la tarjeta con precio y CTA */}
                <div className="p-6 pt-0">
                  <div className="border-t border-dark-700/80 pt-4 flex items-center justify-between mb-5">
                    <span className="text-xs text-gray-400 uppercase tracking-wider font-medium">Inversión estimada</span>
                    {s.precio_base ? (
                      <span className="text-xl font-black text-white">
                        ${Number(s.precio_base).toLocaleString()} <span className="text-xs text-primary-400 font-normal">COP</span>
                      </span>
                    ) : (
                      <span className="text-sm font-semibold text-primary-400">A convenir</span>
                    )}
                  </div>
                  <Link to="/contacto" className="block w-full">
                    <Button variant="primary" className="w-full justify-center py-2.5">
                      Solicitar este Servicio
                    </Button>
                  </Link>
                </div>
              </Card>
            ))}
          </div>
      </div>
    </div>
  );
}
