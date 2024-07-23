import { useEffect, useState } from "react";
import { GroupedProduct, Product } from "../interfaces/salesTransaction.interface";

export const useProductsGroup = (productsToSell:Product[])  => {
  const [selectedProductsGrouped, setSelectedProductsGrouped] = useState<GroupedProduct[]>([]);
  const groupProductsByBarcode = () => {
    const grouped: GroupedProduct[] = [];
    const barcodeMap: { [barcode: string]: GroupedProduct } = {};

    productsToSell.forEach((product) => {
        if (barcodeMap[product.barcode]) {
            barcodeMap[product.barcode].count += 1;
        } else {
            const newGroupedProduct = { ...product, count: 1 };
            barcodeMap[product.barcode] = newGroupedProduct;
            grouped.push(newGroupedProduct);
        }
    });

    return grouped;
  }

  useEffect(() => {
    const x = groupProductsByBarcode()
    setSelectedProductsGrouped(x)
    
  }, [productsToSell])

  return {
    selectedProductsGrouped,
    setSelectedProductsGrouped
  }
}
