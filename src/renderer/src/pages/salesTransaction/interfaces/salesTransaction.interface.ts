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
