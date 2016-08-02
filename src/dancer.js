// Creates and returns a new dancer object that can step
var makeDancer = function(top, left) {
  this.$node = $('<span class="dancer"><img src="http://i.imgur.com/vJuUEyE.png"</img></span>');
};

makeDancer.prototype.step = function(timeBetweenSteps, func) {
  var context = this;
  var runner = function() {
    func();
    context.step(timeBetweenSteps);
  };
  setTimeout(runner, timeBetweenSteps);  
};

makeDancer.prototype.setPosition = function(top, left) {
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};

