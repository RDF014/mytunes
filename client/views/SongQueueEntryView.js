// SongQueueEntryView.js - Defines a backbone view class for the song queue entries.
var SongQueueEntryView = Backbone.View.extend({
  tagName: 'tr',

  template: _.template('<td>(<%= artist %>)</td><td><%= title %></td>'),

  events: {
    'click': function() {
      this.model.enqueue();
    }
  },

  render: function() {
    var toAdd = this.$el.html(this.template(this.model.attributes));
    this.$el.find('.Que').append(toAdd);
  }
});
