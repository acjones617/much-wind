module.exports = {};
var io;

module.exports = function(server) {

  io = require('socket.io').listen(server);
  io.attach(server);
  setInterval(function() {
    // console.log('blow');
  }, 1000);

  io.on('connection', function(socket){
    console.log('connected');
    socket.on('blow', function() {
      console.log('blowing');
    })

    socket.on('disconnect', function() {
      console.log('disconnected');
    });

    // console.log(io.sockets);

  });
};
