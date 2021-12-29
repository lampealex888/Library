
const bookshelf = document.getElementById('bookshelf-container')
let myLibrary = []

function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
    this.info = function() {
        if (read === true) return title + " By " + author + ", " + pages + " pages, has been read" 
        return title + " By " + author + ", " + pages + " pages, not read yet" 
    }
}

function addBookToLibrary() {
    for (let i = 0; i < arguments.length; i++) {
        myLibrary.push(arguments[i]);
    }
}

function displayBooks() {
    resetBooks()
    for (let i = 0; i < myLibrary.length; i++) {
        let book = document.createElement('div')
        book.classList.add('book')

        let title = document.createElement('h4')
        title.innerHTML = myLibrary[i].title
        book.appendChild(title)

        let author = document.createElement('p')
        author.innerHTML = myLibrary[i].author
        book.appendChild(author)

        let pages = document.createElement('p')
        pages.innerHTML = myLibrary[i].pages + " pages"
        book.appendChild(pages)

        let read = document.createElement('p')
        if (myLibrary[i].read == true) {
            read.innerHTML = "Read"
        } else {
            read.innerHTML = "Not Read"
        }
        book.appendChild(read)

        let deleteBtn = document.createElement('button')
        deleteBtn.innerText = "Delete"
        deleteBtn.onclick=function() {
            removeBook(i)
        }
        book.appendChild(deleteBtn)

        let readBtn = document.createElement('button')
        readBtn.innerText = "Mark as Read/Not Read"
        readBtn.onclick=function() {
            readBook(i)
        }
        book.appendChild(readBtn)
        bookshelf.appendChild(book)
    }
}

function resetBooks() {
    while (bookshelf.firstChild) {
        bookshelf.removeChild(bookshelf.firstChild);
    }
}

function removeBook(indice) {
    myLibrary.splice(indice, 1)
    resetBooks()
    displayBooks()
}

function readBook(indice) {
    if (myLibrary[indice].read == false) {
        myLibrary[indice].read = true
    } else {
        myLibrary[indice].read = false
    }
    resetBooks()
    displayBooks()
}

document.getElementById('addNewBook').onclick=function() {
    let title = prompt("Please enter the title of the book")
    let author = prompt("Please enter the author of the book")
    let pages = prompt("Please enter how many pages are in the book")
    let read = confirm("Please enter if you have read the book")
    let book = new Book(title, author, pages, read)
    addBookToLibrary(book)
    displayBooks()
}
const theHobbit = new Book("The Hobbit", "J.R.R. Tolkein", 295, false)
const theCatcherInTheRye = new Book("The Catcher in the Rye", "J. D. Salinger", 277, true)
const toKillAMockingBird = new Book("To Kill a Mockingbird", "Harper Lee", 281, true)

addBookToLibrary(theHobbit, theCatcherInTheRye, toKillAMockingBird)

displayBooks();