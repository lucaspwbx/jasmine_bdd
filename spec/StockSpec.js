describe("Stock", function() {
  var stock;

  beforeEach(function() {
    stock = new Stock();
  });

  describe("when fetched", function() {
    var xhr;

    beforeEach(function() {
      var fetchRequest;
      xhr = sinon.useFakeXMLHttpRequest();

      xhr.onCreate = function (request) {
        fetchRequest = request;
      };

      stock.fetch();

      fetchRequest.respond(
        200,
        { "Content-Type": "application/json" },
        '{ "sharePrice": 20.13 }'
        );
    });

    afterEach(function() {
      xhr.restore();
    });

    it("should update its share price", function() {
      expect(stock.sharePrice).toEqual(20.13);
    });
  });

  describe("when fetched dois", function() {
    var xhr;

    beforeEach(function() {
      xhr = sinon.fakeServer.create();
      xhr.respondWith([
        200,
        { "Content-Type": "application/json" },
        '{ "sharePrice": 20.13 }'
        ]);

      stock.fetch();

      xhr.respond();
    });

    afterEach(function() {
      xhr.restore();
    });

    it("should update its share price", function() {
      expect(stock.sharePrice).toEqual(20.13);
    });
  });
});
