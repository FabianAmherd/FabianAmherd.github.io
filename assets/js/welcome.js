introImg = document.querySelector(".intro_img_container")
introImg2 = document.querySelector(".intro_img_container2")

document.addEventListener("DOMContentLoaded", () => {
  anime
    .timeline({
      targets: ".welcome",
      easing: "easeOutExpo",
    })

    .add({
      delay: 2200,
      translateY: "-100vh",
      duration: 1500,
      complete: function (anime) {
        document.querySelector(".welcome").remove();
      },
    });

  anime({
    targets: ".welcome_logo",
    opacity: 1,
    scale: 0.5,
    duration: 1800,
    easing: "easeOutExpo",
  });

  anime({
    targets: ".welcome_logo",
    boxShadow: "20px 20px 40px #d4d4d4, -20px -20px 40px #ffffff",
    duration: 200,
    easing: "easeOutExpo",
  });

  anime({
    targets: ".welcome>span>span",
    delay: 400,
    opacity: 1,
    duration: 2200,
    translateY: ["-100%", "0%"],
    easing: "easeOutExpo",
    complete: function (anime) {
      introImg.classList.toggle("streched_intro_img");
    }
  });



  anime({
    targets: ".intro_container>.word1",
    delay: 2700,
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
      {
        easing: "easeInExpo",
        duration: 600,
        value: "+=100",
      },
    ],
    complete: function (anime) {
      introImg2.classList.toggle("streched_intro_img");
    }
  });

  anime({
    targets: ".intro_container>.word2",
    easing: "easeOutExpo",
    delay: 4200,
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
  });

  anime({
     targets: ".intro",
     delay: 5300,
     translateY: "-100vh",
      duration: 1500,
     easing: "easeInOutExpo",
     complete: function (anime) {
      document.querySelector(".intro").remove();
      playMainAnimation()
    },
  })

});

function playMainAnimation() {
  anime.timeline({})

    .add({
      targets: "nav",
      delay: 1500,
      duration: 1500,
      translateY: ["-100px", "0px"],
      translateX: ["0", "0"],
      easing: "easeOutExpo",
      opacity: 1,
    });

  anime({
    targets: ".word1",
    delay: 0,
    duration: 2700,
    translateY: ["-100%", "0%"],
    easing: "easeOutExpo",
  });

  anime({
    targets: ".word2",
    delay: 100,
    duration: 2700,
    translateY: ["-100%", "0%"],
    easing: "easeOutExpo",
  });

  anime({
    targets: ".word3",
    delay: 200,
    duration: 2700,
    translateY: ["-100%", "0%"],
    easing: "easeOutExpo",
  });

  anime({
    targets: ".word4",
    delay: 300,
    duration: 2700,
    translateY: ["-100%", "0%"],
    easing: "easeOutExpo",
  });

  anime({
    targets: ".word5",
    delay: 400,
    duration: 2700,
    translateY: ["-100%", "0%"],
    easing: "easeOutExpo",
  });

}
