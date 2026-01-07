const libraryBooks = []

function Book(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = false;
    this.ID = crypto.randomUUID()

    this.info = function() {
        if (!(this.read)) {
            return("The " + this.title + " by " + this.author + ", " + this.page + " pages" + ", not read yet. \n" + this.ID)

        }
        else {
            return("The " + this.title + " by " + this.author + ", " + this.page + " pages" + "read.\n" + this.ID)
        }
    }

    this.reed = function() {
        if ((this.read) == false) {
            this.read = true

        }
        else {
            this.read = false
        }
        
    }
}

function addBookToLibrary (title, author, pages) {
    book = new Book(title, author, pages);
    book.ID = crypto.randomUUID();
    libraryBooks.push(book)
    
}

const newBook = document.querySelector("#newBook")

const libraryView = document.querySelector("#library")



function loadLibraryBooks() {
    libraryView.innerHTML = ""
    libraryBooks.forEach(book => {
        let newDiv = document.createElement('div')
        newDiv.id = book.ID
        console.log(newDiv.id)
        newDiv.textContent = book.info()
        let deleteButton = document.createElement('button')
        deleteButton.textContent = "delete"
        deleteButton.addEventListener('click', () =>{
            const deletedBook = libraryBooks.find(bookSearched => bookSearched.ID === book.ID)
            libraryBooks.splice(deletedBook, 1)
            loadLibraryBooks()
            })
        let readButton = document.createElement('button')
        if (book.read == false) {
            readButton.textContent = "unread"
        }
        else if (book.read == true){
            readButton.textContent = "read"
        }
        readButton.addEventListener('click', ()=> {
            book.reed()
            loadLibraryBooks()

        }
        )
        newDiv.appendChild(readButton)
        newDiv.appendChild(deleteButton)
        libraryView.appendChild(newDiv)
        
        }
    )
    }


loadLibraryBooks()

const bookForm = document.querySelector("#bookForm")
bookForm.addEventListener('submit', function(event)
    {event.preventDefault();
    
    const formData = new FormData(event.target)
    const title = formData.get('title')
    const author = formData.get('author')
    const pages = formData.get('pages')
    addBookToLibrary(title, author, pages)
    loadLibraryBooks()                 
    }
)


