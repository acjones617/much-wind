// var socket = io.connect('/');
var socket = io('/');

$(document).ready(function() {
  socket.on('connect', function() {

    console.log('test');
    socket.on('audio', function(data) {
      initialize(data);
    });

    socket.emit('blow', { intensityLevel: 10 });
    socket.on('blowToIndividual', function(intensity) {
      console.log('intensity: ', intensity);
      window.attractor.position({
        x: 530,
        y: 173
      });
      window.world.add(window.attractor);
    });
    window.socket = socket;

  });


  // $('body').append($("canvas")).attr("id", "webGLCanvas");
  var canvas = document.createElement("canvas");
  canvas.id = "webGLCanvas";
  document.body.appendChild(canvas);

});
