import { useProductOptionStore } from "@renderer/store/productOptionStore";
import { useProductStore } from "@renderer/store/productStore";
import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";
import { Dialog } from "primereact/dialog";
import { useEffect, useState } from "react";


export const DialogSearchBar = () => {

    //localstate
    const [visible, setVisible] = useState<boolean>(false);
    const productsOptions =  useProductOptionStore(state=>state.productsOptions)
    const incrementProducts = useProductStore(state=>state.incrementProducts)
   useEffect(() => {
    if (productsOptions.length>0) {
        setVisible(true)
    }
    
   }, [productsOptions])
   
  return (
   <>
   <Dialog header="Seleccione una opción" visible={visible} style={{ width: '80vw' }} onHide={() => { if (!visible) return; setVisible(false); }}>
                <DataTable selectionMode="single"  onSelectionChange={(e) => {
                    incrementProducts(e.value)
                    setVisible(false)
                }} value={productsOptions} scrollable scrollHeight="400px" style={{ minWidth: '50rem' }}>
                    <Column field="barcode" header="Barcode"></Column>
                    <Column field="productname" header="Nombre"></Column>
                    <Column field="price" header="Precio"></Column>
                    <Column field="category.categoryName" header="Categoria"></Column>
                </DataTable>
            </Dialog>
   </>
  )
}
