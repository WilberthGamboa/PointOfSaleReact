import { Button } from 'primereact/button'

interface Props {

    selectedProductsToDelete:any,
    setproductToSell:any,
   
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
