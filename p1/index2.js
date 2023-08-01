const fs = require('fs');

fs.writeFileSync("bio.txt", "This is my Bio")
fs.appendFileSync("bio.txt", " This is additional Data added to txt file")
const data = fs.readFileSync("bio.txt","utf-8")
console.log(data)
// fs.renameSync("Bio.text", "Bio.txt")

