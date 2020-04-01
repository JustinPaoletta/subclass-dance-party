describe('ballRoomDancer', function() {

  var ballRoomDancer;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    ballRoomDancer = new MakeBallRoomDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    console.log(ballRoomDancer.$node);
    expect(ballRoomDancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should create a ballRoomDancer', function() {
    expect(ballRoomDancer.$node.length).to.eql(1);
  });

  it('should be an object', function() {
    expect(typeof ballRoomDancer).to.eql('object');
  });

});