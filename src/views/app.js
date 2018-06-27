var AppView = Backbone.View.extend({

  el: '#app',

  initialize: function() {

    this.render();

    this.listenTo(this.searchView, 'click', function() {
      this.videos.search(this.searchView.input);
    }, this);

    this.listenTo(this.videoListView, 'select', function() {
      this.videoPlayerView = new VideoPlayerView({model: this.videoListView.selectedVideo});
      this.$('.player').children().detach();
      this.$('.player').append(this.videoPlayerView.$el);
    }, this);

    $('body').append();
  },


  render: function() {
    this.$el.html(this.template()); //sets up page template

    this.videos = new Videos(window.exampleVideoData);
    // this.videos.fetch().then(function() {
    //   console.log("success"); // >> length: 2
    // });
    this.videoListView = new VideoListView({collection: this.videos});
    this.videoListView.render();

    this.searchView = new SearchView();
    // debugger;
    this.videoPlayerView = new VideoPlayerView({model: this.videos.models[0]});

    this.$('.list').children().detach();
    this.$('.list').append(this.videoListView.$el);

    this.$('.search').children().detach();
    this.$('.search').append(this.searchView.$el);

    this.$('.player').children().detach();
    this.$('.player').append(this.videoPlayerView.$el);

    return this;
  },

  template: templateURL('src/templates/app.html')

});
