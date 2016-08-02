var makeBlinkyDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this);
};

makeBlinkyDancer.prototype = Object.create(makeDancer.prototype);
makeBlinkyDancer.prototype.constructor = makeBlinkyDancer;

makeBlinkyDancer.prototype.step = function(time) {
  var context = this;
  var makeBounce = function() {
    context.$node.toggle( 'bounce', { times: 3 }, 'slow' );
  };

  makeDancer.prototype.step.call(this, time, makeBounce);
};
