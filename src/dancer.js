var MakeDancer = function (top, left, timeBetweenSteps) {

  // use jQuery to create an HTML <span> tag
  this.$node = $('<span class="dancer"></span>');

  // now that we have defined the dancer object, we can start setting up important parts of it by calling the methods we wrote
  // this one sets the position to some random default point within the body
  this.top = top;
  this.left = left;
  this.timeBetweenSteps = timeBetweenSteps;
  this.step();
  this.setPosition();
  this.interval();
};


MakeDancer.prototype.step = function () {
  // the basic dancer doesn't do anything interesting at all on each step,
  // it just schedules the next step
  let current = this;
  setTimeout(function () {
    current.step();
  }, current.timeBetweenSteps);
};


MakeDancer.prototype.setPosition = function () {
  // Use css top and left properties to position our <span> tag
  // where it belongs on the page. See http://api.jquery.com/css/
  //
  var styleSettings = {
    top: this.top,
    left: this.left,
  };

  this.$node.css(styleSettings);
};

MakeDancer.prototype.getDistance = function () {

  if (window.dancers.length > 1) {
    for (let i = 0; i < window.dancers.length - 1; i++) {
      let a = window.dancers[i].top;
      let b = window.dancers[i].left;

      let a2 = window.dancers[i + 1].top;
      let b2 = window.dancers[i + 1].left;

      let aSide = a - a2;
      let bSide = b - b2;

      let aSquare = aSide * aSide;
      let bSquare = bSide * bSide;

      let cSquare = aSquare + bSquare;

      let distance = Math.sqrt(cSquare);

      if (distance < 250) {
        window.dancers[i].top = 3000;
      }
      console.log(distance);
    }
  }

};

MakeDancer.prototype.interval = function () {
  let current = this;
  setTimeout(function () {
    current.getDistance();
  }, 5000);
};

