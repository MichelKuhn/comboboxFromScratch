function addItem() {
    let listElement = document.getElementById("list");
    let item = document.createElement("li");
    item.appendChild(document.createTextNode(document.getElementById("input").value));
    listElement.appendChild(item);
}

function toggleList() {
    let listElement = document.getElementById("list");
    if (listElement.className.includes("hidden")) {
        listElement.className = listElement.className.replace(" hidden", "");
    } else {
        listElement.className += " hidden";
    }
}
