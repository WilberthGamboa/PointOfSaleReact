import { CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { ProductSale } from "./productSale.model";

@Entity()
export class Sale {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @OneToMany(()=> ProductSale, productSale => productSale.sale )
    productSale:ProductSale[]
    
    @CreateDateColumn({ type: 'datetime' }) // Usa 'timestamp' en lugar de 'timestamptz' si no necesitas la zona horaria
    createdAt: Date;
  
    @UpdateDateColumn({ type: 'datetime' }) // Usa 'timestamp' en lugar de 'timestamptz' si no necesitas la zona horaria
    updatedAt: Date;
}