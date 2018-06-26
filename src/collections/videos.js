var Videos = Backbone.Collection.extend({
  
  model: Video,
  url: '/src/data/exampleVideoData.js',
  
  parse: function(data) {
    return window.exampleVideoData;
  }

});
