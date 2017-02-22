// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({

  tagName: 'table',
  className: 'Que',

  initialize: function() {
    this.render();
    this.collection.on('add', function() {
      SongQueueEntryView.prototype.render();
    });
  },

  render: function() {
    this.$el.children().detach();

    this.$el.html('<th>Song Que</th>').append();


    return this.$el;
  }

});
