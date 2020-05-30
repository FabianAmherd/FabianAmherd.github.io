 anime({
    targets: ".intro_container>.word2",
    easing: "easeOutExpo",
    delay: 4600,
    translateY: [
      {
        duration: 0,
        value: "-=100%",
      },
      {
        easing: "easeOutExpo",
        duration: 800,
        value: "+=100",
      },
    ],
     complete: function (anime) {
     // document.querySelector(".intro_img_container").remove();
    },
  });