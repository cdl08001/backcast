var VideoListEntryView = Backbone.View.extend({
  
  initialize: function() {
    this.render();
    // videoView.$('.video-list-entry-title').on('click', function() { console.log('test'); }, this);
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
  },

  template: templateURL('src/templates/videoListEntry.html')

});
