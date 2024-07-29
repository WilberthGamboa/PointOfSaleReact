//react
import { useState, useRef, KeyboardEvent } from 'react';
//prime
import { Toast } from 'primereact/toast';
//interfaces
import { Product } from '../../../interfaces/salesTransaction.interface';
//zustand store
import { useProductStore } from '@renderer/store/productStore';
import { useProductOptionStore } from '@renderer/store/productOptionStore';


const useSearchProducts = () => {
    //local state
    const [query, setQuery] = useState<string>('');
    //toast
    const toast = useRef<Toast>(null);
    const show = (detail: string) => {
        toast.current?.show({ severity: 'info', summary: 'Info', detail });
    };
    //zustand
    const incremetProducts = useProductStore(state => state.incrementProducts)
    const setProductOptions = useProductOptionStore(state=>state.setProductOptions)
    

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
            setProductOptions(products)
            return;
        }

        if (products.length === 1) {
            incremetProducts(products[0])
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
        toast,
        onEnter,
        searchProduct
    };
};

export default useSearchProducts;
