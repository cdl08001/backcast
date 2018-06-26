var VideoListView = Backbone.View.extend({
  
  initialize: function() {
    // this.collection.on('sync', this.render, this); 
    this.render(); 
  },

  render: function() {

    this.$el.children().detach();
    //need to check this eventually
    // let data = _.map(this.collection.models, this.renderVideo, this);
    this.$el.html(this.template());
    return this;
  },

  // renderVideo: function(video) {

  //   var videoView = new VideoListEntryView({model: video});
  //   // return videoView.render();
  // },

  template: templateURL('src/templates/videoList.html')

});
