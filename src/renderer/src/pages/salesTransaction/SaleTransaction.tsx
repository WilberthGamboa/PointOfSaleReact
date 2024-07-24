
import { useState } from 'react';
import { GroupedProduct, Product } from './interfaces/salesTransaction.interface';
import { SearchProducts } from './components/SearchProducts';
import { DataTableProductsSale } from './components/DataTableProductsSale';
import { ButtonRemoveRow } from './components/ButtonRemoveRow';
import { useProductsGroup } from './hooks/useProductsGroup';
import { CartSumarry } from './components/CartSumarry';
import { useCartSumaryTransaction } from './hooks/useCartSumaryTransaction';
import { Button } from 'primereact/button';

//  const ipcHandle = (): void => window.electron.ipcRenderer.send('ping')
export const SaleTransaction = () => {
  // Productos sin agrupar
  const [productsToSell, setproductToSell] = useState<Product[]>([])
  // Productos agrupados a borrar de la tabla 
  const [selectedProductsToDelete, setSelectedProductsToDelete] = useState<GroupedProduct[]>([]);
  //custom hook agrupar products
  const { selectedProductsGrouped } = useProductsGroup(productsToSell)
  const { totalPrice } = useCartSumaryTransaction(productsToSell)



  return (
    <>
      {
        //table and search
      }
      <main className='flex flex-row h-screen '>
        <div className=' flex flex-column bg-blue-50 w-9 h-full '>
          {
            //opciones multiples

          }

          <div className=' flex flex-row surface-0 m-6 p-5 border-round shadow-5   justify-content-between align-items-center '>

            <div className='w-5'>
              <SearchProducts setproductToSell={setproductToSell}></SearchProducts>

            </div>
            <div>
              <Button label="Corte" severity="danger" />

              <ButtonRemoveRow setproductToSell={setproductToSell} selectedProductsToDelete={selectedProductsToDelete} ></ButtonRemoveRow>
            </div>
          </div>

          <DataTableProductsSale selectedProductsGrouped={selectedProductsGrouped} selectedProductsToDelete={selectedProductsToDelete} setSelectedProductsToDelete={setSelectedProductsToDelete} ></DataTableProductsSale>
          <div>

          </div>
        </div>

        {
          // barra derecha cobro
        }
        <div className=''>

          <CartSumarry totalPrice={totalPrice} setproductToSell={setproductToSell} ></CartSumarry>

        </div>


      </main>


    </>

  )
}
