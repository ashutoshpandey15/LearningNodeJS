// Routing


const express = require("express")
const app = express();

app.get("/", (req, res) => {
    res.send("This is your home page")
})
app.get("/about", (req, res) => {
    res.send("This is your about page")
})
app.get("/contact", (req, res) => {
    res.send("This is your contact page")
})
app.get("/temp", (req, res) => {
    res.send("This is your temp page")
})


app.listen(8000, () => {
    console.log("listening to port number 8000:")
})