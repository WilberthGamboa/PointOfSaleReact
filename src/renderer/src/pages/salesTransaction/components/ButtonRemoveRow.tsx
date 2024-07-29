import { Button } from 'primereact/button'
import { Dispatch, SetStateAction } from 'react';
import { Product } from '../interfaces/salesTransaction.interface';
import { useProductSelected } from '@renderer/store/productSelected';
import { useProductStore } from '@renderer/store/productStore';


export const ButtonRemoveRow = () => {
  const productsSelected = useProductSelected(state=>state.productsSelected)
  const decrementProducts=useProductStore(state=>state.decrementProducts)

  return (
    <Button label="Borrar productos seleccionados" severity="warning" onClick={() => {
      decrementProducts(productsSelected)
    }}/>
  )
}
