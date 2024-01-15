
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
        const supermarkets = await fetch(`/api/supermarket/chains`).then((result) => result.json());
        console.log(`fetched supermarkets: `)
        console.log(supermarkets)
    } catch (error) {
        console.log(error)
    }
}
