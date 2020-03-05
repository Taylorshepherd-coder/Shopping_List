window.onload = function() {
	initShoppingList();
};

function initShoppingList() {
	let form = document.getElementbyId( elementId: "item-form");

	form.addEventListener( type: "submit",  listener: (event :Event) => {
		handleItemForm(event, form);
	});
}

function hadnleItemForm(event, formRef) {
	if(event.preventDefault) {
		event.preventDefault();
	}

	addItemToShoppingList();
	formRef.reset();

	return false
}

function addItemToShoppingList() {
	let itemName = document.getElementById(elementId:"item-name");
	let itemAmount = document.getElementById(elementId:"item-amount");
	let id = getRandomInt(0, 10000000);

	let itemHtml = createListItemHtml(item.Name.value, item / Amount.value, id);
	console.log("Item Html: ", itemhtml);
	let itemListRef = document.getElementById("shopping-list")
	ItemListRef.insertAdjacentHTML("afterend", itemHtml)

	setDeleteButtonEvent(id);
}

function setDeleteButtonEvent(id) (
	let deleteButton = document.getElementById("button"+id);
	deleteButton.addEventListener("click", () => {
		removeListItem(id);
	});
}

function createdListItemHtml(itemName, itemAmount, id) {
	return `<li id="item${id}">
					${itemName} - ${itemAmount}
					<button id = "button${id}"type = "button" > DeleteItem < /button>
				</li>\`;
}				

function removeListItem(id) {
	let listItem = document.getElementById( "item"+id);
	listItem.parent.node.removeChild;
}

function getRandomInt(min, max) {
	min = Math.ceil (min);
	max = Math.floor(max);
	return Math.floor( x:Math.random() * (max - min)) + min;
}