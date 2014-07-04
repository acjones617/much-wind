var express = require('express');
var app = express();
// app.use(require('body-parser')());
// var fs = require('fs');

var path = require('path');

app.use('/images', express.static(path.resolve(__dirname + '/public/images')));
app.use('/javascript', express.static(path.resolve(__dirname + '/public/javascript')));
app.use('/fonts', express.static(path.resolve(__dirname + '/public/fonts')));
app.use('/stylesheets', express.static(path.resolve(__dirname + '/public/stylesheets')));

app.engine('jade', require('jade').__express);

app.get( '/*', function( req, res, next ) {
  // res.sendfile(path.resolve(__dirname + '/public/index.html'));
  res.render(__dirname + '/public/index.jade');
});

app.listen(process.env.PORT || 9000);