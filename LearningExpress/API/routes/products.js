// routes basically will tell us about where we want to go / route 
const express = require('express');
const router = express.router();

const {getAllProducts,getAllProductsTesting}= require("../controllers/products")

router.route("/").get(getAllProducts);          //getAllProducts is a Fxn 
router.route("/testing").get(getAllProductsTesting);


module.exports = router;