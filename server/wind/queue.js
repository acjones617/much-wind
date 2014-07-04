// Abstract the data manipulation
module.exports = function() {
  'use strict';
  
  var queue = [];

  queue.dequeue = function() {
    this.splice(0,1);
  };

  queue.isEmpty = function() {
    return this.length === 0;
  };

  queue.enqueue = queue.push;

  return queue;
};