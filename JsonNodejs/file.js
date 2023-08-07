const fs = require("fs");
const bioData = {
  name: "Rahul",
  age: 23,
  channel: "ASHU",
};

//Task 1  convert to json
//Task 2  add to another file
//Task 3  readfile
//Task 4  convert back to js object
//Task 5  console.log

//task 1 and 2
const jsonDATA = JSON.stringify(bioData); // convert object to json
// fs.writeFile("json1.json", jsonDATA, (err) => {
//   console.log("done");
// });

//task 3 and 4 and 5
fs.readFile("json1.json", "utf-8", (err, data) => {
  console.log(data);
  const objData = JSON.parse(data); // convert json to object
  console.log(objData);
});
