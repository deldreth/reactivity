const Stream = require("../classes/Stream");

Stream.from(1, 2, 3, 4).subscribe({
  next(x) {
    console.log(x);
  },
  error(e) {
    console.log(e);
  },
  complete() {
    console.log("done");
  }
});
