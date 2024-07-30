import { useProductStore } from "@renderer/store/productStore"
import { Toast } from "primereact/toast";
import { useEffect, useRef, useState } from "react"

export const useCartSummary = () => {
    //zustand
    const products = useProductStore(state=>state.products)
    const resetProducts = useProductStore(state=>state.resetProducts)
    const toast = useRef<Toast>(null);
    const [totalPrice, setTotalPrice] = useState(0)
    const [change, setChange] = useState(0)
    const [visible, setVisible] = useState(false)

    useEffect(() => {
      if (products.length === 0) {
        setTotalPrice(0)
        return;
      }
  
      let summary = 0;
      for (const product of products) {
        summary = summary + (Number(product.price)* product.count)
      }
    
      setTotalPrice(summary)
  
    
      
    }, [products])
    
    const onSubmitData = (depositMoney:number) => {
    
        let isCorrect = false
        if (depositMoney<totalPrice) {
            showWarn("Verifica el dinero a ingresar")
            return isCorrect;
        }
        if (totalPrice===0) {
            showWarn("No tienes ningún producto a vender")
            return isCorrect;
        }
     
        setChange(depositMoney-totalPrice)

        setVisible(true)

        setTotalPrice(0)

        
        resetProducts()

        isCorrect=true

        return isCorrect;

    }

    
    const showWarn = (detail:string) => {
        toast.current?.show({severity:'warn', summary: 'CUIDADO', detail, life: 3000});
    }
    
    return{
        totalPrice,
        toast,
        onSubmitData,
        change,
        visible,
        setVisible
    }
}
