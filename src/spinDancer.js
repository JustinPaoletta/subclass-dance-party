var MakeSpinDancer = function (top, left, timeBetweenSteps) {
  MakeBlinkyDancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<span class=\'spinDancer\'><img style= \'height: 220px; width: 180px;\' src=\'cat2.png\'></img></span>');
};

MakeSpinDancer.prototype = Object.create(MakeBlinkyDancer.prototype);
MakeSpinDancer.prototype.constructor = MakeSpinDancer;

MakeSpinDancer.prototype.step = function () {
  // call the old version of step at the beginning of any call to this new version of step
  MakeDancer.prototype.step.call(this);

  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.

  var styleSettings = {
    top: this.top,
    left: this.left,
  };
  $(this.$node).mouseover(function() {
    $('.spinDancer').fadeTo('slow', 0.33);
  });
  this.$node.css(styleSettings);
};