//react
import { useState } from 'react';
//prime
import { Button } from 'primereact/button';
import { InputNumber, InputNumberValueChangeEvent } from 'primereact/inputnumber'
//zustand


interface Props {
totalPrice:number
onSubmitData:(test:number) => boolean

}
export const FormChange = ({totalPrice,onSubmitData}:Props) => {
  const [value, setValue] = useState(0)
  //zustand
 
 
  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      // Lógica para manejar la tecla Enter
      onSubmitData(value)
      setValue(0)
    
        
    }
    
  };
  const handleClick = (e) => {
    onSubmitData(value)
    setValue(0)
  
  }
  return (
    <>
     <h2> Total compra: {totalPrice}</h2>
            <InputNumber
                mode="currency"
                currency="USD"
               value={value}
                onValueChange={(e: InputNumberValueChangeEvent) => setValue(Number(e.value))}
                onKeyUpCapture={handleKeyPress}
                minFractionDigits={0}
                maxFractionDigits={5}
                min={0}
                max={100000}
            />
            <Button label="Cobrar" severity="success" onClick={handleClick}  />
    </>
  )
}
