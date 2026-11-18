-- ==========================================================
-- MIGRACIÓN: AGREGAR COLUMNA IMAGEN_URL Y SERVICIOS INICIALES
-- Ejecutar en el SQL Editor de Supabase
-- ==========================================================

-- 1. Agregar columna imagen_url si no existe
ALTER TABLE public.servicios ADD COLUMN IF NOT EXISTS imagen_url TEXT;

-- 2. Asegurar que las políticas RLS permitan lectura pública de servicios activos
DROP POLICY IF EXISTS "servicios_select_public" ON public.servicios;
CREATE POLICY "servicios_select_public" ON public.servicios FOR SELECT USING (activo = true);

-- 3. Insertar servicios con imágenes de referencia
INSERT INTO public.servicios (nombre, descripcion, precio_base, duracion_estimada, imagen_url, activo)
VALUES
  (
    'Desarrollo Frontend con React & TypeScript',
    'Construcción de aplicaciones web interactivas SPA y PWA responsivas, con arquitectura limpia, alto rendimiento y diseño moderno con Tailwind CSS.',
    4500000,
    20,
    'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&auto=format&fit=crop&q=80',
    true
  ),
  (
    'Plataformas Web Full-Stack a Medida',
    'Desarrollo integral de sitios web con backend en Supabase, autenticación de usuarios, roles de acceso, lógica de negocio y base de datos relacional.',
    9000000,
    35,
    'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=80',
    true
  ),
  (
    'E-Commerce & Pasarelas de Pago',
    'Tiendas virtuales modernas con catálogo de productos, carrito de compras, cobro en línea con Stripe / PSE / Mercado Pago y webhooks seguros.',
    6500000,
    25,
    '/e-commerce.jpg',
    true
  ),
  (
    'Dashboards & Paneles de Administración',
    'Sistemas internos para gestión de clientes, métricas en tiempo real, gráficos analíticos y reportes para la toma de decisiones empresariales.',
    5500000,
    20,
    'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=80',
    true
  ),
  (
    'Diseño y Optimización de Bases de Datos',
    'Modelado entidad-relación, esquemas PostgreSQL en Supabase, funciones SQL, triggers, índices y políticas de seguridad avanzadas (RLS).',
    3500000,
    15,
    'https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=800&auto=format&fit=crop&q=80',
    true
  ),
  (
    'Sistema de Agendamiento y Automatizaciones',
    'Implementación de reserva de citas en línea con selección de fecha/hora, confirmaciones automáticas y notificaciones integradas.',
    3000000,
    12,
    'https://images.unsplash.com/photo-1506784983877-45594efa4cbe?w=800&auto=format&fit=crop&q=80',
    true
  )
ON CONFLICT DO NOTHING;
