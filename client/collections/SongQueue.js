// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Backbone.Collection.extend({

  model: SongModel,

  initialize: function() {
    this.on('add', function() {
      if (this.length === 1) {
        this.playFirst();
      }
    });
    this.on('ended', function() {
      this.remove(this.models[0]);
      if (this.length > 0) {
        this.playFirst();
      }
    });
    this.on('dequeue', function() {
      var toDelete = this.models[0];
      this.remove(toDelete);
    });
    this.on('enqueue', function() {
      this.models.push();
    });
    this.on('addMe', function(e) {
      
      console.log(e);
    }, this);
  },
  playFirst: function() {
    // debugger;
    this.models[0].play();
  }
});