(function ($, Investment, Stock) {
  function NewInvestmentView (params) {
    this.$el = $(params.selector);
  };

  this.NewInvestmentView = NewInvestmentView;
}) (jQuery, Investment, Stock);

NewInvestmentView.prototype = {
  $: function () {
    return this.$el.find.apply(this.$el, arguments);
  },
  getSymbolInput: function () {
    return this.$('.new-investment-stock-symbol');
  }
};
