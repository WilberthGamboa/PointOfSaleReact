import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryColumn, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Categories } from "./categories.model";

@Entity()
export class Products {

@PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 255 })
  productname: string;

  @Column({ type: 'varchar', length: 255, unique: true })
  barcode: string;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  price: number;

  @ManyToOne(() => Categories, categoria => categoria.products)
  category: Categories;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

}