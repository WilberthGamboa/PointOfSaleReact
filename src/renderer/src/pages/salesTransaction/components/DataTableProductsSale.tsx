import { Column } from 'primereact/column'
import { DataTable } from 'primereact/datatable'
import { GroupedProduct } from '../interfaces/salesTransaction.interface'

interface Props {

    selectedProductsGrouped: GroupedProduct[],
    setSelectedProductsToDelete: any,
    selectedProductsToDelete: GroupedProduct[]
}
export const DataTableProductsSale: React.FC<Props> = ({ selectedProductsGrouped, setSelectedProductsToDelete, selectedProductsToDelete }) => {

    return (
        <>

            <DataTable selectionMode={'multiple'} value={selectedProductsGrouped} scrollable scrollHeight="400px" style={{ minWidth: '50rem' }} onSelectionChange={(e) => {
                setSelectedProductsToDelete(e.value)

                console.log(e.value)
            }} selection={selectedProductsToDelete!} >
                <Column selectionMode="multiple" headerStyle={{ width: '3rem' }}></Column>
                <Column field="count" header="cantidad"></Column>
                <Column field="barcode" header="Barcode"></Column>
                <Column field="productname" header="Nombre"></Column>
                <Column field="price" header="Precio"></Column>
                <Column field="category.categoryName" header="Categoria"></Column>
            </DataTable>

        </>
    )
}
