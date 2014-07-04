// Abstract the data manipulation
module.exports = function() {
  'use strict';

  var queue = [];

  queue.dequeue = function() {
    console.log('dequeuing');
    return this.splice(0,1)[0];
  };

  queue.isEmpty = function() {
    return this.length === 0;
  };

  queue.enqueue = queue.push;

  return queue;
};