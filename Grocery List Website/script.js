const input = document.getElementById("inputBar");
const submit = document.getElementById("submitButton");
const list = document.querySelector(".myList");

function getInput() {
    return input.value
};

function moveGroceryToList() {
    const grocery = getInput();
    if (grocery) {
        let listElement = document.createElement("p");
        listElement.innerText = grocery;
        listElement.id = "listElement";
        list.appendChild(listElement);

        input.value = "";
        let removeButton = document.createElement("button");
        removeButton.innerText = "X";
        removeButton.id = "xButton";
        list.appendChild(removeButton);

        removeButton.addEventListener("click", function() {
            listElement.remove();
            removeButton.remove();
        });
    };
};

submit.addEventListener("click", moveGroceryToList);
