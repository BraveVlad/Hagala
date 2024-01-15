import { Schema, model } from "mongoose";


export interface Product {
    code: number;
    name: string;
    priceUpdateDate: Date;
    price: number;

    manufacturerName: string;
    manufacturerItemDescription: string;

    unityQuantity: string;
    quantity: number;
    unitOfMeasure: string;
    quantityInPackage: number;
    unitOfMeasurePrice: number;
}

export interface Branch {
    name: string;
    branchId: string;
    products: Product[];
}

export interface Supermarket {
    chainId: string;
    name: string;
    branches: Branch[];
}

const productSchema = new Schema<Product>({
    code: Number,
    name: String,
    priceUpdateDate: Date,
    price: Number,

    manufacturerName: String,
    manufacturerItemDescription: String,

    unityQuantity: String,
    quantity: Number,
    unitOfMeasure: String,
    quantityInPackage: Number,
    unitOfMeasurePrice: Number
});

const branchSchema = new Schema<Branch>({
    name: String,
    branchId: String,
    products: [productSchema]
});

const supermarketSchema = new Schema<Supermarket>({
    chainId: String,
    name: String,
    branches: [branchSchema]
});


export const Supermarket = model<Supermarket>("Supermarket", supermarketSchema, "supermarkets")