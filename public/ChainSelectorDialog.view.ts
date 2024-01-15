import { Branches, Supermarkets } from "./Supermarket.model";

export function populateBranchSelectorBySelectedChain(
	supermarkets: Supermarkets,
	chainView: HTMLSelectElement,
	branchView: HTMLSelectElement
) {
	const selectedOption = chainView.options[chainView.selectedIndex];
	const selectedChainId = selectedOption.getAttribute("data-chain-id");

	if (!selectedChainId) {
		return;
	}
	const branches = supermarkets.find(
		(supermarket) => supermarket.chainId === selectedChainId
	)?.branches;

	branchView.replaceChildren();

	if (!branches) {
		return;
	}
	console.log(branches);
	branchView.innerHTML = renderBranchList(branches);
}

export function renderBranchList(branches: Branches) {
	return `${branches.map(
		(branch) =>
			`<option class="branch-selector__option" data-branch-id="${branch.branchId}" value="${branch.name}">${branch.name}</option>`
	)}
        `;
}

export function showCartSetupDialog(supermarkets: Supermarkets) {
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

	populateBranchSelectorBySelectedChain(
		supermarkets,
		chainSelector,
		branchSelector
	);

	chainSelector.addEventListener("change", (event) => {
		populateBranchSelectorBySelectedChain(
			supermarkets,
			chainSelector,
			branchSelector
		);
	});

	document.body.append(dialogView);
	dialogView.showModal();
}
