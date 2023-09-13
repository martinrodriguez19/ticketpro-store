import { Ubicacion } from "@/types";

const URL=`${process.env.NEXT_PUBLIC_API_URL}/ubicacions`;

const getUbicacions = async (): Promise<Ubicacion[]> => {
  const res = await fetch(URL);

  return res.json();
};

export default getUbicacions;