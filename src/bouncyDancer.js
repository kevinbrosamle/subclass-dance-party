var makeBouncyDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
};

makeBouncyDancer.prototype = Object.create(Dancer.prototype);
makeBouncyDancer.prototype.constructor = makeBouncyDancer;

makeBouncyDancer.prototype.step = function() {
  // var context = this;
  // var makeBounce = function() {
  //   context.$node.toggle( 'bounce', { times: 3 }, 'slow' );
  // };
  
  Dancer.prototype.step.call(this);
  this.$node.toggle( 'bounce', { times: 3 }, 'slow' );
};
