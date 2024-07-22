import { SaleTransaction } from "@renderer/pages/salesTransaction/SaleTransaction";
import { createHashRouter } from "react-router-dom";

export const router = createHashRouter([
 {
    path:"/",
    element:<SaleTransaction></SaleTransaction>
 }
]);