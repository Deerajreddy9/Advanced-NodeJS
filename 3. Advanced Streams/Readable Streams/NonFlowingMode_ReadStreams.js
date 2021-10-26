var fs = require("fs");
var file = "../Streams/powder-day.mp4";

const readStream = fs.createReadStream(file);

// ReadStream in Flowing Mode
readStream.on("data", (chunk) => {
  // console.log("chunk" , chunk)
  console.log("Size", chunk.length);
});

readStream.on("end", () => console.log("read Stream done"));

readStream.on("error", (error) => {
  console.log("error occured");
  console.error(error);
});

readStream.pause();

// Non Flowing mode => need to Request next chunk of data
process.stdin.on("data", (chunk) => {
  if (chunk.toString().trim() === "finish") {
    readStream.resume();
  }
  readStream.read();
});
