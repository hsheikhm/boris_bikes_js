function Station(bike) {
  this.bike = typeof bike === 'undefined' ? new Bike() : bike;
}

Station.prototype.releaseBike = function() {
  return this.bike;
};
