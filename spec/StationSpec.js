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
  });

  describe("#dockBike", function() {
    it("docks a bike into the station", function() {
      station.dockBike(bike);
      expect(station.bike).toEqual(bike);
    });

    it("shows the user the bike that has been docked", function() {
      expect(station.dockBike(bike)).toEqual(bike);
    });
  });



});
