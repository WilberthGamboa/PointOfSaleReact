import useCartSummary from "../../hooks/useCartSummary";
import { Product } from "../../interfaces/salesTransaction.interface";
import { FormChange } from "./components/FormChange";


export const CartSummary = () => {
  
  return (
    <div className='w-3 m-6 p-5 border-round shadow-5 surface-0'>
      <FormChange  ></FormChange>
      
    </div>
  )
}
