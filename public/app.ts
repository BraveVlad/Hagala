import {
	Branches,
	Supermarket,
	Supermarkets,
	fetchSupermarkets,
} from "./Supermarket.model.js";
import { loadCurrentCartFromStorage } from "./Cart.model.js";

function renderBranchList(branches: Branches) {
	return `${branches.map(
		(branch) =>
			`<option class="branch-selector__option" data-branch-id="${branch.branchId}" value="${branch.name}">${branch.name}</option>`
	)}
        `;
}

function showCartSetupDialog(supermarkets: Supermarkets) {
	const dialogView = document.createElement("dialog") as HTMLDialogElement;
	dialogView.classList.add("branch-select-dialog");
	dialogView.innerHTML = `
        <h3>Select your branch</h3>
        <form name="branch-selector">
            <label for="branch-selector__chain">Chain:</label>
            <select name="branch-selector__chain" id="branch-selector__chain">
                ${supermarkets.map(
									(supermarket) =>
										`<option class="branch-selector__option" data-chain-id="${supermarket.chainId}" value="${supermarket.name}">${supermarket.name}</option>`
								)}
            </select>

            <label for="branch-selector__branch">Branch:</label>
            <select name="branch-selector__branch" id="branch-selector__branch">
                
            </select>

            <input type="submit" value="Next">
        </form>
    `;

	const chainSelector = dialogView.querySelector(
		"#branch-selector__chain"
	) as HTMLSelectElement;
	const branchSelector = dialogView.querySelector(
		"#branch-selector__branch"
	) as HTMLSelectElement;

	chainSelector.addEventListener("change", (event) => {
		const selectView = event.target as HTMLSelectElement;
		const selectedOption = selectView.options[selectView.selectedIndex];
		const selectedChainId = selectedOption.getAttribute("data-chain-id");

		if (!selectedChainId) {
			return;
		}
		const branches = supermarkets.find(
			(supermarket) => supermarket.chainId === selectedChainId
		)?.branches;

		branchSelector.replaceChildren();

		if (!branches) {
			return;
		}
		console.log(branches);
		branchSelector.innerHTML = renderBranchList(branches);
	});

	document.body.append(dialogView);
	dialogView.showModal();
}

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
