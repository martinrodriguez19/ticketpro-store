import getDestacado from "@/actions/get-destacado";
import getEventos from "@/actions/get-eventos";
import EventoList from "@/components/evento-list";
import Destacado from "@/components/ui/destacado";
import Container from "@/components/ui/container";

export const revalidate = 0;

const HomePage = async () => {
  const eventos = await getEventos({ isFeatured: true });
  const destacado = await getDestacado("3611f2aa-d9b2-4c32-bb99-4af5ac43becd");

  return (
    <Container>
      <div className="space-y-10 pb-10">
        <Destacado 
          data={destacado}
        />
        <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
          <EventoList title="Eventos Destacados" items={eventos} />
        </div>
      </div>
    </Container>
  )
};

export default HomePage;