import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { appointmentService } from '../../services/projectService';
import { toast } from 'sonner';
import { Button, Input, TextArea } from '../../components/common';

const BookingSchema = z.object({
  nombre: z.string().min(2, 'Ingresa tu nombre completo').max(100),
  fecha_hora: z.string().min(1, 'Selecciona la fecha y hora de la cita'),
  email: z.string().email('Ingresa un correo electrónico válido'),
  duracion: z.number().min(15).max(120).default(30),
  tipo: z.string().default('reunion_inicial'),
  notas: z.string().optional(),
});

type BookingForm = z.infer<typeof BookingSchema>;

export default function Booking() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting }
  } = useForm<BookingForm>({
    resolver: zodResolver(BookingSchema),
    defaultValues: {
      duracion: 30,
      tipo: 'reunion_inicial'
    }
  });

  const onSubmit = async (data: BookingForm) => {
    try {
      const isoDate = new Date(data.fecha_hora).toISOString();
      const payload = {
        nombre: data.nombre.trim(),
        email: data.email.trim(),
        fecha_hora: isoDate,
        duracion: data.duracion,
        tipo: data.tipo,
        notas: data.notas?.trim() || null,
        estado: 'programada',
      };
      const { error } = await appointmentService.createAgendamiento(payload);

      if (error) throw error;
      toast.success('¡Solicitud de cita enviada! Te confirmaremos por correo.');
      reset();
    } catch (err: any) {
      console.error('Error agendando cita:', err);
      toast.error(err.message || 'Error al solicitar la cita. Verifica los datos.');
    }
  };

  return (
    <div className="py-16 px-6">
      <div className="max-w-xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-white mb-3">¡Cuéntame sobre tu proyecto!</h1>
          <p className="text-gray-400">
            Agenda una sesión para analizar tus requerimientos, resolver dudas y comenzar a construir tu plataforma web.
          </p>
        </div>

        <div className="bg-dark-800 border border-dark-700 rounded-2xl p-8 shadow-xl">
          <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
            <Input
              label="Nombre Completo *"
              placeholder="Ej: Juan Pérez"
              {...register('nombre')}
              error={errors.nombre?.message}
            />

            <Input
              label="Tu Correo Electrónico *"
              type="email"
              placeholder="juan@empresa.com"
              {...register('email')}
              error={errors.email?.message}
            />

            <Input
              label="Fecha y Hora de la Cita *"
              type="datetime-local"
              {...register('fecha_hora')}
              error={errors.fecha_hora?.message}
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1">
                <label className="text-sm text-gray-300">Duración</label>
                <select
                  {...register('duracion', { valueAsNumber: true })}
                  className="bg-dark-700 border border-gray-600 rounded-lg px-4 py-2.5 text-white focus:border-primary-500 focus:outline-none"
                >
                  <option value={30}>30 minutos</option>
                  <option value={60}>60 minutos</option>
                </select>
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-sm text-gray-300">Tipo de Sesión</label>
                <select
                  {...register('tipo')}
                  className="bg-dark-700 border border-gray-600 rounded-lg px-4 py-2.5 text-white focus:border-primary-500 focus:outline-none"
                >
                  <option value="reunion_inicial">Reunión Inicial</option>
                  <option value="asesoria_tecnica">Asesoría Técnica</option>
                  <option value="seguimiento">Seguimiento de Proyecto</option>
                </select>
              </div>
            </div>

            <TextArea
              label="Notas o Temas a Tratar"
              {...register('notas')}
              placeholder="Cuéntame brevemente qué te gustaría tratar en la reunión..."
              rows={3}
              error={errors.notas?.message}
            />

            <Button
              type="submit"
              variant="primary"
              size="lg"
              loading={isSubmitting}
              className="mt-2 w-full"
            >
              {isSubmitting ? 'Enviando solicitud...' : 'Confirmar Solicitud de Cita'}
            </Button>
          </form>

          <div className="mt-6 pt-6 border-t border-dark-700 flex items-center justify-between text-xs text-gray-400">
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
              Horario disponible
            </span>
            <span>Lunes a Viernes (09:00 - 18:00 COT)</span>
          </div>
        </div>
      </div>
    </div>
  );
}
