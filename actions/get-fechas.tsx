import { Fecha } from "@/types";

const URL=`${process.env.NEXT_PUBLIC_API_URL}/fechas`;

const getFechas = async (): Promise<Fecha[]> => {
  const res = await fetch(URL);

  return res.json();
};

export default getFechas;