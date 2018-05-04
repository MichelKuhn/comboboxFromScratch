function displayError(text) {
    errorElement = document.getElementById("errorField");
    let item = document.createElement("li");
    item.appendChild(document.createTextNode(text));
    errorElement.appendChild(item);
}

function clearErrorField() {
    errorElement = document.getElementById("errorField");
    errorElement.innerHTML = "";
}

function validateTextInput(input) {
    clearErrorField();
    let letterRegex = RegExp("^[a-zA-Z]+$");
    if (input.length < 2) {
        displayError("Text zu kurz");
        return false;
    } else if (!letterRegex.test(input)) {
        displayError("Text darf nur Buchstaben enthalten");
        return false;
    } else {
        return true;
    }
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
