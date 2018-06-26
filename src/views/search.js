var SearchView = Backbone.View.extend({
  
  initialization: function() {
    this.render();
  },

  render: function() {
    this.$el.html(this.template());
    debugger;
    return this;
  },

  template: templateURL('src/templates/search.html')

});
