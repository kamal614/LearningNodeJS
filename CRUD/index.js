const fs = require('fs');

//TO CREATE A NEW FOLDER
// fs.mkdirSync("kamal")

//TO CREATE AND WRITE A FILE
// fs.writeFileSync("kamal/kamal.txt", "MY NAME IS KAMAL")

//TO ADD MORE TEXT IN THE SAME FILE
// fs.appendFileSync("kamal/kamal.txt", " hello world i'm new text")

//TO READ THE SAVED FILE
// const readingFile = fs.readFileSync("kamal/kamal.txt");
// const finalText =readingFile.toString();
// console.log(finalText);

//TO RENAME THE FILE
// fs.renameSync("kamal/kamal.txt", "kamal/newkamal.txt")

//TO DELETE THE FILE
fs.unlinkSync('kamal/newkamal.txt');