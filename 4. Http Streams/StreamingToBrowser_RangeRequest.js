const { createReadStream, stat } = require("fs");
const { createServer } = require("http");
const { promisify } = require("util");
const file = "../Advanced Streams/Streams/powder-day.mp4";
const fileInfo = promisify(stat);

const server = createServer(async (req, res) => {
  const { size } = await fileInfo(file);
  const range = req.headers.range;
  console.log(range);
  if (range) {
    let [start, end] = range.replace(/bytes=/, "").split("-");
    start = parseInt(start, 10);
    end = end ? parseInt(end, 10) : size - 1;
    res.writeHead(206, {
      "Content-Range": `bytes ${start}-${end}/${size}`,
      "Accept-Ranges": "bytes",
      "Content-Length": end - start + 1,
      "Content-Type": "video/mp4",
    });
    createReadStream(file, { start, end }).pipe(res);
  } else {
    res.writeHead(200, { "Content-Length": size, "Content-Type": "video/mp4" });
    createReadStream(file).pipe(res);
  }
});
server.listen(3000, () => {
  console.log("running on 3000");
});
