function from(...items) {
  const subscribe = function(observer) {
    try {
      for (let i = 0; i < items.length; i++) {
        observer.next(items[i]);
      }
    } catch (e) {
      observer.error(e);
    }

    observer.complete();
  };

  return {
    subscribe
  };
}

module.exports = {
  from
};
