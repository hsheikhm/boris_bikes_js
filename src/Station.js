function Station(capacity) {
  this.noBikeError = "No Bikes available";
  this.stationFullError = "Station is full";
  this.defaultCapacity = 20;
  this.capacity = capacity || this.defaultCapacity;
  this.bikes = [];
}

Station.prototype.dockBike = function(bike) {
  if (this.isFull()) throw Error(this.stationFullError);
  this.bikes.push(bike);
  return bike;
};

Station.prototype.releaseBike = function() {
  var working_bikes = this.bikes.filter(function(bike) {
    if (bike.isWorking()) {return bike;}
  });
  if (working_bikes.length === 0) throw Error(this.noBikeError);
  else {return working_bikes[0];}
};

Station.prototype.isFull = function() {
  return this.bikes.length >= this.capacity;
};

Station.prototype.isEmpty = function() {
  return this.bikes.length === 0;
};
