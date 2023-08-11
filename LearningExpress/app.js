//Basic express and syntax

const express = require('express')
const app = express();
 
// app.get(route,callback)
app.get("/",(req,res) => {
    res.send("Hello from express side")
});
app.get("/about",(req,res) => {
    res.send("Hello from about us side of the page")
});

app.listen(8000,()=>{
    console.log("listening to port number 8000")
});