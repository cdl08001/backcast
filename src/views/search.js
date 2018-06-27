var SearchView = Backbone.View.extend({
  
  initialize: function() {
    this.render();
    // this.$('.btn').on('click', function() {
    //   console.log('button has been clicked');
    // });
  },

  events: {
    'click .btn': 'handleButtonClick'
  },

  handleButtonClick: function() {
    this.trigger('click');
    console.log('button has been clicked');
    //This works
  },

  render: function() {
    this.$el.html(this.template());
    return this;
  },

  template: templateURL('src/templates/search.html')

});
