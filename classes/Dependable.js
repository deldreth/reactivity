const Emitter = require("./shared/Emitter");

class Dependable extends Emitter {
  constructor(obj) {
    super(obj);

    let target;
    for (let item in obj) {
      let dependencies = [];
      let value = obj[item];

      let func;
      if (obj.hasOwnProperty(item)) {
        if (typeof obj[item] === "function") {
          func = obj[item];
        }
      }

      Object.defineProperty(obj, item, {
        get: () => {
          if (func) {
            if (!target) {
              target = item;
            }

            value = func.call(obj);
            target = null;
          } else {
            if (target && dependencies.indexOf(target) === -1) {
              dependencies.push(target);
            }
          }

          return value;
        },
        set: nextValue => {
          value = nextValue;

          if (dependencies.length) {
            dependencies.forEach(dependency => this.emit(dependency));
          }

          this.emit(item);
        }
      });

      // Force eval of dependencies
      obj[item];
    }
  }
}

module.exports = Dependable;
