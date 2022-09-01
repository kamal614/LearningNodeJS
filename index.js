const fs = require("fs");

// fs.writeFileSync("read.txt", "Hello World")

// fs.writeFileSync("read.txt", "World Hello")


// fs.appendFileSync("read.txt", " Hello World")



// const buf_data =
//     fs.readFileSync("read.txt")
// org_data = buf_data.toString()
//     console.log(org_data)

// fs.rename("read.txt" , 'readwrite.txt')

fs.writeFile('newFile.txt','This is new file', (err) => {
    console.log(err);
});