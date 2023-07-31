const fs = require("fs");
fs.writeFileSync("readme.text", "Hello this is my First NodeJs Code");
fs.renameSync("readme.text", "Readme.text"); // renames the file
fs.appendFileSync("Readme.text", "Hello This is me updating the file"); //appends the text
const buf_data = fs.readFileSync("Readme.text");
org_data = buf_data.toString();
console.log(org_data);
