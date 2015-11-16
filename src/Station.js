function Station(capacity) {
  this.noBikeError = "No Bikes available";
  this.stationFullError = "Station is full";
  this.defaultCapacity = 20;
  this.capacity = capacity || this.defaultCapacity;
}

Station.prototype.dockBike = function(bike) {
  if (this.bike) throw Error(this.stationFullError);
  this.bike = bike;
  return this.bike;
};

Station.prototype.releaseBike = function() {
  if (!this.bike) throw Error(this.noBikeError);
  return this.bike;
};
