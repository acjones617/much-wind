var fire = function() {
  var cracker = document.createElement('div');
  cracker.className = 'firework';
  var randomX = parseInt(Math.random() * window.innerWidth);
  cracker.offsetLeft = randomX;
  cracker.offsetTop = window.innerHeight;

  $('body').append(cracker);
  setTimeout(function() {
    var x = 0;

    setInterval(function() {
      cracker.offsetLeft = x;
      cracker.offsetTop = 100 - Math.pow(x, 2);
      x++;
    }, 50)


    $('.firework').remove(cracker);

  }, 6000)


}