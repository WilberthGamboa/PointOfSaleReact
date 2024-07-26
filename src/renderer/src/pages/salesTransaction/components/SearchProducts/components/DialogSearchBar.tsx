import { Product } from "@renderer/pages/salesTransaction/interfaces/salesTransaction.interface";
import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";
import { Dialog } from "primereact/dialog";
import { useState } from "react";


interface Props {
    options:Product[]
    setproductToSell: React.Dispatch<React.SetStateAction<Product[]>>;
}

export const DialogSearchBar = ({options,setproductToSell}:Props) => {
    const [visible, setVisible] = useState<boolean>(false);
    const [selectedProduct, setSelectedProduct] = useState<any>();
  return (
   <>
   <Dialog header="Seleccione una opción" visible={visible} style={{ width: '80vw' }} onHide={() => { if (!visible) return; setVisible(false); }}>
                <DataTable selectionMode="single" selection={selectedProduct} onSelectionChange={(e) => {
                  
                    setSelectedProduct(e.value)
                    setproductToSell((prevValue) => {
                        return [...prevValue, e.value]
                    });
                    setSelectedProduct(null)
                    setVisible(false)
                }} value={options} scrollable scrollHeight="400px" style={{ minWidth: '50rem' }}>
                    <Column field="barcode" header="Barcode"></Column>
                    <Column field="productname" header="Nombre"></Column>
                    <Column field="price" header="Precio"></Column>
                    <Column field="category.categoryName" header="Categoria"></Column>
                </DataTable>
            </Dialog>
   </>
  )
}
