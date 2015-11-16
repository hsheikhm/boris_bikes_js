function Station() {
}

Station.prototype.dockBike = function(bike) {
  this.bike = bike;
  return this.bike;
};

Station.prototype.releaseBike = function() {
  return this.bike;
};
