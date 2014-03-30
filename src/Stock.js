function Stock () { };

Stock.prototype.fetch = function(parameters) {
  var that = this;
  var params = parameters || {};
  var success = params.success || function () {};
  var url = 'http://0.0.0.0:8000/stocks/'+that.symbol;

  $.getJSON(url, function (data) {
    that.sharePrice = data.sharePrice;
    success(that);
  });
};
