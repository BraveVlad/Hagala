import {
	Branches,
	Supermarket,
	Supermarkets,
	fetchSupermarkets,
} from "./Supermarket.model.js";
import { loadCurrentCartFromStorage } from "./Cart.model.js";
import { showCartSetupDialog } from "./ChainSelectorDialog.view.js";

async function setupCart() {
	// fetch supermarket list
	const supermarkets = await fetchSupermarkets();
	showCartSetupDialog(supermarkets);

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
