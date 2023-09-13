import EventoList from '@/components/evento-list'
import Gallery from '@/components/gallery';
import Info from '@/components/info';
import getEvento from '@/actions/get-evento';
import getEventos from '@/actions/get-eventos';
import Container from '@/components/ui/container';

export const revalidate = 0;

interface EventoPageProps {
  params: {
    eventoId: string;
  },
}

const EventoPage: React.FC<EventoPageProps> = async ({ 
  params
 }) => {
  const evento = await getEvento(params.eventoId);
  const suggestedEventos = await getEventos({ 
    categoryId: evento?.category?.id
  });

  if (!evento) {
    return null;
  }

  return (
    <div className="bg-white">
      <Container>
        <div className="px-4 py-10 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
            <Gallery images={evento.images} />
            <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
              <Info data={evento} />
            </div>
          </div>
          <hr className="my-10" />
          <EventoList title="Eventos relacionados" items={suggestedEventos} />
        </div>
      </Container>
    </div>  
  )
}

export default EventoPage;