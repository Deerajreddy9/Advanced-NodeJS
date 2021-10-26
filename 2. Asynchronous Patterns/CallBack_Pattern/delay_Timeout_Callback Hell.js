function delay(seconds, callback) {
  setTimeout(callback, seconds * 1000);
}
// Sequential Callbacks
// long sequential, nasty callbacks are Callback Hell or Pyramid of Doom
console.log("Starting delays");
delay(2, () => {
  console.log("2 Seconds");
  delay(1, () => {
    console.log("3 Seconds");
    delay(1, () => {
      console.log("4 Seconds");
    });
  });
});
