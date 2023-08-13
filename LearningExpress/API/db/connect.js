const mongoose = require('mongoose')

uri = "mongodb+srv://ashutosh15:ashutosh15@cluster0.3f6v9yj.mongodb.net/Testapi?retryWrites=true&w=majority"


// creating a function to connect to db
 const connectDb =()=>{
    console.log('connecting to db');
    
    // return mongoose.connect(uri,options,callback)
    return mongoose.connect(uri,{
        useNewUrlParser:true,
        useUnifiedTopology:true,
    })
 }

 module.exports = connectDb;