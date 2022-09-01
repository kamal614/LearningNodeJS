const fs = require("fs");

// fs.mkdir('newFolder', (err)=>{
//     console.log(err);
// })

// fs.writeFile('./newFolder/newFile.txt', 'Hello World', (err)=>{
//     console.log('file created')
// })



// fs.appendFile('./newFolder/newFile.txt', 'This is Kamal', (err)=>{
//     console.log('file created')
// })



fs.readFile('./newFolder/newFile.txt', 'UTF-8', (err, data)=>{
    console.log(data)
})