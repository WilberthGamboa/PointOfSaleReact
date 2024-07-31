import { createHashRouter } from "react-router-dom";

import { SaleTransaction } from "@renderer/pages/salesTransaction/SaleTransaction";
//import { SaleHistory } from "@renderer/pages/saleHistory/saleHistory";
import { Test } from "@renderer/pages/Test";
import { SaleHistory } from "@renderer/pages/saleHistory/SaleHistory";




export const router = createHashRouter([
 {
    path:"/",
    element:<SaleTransaction></SaleTransaction>
 },
{
   path:"/ventas",
   element:<SaleHistory></SaleHistory>
}


]);