$(document).on('turbolinks:load ajaxSuccess', function() {
	// code for the index's alerts and notices
  $(".modified-alert").slideDown(500).delay(10000).slideUp(500);

  // this will bring you down to the last message of the chatroom when loading
  // or when you add a new message
  if ( $('#room-messages').length ) {
    var completeCalled = false;
    $("html, body").animate(
      { scrollTop: $('#room-messages').prop('scrollHeight') },
      { complete : function(){
        if(!completeCalled)
          completeCalled = true;
        }
      }
    );
  }

});

$(document).on({
    mouseenter: function () {
      $(this).attr("src", "/assets/rocket-mini_25_b.png");
    },
    mouseleave: function () {
      $(this).attr("src", "/assets/rocket-mini_25_w.png");
    }
}, "#minirocketimage");