var { promisify } = require("util");
/* 
    It is basically used to convert a method that 
        returns responses using a callback function to return responses in a promise object. 
*/
var delay = (seconds, callback) => {
  if (seconds > 3) {
    callback(new Error(`${seconds} is too long`));
  } else {
    setTimeout(() => {
      callback(null, `the ${seconds} delay is over`);
    }, seconds * 1000);
  }
};

var promiseDelay = promisify(delay);
promiseDelay(4)
  .then(console.log)
  .catch((error) => console.log(`error : ${error.message}`));

console.log("end first tick");
