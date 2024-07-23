
import { useState } from 'react';
import { GroupedProduct, Product } from './interfaces/salesTransaction.interface';
import { SearchProducts } from './components/SearchProducts';
import { DataTableProductsSale } from './components/DataTableProductsSale';
import { ButtonRemoveRow } from './components/ButtonRemoveRow';
import { useProductsGroup } from './hooks/useProductsGroup';

//  const ipcHandle = (): void => window.electron.ipcRenderer.send('ping')
export const SaleTransaction = () => {
  // Productos sin agrupar
  const [productsToSell, setproductToSell] = useState<Product[]>([])
  // Productos agrupados a borrar de la tabla 
  const [selectedProductsToDelete, setSelectedProductsToDelete] = useState<GroupedProduct[]>([]);
  //custom hook agrupar products
  const {selectedProductsGrouped} = useProductsGroup(productsToSell)
  

 
  return (
    <>
    <SearchProducts setproductToSell={setproductToSell}></SearchProducts>
    <DataTableProductsSale selectedProductsGrouped={selectedProductsGrouped}  selectedProductsToDelete={selectedProductsToDelete} setSelectedProductsToDelete={setSelectedProductsToDelete} ></DataTableProductsSale>
    <ButtonRemoveRow setproductToSell={setproductToSell} selectedProductsToDelete={selectedProductsToDelete} ></ButtonRemoveRow>
    </>
   
  )
}
