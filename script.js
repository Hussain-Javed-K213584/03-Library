let myLibrary = [];
const dialogButton = document.querySelector("#showDialog");
const myDialog = document.querySelector("#newBookDialog");
const closeDialogButton = document.querySelector("#formCancel");

closeDialogButton.addEventListener("click", () => {
    myDialog.close();
})

dialogButton.addEventListener("click", () => {
    myDialog.showModal();
})

function Book() {
    // The constructor
}

function addBookToLibrary(){
    // do stuff here
}