//Serving Static Websites With the help of middleware (express.static)
//Syntax
// app.use(express.static('root',[options]))
//where root tells us the path and options act 
//as a translator for the data sent by user to the server.
// The path is always absolute no relative path.


const express = require('express');
const app = express();
const path = require('path');

//Method 1 using the path module
const staticPath =path.join(__dirname,'Demo')
app.use(express.static(staticPath));

//Method 2 Directly including the path
// app.use(express.static(('Demo Web')))

app.get("/", (req, res) => {
    res.send("This is your home page")
})

app.listen(8000,()=>{
    console.log("listening to port number 8000")
});