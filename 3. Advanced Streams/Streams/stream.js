var fs = require("fs");
var http = require("http");
var file = "./powder-day.mp4";

// try running with node --trace_gc and create multiple requests(tabs) and check memory usage
var server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "video/mp4" });
  fs.createReadStream(file).pipe(res).on("error", console.error);
});

server.listen(3000, () => console.log("Running on 3000 port"));
