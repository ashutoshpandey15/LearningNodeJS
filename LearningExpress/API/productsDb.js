// This file is used to connect the api (products.json) to the database (productsDb.js)
require("dotenv").config();
const connectDb = require("./db/connect");
// Requiring the connection function for database connection from db\connect.js
const Product = require("./models/product");
//Requiring the product model and schema from models\product.js

const ProductJson = require("./products.json");
// requiring the products.json file


const start = async () => {
    try {
        await connectDb(process.env.MONGODB_URL);   //connecting to the database
        await Product.create(ProductJson); //creating the products collection in the database
        console.log('success');
        
    } catch (error) {
        console.log('error');
        
    }
}
start();   //calling the start function to connect the api to the database