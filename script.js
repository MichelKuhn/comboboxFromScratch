document.onkeydown = checkKey;

function checkKey(e) {
    e = e || window.event;
    let element = document.getElementById("listContent");

    if (e.keyCode == '38') {            //UP
        if (element.className.includes("list--content--open")) {
            element.className = element.className.replace("list--content--open", "list--content--closed");
        }
    } else if (e.keyCode == '40') {    //DOWN
        if (element.className.includes("list--content--closed")) {
            element.className = element.className.replace("list--content--closed", "list--content--open");
        }
    }
}

function getListElements() {
    let listElement = document.getElementById('listContent');
    return listElement.getElementsByTagName('li');
}

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

function resetListView() {
    let listItems = getListElements();
    for (item of listItems) {
        item.style.display = "list-item";
    }
}

function clickElement(id) {
    let inputField = document.getElementById("input");
    resetListView();
    inputField.value = id;
    document.getElementById(id).style.display = "none";
}

function addItem() {
    let inputField = document.getElementById("input");
    let value = inputField.value;
    inputField.value = '';
    if (validateTextInput(value)) {
        let listElements = getListElements();
        for (var element of listElements) {
            if (element.id === value) {
                return;
            }
        }
        let listElement = document.getElementById("listContent");
        let item = document.createElement("li");
        item.id = value;
        item.onclick = function () {
            clickElement(item.id);
        };
        item.appendChild(document.createTextNode(value));
        listElement.appendChild(item);
    }
}

function toggleList() {
    let element = document.getElementById("listContent");
    if (element.className.includes("list--content--open")) {
        element.className = element.className.replace("list--content--open", "list--content--closed");
    } else {
        element.className = element.className.replace("list--content--closed", "list--content--open");
    }
}

function userTypes() {
    resetListView();
    let inputField = document.getElementById("input");
    let inputValue = inputField.value;

    let listElements = getListElements();
    for (var element of listElements) {
        if (!element.id.toUpperCase().includes(inputValue.toUpperCase())) {
            element.style.display = "none";
        }
    }

    validateTextInput(inputValue);
}
