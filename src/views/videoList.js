var VideoListView = Backbone.View.extend({
  
  initialize: function() {

    this.listenTo(this.collection, 'sync', this.render); 
    // this.render(); 
  },
    
  selectedVideo: undefined,

  render: function() {

    this.$el.children().detach();

    // var $list = this.$('.video-list').detach();

    // this.$el.html(this.template());
    this.collection.each(function(videoModel) {
      this.listenTo(videoModel, 'select', function() {
        this.selectedVideo = videoModel;
        this.trigger('select', this);
      });
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
