var AppView = Backbone.View.extend({

  el: '#app',

  initialize: function() {
    this.videos = new Videos();
    this.videoListView = new VideoListView();
    console.log(this.videoListView);
    this.searchView = new SearchView();
    this.videoPlayerView = new VideoPlayerView();
    this.render();
    this.$('.list').children().detach();
    this.$('.list').append(this.videoListView);
    $('body').append();
  },


  render: function() {
    this.$el.html(this.template());
    return this;
  },

  template: templateURL('src/templates/app.html')

});
