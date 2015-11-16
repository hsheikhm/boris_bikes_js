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


});
