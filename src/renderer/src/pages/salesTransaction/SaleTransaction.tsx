//react
import { useState } from 'react';
//interfaces
import { GroupedProduct, Product } from './interfaces/salesTransaction.interface';
//components


import { ButtonRemoveRow } from './components/ButtonRemoveRow';

//hooks

import { useCartSumaryTransaction } from './hooks/useCartSumaryTransaction';

import { SelectMultipleProducts } from './components/SelectMultipleProducts';
import { SearchProducts } from './components/SearchProducts/SearchProducts';
import { DataTableProductsSale } from './components/DataTableProductsSale/DataTableProductsSale';
import { CartSummary } from './components/CartSummary/CartSummary';


//  const ipcHandle = (): void => window.electron.ipcRenderer.send('ping')
export const SaleTransaction = () => {
  // Productos sin agrupar
  const [productsToSell, setproductToSell] = useState<Product[]>([])
  // Productos agrupados a borrar de la tabla 
  const [selectedProductsToDelete, setSelectedProductsToDelete] = useState<GroupedProduct[]>([]);
  //custom hook agrupar products

  const { totalPrice } = useCartSumaryTransaction(productsToSell)


  return (
    <>
      {
        //table and search
      }
      <main className='flex flex-row h-screen bg-blue-50  '>
        <div className=' flex flex-column w-9 h-full '>
          {
            //opciones multiples

          }
          <div className=' flex flex-row surface-0 m-6 p-5 border-round shadow-5   justify-content-between align-items-center '>
            <div className='w-5'>
            <SearchProducts></SearchProducts>
            </div>
            <div>
              <SelectMultipleProducts></SelectMultipleProducts>
              <ButtonRemoveRow ></ButtonRemoveRow>
            </div>
          </div>

          <DataTableProductsSale></DataTableProductsSale>
          <div>

          </div>
        </div>

        {
          // barra derecha cobro
        }
        
         <CartSummary></CartSummary>  

      </main>


    </>

  )
}
