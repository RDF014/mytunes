// Songs.js - Defines a backbone collection class for songs.
var Songs = Backbone.Collection.extend({

  model: SongModel,

  initialize: function() {
    var newSongs = [];
    var context = this;
    $.ajax({
      url: 'http://parse.sfm6.hackreactor.com/mytunes/classes/songs',
      type: 'GET',
      contentType: 'application/json',
      success: function (data) {
        data.results.forEach(function(value) {
          context.add({'url': value.url, 'title': value.title, 'artist': value.artist});
        });
        context.trigger('fetchDone');
      },
      error: function (data) {
      // See: https://developer.mozilla.org/en-US/docs/Web/API/console.error
        console.error('chatterbox: Failed to receive message', data);
      }
    });
  }
});

