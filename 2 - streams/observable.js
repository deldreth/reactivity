const Observable = require("../classes/Observable");

console.log("Map");
Observable.from(1, 2, 3, 4)
  .map(x => x * 3)
  .subscribe(
    x => console.log(x),
    e => {
      console.log(e);
    },
    () => {
      console.log("done");
    }
  );

console.log("\nFilter");
Observable.from(1, 2, 3, 4)
  .map(x => x * 3)
  .filter(x => x > 6)
  .subscribe(
    x => console.log(x),
    e => {
      console.log(e);
    },
    () => {
      console.log("done");
    }
  );
