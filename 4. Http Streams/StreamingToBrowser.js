const { createReadStream, stat } = require("fs");
const { createServer } = require("http");
const { promisify } = require("util");
const file = "../Advanced Streams/Streams/powder-day.mp4";
const fileInfo = promisify(stat);

const server = createServer(async (req, res) => {
  const size = await fileInfo(file);
  res.writeHead(200, { "Content-Length": size, "Content-Type": "video/mp4" });
  createReadStream(file).pipe(res);
});
server.listen(3000, () => {
  console.log("running on 3000");
});
