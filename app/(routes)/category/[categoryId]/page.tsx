
import Container from '@/components/ui/container';
import Destacado from '@/components/ui/destacado';
import EventoCard from '@/components/ui/evento-card';
import NoResults from '@/components/ui/no-results';

import getEventos from "@/actions/get-eventos";
import getCategory from '@/actions/get-category';
import getFechas from '@/actions/get-fechas';
import getUbicacions from '@/actions/get-ubicacions';

import Filter from './components/filter';
import MobileFilters from './components/mobile-filters';

export const revalidate = 0;

interface CategoryPageProps {
  params: {
    categoryId: string;
  },
  searchParams: {
    ubicacionId: string;
    fechaId: string;
  }
}

const CategoryPage: React.FC<CategoryPageProps> = async ({ 
  params, 
  searchParams
}) => {
  const eventos = await getEventos({ 
    categoryId: params.categoryId,
    ubicacionId: searchParams.ubicacionId,
    fechaId: searchParams.fechaId,
  });
  const fechas = await getFechas();
  const ubicacions = await getUbicacions();
  const category = await getCategory(params.categoryId);

  return (
    <div className="bg-white">
      <Container>
        <Destacado 
          data={category.destacado}
        />
        <div className="px-4 sm:px-6 lg:px-8 pb-24">
          <div className="lg:grid lg:grid-cols-5 lg:gap-x-8">
            <MobileFilters fechas={fechas} ubicacions={ubicacions} />
            <div className="hidden lg:block">
              <Filter
                valueKey="fechaId" 
                name="Fecha" 
                data={fechas}
              />
              <Filter 
                valueKey="ubicacionId" 
                name="Ubicacion" 
                data={ubicacions}
              />
            </div>
            <div className="mt-6 lg:col-span-4 lg:mt-0">
              {eventos.length === 0 && <NoResults />}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {eventos.map((item) => (
                  <EventoCard key={item.id} data={item} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default CategoryPage;