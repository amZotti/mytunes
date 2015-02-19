// App.js - Defines a backbone model class for the whole app.
var AppModel = Backbone.Model.extend({

  initialize: function(params){
    this.set('currentSong', new SongModel());
    this.set('songQueue', new SongQueue());

    params.library.on('enqueue', function(song) {
      var songQueue = this.get('songQueue');
      songQueue.add(song);
    }, this);

    params.library.on('dequeue', function(song) {
      var songQueue = this.get('songQueue');
      songQueue.remove(song);
    }, this);
    
    params.library.on('play', function(song){
      this.set('currentSong', song);
    }, this);
  }
});
