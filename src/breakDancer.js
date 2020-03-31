var MakeBreakDancer = function(top, left, timeBetweenSteps) {
  MakeBallRoomDancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<span class="breakDancer"></span>');
};

MakeBreakDancer.prototype = Object.create(MakeBallRoomDancer.prototype);

MakeBreakDancer.prototype.constructor = MakeBreakDancer;

MakeBreakDancer.prototype.step = function() {
  // call the old version of step at the beginning of any call to this new version of step
  MakeDancer.prototype.step.call(this);

  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  var styleSettings = {
    top: this.top,
    left: this.left,
  };

  this.$node.css(styleSettings);
  this.$node.toggle();
};