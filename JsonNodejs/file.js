const bioData = {
  name: "Rahul",
  age: 23,
  channel: "ASHU",
};

const jsonDATA = JSON.stringify(bioData); // convert object to json
console.log(jsonDATA);

const objData = JSON.parse(jsonDATA); // convert json to object
console.log(objData);
