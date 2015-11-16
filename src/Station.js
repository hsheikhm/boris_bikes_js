function Station() {
  this.NoBikeError = "No Bikes available";
}

Station.prototype.dockBike = function(bike) {
  this.bike = bike;
  return this.bike;
};

Station.prototype.releaseBike = function() {
  if (!this.bike) throw Error(this.NoBikeError);
  else {return this.bike;}
};
