var delay = (seconds) =>
  new Promise((resolves, rejects) => {
    throw new Error("Awwh");
    setTimeout(() => {
      resolves("Long delay has ended");
    }, seconds * 1000);
  });

delay(3)
  .then(console.log)
  .then(() => 42)
  .then((number) => console.log(`Hello world has choosen ${number}`))
  .catch((err) => console.log(`Error : ${err}`));
console.log("end first tick");
