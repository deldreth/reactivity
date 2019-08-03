const Fauxservable = require("../classes/Fauxservable");

const faux = new Fauxservable({
  a: 0,
  b: 0,
  c: 0
});

faux.observe("a", a => console.log(a));
faux.observe("b", (b, data) => (data.a = b + data.c));
faux.observe("c", (c, data) => (data.a = data.b + c));

faux.data.b = 2;
faux.data.c = 2;
faux.data.c = 10;
