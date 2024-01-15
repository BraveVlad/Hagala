import { Schema, model } from "mongoose";


export interface Product {
    priceUpdateDate: Date;
    itemCode: number;
    itemType: number;
    itemName: string;
    manufacturerName: string;
    manufactureCountry: string;
    manufacturerItemDescription: string;
    unitQty: string;
    quantity: number;
    bIsWeighted: number;
    unitOfMeasure: string;
    qtyInPackage: number;
    itemPrice: number;
    unitOfMeasurePrice: number;
    allowDiscount: number;
    itemStatus: number;
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
    priceUpdateDate: Date,
    itemCode: Number,
    itemType: Number,
    itemName: String,
    manufacturerName: String,
    manufactureCountry: String,
    manufacturerItemDescription: String,
    unitQty: String,
    quantity: Number,
    bIsWeighted: Number,
    unitOfMeasure: String,
    qtyInPackage: Number,
    itemPrice: Number,
    unitOfMeasurePrice: Number,
    allowDiscount: Number,
    itemStatus: Number
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