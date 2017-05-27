$(document).on('turbolinks:load ajaxSuccess', function() {
	// code for the index's alerts and notices
  $(".modified-alert").slideDown(500).delay(10000).slideUp(500);
});