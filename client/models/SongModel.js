// SongModel.js - Defines a backbone model class for songs.
var SongModel = Backbone.Model.extend({

  defaults: {
    'plays': 0
  },

  play: function(){
    // Triggering an event here will also trigger the event on the collection
    this.trigger('play', this);
  },

  enqueue: function() {
    this.trigger('enqueue', this);
  },

  dequeue: function() {
    this.trigger('dequeue', this);
  },

  ended: function() {
    this.trigger('ended', this);
  },

  nextSong: function() {
    this.trigger('nextSong', this);
  },

  incrementPlays: function() {
    var numberOfPlays = this.get('plays');
    this.set('plays', numberOfPlays += 1);
  },
});
