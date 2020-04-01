describe('spinDancer', function () {

  var spinDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function () {
    clock = sinon.useFakeTimers();
    spinDancer = new MakeSpinDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function () {
    console.log(spinDancer.$node);
    expect(spinDancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should create a spinDancer', function () {
    expect(spinDancer.$node.length).to.eql(1);
  });

  it('should be an object', function () {
    expect(typeof spinDancer).to.eql('object');
  });

  it('should be constructed by spinDancer', function () {
    expect(spinDancer instanceof MakeSpinDancer).to.eql(true);
  });

  describe('dance', function () {
    it('should call step at least once per second', function () {
      sinon.spy(spinDancer, 'step');
      expect(spinDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps);

      expect(spinDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(spinDancer.step.callCount).to.be.equal(2);
      expect(spinDancer.step.callCount > 2).to.be.equal(false);
    });
  });

});