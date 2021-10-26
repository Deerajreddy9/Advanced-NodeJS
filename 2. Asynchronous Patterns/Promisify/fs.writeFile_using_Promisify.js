var fs = require("fs");
var { promisify } = require("util");

/* 
    It is basically used to convert a method that 
        returns responses using a callback function to return responses in a promise object. 
*/

var writeFile = promisify(fs.writeFile);
writeFile(
  "message.txt",
  "Promisify basically used to convert a method that returns responses using a callback function to return responses in a promise object. "
)
  .then(() => console.log("file Successfully Created"))
  .catch((error) => console.log(`error : ${error.message}`));
