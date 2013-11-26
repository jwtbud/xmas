var pagenumberone = $("#number-one"),
    slidecontentone = $("#content-one"),

  
    
    tl = new TimelineMax({repeat:-1});


tl.set(slidecontentone,  {autoAlpha:1})
 
  .from(slidecontentone, 1.2, {bottom:-100, autoAlpha:0}) 
  .from(pagenumberone, 1, {bottom:-100, opacity: 0, autoAlpha:0}, "-=1.5")
  


$("#seek-slide1").click(function() {
    tl.seek(1);
});
		  
$("#seek-slide2").click(function() {
		tl.seek(9);
});

$("#seek-slide3").click(function() {
    tl.seek(17);
});

$("#seek-slide4").click(function() {
    tl.seek(22);
});

$("#seek-slide5").click(function() {
    tl.seek(27);
});


$("#seek-slide6").click(function() {
    tl.seek(32);
});

$("#seek-slide7").click(function() {
    tl.seek(41);
});




		
$("#pause").click(function() {
		tl.pause();
});
		
$("#reverse").click(function() {
		tl.reverse();
});
		
$("#resume").click(function() {
		tl.resume();	
});
		
$("#restart").click(function() {
		tl.restart();
});

$("#next").click(function() {
    tl.next();
});
	
