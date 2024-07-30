import { FormChange } from "./components/FormChange";
import { Toast } from "primereact/toast";
import { useCartSummary } from "../../hooks/useCartSummary";
import { DialogChange } from "./components/DialogChange";


export const CartSummary = () => {
 const {totalPrice,toast,onSubmitData,visible,setVisible,change}= useCartSummary()
  return (
    <div className='w-3 m-6 p-5 border-round shadow-5 surface-0'>
      <FormChange totalPrice={totalPrice} onSubmitData={onSubmitData}  ></FormChange>
      <DialogChange visible={visible} setVisible={setVisible} change={change}></DialogChange>
      <Toast ref={toast} />
    </div>
  )
}
