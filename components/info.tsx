"use client";
import {Evento } from "@/types";
import Currency from "@/components/ui/currency";
import Button from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
interface InfoProps {
    data: Evento;
}

const Info:React.FC<InfoProps> = ({
    data
}) => {
    return(
        <div>
            <h1 className="text-3xl font-bold text-gray-900">{data.name}</h1>
            <div className="mt-3 flex items-end justify-between">
                <p className="text-2xl text-gray-900">
                    <Currency value={data?.price} />
                </p>
            </div>
            <hr className="my-4" />
            <div className="flex flex-col gap-y-6">
                <div className="flex items-center gap-x-4">
                    <h3 className="font-semibol text-black" >
                        Fecha:
                    </h3>
                    <div>
                        {data?.fecha?.name}
                    </div>
                </div>
                <div className="flex items-center gap-x-4">
                    <h3 className="font-semibol text-black" >
                        Hora:
                    </h3>
                    <div>
                        {data?.fecha?.value}hs
                    </div>
                </div>
                <div className="flex items-center gap-x-4">
                    <h3 className="font-semibol text-black">
                        Ubicacion:
                    </h3>
                    <div>
                        {data?.ubicacion?.name}                            
                    </div>
                </div>   
                <div className="flex items-center gap-x-4">
                    <h3 className="font-semibol text-black">
                    Google Maps:
                    </h3>
                    <div>
                        <a href={data?.ubicacion?.value}><em>{data?.ubicacion?.value}</em></a>                            
                    </div>
                </div>                 
            </div>
            <div className="mt-10 flex items-center gap-x-3">
                <Button className="flex items-center gap-x-2">
                    Comprar
                    <ShoppingCart />
                </Button>
            </div>
        </div>
    );
}
export default Info; 