import { useState, useRef } from 'react';
import { Toast } from 'primereact/toast';
import { Product } from '../interfaces/salesTransaction.interface';
import { Button } from 'primereact/button';

interface UseCartSummaryProps {
    totalPrice: number;
    setproductToSell: React.Dispatch<React.SetStateAction<Product[]>>;
}

const useCartSummary = ({ totalPrice, setproductToSell }: UseCartSummaryProps) => {
    const toast = useRef<Toast>(null);
    const [dineroIngresar, setDineroIngresar] = useState<number>(0);
    const [change, setChange] = useState<number>(0);
    const [visible, setVisible] = useState<boolean>(false);

    const showError = () => {
        toast.current?.show({ severity: 'error', summary: 'Error', detail: 'Verifique el dinero a ingresar', life: 2000 });
    };

    const handleCobrar = () => {
        if (dineroIngresar < totalPrice || totalPrice === 0) {
            showError();
            return;
        }

        const change = dineroIngresar - totalPrice;
        setChange(change);
        setVisible(true);
        setDineroIngresar(0);
        setproductToSell([]);
    };


    return {
        dineroIngresar,
        setDineroIngresar,
        change,
        toast,
        visible,
        setVisible,
        handleCobrar
    };
};

export default useCartSummary;
