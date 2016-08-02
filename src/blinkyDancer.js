var makeBlinkyDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
};

makeBlinkyDancer.prototype = Object.create(Dancer.prototype);
makeBlinkyDancer.prototype.constructor = makeBlinkyDancer;

makeBlinkyDancer.prototype.step = function() {
  // var context = this;
  // var makeBounce = function() {
  //   context.$node.toggle();
  // };

  Dancer.prototype.step.call(this);
  this.$node.toggle();
};
