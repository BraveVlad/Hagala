import { Branch, Supermarket } from "./Supermarket.model.js"

const STORAGE_CURRENT_CART = "current_cart";

export class NoSavedCartError extends Error { };

export type CartProduct = {
    parentProductId: number;
    code: number;
    name: string;
    priceWhenAdded: number;
    amount: number;
}

export type CartProducts = CartProduct[];

export type Cart = {
    id: string;
    shareId: string;
    supermarket: Supermarket;
    branch: Branch;
    products: CartProducts
}


// export function fetchNewCart(): Cart {

// }

export function loadCurrentCartFromStorage(): Cart {
    const storedCart = localStorage.getItem(STORAGE_CURRENT_CART);

    if (!storedCart) throw NoSavedCartError;

    const parsedCart = JSON.parse(storedCart) as Cart;

    return parsedCart;
}