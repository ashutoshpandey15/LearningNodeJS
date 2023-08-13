const express = require('express')
const app = express();



const product_routes =require("./routes/products")
app.get("/",(req,res) => {
    res.send("Hi iam live ")
});

//middleware to set router
app.use("/api/products",product_routes)


app.listen(8000,"127.0.0.1",()=>{
    console.log("listening on port")
});

// Setting up routers