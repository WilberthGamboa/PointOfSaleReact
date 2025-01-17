import { Product } from "@renderer/interfaces/dbModels.interfaces"
import { create } from 'zustand'

interface ProductOptionState {
    productsOptions:Product[]
    setProductOptions:(product:Product[]) => void
}

export const useProductOptionStore = create<ProductOptionState>()((set) => ({
    productsOptions:[],
    setProductOptions: (product:Product[])  => {
        set({productsOptions:product})
    }
  }))