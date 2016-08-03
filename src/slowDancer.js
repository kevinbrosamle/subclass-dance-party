var SlowDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.removeClass('dancer').addClass('slowDancer');
};

SlowDancer.prototype = Object.create(BlinkyDancer.prototype);
SlowDancer.prototype.constructor = SlowDancer;

SlowDancer.prototype.step = function() {  
  Dancer.prototype.step.call(this);
  this.$node.toggle();
};