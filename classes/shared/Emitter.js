class Emitter {
  constructor(obj) {
    this.events = {};
    this.data = obj;
  }

  observe(item, callback) {
    if (!this.events[item]) {
      this.events[item] = [];
    }

    this.events[item].push(callback);
  }

  emit(item) {
    if (this.events[item] && this.events[item].length > 0) {
      this.events[item].forEach(callback =>
        callback(this.data[item], this.data)
      );
    }
  }
}

module.exports = Emitter;
