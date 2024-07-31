export interface Product {
    id:          number;
    productname: string;
    barcode:     string;
    price:       number;
    category:    Category;
    createdAt:   Date;
    updatedAt:   Date;
}

export interface Category {
    id:           number;
    categoryName: string;
    createdAt:    Date;
    updatedAt:    Date;
}

export interface Sale {
    id:          string;
    productSale: ProductSale[];
    createdAt:   Date;
    updatedAt:   Date;
}

export interface ProductSale {
    id:        string;
    products:  Products;
    count:     number;
    createdAt: Date;
    updatedAt: Date;
}

export interface Products {
    id:          number;
    productname: string;
    barcode:     string;
    price:       number;
    category:    Category;
    createdAt:   Date;
    updatedAt:   Date;
}

export interface Category {
    id:           number;
    categoryName: string;
    createdAt:    Date;
    updatedAt:    Date;
}
