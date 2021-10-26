const { createWriteStream } = require("fs");
var file = "../Streams/powder-day.mp4";
const writeStream = createWriteStream("file.txt");

// try running this code by. | is unix Pipe
// run code and add text -> will be saved to text file
// echo "hello World" | node <filename.js>
// cat <pathtoSomeFile> | node <filename.js>
process.stdin.pipe(writeStream).on("error", console.error);
