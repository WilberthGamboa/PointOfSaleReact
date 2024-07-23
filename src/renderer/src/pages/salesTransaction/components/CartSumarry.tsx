import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import { InputNumber, InputNumberValueChangeEvent } from 'primereact/inputnumber'
import { Toast } from 'primereact/toast';
import React, { useRef, useState } from 'react'

interface Props {
    totalPrice:number,
    setproductToSell:any
}

export const CartSumarry:React.FC<Props> = ({totalPrice,setproductToSell}) => {
    const toast = useRef<Toast>(null);
    const [value3, setValue3] = useState<number>(0);
    const [change, setchange] = useState(0)

    const showError = () => {
        toast.current?.show({severity:'error', summary: 'Error', detail:'Verifique el dinero a ingresar', life: 3000});
    }

    //dialog 
    const [visible, setVisible] = useState(false);
    const footerContent = (
        <div>
            <Button label="Ok" icon="pi pi-check" onClick={() => setVisible(false)} autoFocus />
        </div>
    );

    const headerElement = (
        <div className="inline-flex align-items-center justify-content-center gap-2">
           
            <span className="font-bold white-space-nowrap">Cambio</span>
        </div>
    );


  return (
    
    <>
    <h2> Total compra: {totalPrice}</h2>
    <InputNumber mode="currency" currency="USD" value={value3} onValueChange={(e: InputNumberValueChangeEvent) => setValue3(Number(e.value))} minFractionDigits={0} maxFractionDigits={5} />
  
    <Button label="Success" severity="success" onClick={()=>{
        if (value3<totalPrice) {
            showError()
            return;
        }
        const change = value3 -  totalPrice
        setchange(change)
        setVisible(true)
        setValue3(0)
        setproductToSell([])


    }} />
     <Toast ref={toast} />



     <Dialog header={headerElement} visible={visible} modal  footer={footerContent} style={{ width: '50rem' }} onHide={() => {if (!visible) return; setVisible(false); }}>
                <h1>
                    El cambio es de: {change}
                </h1>
    </Dialog>
    </>
   
  )
}
