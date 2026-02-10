const express = require("express");
const app = express();
const authorRouter = require("./author");
const bookRouter = require("./book");

app.use("/authors", authorRouter);
app.use("/books", bookRouter);
app.get("/", (req, res) => res.send("Hello World"))

const PORT = 3000;
app.listen(PORT, (error) => {
  if (error) {
    throw error;
  }
  console.log(`My first Express app - listening on port ${PORT}!`);
});