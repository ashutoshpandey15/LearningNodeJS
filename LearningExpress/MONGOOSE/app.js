// localhost db connection
const mongoose = require('mongoose')
mongoose.connect("mongodb://127.0.0.1:27017/fruitsDB",{useNewUrlParser:true,useUnifiedTopology:true}) //returns  a promise
.then(()=>console.log("connection successful"))
.catch((err)=>console.log(err));
