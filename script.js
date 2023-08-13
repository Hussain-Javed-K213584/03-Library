let myLibrary = [];
let bookCount = 0;
let changeReadStatusButton = document.createElement("button");
let removeBookButton = document.createElement("button");
let bookCard = document.createElement("div");
let buttonDiv = document.createElement("div");
let titleHeading = document.createElement("h1");
let bookDetails = [];
for (let i = 0; i < 3; i++)
{
    bookDetails.push(document.createElement("p"));
    bookDetails[i].className = "book-details";
}
const dialogButton = document.querySelector("#showDialog");
const myDialog = document.querySelector("#newBookDialog");
const closeDialogButton = document.querySelector("#formCancel");
const formObj = document.getElementById("dialogForm");
const gridContainer = document.getElementById("gridContainer");

formObj.addEventListener("submit", (e) => {
    e.preventDefault();
    let title = formObj.elements["book_title"].value;
    let author = formObj.elements["book_author"].value;
    let pages = formObj.elements["book-pages"].value;
    let readStatus = document.querySelector(`input[name="read_status"]:checked`).value;
    const book = new Book(title, author, pages, readStatus);
    addBookToLibrary(book);
    myDialog.close();
})

closeDialogButton.addEventListener("click", () => {
    myDialog.close();
})

dialogButton.addEventListener("click", () => {
    myDialog.showModal();
})

function Book(title, author, page, readStatus) {
    // The constructor
    this.title = title;
    this.author = author;
    this.page = page;
    this.readStatus = readStatus;
}

function addBookToLibrary(bookToAdd){
    // do stuff here
    // Set data attribute of all elements variable
    bookCard.dataset.bookIndex = bookCount;
    changeReadStatusButton.dataset.bookIndex = bookCount;
    removeBookButton.dataset.bookIndex = bookCount;
    bookCount++;
    bookCard.className = "book-card";
    titleHeading.className = "book-title";
    buttonDiv.className = "book-btn";
    changeReadStatusButton.className = "read-status-btn";
    removeBookButton.className = "remove-book-btn";
    changeReadStatusButton.innerText = "Change Read Status";
    removeBookButton.innerText = "Remove Book";
    titleHeading.innerText = bookToAdd.title;
    bookDetails[0].innerText = "Author: " + bookToAdd.author;
    bookDetails[1].innerText = "Pages: " + bookToAdd.page;
    bookDetails[2].innerText = "Read Status: " + bookToAdd.readStatus;
    bookDetails[2].setAttribute("id", "bookReadStatus"); // To access when changing read status
    gridContainer.appendChild(bookCard);
    bookCard.appendChild(titleHeading);
    bookCard.appendChild(document.createElement("hr"));
    bookDetails.forEach((bookPara) => {
        bookCard.appendChild(bookPara);
    });
    bookCard.appendChild(buttonDiv);
    buttonDiv.appendChild(changeReadStatusButton);
    buttonDiv.appendChild(removeBookButton);

}

removeBookButton.addEventListener("click", () => {
    let datasetValue = removeBookButton.dataset.bookIndex;
    let bookCardtoRemove = document.
    querySelector(`[data-book-index="${datasetValue}"]`);
    bookCardtoRemove.remove();
})

changeReadStatusButton.addEventListener("click", () => {
    let datasetValue = changeReadStatusButton.dataset.bookIndex;
    let bookCardDiv = document.
    querySelector(`[data-book-index="${datasetValue}"]`);
    let readStatusElement = bookCardDiv.querySelector("#bookReadStatus");
    if (readStatusElement.innerText.toLowerCase() == "read status: yes"){
        readStatusElement.innerText = "Read Status: No";
    }
    else if (readStatusElement.innerText.toLowerCase() == "read status: no") {
        readStatusElement.innerText = "Read Status: Yes";
    }

})