var makeExplodyDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
};

makeExplodyDancer.prototype = Object.create(makeBlinkyDancer.prototype);
makeExplodyDancer.prototype.constructor = makeExplodyDancer;

makeExplodyDancer.prototype.step = function() {
  var context = this;
  var makeRotate = function() {
    context.$node.toggle('explode', { pieces: Math.pow(4, 2)});
  };
  
  Dancer.prototype.step.call(this, makeRotate);
};