let myLibrary = [];
let Book = {};
const dialogButton = document.querySelector("#showDialog");
const myDialog = document.querySelector("#newBookDialog");
const closeDialogButton = document.querySelector("#formCancel");
const formObj = document.getElementById("dialogForm");

formObj.addEventListener("submit", (e) => {
    e.preventDefault();
    formObj.elements[""]
})

closeDialogButton.addEventListener("click", () => {
    myDialog.close();
})

dialogButton.addEventListener("click", () => {
    myDialog.showModal();
})

function Book(title, author, page, readStatus) {
    // The constructor
}

function addBookToLibrary(bookToAdd){
    // do stuff here
}