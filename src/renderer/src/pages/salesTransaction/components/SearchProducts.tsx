import React from 'react';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { Product } from '../interfaces/salesTransaction.interface';
import { DataTableProductsSearched } from './DataTableProductsSearched';
import useSearchProducts from '../hooks/useSearchProducts';
import { Toast } from 'primereact/toast';

interface Props {
    setproductToSell: React.Dispatch<React.SetStateAction<Product[]>>;
}

export const SearchProducts: React.FC<Props> = ({ setproductToSell }) => {
    const { query, setQuery, options, toast, onEnter, searchProduct } = useSearchProducts({ setproductToSell });
    return (
        <>
            <div className='flex flex-row w-full'>
                <InputText
                    className='mr-2 w-full'
                    placeholder='Buscar producto'
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    onKeyDown={(e) => onEnter(e)}
                />
                <Button className='' style={{ minWidth: "100px" }} label="Buscar" onClick={searchProduct} />
            </div>
            <DataTableProductsSearched options={options} setproductToSell={setproductToSell} />
            <Toast ref={toast} />
        </>
    );
};
