const express = require('express')
const app = express();
const connectDb = require("./db/connect");

//jinko bhi route kiya tha unko idhar require kar rahe hai
const product_routes =require("./routes/products");
app.get("/",(req,res) => {
    res.send("Hi iam live ")
});

//middleware to set router
// The app.use() function is used to mount the specified
// middleware function(s) at the path which is being specified. It is mostly 
// used to set up middleware for your application.
// basically hum app.use se middleware ko ek particular path pe set kar rahe hai
// app.use("humko basically localhost:8000/ ke baad me kya chaiye",const jisme routes save kiya tha)
app.use("/api/products",product_routes)


app.listen(8000,"127.0.0.1",async()=>{
    await connectDb();
    console.log("listening on port")
});

