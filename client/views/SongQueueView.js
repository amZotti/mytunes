// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({
  tagName: "ul",

  initialize: function() {
    this.render();
  },

  render: function(){
    this.$el.children().detach();

    this.$el.html(
      this.collection.map(function(song){
        return new SongQueueEntryView({model: song}).render();
      })
    );
  }

});
