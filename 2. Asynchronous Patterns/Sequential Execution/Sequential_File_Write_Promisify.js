var fs = require("fs");
var { exec } = require("child_process");
var beep = () => exec(`rundll32 user32.dll,MessageBeep`);
var { promisify } = require("util");
var writeFile = promisify(fs.writeFile);
var unlink = promisify(fs.unlink);

var delay = (seconds) =>
  new Promise((resolves, rejects) => {
    setTimeout(resolves, seconds * 1000);
  });

const doSomethingSecret = () =>
  Promise.resolve()
    .then(() => console.log("Starting"))
    .then(() => delay(1))
    .then(() => "Waiting ...")
    .then(console.log)
    .then(() => delay(2))
    .then(() => writeFile("file.txt", "Something Top Secret"))
    .then(beep)
    .then(() => "file.txt created...")
    .then(console.log)
    .then(() => delay(3))
    .then(() => unlink("file.txt"))
    .then(beep)
    .then(() => "File removed...")
    .then(console.log)
    .catch(console.error);

doSomethingSecret();
