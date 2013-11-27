var scarf = $(".scarf"),
    footprint1 = $(".footprint1"),
    footprint2 = $(".footprint2"),
    footprint3 = $(".footprint3"),  
    
    tl = new TimelineMax({repeat:0});

tl.set(footprint1,  {autoAlpha:1})  
  .to([footprint1, footprint2, footprint3, scarf], 0, {  opacity: 0, autoAlpha:1, delay: 0}) 
  .to([footprint1, footprint2], 1.8, {  opacity: 1, autoAlpha:1, delay: 2.7}) 
  .to(footprint3, 1.8, {  opacity: 1, autoAlpha:1, delay: 2.7})
  .to(scarf, 1.7, {  opacity: 1, autoAlpha:1, delay:2.65})