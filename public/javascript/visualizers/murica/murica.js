// var socket = io.connect('/');
var socket = io('/');

$(document).ready(function() {
  socket.on('connect', function() {

    socket.on('audio', function(data) {
      initialize(data);
    });

    socket.emit('blow', { intensityLevel: 10 });
    socket.on('blowToIndividual', function(intensity) {
      fire();
    });
    window.socket = socket;

  });


  // $('body').append($("canvas")).attr("id", "webGLCanvas");
  var canvas = document.createElement("canvas");
  canvas.id = "webGLCanvas";
  document.body.appendChild(canvas);

});
