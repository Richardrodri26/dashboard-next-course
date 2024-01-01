import { CartCounter } from "@/shopping-cart";
import { type Metadata } from "next";

export const metadata: Metadata = {
 title: 'Counter page',
 description: 'Un contador normal',
};

const CounterPage = () => {

  return (
    <div className='flex flex-col items-center justify-center w-full h-full'>
      <span>Productos en el carrito</span>
      <CartCounter value={10} />
    </div>
  )
}

export default CounterPage