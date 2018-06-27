var Videos = Backbone.Collection.extend({
  
  model: Video,
  // url: '/youtube/v3/search', //url: '/src/data/exampleVideoData.js',
  
  parse: function(data) {
    return data.items;
  },

  search: function(query) {
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
        console.log(data);
      }
    });
  }

});
