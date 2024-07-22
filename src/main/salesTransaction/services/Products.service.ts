import { Like, Repository } from "typeorm";
import { AppDataSource } from "../../db/dbconnection";
import { Products } from "../models/products.model";

export class ProductService {
     private productRepository:Repository<Products>;
    constructor(){
        this.productRepository = AppDataSource.getRepository(Products)
    }
     getProduct = async (id:string) => {
      console.log(id)
       try {
        
        const product = await this.productRepository.find({
          where: [
            { barcode: id },
            { productname: Like(`%${id}%`) }
        ]
        })
        console.log({product})
        return product
       } catch (error) {
        console.log(error)
       }
     }

}