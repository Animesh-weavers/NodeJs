const fs = require("fs");
// fs.writeFileSync("apple.txt", "This is a apple file"); //create a file

const path = require("path");
const dirPath = path.join(__dirname, "files"); //current directory path fetched
// console.log(dirPath)

//create five files 
// for (let i = 0; i < 5; i++) {
//   fs.writeFileSync(`${dirPath}/hello${i+1}.txt`, `FILE NO: ${i+1}`);
// }

//listing all files
fs.readdir(dirPath,(err,files)=>{
    // console.log(files)
    files.map((item,index)=>{
        console.log(`${index+1} : ${item}`);
    })
})