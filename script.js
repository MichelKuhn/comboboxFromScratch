function validateTextInput(input) {
    let letterRegex = RegExp("^[a-zA-Z]+$");
    console.log(letterRegex.test(input));
    return (input.length > 1 && letterRegex.test(input));
}

function addItem() {
    let value = document.getElementById("input").value;
    if (validateTextInput(value)) {
        let listElement = document.getElementById("list");
        let item = document.createElement("li");
        item.appendChild(document.createTextNode(value));
        listElement.appendChild(item);
    }
}

function toggleList() {
    let listElement = document.getElementById("list");
    if (listElement.className.includes("hidden")) {
        listElement.className = listElement.className.replace(" hidden", "");
    } else {
        listElement.className += " hidden";
    }
}
