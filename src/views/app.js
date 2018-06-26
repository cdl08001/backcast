var AppView = Backbone.View.extend({

  el: '#app',

  initialize: function() {
    this.videos = new Videos(window.exampleVideoData);
    // this.videos.fetch().then(function() {
    //   console.log("success"); // >> length: 2
    // });
    this.videoListView = new VideoListView({collection: this.videos});
    this.searchView = new SearchView();
    this.videoPlayerView = new VideoPlayerView();

    this.render();

    this.$('.list').children().detach();
    this.$('.list').append(this.videoListView.$el);

    this.$('.search').children().detach();
    this.$('.search').append(this.searchView.$el);

    this.$('.player').children().detach();
    this.$('.player').append(this.videoPlayerView.$el);

    $('body').append();
  },


  render: function() {
    this.$el.html(this.template());
    return this;
  },

  template: templateURL('src/templates/app.html')

});
