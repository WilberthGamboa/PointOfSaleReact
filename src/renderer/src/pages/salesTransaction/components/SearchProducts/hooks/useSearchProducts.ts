//react
import { useState, useRef, KeyboardEvent } from 'react';
//prime
import { Toast } from 'primereact/toast';
//interfaces
import { Product } from '../../../../../interfaces/dbModels.interfaces';
//zustand store
import { useProductStore } from '@renderer/store/productStore';
import { useProductOptionStore } from '@renderer/store/productOptionStore';


const useSearchProducts = () => {
    //local state
    const [query, setQuery] = useState<string>('');
    const [quantity, setQuantity] = useState(1)
    //toast
    const toast = useRef<Toast>(null);
    const show = (detail: string) => {
        toast.current?.show({ severity: 'info', summary: 'Info', detail });
    };
    //zustand
    const incremetProducts = useProductStore(state => state.incrementProducts)
    const setQuantityZustand = useProductStore(state => state.setQuantity)
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
            setQuantityZustand(quantity)
            searchProduct();
            setQuantity(1)
        }
    };

    const onClick = (e:any) => {
        setQuantityZustand(quantity)
        searchProduct()
        setQuantity(1)
    }

    return {
        query,
        setQuery,
        toast,
        onEnter,
        onClick,
        quantity,
        setQuantity
    };
};

export default useSearchProducts;
