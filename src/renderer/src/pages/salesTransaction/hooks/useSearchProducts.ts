import { useState, useRef, KeyboardEvent } from 'react';
import { Product } from '../interfaces/salesTransaction.interface';
import { Toast } from 'primereact/toast';

interface UseSearchProductsProps {
    setproductToSell: React.Dispatch<React.SetStateAction<Product[]>>;
}

const useSearchProducts = ({ setproductToSell }: UseSearchProductsProps) => {
    const [query, setQuery] = useState<string>('');
    const [options, setOptions] = useState<Product[]>([]);
    const toast = useRef<Toast>(null);

    const show = (detail: string) => {
        toast.current?.show({ severity: 'info', summary: 'Info', detail });
    };

    const searchProduct = async () => {
        if (query.length <= 3) {
            show("Inserta mínimo 3 caracteres en la búsqueda");
            return;
        }

        const products: Product[] = await window.electron.ipcRenderer.invoke('getProductByCodeBar', query);

        if (products.length === 0) {
            show("No se ha encontrado ningún producto");
            return;
        }

        if (products.length > 1) {
            setOptions(products);
            return;
        }

        if (products.length === 1) {
            setproductToSell((prevValue) => [...prevValue, products[0]]);
            return;
        }
    };

    const onEnter = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            searchProduct();
        }
    };

    return {
        query,
        setQuery,
        options,
        toast,
        onEnter,
        searchProduct
    };
};

export default useSearchProducts;
