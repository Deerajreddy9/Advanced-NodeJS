var fs = require("fs");
var http = require("http");
var file = "./powder-day.mp4";

// try running with node --trace_gc and create multiple requests(tabs) and check memory usage
var server = http.createServer((req, res) => {
  fs.readFile(file, (error, data) => {
    if (error) {
      consol.elog("hmmm ", "error");
    } else {
      res.writeHead(200, { "content-type": "video/mp4" });
      res.end(data);
    }
  });
});

server.listen(3000, () => console.log("Server running on 3000"));
