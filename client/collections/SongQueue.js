// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  playFirst: function() {
      var song = this.at(0);
      song.play();
      song.dequeue();
  },

  initialize: function(){
  }

});
