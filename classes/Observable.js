const Subscribable = require("../classes/shared/Subscribable");

class Observable extends Subscribable {
  static from(...items) {
    return new Observable(observer => {
      try {
        for (let i = 0; i < items.length; i++) {
          observer.next(items[i]);
        }
      } catch (e) {
        observer.error(e);
      }

      observer.complete();
    });
  }

  map(f) {
    return new Observable(observer =>
      this.subscribe({
        next(value) {
          observer.next(f(value));
        },
        error(e) {
          observer.error(e);
        },
        complete() {
          observer.complete();
        }
      })
    );
  }

  filter(f) {
    return new Observable(observer =>
      this.subscribe({
        next(value) {
          if (!f(value)) {
            return;
          }

          observer.next(value);
        },
        error(e) {
          observer.error(e);
        },
        complete() {
          observer.complete();
        }
      })
    );
  }
}

module.exports = Observable;
