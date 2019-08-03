const Fauxservable = require("../classes/Fauxservable");

const faux = new Fauxservable({
  item: "Great string!"
});

faux.observe("item", item => console.log(item));

faux.data.item = "A different string?";
