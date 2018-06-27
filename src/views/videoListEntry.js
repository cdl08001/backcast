var VideoListEntryView = Backbone.View.extend({
  
  initialize: function() {
    this.render();
    // debugger;
  },

  render: function() {

    this.$el.html(this.template(this.model.toJSON()));
    return this;
  },

  events: {
    'click .video-list-entry-title': 'handleTitleClick'
  },

  handleTitleClick: function() {
    this.model.select();
    //This works
  },

  template: templateURL('src/templates/videoListEntry.html')

});
