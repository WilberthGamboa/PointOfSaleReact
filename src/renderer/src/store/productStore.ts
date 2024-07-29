import { GroupedProduct, Product } from '@renderer/pages/salesTransaction/interfaces/salesTransaction.interface'
import { create } from 'zustand'

interface ProductState {
    products:GroupedProduct[]
    incrementProducts:(product:Product) => void
}

export const useProductStore = create<ProductState>()((set,get) => ({
    products:[],
    incrementProducts: (product:Product)  => {
        const {products} = get()
        const productsClone = structuredClone(products)
        const productIndex = productsClone.findIndex((productClone) => productClone.barcode === product.barcode);
        
        if (productIndex!=-1) {
            productsClone[productIndex].count= productsClone[productIndex].count+1
        }else{
            productsClone.push({...product,count:1})
        }
        
        set({products:productsClone})
        
    }

     

   
  }))