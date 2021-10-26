var delay = (seconds) =>
  new Promise((resolves, rejects) => {
    setTimeout(() => {
      resolves("Long delay has ended");
    }, seconds * 1000);
  });

delay(1).then((message) => console.log(message));
// As console.log default takes first argument
delay(2).then(console.log);
// Chaining .then
delay(3)
  .then(console.log)
  .then(() => 42)
  .then((number) => console.log(`Hello world has choosen ${number}`));
console.log("end first tick");
