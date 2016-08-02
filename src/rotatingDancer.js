var makeRotatingDancer = function(top, left, timeBetweenSteps) {
  makeBlinkyDancer.call(this);
};

makeRotatingDancer.prototype = Object.create(makeBlinkyDancer.prototype);
makeRotatingDancer.prototype.constructor = makeRotatingDancer;

makeRotatingDancer.prototype.step = function(time) {
  var context = this;
  var makeRotate = function() {
    // context.$node.hide();
    // context.$node.fadeIn(1000);
    // context.$node.toggle( "bounce", { times: 3 }, "slow" );
    context.$node.toggle('explode', { pieces: 16});

  };
  
  makeDancer.prototype.step.call(this, time, makeRotate);
};
