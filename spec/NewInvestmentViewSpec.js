describe("NewInvestmentView", function() {
  var view;
  beforeEach(function() {
    loadFixtures('NewInvestmentView.html');
    view = new NewInvestmentView({selector: '#new-investment'});
  });

  it("should expose a property with its DOM element", function() {
    expect(view.$el).toExist();
  });

  it("should have an empty stock symbol", function() {
    expect(view.getSymbolInput()).toHaveValue('');
  });

  it("should allow the input of the stock symbol", function() {
    expect(view.$el.find('.new-investment-stock-symbol')).toBe('input[type=text]');
  });

  it("should allow the input of shares", function() {
    expect(view.$el).toContainHtml('<input type="number" class="new-investment-shares" name="shares" value="0">');
  });

  it("should allow the input of the share price", function() {
    expect(view.$el).toContain('input[type=number].new-investment-share-price');
  });

  it("should have an empty stock symbol", function() {
    expect(view.$el.find('.new-investment-stock-symbol')).toHaveValue('');
  });

  it("should have its shares value to zero", function() {
    expect(view.$el.find('.new-investment-shares')).toHaveValue('0');
  });

  it("should have its share price value to zero", function() {
    expect(view.$el.find('.new-investment-share-price')).toHaveAttr('value', '0');
  });
});
