import { Column } from 'primereact/column'
import { DataTable } from 'primereact/datatable'
import { Dispatch, SetStateAction } from 'react'
import { GroupedProduct } from '../../interfaces/salesTransaction.interface'
import { useProductStore } from '@renderer/store/productStore'

interface Props {
    selectedProductsGrouped: GroupedProduct[],
    setSelectedProductsToDelete: Dispatch<SetStateAction<GroupedProduct[]>>,
    selectedProductsToDelete: GroupedProduct[]
}
export const DataTableProductsSale: React.FC<Props> = ({ selectedProductsGrouped,selectedProductsToDelete,setSelectedProductsToDelete }) => {
    //zustand test
    const products = useProductStore(state => state.products)
    return (
        <>
            <DataTable  className='m-6 p-5 surface-0 border-round shadow-5 ' selectionMode={'multiple'} value={products} scrollable   onSelectionChange={(e) => {
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
