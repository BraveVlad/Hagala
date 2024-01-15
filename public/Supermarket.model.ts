import { json } from "body-parser";

export type BranchProduct = {
    code: string;
    name: string;
    price: string;
}

export type BranchProducts = BranchProduct[];

export type Branch = {
    name: string;
    branchId: string;
    products: BranchProducts;
    //lastUpdated: Date;
}

export type Branches = Branch[];

export type Supermarket = {
    chainId: string;
    name: string;
    branches: Branches;
}
export type Supermarkets = Supermarket[];

export async function fetchSupermarkets() {
    try {
        const supermarkets: Supermarkets = await fetch(`/api/supermarket/chains-list`).then((result) => result.json());

        return supermarkets;
    } catch (error) {
        throw new Error("Unable to fetch supermarkets")
    }
}
