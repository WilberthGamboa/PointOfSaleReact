import useCartSummary from "../../hooks/useCartSummary";
import { Product } from "../../interfaces/salesTransaction.interface";
import { FormChange } from "./components/FormChange";

interface Props {
  totalPrice: number;
  setproductToSell: React.Dispatch<React.SetStateAction<Product[]>>;
}

export const CartSummary = ({ totalPrice, setproductToSell }:Props) => {
  const {
    dineroIngresar,
    setDineroIngresar,
    change,
    toast,
    visible,
    setVisible,
    handleCobrar,

} = useCartSummary({ totalPrice, setproductToSell });
  return (
    <div className='w-3 m-6 p-5 border-round shadow-5 surface-0'>
      <FormChange totalPrice={totalPrice} dineroIngresar={dineroIngresar} handleCobrar={handleCobrar} setDineroIngresar={setDineroIngresar} ></FormChange>
      
    </div>
  )
}
