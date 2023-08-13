// controllers will tell us about what to do when visit a route 


const getAllProducts =async (req, res) => {
res.status(200).json({msg:"Iam getall products"})
}
const getAllProductsTesting =async (req, res) => {
res.status(200).json({msg:"Iam getall productstesting"})
}

module.exports = {getAllProducts,getAllProductsTesting}