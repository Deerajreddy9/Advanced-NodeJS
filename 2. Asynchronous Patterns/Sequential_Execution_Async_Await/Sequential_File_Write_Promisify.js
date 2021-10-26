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

const doSomethingSecret = async () => {
  console.log("Starting");
  await delay(1);
  console.log("Waiting ...");
  await delay(2);
  try {
    await writeFile("file.txt", "Something Top Secret");
    beep();
    console.log("file.txt created...");
  } catch (error) {
    console.log(error);
  }
  await delay(3);
  await unlink("file.txt");
  beep();
  console.log("File removed...");
  return Promise.resolve();
};

doSomethingSecret();
