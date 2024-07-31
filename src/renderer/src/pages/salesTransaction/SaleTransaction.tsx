//react

//interfaces

//components




//hooks



import { Menubar } from 'primereact/menubar';
import { SearchProducts } from './components/SearchProducts/SearchProducts';
import { DataTableProductsSale } from './components/DataTableProductsSale/DataTableProductsSale';
import { CartSummary } from './components/CartSummary/CartSummary';
import { BtnTools } from './components/BtnTools/BtnTools';
import { MenuItem } from 'primereact/menuitem';
import { useNavigate } from 'react-router-dom';
import { NavBar } from '@renderer/components/NavBar';


//  const ipcHandle = (): void => window.electron.ipcRenderer.send('ping')
export const SaleTransaction = () => {
 
  return (
    <>
      {
        //table and search
      }
    <NavBar></NavBar>
      <main className='flex flex-row h-screen bg-blue-50  '>
        <div className=' flex flex-column w-9 h-full '>
          {
            //opciones multiples

          }
          <div className=' flex flex-row surface-0 m-6 p-5 border-round shadow-5   justify-content-between align-items-center '>
            <div className='w-5'>
            <SearchProducts></SearchProducts>
            </div>
            <div>
              <BtnTools></BtnTools>
            </div>
          </div>

          <DataTableProductsSale></DataTableProductsSale>
          <div>

          </div>
        </div>

        {
          // barra derecha cobro
        }
        
         <CartSummary></CartSummary>  

      </main>


    </>

  )
}
