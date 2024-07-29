import {  GroupedProduct } from '@renderer/pages/salesTransaction/interfaces/salesTransaction.interface'
import { create } from 'zustand'

interface ProductOptionState {
    productsSelected:GroupedProduct[]
    setProductOptions:(product:GroupedProduct[]) => void
}

export const useProductSelected = create<ProductOptionState>()((set) => ({
    productsSelected:[],
    setProductOptions: (product:GroupedProduct[])  => {
        set({productsSelected:product})
    }

    
  }))