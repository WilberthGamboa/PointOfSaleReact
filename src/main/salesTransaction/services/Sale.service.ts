import { Repository } from "typeorm";
import { AppDataSource } from "../../db/dbconnection";
import { Sale } from "../models/sale.model";
import { ProductSale } from "../models/productSale.model";
import { GroupedProduct } from "../interfaces/salesTransaction.interface";
;

export class SaleService {
    private saleRepository:Repository<Sale>;
    private productSaleRepository:Repository<ProductSale>;

    constructor(){
        this.saleRepository = AppDataSource.getRepository(Sale),
        this.productSaleRepository =  AppDataSource.getRepository(ProductSale)
    }

    setSale = async (x:GroupedProduct[]) =>{
        console.log({x})
        const sale = this.saleRepository.create();
        const saleSaved = await this.saleRepository.save(sale)
        //
        for (const iterator of x) {
     
           
            const productSale = this.productSaleRepository.create({
               count:iterator.count,

                sale:saleSaved,
                products:{id:iterator.id}
              
            })
           await  this.productSaleRepository.save(productSale)
        }
        return 1
       

    }
    getSales = async (offset:number = 0,limit: number = 10) => {
       const saleData =  await this.saleRepository.find({
        skip:offset,
        take:limit
       })
       return {
        saleData
       }
    }
}