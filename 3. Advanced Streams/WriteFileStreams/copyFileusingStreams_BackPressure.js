const { createReadStream, createWriteStream } = require("fs");
var file = "../Streams/powder-day.mp4";
const readStream = createReadStream(file);
const writeStream = createWriteStream("copy.mp4", {
  // highWaterMark: 167869,
});
// highWaterMark -> large Hose, more memory taken up

readStream.on("data", (chunk) => {
  const result = writeStream.write(chunk);
  // if false => our hose is full, so pause
  if (!result) {
    console.log("BackPressure");
    readStream.pause();
  }
});

readStream.on("end", () => writeStream.end());

readStream.on("error", (error) => {
  console.log("error occured");
  console.error(error);
});

writeStream.on("drain", () => {
  console.log("Drained");
  readStream.resume();
});

writeStream.on("close", () => process.stdout.write("Copied File"));
