function Station(bike) {
  this.bike = bike;
}

Station.prototype.releaseBike = function() {
  return this.bike;
};
