import { Cart, NoSavedCartError, loadCurrentCartFromStorage } from "./cart.model.js";
import { fetchSupermarkets } from "./supermarket.model.js";


function showCartSetupDialog() {

}

function setupCart() {

    // fetch supermarket list 
    const supermarkets = fetchSupermarkets();

    // show dialog for cart creation
    // select supermarket
    // select branch 
    // fetch new cart 

}

function initCart() {
    // load from storage
    try {
        const storedCart = loadCurrentCartFromStorage();

        return storedCart;

    } catch (error) {
        const newCart = setupCart();
        return newCart;
    }
}

function main() {

    const cart = initCart();
    // TODO - Load cart from storage, if none, start cart init

}

main();