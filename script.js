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

/* Stackoverlfow https://stackoverflow.com/questions/2793688/how-do-i-put-unordered-list-items-into-an-array */
function map(arrayLike, fn) {
    let ret = [], i = -1, len = arrayLike.length;
    while (++i < len) ret[i] = fn(arrayLike[i]);
    return ret;
}

function getNodeText(node) {
    if (node.nodeType === 3) return node.data;
    let txt = '';
    if (node = node.firstChild) do {
        txt += getNodeText(node);
    } while (node = node.nextSibling);
    return txt;
}
/* --------------------------------------------------------------------------------------------------------- */

function getListELementsAsArray() {
    let listElement = document.getElementById('listContent');
    let listItems = listElement.getElementsByTagName('li');
    return map(listItems, getNodeText);
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

function addItem() {
    let inputField = document.getElementById("input");
    let value = inputField.value;
    inputField.value = '';
    if (validateTextInput(value)) {
        let listElement = document.getElementById("listContent");
        let item = document.createElement("li");
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
    let inputField = document.getElementById("input");
    let inputValue = inputField.value;
    let listEntries = getListELementsAsArray();
    let autocompleteOptions = document.getElementById("autocompleteSuggestions");
    autocompleteOptions.innerHTML = '';

    console.log(inputValue.length);
    if (inputValue.length > 1) {
        for (var x of listEntries) {
            if (x.toUpperCase().includes(inputValue.toUpperCase())) {
                var option = document.createElement("option");
                option.text = x;
                autocompleteOptions.appendChild(option);
            }
        }
    }

    validateTextInput(inputValue);
}
