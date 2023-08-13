let myLibrary = [];
let bookCount = 0;
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

function addBookToLibrary(bookToAdd) {
    // do stuff here
    // Set data attribute of all elements variable
    let changeReadStatusButton = document.createElement("button");
    let removeBookButton = document.createElement("button");
    let bookCard = document.createElement("div");
    let buttonDiv = document.createElement("div");
    let titleHeading = document.createElement("h1");
    let bookDetails = [];
    for (let i = 0; i < 3; i++) {
        bookDetails.push(document.createElement("p"));
        bookDetails[i].className = "book-details";
    }

    //Store the book card inside an array
    myLibrary.push(bookCard);
    myLibrary[bookCount].dataset.bookIndex = bookCount;
    changeReadStatusButton.dataset.bookIndex = bookCount;
    removeBookButton.dataset.bookIndex = bookCount;
    myLibrary[bookCount].className = "book-card";
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
    gridContainer.appendChild(myLibrary[bookCount]);
    myLibrary[bookCount].appendChild(titleHeading);
    myLibrary[bookCount].appendChild(document.createElement("hr"));
    bookDetails.forEach((bookPara) => {
        myLibrary[bookCount].appendChild(bookPara);
    });
    myLibrary[bookCount].appendChild(buttonDiv);
    buttonDiv.appendChild(changeReadStatusButton);
    buttonDiv.appendChild(removeBookButton);
    bookCount++;
}

gridContainer.addEventListener("click", (e) => {
    if (e.target && e.target.className == "remove-book-btn") {
        console.log("Remove button clicked");
        let datasetValue = document.querySelector(".remove-book-btn").dataset.bookIndex;
        let bookCardtoRemove = document.
            querySelector(`[data-book-index="${datasetValue}"]`);
        bookCardtoRemove.remove();
    }
    else if (e.target && e.target.className == "read-status-btn") {
        let datasetValue = document.querySelector(".read-status-btn").dataset.bookIndex;
        let bookCardDiv = document.
            querySelector(`[data-book-index="${datasetValue}"]`);
        let readStatusElement = bookCardDiv.querySelector("#bookReadStatus");
        if (readStatusElement.innerText.toLowerCase() == "read status: yes") {
            readStatusElement.innerText = "Read Status: No";
        }
        else if (readStatusElement.innerText.toLowerCase() == "read status: no") {
            readStatusElement.innerText = "Read Status: Yes";
        }
    }
})