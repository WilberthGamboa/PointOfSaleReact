import { DataSource } from "typeorm";
import { Products } from "../salesTransaction/models/products.model";
import { Categories } from "../salesTransaction/models/categories.model";

export const AppDataSource = new DataSource({
    type: "sqlite",
    database: "database.sqlite",
    entities: [Products,Categories],
    synchronize: true,
    logging: false,
});

export const initializeDatabase = async () => {
    try {
        await AppDataSource.initialize();
        console.log("Connection to SQLite3 established successfully");
    } catch (error) {
        console.log("Error during Data Source initialization", error);
    }
};