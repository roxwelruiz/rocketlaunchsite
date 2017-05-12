// Channel client-side

App.room = App.cable.subscriptions.create("RoomChannel", {
  connected: function() {
    // Called when the subscription is ready for use on the server
  },

  disconnected: function() {
    // Called when the subscription has been terminated by the server
  },

  received: function(data) {
    // Called when there's incoming data on the websocket for this channel
    $('#room-messages').append(data.message);
    $(".alert.alert-info").show();
  },

  // calls the listen function in the room_channel.rb file
  listen_to_messages: function() {
  	return this.perform('listen', {
  		room_id: $("[data-room-id]").data("room-id")
  	});
  }
});

// call the listen_to_messages method when a user opens the page
$(document).on('turbolinks:load', function() {
  App.room.listen_to_messages();
});
