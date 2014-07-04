// var socket = io.connect('/');
var socket = io('/');

$(document).ready(function() {
  socket.on('connect', function() {

    console.log('test');
    socket.on('audio', function(data) {
      initialize(data);
    });

    socket.emit('blow', { intensityLevel: 10 });
    window.socket = socket;

  });


  // $('body').append($("canvas")).attr("id", "webGLCanvas");
  var canvas = document.createElement("canvas");
  canvas.id = "webGLCanvas";
  document.body.appendChild(canvas);

});
