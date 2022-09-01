const fs = require("fs");

const myObj = {
    name: "Kamal",
    age: 21,
    designatino: "Sr. Dev"
}


//Converting object to JSON
console.log("This is Object");
console.log(myObj);

const toJson = JSON.stringify(myObj);


console.log("This is JSON data");
console.log(toJson);

//Creating new file and adding data in that

// fs.writeFile("JSON.json", toJson, (err)=>{
// console.log("File Created");
// });

//Reading the JSON file

fs.readFile("JSON.json", "utf-8", (err, data) => {
    console.log("This is the data from the JSON file")
    console.log(data);


    //Convert back the JSON data to the Object

    const backtoObj = JSON.parse(data);
    console.log("JSON to Object");
    console.log(backtoObj);
});

