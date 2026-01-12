class Book {

    static listOfBooks = []

    static reloadLibraryView() {
        viewLibrary.innerHTML = ""
        Book.listOfBooks.forEach(book => {
            let newDiv = document.createElement('div')
            newDiv.id = book.ID
            newDiv.textContent = book.info()
            let deleteButton = document.createElement('button')
            deleteButton.textContent = "delete"
            deleteButton.addEventListener('click', () => {
                const deletedBook = Book.listOfBooks.find(bookSearched => bookSearched.ID === book.ID)
                console.log(deletedBook.ID)
                Book.listOfBooks.splice(deletedBook, 1)
                Book.reloadLibraryView()
                console.log('what the flap')

            })
            let readButton = document.createElement('button')
            if (book.read) {
                readButton.textContent = "read"

            }
            else {
                readButton.textContent = "unread"
            }
        
            readButton.addEventListener('click', () =>{
                book.changeReadStatus()
                Book.reloadLibraryView()
            })

            newDiv.appendChild(deleteButton)
            newDiv.appendChild(readButton)
            viewLibrary.appendChild(newDiv)


        })
    }
    
    constructor(title, author, pages) {
        this.title = title
        this.author = author
        this.pages = pages
        this.read = false
        this.ID = crypto.randomUUID()
        Book.listOfBooks.push(this)


    }

    info() {
        if (!(this.read)) {
            return("The " + this.title + " by " + this.author + ", " + this.page + " pages" + ", not read yet. \n" + this.ID)

        }
        else {
            return("The " + this.title + " by " + this.author + ", " + this.page + " pages" + "read.\n" + this.ID)
        }
    }

    changeReadStatus(){
        if ((this.read) == false) {
            this.read = true

        }
        else {
            this.read = false
        }
        
    }

}

const viewLibrary = document.getElementById('viewLibrary')

const Dune = new Book("Dune", "Frank Herbert", "IDK")
Book.reloadLibraryView()
console.log((Book.listOfBooks)[0].ID)


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