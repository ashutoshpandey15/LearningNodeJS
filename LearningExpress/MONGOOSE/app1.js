// localhost db connection
const mongoose = require('mongoose')
const validator = require('validator')

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
    Email :{
        type:String,
        validator(value){
            if(!validator.isEmail(value)){
                throw new Error("Invalid Email")
            }
        }
    },
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
            Email:"yiu@jojsnbd.com", // wrong email
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
// const getDocument = async()=>{
//     const result = await Playlist
//     .find({})
//     .countDocuments()
//     .sort({name:1}) // 1 for ascending order and -1 for descending order
//     console.log(result);
// }
// getDocument();



// Updating the Document
// const updateDocument = async(_id)=>{
//     try{
//         const result=  await Playlist.updateOne({_id},{
//             $set:{
//                 name: "MongoDB"
//             }
//       })
//       console.log(result);
//     }catch(err){
//         console.log(err);
//     }
// }

// updateDocument('64d7c66c9aa08ff4addbd8b2');

//Deleting the Document



// deleteDocument = async(_id)=>{
//     try{
//         const result = await Playlist.deleteOne({_id});
//         console.log(result);
//     }catch(err){
//         console.log(err);
//     }
// }

// deleteDocument('64d7c66c9aa08ff4addbd8b2');


// Validation 
// 1. Inbuilt Validation
// const playlistSchema =new mongoose.Schema({
//     name:{
//         type:String, 
//         required:true,
//         trim:true,
//         minlength:[2,"Minimum 2 letters are required"],
// },
//     Author: String,
//     Age: Number,
//     ctype: {
//         type:String,
//         enum:["Front End","Back End","Database"]
// },

//Custom validation
//       videos: {
            // 	type:Number,
            // 	validate(value){
            // 	if(value<0){
            // 	throw new Error('Videos should not be negative')
// }
// }
// }
//     Date:{
//         type:Date,
//         default:Date.now
//     }
// })




