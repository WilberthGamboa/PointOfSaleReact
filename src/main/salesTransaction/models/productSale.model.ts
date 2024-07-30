import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Sale } from "./sale.model";


@Entity()
export class ProductSale {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => Sale, sale => sale.productSale,{ eager: true })
    sale:Sale

    @Column()
    count:number

    @CreateDateColumn({ type: 'datetime' }) // Usa 'timestamp' en lugar de 'timestamptz' si no necesitas la zona horaria
    createdAt: Date;
  
    @UpdateDateColumn({ type: 'datetime' }) // Usa 'timestamp' en lugar de 'timestamptz' si no necesitas la zona horaria
    updatedAt: Date;


}