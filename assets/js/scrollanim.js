console.log('scrollanim.js is executed')
var tl1 = new TimelineMax()
var tl2 = new TimelineMax()
var tl3 = new TimelineMax()
var tl4 = new TimelineMax()
var tl5 = new TimelineMax()
var tl6 = new TimelineMax()
const controller = new ScrollMagic.Controller()

tl1.from(".introductory-text", .6, {x:100, opacity:0})
const scene1 = new ScrollMagic.Scene({
  triggerElement: ".introductory-text",
  reverse:false
}).setTween(tl1).addTo(controller);

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
}).setTween(tl2).addTo(controller);

tl3.from(".ph", .6, {x:200, opacity:0})
tl3.from(".psh", .6, {x:-200, opacity:0}, "=-.2")
tl3.from(".phs", .6, {y:200, opacity:0}, "=-.2")
tl3.from(".process-column:nth-of-type(1)", .4, {x:-200, opacity:0})
tl3.from(".process-column:nth-of-type(2)", .4, {y:200, opacity:0}, "=-.2")
tl3.from(".process-column:nth-of-type(3)", .4, {x:200, opacity:0}, "=-.2")
const scene3 = new ScrollMagic.Scene({
  triggerElement: ".process-section",
  reverse:false
}).setTween(tl3).addTo(controller);

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
}).setTween(tl4).addTo(controller);

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
}).setTween(tl5).addTo(controller);

tl6.from("footer", .5, {scale: 1.2, opacity:0})
tl6.from(".slogan", .5, {scale: 1.2, opacity:0})
tl6.from(".address", .5, {scale: 1.2, opacity:0}, "=-.25")
tl6.from(".kontakt", .5, {scale: 1.2, opacity:0}, "=-.25")
tl6.from(".social", .5, {scale: 1.2, opacity:0}, "=-.25")
tl6.from(".copyright-container", .5, {y:30, opacity:0})
const scene6 = new ScrollMagic.Scene({
  triggerElement: "footer",
  reverse:false
}).setTween(tl6).addTo(controller);