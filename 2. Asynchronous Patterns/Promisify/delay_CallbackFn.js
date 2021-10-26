var delay = (seconds, callback) => {
  if (seconds > 3) {
    callback(new Error(`${seconds} is too long`));
  } else {
    setTimeout(() => {
      callback(null, `the ${seconds} delay is over`);
    }, seconds * 1000);
  }
};

delay(4, (error, message) => {
  if (error) {
    console.log(error.message);
  } else {
    console.log(message);
  }
});
console.log("end first tick");
