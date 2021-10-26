var fs = require("fs");
var { exec } = require("child_process");

// Mac
// var beep = () => process.stdout.write("\007");
// windows
var beep = () => exec(`rundll32 user32.dll,MessageBeep`);

const doSomethingSecret = () => {
  console.log("Starting");
  setTimeout(() => {
    console.log("Waiting ...");
    setTimeout(() => {
      console.log("Waiting some time more...");
      fs.writeFile("file.txt", "Sample file", (error) => {
        if (error) {
          console.log(error);
        } else {
          beep();
          console.log("file.txt created...");
          setTimeout(() => {
            beep();
            fs.unlink("file.txt", (error) => {
              if (error) {
                console.log(error);
              } else {
                console.log("File removed...");
                console.log("Sequential Execution Completed...");
              }
            });
          }, 3000);
        }
      });
    }, 2000);
  }, 1000);
};

doSomethingSecret();
