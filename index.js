const fs = require("fs");
// console.log(fs);
fs.writeFileSync("test.txt", "Learn NodeJs"); //create new file and write that file
fs.writeFileSync("test2.txt","create second xt file");
console.log(__dirname); //present directory name
console.log(__filename); //present file name
