import { Destacado } from "@/types";

const URL=`${process.env.NEXT_PUBLIC_API_URL}/destacados`;

const getDestacado = async (id: string): Promise<Destacado> => {
  const res = await fetch(`${URL}/${id}`);

  return res.json();
};

export default getDestacado;