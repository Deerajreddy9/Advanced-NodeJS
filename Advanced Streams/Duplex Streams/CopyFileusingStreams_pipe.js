const { createReadStream, createWriteStream } = require("fs");
var file = "../Streams/powder-day.mp4";
const readStream = createReadStream(file);
const writeStream = createWriteStream("copy.mp4");

// Any readStream can be piped into WriteStream, it takes care of backPressure
// we need to take care of errors
readStream.pipe(writeStream).on("error", console.error);
