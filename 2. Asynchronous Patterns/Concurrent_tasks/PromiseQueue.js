import logUpdate from "log-update";
var toX = () => "X";
var delay = (seconds) =>
  new Promise((resolves, rejects) => {
    setTimeout(resolves, seconds * 1000);
  });

var tasks = [
  delay(4),
  delay(6),
  delay(4),
  delay(3),
  delay(2),
  delay(5),
  delay(7),
  delay(9),
  delay(10),
  delay(3),
  delay(5),
];

class PromiseQueue {
  constructor(promises = [], concurrentTasks = 1) {
    this.concurrent = concurrentTasks;
    this.total = promises.length;
    this.todo = promises;
    this.completed = [];
    this.running = [];
  }
  get runAnother() {
    return this.running.length < this.concurrent && this.todo.length;
  }

  graphTasks() {
    var { todo, completed, running } = this;
    logUpdate(`
      
      todo : [${todo.map(toX)}]
      running : ${running.map(toX)}
      completed : ${completed.map(toX)}

      `);
  }

  run() {
    while (this.runAnother) {
      var promise = this.todo.shift();
      promise.then(() => {
        this.completed.push(this.running.shift());
        this.graphTasks();
        this.run();
      });
      this.running.push(promise);
      this.graphTasks();
    }
  }
}

var delayQueue = new PromiseQueue(tasks, 2);
delayQueue.run();
