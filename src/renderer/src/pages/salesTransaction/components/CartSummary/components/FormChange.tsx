import { Dispatch, SetStateAction } from 'react';
import { Button } from 'primereact/button';
import { InputNumber, InputNumberValueChangeEvent } from 'primereact/inputnumber'



interface Props {
    totalPrice: number;
    dineroIngresar: number,
    handleCobrar: () => void,
    setDineroIngresar: Dispatch<SetStateAction<number>>
}


export const FormChange = ({totalPrice,dineroIngresar,handleCobrar,setDineroIngresar}:Props) => {
  return (
    <>
     <h2> Total compra: {totalPrice}</h2>
            <InputNumber
                mode="currency"
                currency="USD"
                value={dineroIngresar}
                onValueChange={(e: InputNumberValueChangeEvent) => setDineroIngresar(Number(e.value))}
                minFractionDigits={0}
                maxFractionDigits={5}
            />
            <Button label="Cobrar" severity="success" onClick={handleCobrar} />
    </>
  )
}
