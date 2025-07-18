const myLibrary = [];

function Book(title, author, pagesCount, isRead) {
    this.title = title;
    this.author = author;
    this.pagesCount = pagesCount;
    this.isRead = isRead ? "is already read" : "is not read yet";
    this.info = function() {
        return `${this.title} by ${this.author}, ${this.pagesCount} pages, ${this.isRead}`;
    }
}

function addBookToLibrary(title, author, pagesCount, isRead) {
    let bookObj = new Book(title, author, pagesCount, isRead);
    const bookId = crypto.randomUUID()
    bookObj.bookId = `${bookId}`;
    myLibrary.push(bookObj);
}

function displayLibrary() {
    let rows = myLibrary.length
    const container = document.querySelector(".container"); 
    let table = document.createElement("table");
    for (let i of myLibrary) {
        console.log(i);
        let columns = i.length;
        let tr = document.createElement("tr");
        for (j in i) {
            let td = document.createElement("td");
            td.textContent = j;
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }
    container.appendChild(table);
}

let a = "a";
let b = "b";
let c = "c";
let d = "d";
addBookToLibrary(a,b,c,d);
addBookToLibrary(a,b,c,d);
addBookToLibrary(a,b,c,d);
addBookToLibrary(a,b,c,d);
addBookToLibrary(a,b,c,d);
