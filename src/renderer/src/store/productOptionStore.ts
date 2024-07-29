import {  Product } from '@renderer/pages/salesTransaction/interfaces/salesTransaction.interface'
import { create } from 'zustand'

interface ProductOptionState {
    productsOptions:Product[]
    setProductOptions:(product:Product[]) => void
}

export const useProductOptionStore = create<ProductOptionState>()((set,get) => ({
    productsOptions:[],
    setProductOptions: (product:Product[])  => {
        set({productsOptions:product})
    }

    
  }))