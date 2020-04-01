describe('breakDancer', function() {
  var breakdancer;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    breakDancer = new MakeBreakDancer(10, 20, timeBetweenSteps);
  });
  it('should have a jQuery $node object', function() {

    expect(breakDancer.$node).to.be.an.instanceof(jQuery);
  });
  it('should create a breakDancer', function() {
    expect(breakDancer.$node.length).to.eql(1);
  });

  it('should be an object', function() {
    expect(typeof breakDancer).to.eql('object');
  });
});