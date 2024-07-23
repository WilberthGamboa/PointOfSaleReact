import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";
import { Dialog } from "primereact/dialog";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { Product } from "../interfaces/salesTransaction.interface";

interface Props {
    options: any[],
    setproductToSell: Dispatch<SetStateAction<Product[]>>

}
export const DataTableProductsSearched: React.FC<Props> = ({ options, setproductToSell }) => {
    const [visible, setVisible] = useState<boolean>(false);
    const [selectedProduct, setSelectedProduct] = useState<any>();

    useEffect(() => {
        if (options.length > 1) {
            setVisible(true)
        }


    }, [options])

    return (
        <>
            <Dialog header="Seleccione una opción" visible={visible} style={{ width: '80vw' }} onHide={() => { if (!visible) return; setVisible(false); }}>
                <DataTable selectionMode="single" selection={selectedProduct} onSelectionChange={(e) => {
                    console.log(e.value)
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
