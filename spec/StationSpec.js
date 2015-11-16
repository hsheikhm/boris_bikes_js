describe("Station", function() {
  var station;
  var bike;

  beforeEach(function() {
    bike = {};
    station = new Station(bike);
  });

  describe("#releaseBike", function() {

    it("releases a bike from the station", function() {
      station.dockBike(bike);
      expect(station.releaseBike()).toEqual(bike);
    });

    it("does not release a bike when there is none available", function() {
      expect(function() {station.releaseBike()}).toThrow(new Error (station.NoBikeError));
    });
  });

  describe("#dockBike", function() {

    it("docks a bike into the station", function() {
      station.dockBike(bike);
      expect(station.bike).toEqual(bike);
    });

    it("shows the user the bike that has been docked", function() {
      expect(station.dockBike(bike)).toEqual(bike);
    });

    it("does not accept more bikes than the station capacity", function() {
      station.dockBike(bike);
      expect(function() {station.dockBike(bike)}).toThrow(new Error (station.StationFullError));
    });
  });



});
