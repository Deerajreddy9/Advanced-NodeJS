function hideString(str, done) {
  process.nextTick(() => {
    // Tells nodeJs to execute in Next Loop ie will not execute Synchronously
    done(str.replace(/[a-zA-Z]/g, "X"));
  });
}

hideString("Hello World", (hidden) => {
  console.log(hidden);
});
console.log("end");
