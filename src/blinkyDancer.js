var makeBlinkyDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this);
};

makeBlinkyDancer.prototype = Object.create(makeDancer.prototype);
makeBlinkyDancer.prototype.constructor = makeBlinkyDancer;

makeBlinkyDancer.prototype.step = function(time) {
  var context = this;
  var makeBlink = function() {
    context.$node.toggle();
  };
  
  makeDancer.prototype.step.call(this, time, makeBlink);
};
