function Book(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = false;

    this.info = function() {
        if (!(this.read)) {
            return("The " + this.title + " by " + this.author + ", " + this.page + "pages" + ", not read yet." )

        }
        else {
            return(console.log("The " + this.title + " by " + this.author + ", " + this.page + "pages" + "read" ))
        }
    }
}

const diary = new Book("Diary", "Frank", "5")

console.log(diary.info())