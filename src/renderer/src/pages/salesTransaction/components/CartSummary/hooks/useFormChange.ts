import { useProductStore } from "@renderer/store/productStore";
import { useState } from "react";

export const useFormChange = (onSubmitData) => {
    const [value, setValue] = useState(0)
   const products =  useProductStore(state=>state.products)

    const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
      if (event.key === 'Enter') {
        // Lógica para manejar la tecla Enter
        onSubmitData(value)
        setValue(0)
      
          
      }
      
    };
    const handleClick = async (e) => {
      onSubmitData(value)
      setValue(0)

       await window.electron.ipcRenderer.invoke('setSale', products);
    }
    return {
        value,
        setValue,
        handleKeyPress,
        handleClick
    }
}
