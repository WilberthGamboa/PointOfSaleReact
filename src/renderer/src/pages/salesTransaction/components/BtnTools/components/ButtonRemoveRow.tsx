//prime 
import { Button } from 'primereact/button'
//zustand
import { useProductSelected } from '@renderer/store/productSelected';
import { useProductStore } from '@renderer/store/productStore';


export const ButtonRemoveRow = () => {
  //zustand
  const productsSelected = useProductSelected(state=>state.productsSelected)
  const decrementProducts=useProductStore(state=>state.decrementProducts)

  return (
    <Button label="Borrar productos seleccionados" severity="warning" onClick={() => {
      decrementProducts(productsSelected)
    }}/>
  )
}
