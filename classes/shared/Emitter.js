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
      for (let callback of this.events[item]) {
        callback(this.data[item], this.data);
      }
    }
  }
}

module.exports = Emitter;
