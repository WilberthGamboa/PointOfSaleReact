
import { useState } from 'react';
import { GroupedProduct, Product } from './interfaces/salesTransaction.interface';
import { SearchProducts } from './components/SearchProducts';
import { DataTableProductsSale } from './components/DataTableProductsSale';
import { ButtonRemoveRow } from './components/ButtonRemoveRow';
import { useProductsGroup } from './hooks/useProductsGroup';
import { CartSumarry } from './components/CartSumarry';
import { useCartSumaryTransaction } from './hooks/useCartSumaryTransaction';

//  const ipcHandle = (): void => window.electron.ipcRenderer.send('ping')
export const SaleTransaction = () => {
  // Productos sin agrupar
  const [productsToSell, setproductToSell] = useState<Product[]>([])
  // Productos agrupados a borrar de la tabla 
  const [selectedProductsToDelete, setSelectedProductsToDelete] = useState<GroupedProduct[]>([]);
  //custom hook agrupar products
  const {selectedProductsGrouped} = useProductsGroup(productsToSell)
  const {totalPrice} =useCartSumaryTransaction(productsToSell)
  

 
  return (
    <>
    <SearchProducts setproductToSell={setproductToSell}></SearchProducts>
    <div>
    <DataTableProductsSale selectedProductsGrouped={selectedProductsGrouped}  selectedProductsToDelete={selectedProductsToDelete} setSelectedProductsToDelete={setSelectedProductsToDelete} ></DataTableProductsSale>
    <CartSumarry totalPrice={totalPrice} setproductToSell={setproductToSell} ></CartSumarry>
    </div>
    
    <ButtonRemoveRow setproductToSell={setproductToSell} selectedProductsToDelete={selectedProductsToDelete} ></ButtonRemoveRow>
    </>
   
  )
}
