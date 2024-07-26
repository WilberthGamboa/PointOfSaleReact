import { Column } from 'primereact/column'
import { DataTable } from 'primereact/datatable'
import { GroupedProduct } from '../interfaces/salesTransaction.interface'
import { Dispatch, SetStateAction } from 'react'

interface Props {
    selectedProductsGrouped: GroupedProduct[],
    setSelectedProductsToDelete: Dispatch<SetStateAction<GroupedProduct[]>>,
    selectedProductsToDelete: GroupedProduct[]
}
export const DataTableProductsSale: React.FC<Props> = ({ selectedProductsGrouped,selectedProductsToDelete,setSelectedProductsToDelete }) => {

    return (
        <>
            
            <DataTable  className='m-6 p-5 surface-0 border-round shadow-5 ' selectionMode={'multiple'} value={selectedProductsGrouped} scrollable   onSelectionChange={(e) => {
                setSelectedProductsToDelete(e.value)
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
