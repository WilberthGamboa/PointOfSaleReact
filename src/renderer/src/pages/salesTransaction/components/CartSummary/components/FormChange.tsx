import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { Button } from 'primereact/button';
import { InputNumber, InputNumberValueChangeEvent } from 'primereact/inputnumber'
import { useProductStore } from '@renderer/store/productStore';





export const FormChange = () => {
 const products =useProductStore(state=>state.products)
  const [totalPrice, settotalPrice] = useState(0)
  useEffect(() => {
    if (products.length === 0) {
      settotalPrice(0)
      return;
    }

    let summary = 0;
    for (const product of products) {
      summary = summary + (Number(product.price)* product.count)
    }
    console.log({ summary })
    settotalPrice(summary)

  
    
  }, [products])
  


  return (
    <>
     <h2> Total compra: {totalPrice}</h2>
            <InputNumber
                mode="currency"
                currency="USD"
               // value={dineroIngresar}
                //onValueChange={(e: InputNumberValueChangeEvent) => setDineroIngresar(Number(e.value))}
                minFractionDigits={0}
                maxFractionDigits={5}
            />
            <Button label="Cobrar" severity="success"  />
    </>
  )
}
