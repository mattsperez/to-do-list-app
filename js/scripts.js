function newItem() {
	let li = $("<li></li>");
	let inputValue = $("#input").val();
	li.append(inputValue);

	if (inputValue === "") {
		alert("This cannot be blank!");
	} else {
		$("#list").append(li);
	}

	function crossOut() {
		li.classList.toggle("strike");
	}

	li.on("dblclick", function crossout() {
		li.toggleClass("strike");
	});

	let crossOutButton = $("<crossOutButton></crossOutButton>");
	crossOutButton.append(document.createTextNode("X"));
	li.append(crossOutButton);

	crossOutButton.on("click", deleteListItem);

	function deleteListItem() {
		li.classList("delete");
	}

	$("#list").sortable();
}
