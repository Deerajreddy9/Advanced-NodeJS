var fs = require("fs");
var { exec } = require("child_process");
var beep = () => exec(`rundll32 user32.dll,MessageBeep`);
var { promisify } = require("util");
var writeFile = promisify(fs.writeFile);
var unlink = promisify(fs.unlink);
var readDir = promisify(fs.readdir);
var delay = (seconds) =>
  new Promise((resolves, rejects) => {
    setTimeout(resolves, seconds * 1000);
  });

// waits till all promises are resoleved
Promise.all([
  writeFile("readme.md", "Hello World"),
  writeFile("hello.txt", "Hello World"),
  writeFile("readme.json", "{'Hello': 'World'}"),
])
  .then(() => readDir(__dirname))
  .then(console.log);
