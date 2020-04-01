describe('shaqDancer', function () {
  var clock, shaqDancer;
  var timeBetweenSteps = 100;

  beforeEach(function () {
    clock = sinon.useFakeTimers();
    shaqDancer = new MakeShaqDancer(10, 20, timeBetweenSteps);
  });
  it('should have a jQuery $node object', function () {
    expect(shaqDancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should create a breakDancer', function () {
    expect(shaqDancer.$node.length).to.eql(1);
  });

  it('should be an object', function () {
    expect(typeof shaqDancer).to.eql('object');
  });

  it('should be constructed by MakeShaqDancer', function () {
    expect(shaqDancer instanceof MakeShaqDancer).to.eql(true);
  });

  describe('dance', function () {
    it('should call step at least once per second', function () {
      sinon.spy(shaqDancer, 'step');
      expect(shaqDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...

      expect(shaqDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(shaqDancer.step.callCount).to.be.equal(2);
      expect(shaqDancer.step.callCount > 2).to.be.equal(false);
    });
  });

});