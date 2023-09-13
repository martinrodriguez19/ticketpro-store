
interface CartItemInfoProps {
  evento: Record<string, any>;
}

const CartItemInfo: React.FC<CartItemInfoProps> = ({
  evento
}) => {
  return ( 
    <div>
      <div className="flex justify-between">
        <p className=" text-sm font-semibold text-black">
          {evento.name}
        </p>
      </div>

      <div className="mt-1 flex text-sm">
        <p className="text-gray-500">{evento.ubicacion}</p>
        <p className="ml-4 border-l border-gray-200 pl-4 text-gray-500">{evento.fecha}</p>
      </div>
      <p className="mt-1 text-sm font-medium text-gray-900">{evento.price}</p>
    </div>
  );
}
 
export default CartItemInfo;