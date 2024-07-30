import { Column } from 'primereact/column'
import { DataTable } from 'primereact/datatable'

import { useProductStore } from '@renderer/store/productStore'
import { useProductSelected } from '@renderer/store/productSelected'


export const DataTableProductsSale = () => {
    //zustand 
    const products = useProductStore(state => state.products)
    const setProductOptions = useProductSelected(state=>state.setProductOptions)
    const productsSelected = useProductSelected(state=>state.productsSelected)
    return (
        <>
            <DataTable  className='m-6 p-5 surface-0 border-round shadow-5 ' selectionMode={'multiple'} value={products} scrollable   onSelectionChange={(e) => {
            
                setProductOptions(e.value)
             
            }} selection={productsSelected!} >
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
