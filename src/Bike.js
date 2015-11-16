function Bike() {
  this._working = true;
}

Bike.prototype.isWorking = function() {
  return this._working;
};

Bike.prototype.broken = function() {
  this._working = false;
};
