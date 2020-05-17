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

  tl1.from(".introductory-text", .6, {opacity:0})
  tl1.from(".introduction-wrapper>img", .6, {opacity:0}, "=-.6")
  const scene1 = new ScrollMagic.Scene({
    triggerElement: ".introductory-text",
    reverse:false
  }).setTween(tl1).addTo(controllernew);

  tl2.from(".pph", .6, {opacity:0})
  tl2.from(".ppsh", .6, {opacity:0}, "=-.6")
  tl2.from(".pphs", .6, {opacity:0}, "=-.6")
  tl2.from(".pricing-preview-element:nth-of-type(1)", .7, {opacity:0})
  tl2.from(".pricing-preview-element:nth-of-type(2)", .7, {opacity:0}, "=-.6")
  tl2.from(".pricing-preview-element:nth-of-type(3)", .7, {opacity:0}, "=-.6")
  tl2.from(".pricing-preview-element:nth-of-type(4)", .7, {opacity:0}, "=-.6")
  tl2.from(".preview-btn", .6, {opacity: 0}, "=-.3")
  const scene2 = new ScrollMagic.Scene({
    triggerElement: ".pricing-preview",
    reverse:false
  }).setTween(tl2).addTo(controllernew);

  tl3.from(".ph", .6, {opacity:0})
  tl3.from(".psh", .6, {opacity:0}, "=-.6")
  tl3.from(".phs", .6, {opacity:0}, "=-.6")
  tl3.from(".process-column", .6, {opacity:0})
  const scene3 = new ScrollMagic.Scene({
    triggerElement: ".process-section",
    reverse:false
  }).setTween(tl3).addTo(controllernew);

  tl4.from(".vh", .6, {opacity:0})
  tl4.from(".vsh", .6, {opacity:0}, "=-.6")
  tl4.from(".vhs", .6, {opacity:0}, "=-.6")
  tl4.from(".grid-element:nth-of-type(1)", .6, {opacity:0}, "=-.5")
  tl4.from(".grid-element:nth-of-type(2)", .6, {opacity:0}, "=-.5")
  tl4.from(".grid-element:nth-of-type(3)", .6, {opacity:0}, "=-.5")
  tl4.from(".grid-element:nth-of-type(4)", .6, {opacity:0}, "=-.5")
  tl4.from(".grid-element:nth-of-type(5)", .6, {opacity:0}, "=-.5")
  tl4.from(".grid-element:nth-of-type(6)", .6, {opacity:0}, "=-.5")
  const scene4 = new ScrollMagic.Scene({
    triggerElement: "#vorteile-section",
    reverse:false
  }).setTween(tl4).addTo(controllernew);

  tl5.from(".ch", .6, {opacity:0})
  tl5.from(".csh", .6, {opacity:0}, "=-.6")
  tl5.from(".chs", .6, {opacity:0}, "=-.6")
  tl5.from(".ctti", .6, {opacity:0}, "=-.3")
  tl5.from(".ctte", .6, {opacity:0}, "=-.4")
  tl5.from(".contact-btn", .6, {opacity:0}, "=-.4")
  tl5.from(".contact-element", .6, {opacity:0}, "=-.2")
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

    tl8.from(".ah", .6, {opacity:0})
    tl8.from(".ash", .6, {opacity:0}, "=-.6")
    tl8.from(".ahs", .6, {opacity:0}, "=-.6")
    tl8.from(".aht", .6, {opacity:0}, "=-.6")
    tl8.from(".pricing-table", .6, {opacity:0}, "=-.2")
    const scene8 = new ScrollMagic.Scene({
      triggerElement: "#pricing-section",
      reverse:false
    }).setTween(tl8).addTo(controller2);

    tl9.from(".eh", .6, {opacity:0})
    tl9.from(".esh", .6, {opacity:0}, "=-.6")
    tl9.from(".ehs", .6, {opacity:0}, "=-.6")
    tl9.from(".eht", .6, {opacity:0}, "=-.6")
    tl9.from(".extra-element:nth-of-type(1)", .6, {opacity:0}, "=-.5")
    tl9.from(".extra-element:nth-of-type(2)", .6, {opacity:0}, "=-.5")
    tl9.from(".extra-element:nth-of-type(3)", .6, {opacity:0}, "=-.5")
    tl9.from(".extra-element:nth-of-type(4)", .6, {opacity:0}, "=-.5")
    tl9.from(".extra-element:nth-of-type(5)", .6, {opacity:0}, "=-.5")
    tl9.from(".extra-element:nth-of-type(6)", .6, {opacity:0}, "=-.5")
    const scene9 = new ScrollMagic.Scene({
      triggerElement: ".extras-section",
      reverse:false
    }).setTween(tl9).addTo(controller2);

    tl10.from(".tti", .6, {opacity:0})
    tl10.from(".tte", .6, {opacity:0}, "=-.4")
    tl10.from(".translation-btn", .6, {opacity:0}, "=-.4")
    const scene10 = new ScrollMagic.Scene({
      triggerElement: ".tti",
      reverse:false
    }).setTween(tl10).addTo(controller2);
  }
}

function scrolltop(){
  setTimeout(() => {window.scrollTo(0,0)},200);
}