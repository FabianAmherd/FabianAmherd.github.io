var firstinitangebot = (function() {
  console.log('firstinitangebot called')
  var executed = false;
  return function() {
      if (!executed) {
          executed = true;

          console.log('animations executed once')
          var tl6 = new TimelineMax()
          var tl7 = new TimelineMax()
          var tl8 = new TimelineMax()
          var tl9 = new TimelineMax()
          const controller2 = new ScrollMagic.Controller()
      
          tl6.from("footer", .5, {scale: 1.2, opacity:0})
          tl6.from(".slogan", .5, {scale: 1.2, opacity:0})
          tl6.from(".address", .5, {scale: 1.2, opacity:0}, "=-.25")
          tl6.from(".kontakt", .5, {scale: 1.2, opacity:0}, "=-.25")
          tl6.from(".social", .5, {scale: 1.2, opacity:0}, "=-.25")
          tl6.from(".copyright-container", .5, {y:30, opacity:0})
          const scene6 = new ScrollMagic.Scene({
            triggerElement: "footer",
            reverse:false
          }).setTween(tl6).addTo(controller2);
      
          tl7.from(".ah", .6, {x:200, opacity:0})
          tl7.from(".ash", .6, {x:-200, opacity:0}, "=-.2")
          tl7.from(".ahs", .6, {y:200, opacity:0}, "=-.2")
          tl7.from(".aht", .6, {x:100, opacity:0}, "=-.2")
          tl7.from(".pricing-table", .6, {y:100, opacity:0}, "=-.2")
          const scene7 = new ScrollMagic.Scene({
            triggerElement: "#pricing-section",
            reverse:false
          }).setTween(tl7).addTo(controller2);
      
          tl8.from(".eh", .6, {x:200, opacity:0})
          tl8.from(".esh", .6, {x:-200, opacity:0}, "=-.2")
          tl8.from(".ehs", .6, {y:200, opacity:0}, "=-.2")
          tl8.from(".eht", .6, {x:100, opacity:0}, "=-.2")
          tl8.from(".extra-element:nth-of-type(1)", .4, {scale: 1.2, opacity:0})
          tl8.from(".extra-element:nth-of-type(4)", .4, {scale: 1.2, opacity:0}, "=-.4")
          tl8.from(".extra-element:nth-of-type(3)", .4, {scale: 1.2, opacity:0})
          tl8.from(".extra-element:nth-of-type(6)", .4, {scale: 1.2, opacity:0}, "=-.4")
          tl8.from(".extra-element:nth-of-type(2)", .4, {scale: 1.2, opacity:0})
          tl8.from(".extra-element:nth-of-type(5)", .4, {scale: 1.2, opacity:0}, "=-.4")
          const scene8 = new ScrollMagic.Scene({
            triggerElement: ".extras-section",
            reverse:false
          }).setTween(tl8).addTo(controller2);
      
          tl9.from(".tti", .4, {x:200, opacity:0})
          tl9.from(".tte", .4, {x:-200, opacity:0}, "=-.2")
          tl9.from(".translation-btn", .4, {y:200, opacity:0}, "=-.2")
          const scene9 = new ScrollMagic.Scene({
            triggerElement: ".tti",
            reverse:false
          }).setTween(tl9).addTo(controller2);
      }
  };
});