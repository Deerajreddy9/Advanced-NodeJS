var delay = (seconds) =>
  new Promise((resolves, rejects) => {
    setTimeout(resolves, seconds * 1000);
  });

delay(1).then(() => console.log("Long Delay has ended"));
console.log("end first tick");
