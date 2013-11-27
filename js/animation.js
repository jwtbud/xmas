

var scarf = $(".scarf"),
    footprint1 = $(".footprint1"),
    footprint2 = $(".footprint2"),
    footprint3 = $(".footprint3"),

    step1 = $(".step1"),
    step2 = $(".step2"),
    step3 = $(".step3"),
    step4 = $(".step4"),
    step5 = $(".step5"),
    step6 = $(".step6"),
    step7 = $(".step7"),
    step8 = $(".step8"),  
    
    tl = new TimelineMax({repeat:0});

tl.set(footprint1,  {autoAlpha:1})  
  .to([footprint1, footprint2, footprint3, scarf], 0, {  opacity: 0, autoAlpha:1, delay: 0})
  .to([step1, step2, step3, step4, step5, step6, step7], 0, {  opacity: 0, autoAlpha:1, delay: 0})
  .to([footprint1, footprint2], 1.8, {  opacity: 1, autoAlpha:1, delay: 3}) 


  .to(step1, 0.5, { opacity: 1, autoAlpha:1, delay: 0.2})
  .to(step2, 0.5, { opacity: 1, autoAlpha:1, delay: 0.2})
  .to(step3, 0.5, { opacity: 1, autoAlpha:1, delay: 0.2})
  .to(step4, 0.5, { opacity: 1, autoAlpha:1, delay: 0.2})
  .to(step5, 0.5, {  opacity: 1, autoAlpha:1, delay: 0.2})
  .to(step6, 0.5, {  opacity: 1, autoAlpha:1, delay: 0.2})
  .to(step7, 0.5, {  opacity: 1, autoAlpha:1, delay: 0.2})
  .to(step8, 0.5, {  opacity: 1, autoAlpha:1, delay: 0.2})

 
  // .to(footprint3, 1.8, {  opacity: 1, autoAlpha:1, delay: 2.7})
  .to(scarf, 1.7, {  opacity: 1, autoAlpha:1, delay:2.65})