const fs = require("fs");
// Async Method of File System

// To create a text file
fs.writeFile("ashu.txt", "Hello THis is my First txt Document", (err) => {
  console.log(err);
});
// To add some additonal text to the file
fs.appendFile("ashu.txt", "  Hello THis is my Second txt Document", (error) => {
  console.log(error);
});
//To Read the txt File
fs.readFile("ashu.txt", "utf-8", (error, data) => {
  console.log(data);
});
