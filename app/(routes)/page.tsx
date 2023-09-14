import getDestacado from "@/actions/get-destacado";
import getEventos from "@/actions/get-eventos";
import EventoList from "@/components/evento-list";
import Destacado from "@/components/ui/destacado";
import Container from "@/components/ui/container";

export const revalidate = 0;

const HomePage = async () => {
  const eventos = await getEventos({ isFeatured: true });
  const destacado = await getDestacado("a2ca9dbc-81ec-40b5-8059-72823f9124a0");

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