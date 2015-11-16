describe("Station", function() {
  var station;
  var bike;

  beforeEach(function() {
    bike = {
      isWorking: function() {
      }
    };
    station = new Station();
  });

  describe("when instantiated", function() {

    it("has a #DefaultCapacity of 20 bikes", function() {
      expect(station.capacity).toEqual(station.defaultCapacity);
    });

    it("can have a specified capacity", function() {
      var station1 = new Station(40);
      expect(station1.capacity).toEqual(40);
    });
  });

  describe("#releaseBike", function() {

    it("releases a bike from the station", function() {
      spyOn(bike, 'isWorking').and.returnValue(true);
      station.dockBike(bike);
      expect(station.releaseBike()).toEqual(bike);
    });

    it("does not release a bike when there is none available", function() {
      expect(function() {station.releaseBike();}).toThrow(new Error (station.noBikeError));
    });

    it("does not release a broken bike", function() {
      spyOn(bike, 'isWorking').and.returnValue(false);
      station.dockBike(bike);
      expect(function() {station.releaseBike();}).toThrow(new Error (station.noBikeError));
    });
  });

  describe("#dockBike", function() {

    it("docks a bike into the station", function() {
      station.dockBike(bike);
      expect(station.bikes).toContain(bike);
    });

    it("shows the user the bike that has been docked", function() {
      expect(station.dockBike(bike)).toEqual(bike);
    });

    it("does not accept more bikes than the station capacity", function() {
      for(i=0; i<20; i++) {
      station.dockBike(bike);}
      expect(function() {station.dockBike(bike);}).toThrow(new Error (station.stationFullError));
    });
  });
});
