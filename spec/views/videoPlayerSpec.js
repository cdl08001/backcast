describe ('VideoPlayerView', function() {
  var view, collection, model;

  beforeEach(function() {
    sinon.spy(VideoPlayerView.prototype, 'render');

    collection = new Videos(fakeVideoData);
    model = collection.at(0);
    view = new VideoPlayerView({ 'model': model });
    view.template = _.template('<div class="video-player-details"><%= snippet.title %></div>');

    model = collection.at(0);
    model.select();
  });

  afterEach(function() {
    VideoPlayerView.prototype.render.restore();
  });

  it('should render a video\'s content', function() {
    expect(view.el).to.match(new RegExp(model.attributes.title));
  });

  it('should re-render when an item is selected', function() {
    collection.at(0).select();
    expect(view.render).to.have.been.called;
  });

});