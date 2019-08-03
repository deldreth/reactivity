const Emitter = require("./shared/Emitter");

class Fauxservable extends Emitter {
  constructor(obj) {
    super(obj);

    for (let item in obj) {
      let value = obj[item];

      Object.defineProperty(obj, item, {
        get: () => value,
        set: nextValue => {
          value = nextValue;
          this.emit(item);
        }
      });
    }
  }
}

module.exports = Fauxservable;
