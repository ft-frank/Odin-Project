const path = require("node:path")
const {reactor} = require("")


app.set("views", path.join(__dirname, "views"));

app.set("view engine", "ejs");