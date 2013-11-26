$(window).load(function() {


var isPlaying = function(audio) {return !audio.paused;}
			    var a = document.getElementById('main_audio');
			    if(!(a.play instanceof Function)){
			        a = document.getElementById('main_audio_ie8');
			        isPlaying = function(audio) {return audio.playState==2;}
			    }
			    $('#playpause').on('click', function() {
			        if (isPlaying(a)) {
			            a.pause();
			        } else {
			            a.play();
			        }
			    });
});


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



// LOADING
$(window).load(function() {
$(".loading").delay(750).fadeOut(1000);
$.fn.snow();

$('h1').css({opacity:0, marginTop: 80,}).delay(1650).animate({marginTop: 0, opacity:1}, 3000,'easeOutQiunt');

$('h2').css({marginTop: -400,opacity:0}).delay(1550).animate({marginTop:30,opacity:1}, 7600,'easeOutElastic');

});







$(window).ready(function() {


var $rota = $('.loadingspin span'),
        degree = 50,
        timer;

    function rotate() {    
        $rota.css({ transform: 'rotate(' + degree + 'deg)'});
        timer = setTimeout(function() {
            ++degree;
            rotate(); 
        },0.05);
    }
    rotate(); 





$('#parallax').mousemove(
		function(e){
			/* Work out mouse position */
			var offset = $(this).offset();
			var xPos = e.pageX - offset.left;
			var yPos = e.pageY - offset.top;

			/* Get percentage positions */
			var mouseXPercent = Math.round(xPos / $(this).width() * 100);
			var mouseYPercent = Math.round(yPos / $(this).height() * 100);

			/* Position Each Layer */
			$(this).children('img').each(
				function(){
					var diffX = $('#Parallax').width() - $(this).width();
					var diffY = $('#Parallax').height() - $(this).height();

					var myX = diffX * (mouseXPercent / 100); //) / 100) / 2;


					var myY = diffY * (mouseYPercent / 100);


					var cssObj = {
						'left': myX + 'px',
						'top': myY + 'px'
					}
					//$(this).css(cssObj);
					$(this).animate({left: myX, top: myY},{duration: 50, queue: false, easing: 'linear'});

				}
			);

		}
	);






});




