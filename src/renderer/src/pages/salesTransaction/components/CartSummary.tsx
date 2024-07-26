import React from 'react';
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import { Toast } from 'primereact/toast';
import { InputNumber, InputNumberValueChangeEvent } from 'primereact/inputnumber';
import { Product } from '../interfaces/salesTransaction.interface';
import useCartSummary from '../hooks/useCartSummary';

interface Props {
    totalPrice: number;
    setproductToSell: React.Dispatch<React.SetStateAction<Product[]>>;
}

export const CartSummary: React.FC<Props> = ({ totalPrice, setproductToSell }) => {
    const {
        dineroIngresar,
        setDineroIngresar,
        change,
        toast,
        visible,
        setVisible,
        handleCobrar,
        footerContent,
        headerElement
    } = useCartSummary({ totalPrice, setproductToSell });

    return (
        <div className='w-3 m-6 p-5 border-round shadow-5 surface-0'>
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
            <Toast ref={toast} />
            <Dialog
                header={headerElement}
                visible={visible}
                modal
                footer={footerContent}
                style={{ width: '50rem' }}
                onHide={() => setVisible(false)}
            >
                <h1>El cambio es de: {change}</h1>
            </Dialog>
        </div>
    );
};
