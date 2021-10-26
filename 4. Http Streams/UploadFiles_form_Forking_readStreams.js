const { createReadStream, stat, createWriteStream } = require("fs");
const { createServer } = require("http");
const { promisify } = require("util");
const file = "../Advanced Streams/Streams/powder-day.mp4";
const fileInfo = promisify(stat);

const respondWithVideo = async (req, res) => {
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
};

const server = createServer((req, res) => {
  if (req.method === "POST") {
    // We can Fork our strems
    req.pipe(res);
    req.pipe(process.stdout);
    req.pipe(createWriteStream("./upload.file"));
  } else if (req.url === "/video") {
    respondWithVideo(req, res);
  } else {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(`
        <form enctype="multipart/form-data" action="/" method="POST">
            <input type="file" name="upload-file"/>
            <button> Upload File </button>
        </form>
        `);
  }
});
server.listen(3000, () => {
  console.log("running on 3000");
});
