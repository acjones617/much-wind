module.exports = function() {

  this.storage = {};

  //http://stackoverflow.com/questions/10985872/nodejs-generate-short-unique-alphanumeric
  var uniq = 100000000000;

  this.add = function(socket) {
    // console.log('adding socket');
    var key = uniq.toString(36);
    console.log(key);
    socket.__key = key;
    this.storage[key] = socket;
    // console.log(people);
    uniq++;

  };

  this.get = function(key) {
    console.log('key: ', key);
    return this.storage[key];
  };

  this.remove = function(socket) {
    delete this.storage[socket.__key];
  };

  return this;

};