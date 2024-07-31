import { GroupedProduct, Product } from '@renderer/interfaces/salesTransaction.interface'
import { create } from 'zustand'

interface ProductState {
    products:GroupedProduct[],
    quantity:number,
    incrementProducts:(product:Product) => void,
    decrementProducts:(productsSelected:GroupedProduct[]) => void
    resetProducts:() => void
    setQuantity:(quantity:number) => void
}

export const useProductStore = create<ProductState>()((set,get) => ({
    products:[],
    quantity:1,
    incrementProducts: (product:Product)  => {
        const {products} = get()
        const {quantity} = get()
        const productsClone = structuredClone(products)
        const productIndex = productsClone.findIndex((productClone) => productClone.barcode === product.barcode);
        
        if (productIndex!=-1) {
            
            productsClone[productIndex].count= productsClone[productIndex].count + (1*quantity)
        }else{
            productsClone.push({...product,count:1*quantity})
        }
        
        set({products:productsClone})
        
    },
    decrementProducts:(productsSelected:GroupedProduct[]) =>{
        const {products} = get()

        const productsFiltered = products.filter(product => {
            return !productsSelected.some(productSelected => product === productSelected);
        })
        console.log({productsFiltered})
        set({products:productsFiltered})
         
    },

    resetProducts:() => {
        set({products:[]})
    },

    setQuantity:(quantity:number) =>{
        console.log(quantity)
        set({quantity})
    }

    

     

   
  }))