class Subscribable {
  constructor(stream) {
    this.subscription = stream;
  }

  subscribe(observer, error = null, complete = null) {
    if (typeof observer !== "object") {
      observer = {
        next: observer,
        error(e) {
          error && error(e);
        },
        complete() {
          complete && complete();
        }
      };
    }

    return this.subscription(observer);
  }
}

module.exports = Subscribable;
