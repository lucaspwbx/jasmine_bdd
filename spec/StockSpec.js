describe("Stock", function() {
  var stock;

  beforeEach(function() {
    stock = new Stock();
  });

  describe("when fetched", function() {
    var fetched = false;

    beforeEach(function() {
      stock.fetch({
        success: function () {
          fetched = true;
        }
      });                

      waitsFor(function (argument) {
        return fetched;
      }, 'Timeout fetching stock data', 2000);
    });

    it("should update its share price", function() {
      expect(stock.sharePrice).toEqual(20.18);
    });
  });
});
