const Observable = require("zen-observable");

Observable.of(1, 2, 3, 4).subscribe(x => console.log(x));

Observable.of(1, 2, 3, 4)
  .map(x => x * 100)
  .subscribe(x => console.log(x));

Observable.from([1, 2, 3, 4])
  .reduce((prev, cur) => prev + cur)
  .subscribe(x => console.log(x));

Observable.of(1, 2, 3)
  .concat(Observable.of(4, 5, 6), Observable.of(7, 8, 9))
  .subscribe(x => {
    console.log(x);
  });
