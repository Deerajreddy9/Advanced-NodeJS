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
Promise.all([delay(5), delay(2), delay(1), delay(1), delay(7)])
  .then(() => readDir(__dirname))
  .then(console.log);
