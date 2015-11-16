function Station() {
  this.NoBikeError = "No Bikes available";
  this.StationFullError = "Station is full";
}

Station.prototype.dockBike = function(bike) {
  if (this.bike) throw Error(this.StationFullError);
  this.bike = bike;
  return this.bike;
};

Station.prototype.releaseBike = function() {
  if (!this.bike) throw Error(this.NoBikeError);
  return this.bike;
};
