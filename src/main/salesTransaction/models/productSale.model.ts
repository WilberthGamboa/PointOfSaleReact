import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Sale } from "./sale.model";
import { Products } from "./products.model";


@Entity()
export class ProductSale {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @ManyToOne(() => Sale, sale => sale.productSale)
    sale:Sale

    @ManyToOne('Products', 'products', {eager:true} )
    products:Products

    @Column()
    count:number

    @CreateDateColumn({ type: 'datetime' }) // Usa 'timestamp' en lugar de 'timestamptz' si no necesitas la zona horaria
    createdAt: Date;
  
    @UpdateDateColumn({ type: 'datetime' }) // Usa 'timestamp' en lugar de 'timestamptz' si no necesitas la zona horaria
    updatedAt: Date;


}