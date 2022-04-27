/*
make file
read file
update file
rename file
delete file
*/
const fs = require("fs");
const path = require("path");
const dirPath = path.join(__dirname, "crud");
const filePath = `${dirPath}/apple.txt`;

// fs.writeFileSync(filePath, "This is simple text file"); //create and write file

//read file
// fs.readFile(filePath,'utf8',(err,item)=>{
//     console.log(item);
// })

//update file
// fs.appendFile(filePath, " and file name is apple.txt", (err) => {
//   if (!err) {
//     console.log("file is updated");
//   }
// });

//rename file
// fs.rename(filePath,`${dirPath}/fruit.txt`, (err) => {
//     if (!err) {
//       console.log("file is renamed");
//     }
//   });

//delete file
fs.unlinkSync(`${dirPath}/fruit.txt`);