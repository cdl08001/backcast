var VideoListView = Backbone.View.extend({
  
  initialize: function() {
    // this.collection.on('sync', this.render, this); 
    this.render(); 
  },

  render: function() {

    this.$el.children().detach();

    // var $list = this.$('.video-list').detach();

    // this.$el.html(this.template());
  
    this.collection.each(function(videoModel) {

      var item = new VideoListEntryView({model: videoModel});
      this.$el.append(item.$el);
    }, this);

    return this;
  },

  // renderVideo: function(video) {

  //   var videoView = new VideoListEntryView({model: video});
  //   // return videoView.render();
  // },

  template: templateURL('src/templates/videoList.html')

});
