// routes basically will tell us about where we want to go / route 
const express = require('express');
const router = express.Router();


// yahan pe hum jo route ke liye fxn define kiye the uko require kar rahe
const {getAllProducts,getAllProductsTesting}= require("../controllers/products")

// ******************************************************
//router.route("kahan karna hai").get("kaise karna hai")
// ******************************************************
//getAllProducts is a Fxn 
router.route("/").get(getAllProducts);          
router.route("/testing").get(getAllProductsTesting);


module.exports = router;