const { Router }  = require("express")

const bookRouter = Router()

bookRouter.get("/", (req, res) => { res.send("BOOKS!!")

})

bookRouter.get("/:book", (req, res) => {
    const {book}= req.params
    res.send(`Book: ${book}`)
})

module.exports = bookRouter