const fs = require('fs');


//TO CREATE NEW FILE
// fs.writeFileSync('newFile.txt', "I'm New File");

//TO REWRITE THE DATA IN THE FILE
// fs.writeFileSync('newFile.txt', "I'm updated text")

//TO ADD NEW TEXT IN THE EXISTING FILE
// fs.appendFileSync('newFile.txt', "I'm new added text")

//READING THE SAVED FILE
// const fileData = fs.readFileSync('newFile.txt');
// const finalData = fileData.toString();
// console.log(finalData);

//TO RENAME THE FILE
fs.renameSync('newFile.txt', "Renamed.txt");