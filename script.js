function displayError(text) {
    let errorElement = document.getElementById("errorField");
    let item = document.createElement("p");
    item.appendChild(document.createTextNode(text));
    errorElement.appendChild(item);
}

function clearErrorField() {
    let errorElement = document.getElementById("errorField");
    errorElement.innerHTML = "";
}

function validateTextInput(input) {
    clearErrorField();
    let letterRegex = /^[a-zA-Z]+$/;
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
    let element = document.getElementById("listTop");
    if (element.className.includes("list--top--open")) {
        element.className = element.className.replace("list--top--open", "list--top--closed");
    } else {
        //Zu Beginn hat das Element keinen der beiden Styles
        if(element.className === "list--top") {
            element.className += " list--top--open";
        }
        element.className = element.className.replace("list--top--closed", "list--top--open");
    }
}
