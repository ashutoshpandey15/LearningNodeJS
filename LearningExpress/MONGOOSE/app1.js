// localhost db connection
const mongoose = require('mongoose')


mongoose.connect("mongodb://127.0.0.1:27017/Test1",{useNewUrlParser:true,useUnifiedTopology:true}) //returns  a promise
.then(()=>console.log("connection successful"))
.catch((err)=>console.log(err));



// Creating a Schema and Model for mongoose
//Schema defines the structure of documents in a collection 
// and also validates the data and default values

    const playlistSchema =new mongoose.Schema({
    name: String,
    Author: String,
    Age: Number,
    videos: Number,
    Date:{
        type:Date,
        default:Date.now
    }
})

// Model is used to create collection in the database
//It is wrapper on the schema  
//It provides an interface to the database for creating, querying, updating, deleting records, etc.
const Playlist = new mongoose.model("Playlist",playlistSchema);
// Playlist is Class
//"Playlist" is collection


// Now to add document inside the collection 
// Now to add multiple documents inside the collection we use insertMany() method
const createDocument = async()=>{
    try{
        const nodePlaylist = new Playlist({   
            name:"nodeJS",
            ctype:"back End",
            videos:56,
            Author:"zuckerberg",
            active:false,
    })
    const excelPlaylist = new Playlist({   
        name:"JS",
        ctype:"End",
        videos:0,
        Author:"appl",
        active:true,
})
const mongoosePlaylist = new Playlist({    
    name:"mongoose",
    ctype:"Front",
    videos:8,
    Author:"Facook",
    active:true,
})
    const result = await Playlist.insertMany([nodePlaylist,excelPlaylist,mongoosePlaylist]);
    console.log(result);
}
catch(err){
    console.log(err);
}
}
// createDocument();
// To get the documents whos video count is more than 0
// const getDocument = async()=>{
//     const result = await Playlist.find({videos:{$gt:0}})
//     console.log(result);
// }

// TO match the arrays
// const getDocument = async()=>{
//     const result = await Playlist.find({ctype:{$in:["back End","Database"]}})
//     console.log(result);
// }
// For Logical Operators like or/and/nor 
// const getDocument = async()=>{
//     const result = await Playlist.find({$or:[{ctype:"Front"},{Author:"Facook"}]})
//     console.log(result);
// }
// Now to Count and Sort the Documents We can use .countDocument() and .sort() method
const getDocument = async()=>{
    const result = await Playlist
    .find({$or:[{ctype:"Front"},{Author:"Facook"}]})
    .countDocuments()
    console.log(result);
}


getDocument();

