const { createReadStream, createWriteStream } = require("fs");
var file = "../Streams/powder-day.mp4";
const readStream = createReadStream(file);
const writeStream = createWriteStream("copy.mp4");

readStream.on("data", (chunk) => {
  writeStream.write(chunk);
});

readStream.on("end", () => writeStream.end());

readStream.on("error", (error) => {
  console.log("error occured");
  console.error(error);
});

writeStream.on("close", () => process.stdout.write("Copied File"));
