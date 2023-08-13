// controllers will tell us about what to do when visit a route 

//requiring the model from models\product.js
const Product = require("../models/product");

const getAllProducts =async (req, res) => {
    const myData =await Product.find(req.query)  
     //find fxn will find all the data from the database
    res.status(200).json({myData})
}
//status 200 means ok dedo and ye mssg pass kardo json me agar ho gaya toh
const getAllProductsTesting =async (req, res) => {
    const myData =await Product.find(req.query)  
    //find fxn will find all the data from the database
   res.status(200).json({myData})
}

module.exports = {getAllProducts,getAllProductsTesting}