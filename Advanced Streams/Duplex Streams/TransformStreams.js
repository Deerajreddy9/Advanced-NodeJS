const { Transform } = require("stream");

class ReplaceText extends Transform {
  constructor(char) {
    super();
    this.replaceChar = char;
  }

  _transform(chunk, encoding, callback) {
    // similar to read, but transforms the readStream
    const transformChunk = chunk
      .toString()
      .trim()
      .replace(/[a-z]|[A-Z]|[0-9]/g, this.replaceChar);
    this.push(transformChunk);
    callback();
  }

  _flush(callback) {
    // add more data once our Readstream is Completed
    this.push("More stuff on the way .....");
    callback();
  }
}

var xStream = new ReplaceText("X");
process.stdin.pipe(xStream).pipe(process.stdout);
