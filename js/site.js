$(function() {
			causeRepaintsOn = $("h1, h2, h3, p, div");
			$(window).resize(function() {
				causeRepaintsOn.css("z-index", 1);
			});
});


$(document).ready(function(){
 $('.play').on('click', function() {
  $(this).toggleClass('off');
 });
});


