import { Button } from 'primereact/button'
import { Dispatch, SetStateAction } from 'react';
import { Product } from '../interfaces/salesTransaction.interface';

interface Props {
    selectedProductsToDelete:Product[],
    setproductToSell:Dispatch<SetStateAction<Product[]>>
}
export const ButtonRemoveRow:React.FC<Props> = ({selectedProductsToDelete,setproductToSell}) => {

  return (
    <Button label="Borrar productos seleccionados" severity="warning" onClick={() => {
        const barcodes = selectedProductsToDelete.map(item => item.barcode);    
        setproductToSell((prevValue) => {
            const x = prevValue.filter(element => !barcodes.includes(element.barcode))
            return x
            
        })
    }}/>
  )
}
