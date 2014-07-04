module.exports = {};
var io;

// You can see that we had our share of fun while writing this..
module.exports = function(server) {

  io = require('socket.io').listen(server);
  io.attach(server);

  // Abstract the queue for the wind
  var blowQueue = require('./queue')();
  // Abstract the people connected to our service
  var people = require('./people.js')();

  setInterval(function() {
    if(!blowQueue.isEmpty()) {
      for(var key in people.storage) {
        // Give back to the community
        people.get(key).emit('blowToIndividual', blowQueue.dequeue());
      }
    }
  }, 1000);

  io.on('connection', function(socket){
    people.add(socket);

    socket.on('blow', function(blowObject) {
      blowQueue.enqueue(blowObject.intensityLevel);
    });

    socket.on('disconnect', function() {
      people.remove(socket);
    });

  });
};
