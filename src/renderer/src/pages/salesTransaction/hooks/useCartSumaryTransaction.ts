import { useEffect, useState } from "react";
import { Product } from "../interfaces/salesTransaction.interface";


export const useCartSumaryTransaction = (productsToSell:Product[]) => {

    const [totalPrice, settotalPrice] = useState(0)

useEffect(() => {
 if (productsToSell.length===0) {
    settotalPrice(0)
    return;
 }

 let summary = 0;
 for (const product of productsToSell) {
   summary = summary + Number(product.price)
 }
 console.log({summary})
 settotalPrice(summary)
  
}, [productsToSell])

return {
    totalPrice
}

}
