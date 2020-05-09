function init(){
  if (location.href == 'http://127.0.0.1:5501/index.html#hero'){
    document.querySelector(".welcome").remove();
    document.querySelector(".intro").remove();
    playMainAnimation()
  }
  if (location.href == 'http://127.0.0.1:5501/index.html#vorteile-section'){
    document.querySelector(".welcome").remove();
    document.querySelector(".intro").remove();
    playMainAnimation()
    setTimeout(() => {document.querySelector('#vorteile-section').scrollIntoView()},100);
  }
  if (location.href == 'http://127.0.0.1:5501/index.html#contact-section'){
    document.querySelector(".welcome").remove();
    document.querySelector(".intro").remove();
    playMainAnimation()
    setTimeout(() => {document.querySelector('#contact-section').scrollIntoView()},100);
  }
}



function firstinit(){
  var tl1 = new TimelineMax()
  var tl2 = new TimelineMax()
  var tl3 = new TimelineMax()
  var tl4 = new TimelineMax()
  var tl5 = new TimelineMax()
  const controllernew = new ScrollMagic.Controller()

  tl1.from(".introductory-text", .6, {x:100, opacity:0})
  const scene1 = new ScrollMagic.Scene({
    triggerElement: ".introductory-text",
    reverse:false
  }).setTween(tl1).addTo(controllernew);

  tl2.from(".pph", .6, {x:200, opacity:0})
  tl2.from(".ppsh", .6, {x:-200, opacity:0}, "=-.2")
  tl2.from(".pphs", .6, {y:200, opacity:0}, "=-.2")
  tl2.from(".pricing-preview-element:nth-of-type(1)", .3, {scale: 1.3, opacity:0})
  tl2.from(".pricing-preview-element:nth-of-type(2)", .3, {scale: 1.3, opacity:0}, "=-.2")
  tl2.from(".pricing-preview-element:nth-of-type(3)", .3, {scale: 1.3, opacity:0}, "=-.2")
  tl2.from(".pricing-preview-element:nth-of-type(4)", .3, {scale: 1.3, opacity:0}, "=-.2")
  tl2.from(".preview-btn", .4, {scale: 0}, "=-.4")
  const scene2 = new ScrollMagic.Scene({
    triggerElement: ".pricing-preview",
    reverse:false
  }).setTween(tl2).addTo(controllernew);

  tl3.from(".ph", .6, {x:200, opacity:0})
  tl3.from(".psh", .6, {x:-200, opacity:0}, "=-.2")
  tl3.from(".phs", .6, {y:200, opacity:0}, "=-.2")
  tl3.from(".process-column:nth-of-type(1)", .4, {x:-200, opacity:0})
  tl3.from(".process-column:nth-of-type(2)", .4, {y:200, opacity:0}, "=-.2")
  tl3.from(".process-column:nth-of-type(3)", .4, {x:200, opacity:0}, "=-.2")
  const scene3 = new ScrollMagic.Scene({
    triggerElement: ".process-section",
    reverse:false
  }).setTween(tl3).addTo(controllernew);

  tl4.from(".vh", .6, {x:200, opacity:0})
  tl4.from(".vsh", .6, {x:-200, opacity:0}, "=-.2")
  tl4.from(".vhs", .6, {y:200, opacity:0}, "=-.2")
  tl4.from(".grid-element:nth-of-type(1)", .5, {x:-200, opacity:0})
  tl4.from(".grid-element:nth-of-type(2)", .5, {x:200, opacity:0}, "=-.5")
  tl4.from(".grid-element:nth-of-type(3)", .5, {x:-200, opacity:0})
  tl4.from(".grid-element:nth-of-type(4)", .5, {x:200, opacity:0}, "=-.5")
  tl4.from(".grid-element:nth-of-type(5)", .5, {x:-200, opacity:0})
  tl4.from(".grid-element:nth-of-type(6)", .5, {x:200, opacity:0}, "=-.5")
  const scene4 = new ScrollMagic.Scene({
    triggerElement: "#vorteile-section",
    reverse:false
  }).setTween(tl4).addTo(controllernew);

  tl5.from(".ch", .6, {x:200, opacity:0})
  tl5.from(".csh", .6, {x:-200, opacity:0}, "=-.2")
  tl5.from(".chs", .6, {y:200, opacity:0}, "=-.2")
  tl5.from(".ctti", .6, {scale: 1.1, opacity:0})
  tl5.from(".ctte", .4, {y:100, opacity:0})
  tl5.from(".contact-btn", .4, {scale: 0})
  tl5.from(".contact-element", .4, {opacity:0})
  const scene5 = new ScrollMagic.Scene({
    triggerElement: "#contact-section",
    reverse:false
  }).setTween(tl5).addTo(controllernew);
}









var doneTheStuff;
function whatever() {
  if (!doneTheStuff) {
    doneTheStuff = true;
    var tl8 = new TimelineMax()
    var tl9 = new TimelineMax()
    var tl10 = new TimelineMax()
    const controller2 = new ScrollMagic.Controller()

    tl8.from(".ah", .6, {x:200, opacity:0})
    tl8.from(".ash", .6, {x:-200, opacity:0}, "=-.2")
    tl8.from(".ahs", .6, {y:200, opacity:0}, "=-.2")
    tl8.from(".aht", .6, {x:100, opacity:0}, "=-.2")
    tl8.from(".pricing-table", .6, {y:100, opacity:0}, "=-.2")
    const scene8 = new ScrollMagic.Scene({
      triggerElement: "#pricing-section",
      reverse:false
    }).setTween(tl8).addTo(controller2);

    tl9.from(".eh", .6, {x:200, opacity:0})
    tl9.from(".esh", .6, {x:-200, opacity:0}, "=-.2")
    tl9.from(".ehs", .6, {y:200, opacity:0}, "=-.2")
    tl9.from(".eht", .6, {x:100, opacity:0}, "=-.2")
    tl9.from(".extra-element:nth-of-type(1)", .4, {scale: 1.2, opacity:0})
    tl9.from(".extra-element:nth-of-type(4)", .4, {scale: 1.2, opacity:0}, "=-.4")
    tl9.from(".extra-element:nth-of-type(3)", .4, {scale: 1.2, opacity:0})
    tl9.from(".extra-element:nth-of-type(6)", .4, {scale: 1.2, opacity:0}, "=-.4")
    tl9.from(".extra-element:nth-of-type(2)", .4, {scale: 1.2, opacity:0})
    tl9.from(".extra-element:nth-of-type(5)", .4, {scale: 1.2, opacity:0}, "=-.4")
    const scene9 = new ScrollMagic.Scene({
      triggerElement: ".extras-section",
      reverse:false
    }).setTween(tl9).addTo(controller2);

    tl10.from(".tti", .4, {x:200, opacity:0})
    tl10.from(".tte", .4, {x:-200, opacity:0}, "=-.2")
    tl10.from(".translation-btn", .4, {y:200, opacity:0}, "=-.2")
    const scene10 = new ScrollMagic.Scene({
      triggerElement: ".tti",
      reverse:false
    }).setTween(tl10).addTo(controller2);
  }
}

function scrolltop(){
  window.scrollTo(0,0)
}