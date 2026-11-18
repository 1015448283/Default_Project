import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { contactService } from '../../services/contactService';
import { toast } from 'sonner';
import { Button, Input, TextArea } from '../../components/common';

// SVG icons inline (no external library needed)
const PhoneIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.9 13.5 19.79 19.79 0 0 1 1.84 4.87 2 2 0 0 1 3.81 2.7h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 10.09a16 16 0 0 0 6 6l1.56-1.56a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);

const MailIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="16" x="2" y="4" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
);

const MapPinIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

const GithubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const WhatsAppIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
  </svg>
);

const ContactSchema = z.object({
  nombre: z.string().min(2, 'El nombre debe tener al menos 2 caracteres').max(100),
  email: z.string().email('Ingresa un correo electrónico válido'),
  telefono: z.string().optional(),
  empresa: z.string().optional(),
  mensaje: z.string().min(10, 'El mensaje debe tener al menos 10 caracteres'),
});

type ContactForm = z.infer<typeof ContactSchema>;

export default function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting }
  } = useForm<ContactForm>({
    resolver: zodResolver(ContactSchema)
  });

  const onSubmit = async (data: ContactForm) => {
    try {
      const payload = {
        nombre: data.nombre.trim(),
        email: data.email.trim(),
        telefono: data.telefono?.trim() || null,
        empresa: data.empresa?.trim() || null,
        mensaje: data.mensaje.trim(),
      };
      const { error } = await contactService.createContacto(payload);
      if (error) throw error;
      toast.success('¡Mensaje enviado correctamente! Nos pondremos en contacto pronto.');
      reset();
    } catch (err: any) {
      console.error('Error enviando contacto:', err);
      toast.error(err.message || 'Error al enviar el mensaje. Inténtalo de nuevo.');
    }
  };

  return (
    <div className="py-16 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Encabezado */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-3">Contacto</h1>
          <p className="text-gray-400">
            ¿Tienes una plataforma web en mente? Escríbeme y hablemos de cómo hacerla realidad.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          {/* Columna izquierda: Información personal */}
          <div className="flex flex-col gap-8">
            <div>
              <h2 className="text-2xl font-semibold text-white mb-2">Información de Contacto</h2>
              <p className="text-gray-400 text-sm">
                Puedes contactarme directamente a través de cualquiera de estos medios.
              </p>
            </div>

            <div className="flex flex-col gap-5">
              {/* Teléfono */}
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-xl bg-primary-500/10 border border-primary-500/20 flex items-center justify-center shrink-0 group-hover:bg-primary-500/20 transition-colors text-primary-400">
                  <PhoneIcon />
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wider mb-0.5">Teléfono</p>
                  <a
                    href="tel:+573005662559"
                    className="text-white font-medium hover:text-primary-400 transition-colors"
                  >
                    +57 300 566 2559
                  </a>
                </div>
              </div>

              {/* WhatsApp */}
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center shrink-0 group-hover:bg-emerald-500/20 transition-colors text-emerald-400">
                  <WhatsAppIcon />
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wider mb-0.5">WhatsApp Directo</p>
                  <a
                    href="https://wa.me/573005662559?text=Hola%20Oliver,%20te%20contacto%20desde%20tu%20sitio%20web"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white font-medium hover:text-emerald-400 transition-colors"
                  >
                    +57 300 566 2559 (Chatear)
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-xl bg-primary-500/10 border border-primary-500/20 flex items-center justify-center shrink-0 group-hover:bg-primary-500/20 transition-colors text-primary-400">
                  <MailIcon />
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wider mb-0.5">Correo Electrónico</p>
                  <a
                    href="mailto:oliverpradagomez@gmail.com"
                    className="text-white font-medium hover:text-primary-400 transition-colors break-all"
                  >
                    oliverpradagomez@gmail.com
                  </a>
                </div>
              </div>

              {/* Ubicación */}
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-xl bg-primary-500/10 border border-primary-500/20 flex items-center justify-center shrink-0 group-hover:bg-primary-500/20 transition-colors text-primary-400">
                  <MapPinIcon />
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wider mb-0.5">Ubicación</p>
                  <span className="text-white font-medium">Bogotá D.C., Colombia</span>
                </div>
              </div>

              {/* GitHub */}
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-xl bg-primary-500/10 border border-primary-500/20 flex items-center justify-center shrink-0 group-hover:bg-primary-500/20 transition-colors text-primary-400">
                  <GithubIcon />
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wider mb-0.5">GitHub</p>
                  <a
                    href="https://github.com/Oliver-Prada"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white font-medium hover:text-primary-400 transition-colors"
                  >
                    Oliver Prada
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Columna derecha: Formulario */}
          <div className="bg-dark-800 border border-dark-700 rounded-2xl p-8 shadow-xl">
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
              <Input
                label="Nombre Completo *"
                {...register('nombre')}
                placeholder="Ej: Juan Pérez"
                error={errors.nombre?.message}
              />

              <Input
                label="Correo Electrónico *"
                type="email"
                {...register('email')}
                placeholder="juan@empresa.com"
                error={errors.email?.message}
              />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input
                  label="Teléfono"
                  {...register('telefono')}
                  placeholder="+57 300 123 4567"
                  error={errors.telefono?.message}
                />
                <Input
                  label="Empresa"
                  {...register('empresa')}
                  placeholder="Nombre de empresa"
                  error={errors.empresa?.message}
                />
              </div>

              <TextArea
                label="Requerimientos de la Plataforma Web *"
                {...register('mensaje')}
                placeholder="Cuéntame sobre tu plataforma web, funcionalidades requeridas y plazos estimados..."
                rows={4}
                error={errors.mensaje?.message}
              />

              <Button
                type="submit"
                variant="primary"
                size="lg"
                loading={isSubmitting}
                className="mt-2 w-full"
              >
                {isSubmitting ? 'Enviando requerimiento...' : 'Enviar Mensaje'}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
