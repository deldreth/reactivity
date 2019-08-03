const Dependable = require("../classes/Dependable");

const faux = new Dependable({
  b: 0,
  c: 0,
  a() {
    return this.b + this.c;
  },
  d() {
    return this.a * this.b;
  }
});

faux.observe("a", a => console.log("a", a));
faux.observe("d", d => console.log("d", d));

faux.data.b = 2;
faux.data.c = 2;
faux.data.c = 10;
