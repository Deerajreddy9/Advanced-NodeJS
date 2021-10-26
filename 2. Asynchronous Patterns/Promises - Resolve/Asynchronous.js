function delay(seconds, callback) {
  setTimeout(callback, seconds * 1000);
}

delay(1, () => {
  console.log("Long Delay has ended");
});
console.log("end first tick");
