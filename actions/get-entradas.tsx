import { Entrada } from "@/types";

const URL=`${process.env.NEXT_PUBLIC_API_URL}/entradas`;

const getEntrada = async (id: string): Promise<Entrada> => {
  const res = await fetch(`${URL}/${id}`);

  return res.json();
};

export default getEntrada;