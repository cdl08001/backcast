var Videos = Backbone.Collection.extend({
  
  model: Video,
  // url: '/youtube/v3/search', //url: '/src/data/exampleVideoData.js',
  
  parse: function(data) {
    return data.items;
  },

  updateCollection: function(data) {
    this.reset();
    this.add(data.items);
    console.log('success!', this.models);
  },

  search: function(query) {
    let self = this;
    $.ajax({
      url: 'https://www.googleapis.com/youtube/v3/search',
      type: 'GET',
      // data: JSON.stringify(message),
      contentType: 'application/json',
      data: {'maxResults': '5',
        'key': window.YOUTUBE_API_KEY,
        'part': 'snippet',
        'q': query,
        'type': 'video',
        'videoEmbeddable': 'true'},
      success: function (data) {
        self.updateCollection(data);
        self.trigger('sync');
      }
    });
  }

});
