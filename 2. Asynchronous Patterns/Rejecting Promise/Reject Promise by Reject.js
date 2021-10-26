var delay = (seconds) =>
  new Promise((resolves, rejects) => {
    if (seconds > 3) {
      rejects(new Error(`${seconds} is too long`));
    }
    setTimeout(() => {
      resolves("Long delay has ended");
    }, seconds * 1000);
  });

delay(4)
  .then(console.log)
  .then(() => 42)
  .then((number) => console.log(`Hello world has choosen ${number}`))
  .catch((err) => console.log(`Error : ${err}`));
console.log("end first tick");
