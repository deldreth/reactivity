const Dependable = require("../classes/Dependable");

const faux = new Dependable({
  b: 0,
  c: 0,
  a() {
    return this.b + this.c;
  }
});

faux.observe("a", a => console.log(`a = ${a}`));

faux.data.b = 1; // 1 + 0
faux.data.b = 2; // 2 + 0
faux.data.c = 10; // 2 + 10
faux.data.c = -2; // 2 + -2
