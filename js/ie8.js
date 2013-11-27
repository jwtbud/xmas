
$(window).load(function() {

$('h2').css({opacity:0}).delay(8150).animate({opacity:1,}, 2000,'easeOutSine');
$('h1').css({opacity:0,}).delay(11750).animate({opacity:1,}, 1300,'easeOutSine');

$('.footprint1').css({opacity:0}).delay(10000).animate({opacity:1,}, 2000,'linear');
$('.footprint2').css({opacity:0,}).delay(2150).animate({opacity:1,}, 1300,'linear');
$('.footprint3').css({opacity:0,}).delay(2050).animate({opacity:1,}, 1300,'linear');

$('.scarf').css({opacity:0,}).delay(5050).animate({opacity:1,}, 1300,'linear');

});