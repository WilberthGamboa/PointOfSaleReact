import { NavBar } from "@renderer/components/NavBar"
import { Sale } from "@renderer/interfaces/dbModels.interfaces";

import { useEffect } from "react"
import { SaleDataResponse } from "./interfaces/responseSale.interface";


export const SaleHistory = () => {
  const getSale =  async () => {
    try {
      const saleResponse : SaleDataResponse  =  await window.electron.ipcRenderer.invoke('getSale');
     
      
      // Aquí puedes actualizar la interfaz de usuario con los datos recibidos
    } catch (error) {
      console.error('Error fetching sales:', error);
    }
  }
    useEffect( () => {
       
    getSale()
    }, [])
    
  return (
    <>
        <NavBar></NavBar>
        <h1>Hola sale history</h1>

    </>
  )
}
