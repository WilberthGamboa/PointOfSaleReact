import { Button } from 'primereact/button'
import { InputText } from 'primereact/inputtext'
import { Dispatch, SetStateAction, useRef, useState } from 'react';
import { Product } from '../interfaces/salesTransaction.interface';
import { Toast } from 'primereact/toast';
import { DataTableProductsSearched } from './DataTableProductsSearched';

interface Props {
    setproductToSell: Dispatch<SetStateAction<Product[]>>
}


export const SearchProducts: React.FC<Props> = ({setproductToSell}) => {
    const [query, setQuery] = useState<string>('');
    const [options, setoptions] = useState<Product[]> ([])
    const searchProduct = async () => {
        const x: Product[] = await window.electron.ipcRenderer.invoke('getProductByCodeBar', query)
        console.log(x)
        if (x.length === 0) {
            show()
        }

        if (x.length > 1) {
             setoptions(x)
        
        }

        if (x.length === 1) {
            
            setproductToSell((prevValue) => {
                return [...prevValue,x[0]]
            });
        }
    }

    // toast 
    const toast = useRef<Toast>(null);

    const show = () => {
        toast.current?.show({ severity: 'info', summary: 'Info', detail: 'No se ha encontrado ningún producto' });
    };


    return (
        <>
        {
            // barra de opciones / busqueda
        }
        <div className='flex'>
            <label className='mr-2 flex align-items-center' htmlFor="">Barcode / nombre</label>
            <InputText className='mr-2' value={query} onChange={(e) => setQuery(e.target.value)} />
            <Button label="Buscar artículo" onClick={searchProduct } />
        </div>

        {
            // modal con para seleccionar opciones
        }
        <DataTableProductsSearched options={options} setproductToSell={setproductToSell}></DataTableProductsSearched>

        {
            // aqui el toast
        }
        <Toast ref={toast} />
        </>

    )
}
