

import { InputText } from 'primereact/inputtext';
import { useState } from 'react';
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import { Product } from './interfaces/salesTransaction.interface';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
export const SaleTransaction = () => {
    const [value, setValue] = useState<string>('');
    const [first, setfirst] = useState(null)
    //opciones modal
    const [options, setoptions] = useState<any>(null)
    //dialog 
    const [visible, setVisible] = useState<boolean>(false);

    // productos a vender main

    const [productToSell, setproductToSell] = useState<Product[]>([])



    const ipcHandle = (): void => window.electron.ipcRenderer.send('ping')
    // llama al backend 
    const test = async () => {
    const x:Product[] =  await  window.electron.ipcRenderer.invoke('getProductByCodeBar',value)
    console.log(x)
    if (x.length>1) {
    setoptions(x)
     setVisible(true)
    }else{
      console.log(x[0])
      setproductToSell([...productToSell, x[0]]);
    }
    }
  return (

    <>
    <div className='flex'>
        <label className='mr-2 flex align-items-center' htmlFor="">Barcode / nombre</label>
        <InputText className='mr-2'  value={value} onChange={(e) => setValue(e.target.value)} />
        <Button label="Buscar artículo" onClick={test} />
    </div>
    <DataTable value={productToSell} scrollable scrollHeight="400px" style={{ minWidth: '50rem' }}>
                <Column field="barcode" header="Barcode"></Column>
                <Column field="productname" header="Nombre"></Column>
                <Column field="price" header="Precio"></Column>
                <Column field="category.categoryName" header="Categoria"></Column>
            </DataTable>

    { 
      // tabla de dialogo
    }
    <Dialog header="Seleccione una opción" visible={visible} style={{ width: '50vw' }} onHide={() => {if (!visible) return; setVisible(false); }}>
    <DataTable value={options} scrollable scrollHeight="400px" style={{ minWidth: '50rem' }}>
                <Column field="barcode" header="Barcode"></Column>
                <Column field="productname" header="Nombre"></Column>
                <Column field="price" header="Precio"></Column>
                <Column field="category.categoryName" header="Categoria"></Column>
            </DataTable>
    </Dialog>
    
    
    </>
    
    
  )
}
