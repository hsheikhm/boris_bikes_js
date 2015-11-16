describe("Bike", function() {
  var bike;

  beforeEach(function() {
    bike = new Bike();
  });

  describe("#isWorking", function() {

    it("tells user if a bike is working", function() {
      expect(bike.isWorking()).toEqual(true);
    });
  });

  describe("#broken", function() {

    it("reports the bike as broken", function() {
      bike.broken();
      expect(bike.isWorking()).toEqual(false);
    });
  });


});
