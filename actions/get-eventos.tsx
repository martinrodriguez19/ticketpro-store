import { Evento } from "@/types";
import qs from "query-string";

const URL=`${process.env.NEXT_PUBLIC_API_URL}/eventos`;

interface Query {
  categoryId?: string;
  ubicacionId?: string;
  fechaId?: string;
  isFeatured?: boolean;
}

const getEventos = async (query: Query): Promise<Evento[]> => {
  const url = qs.stringifyUrl({
    url: URL,
    query: { 
      ubicacionId: query.ubicacionId,
      fechaId: query.fechaId,
      categoryId: query.categoryId,
      isFeatured: query.isFeatured,
    },
  });

  const res = await fetch(url);

  return res.json();
};

export default getEventos;