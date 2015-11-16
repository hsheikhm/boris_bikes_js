describe("Station", function() {
  var station;
  var bike;

  beforeEach(function() {
    bike = {};
    station = new Station(bike);
  });

  describe("#releaseBike", function() {

    it("releases a bike from the station", function() {
      expect(station.releaseBike()).toEqual(bike);
    });
  });




});
