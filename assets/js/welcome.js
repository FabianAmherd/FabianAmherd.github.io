introImg = document.querySelector(".intro_img_container")
introImg2 = document.querySelector(".intro_img_container2")
body = document.querySelector("#body")

document.addEventListener("DOMContentLoaded", () => {
  anime
    .timeline({
      targets: ".welcome",
      easing: "easeOutExpo",
    })

    .add({
      delay: 2200,
      translateY: "-100vh",
      duration: 1000,
      easing: "easeInOutExpo",
      complete: function (anime) {
        document.querySelector(".welcome").remove();
      },
    });

  anime({
    targets: ".welcome_logo",
    easing: "easeOutExpo",
    scale: {
      delay: 0,
      value: [2,1],
      duration: 1800,
      easing: "easeOutExpo",
    },
    boxShadow: {
      value: "14px 14px 28px #bec3c8, -14px -14px 28px #ffffff",
      duration: 200,
      easing: "easeOutExpo",
    },
    translateX: {
      value: ["0%", "-80%"],
      duration: 1200,
      delay: 800,
    },

    complete: function (anime) {
      document.querySelector("nav").style.opacity ="0";
    }
  
  });


  anime({
    targets: ".welcome>span>span",
    delay: 800,
    opacity: 1,
    duration: 1200,
    translateX: ["-100%", "-0%"],
    easing: "easeOutExpo",
    complete: function (anime) {
      setTimeout(function(){
        introImg.classList.toggle("streched_intro_img");
      }, 1000)
    }
  });




  anime({
    targets: ".intro_container>.word1",
    delay: 3100,
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
      document.querySelector(".intro_img_container").remove();
    },
  });

  anime({
     targets: ".intro",
     delay: 6200,
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
      easing: "easeOutExpo",
      opacity: 1,
    });

  anime({
    targets: ".hero-bg",
    delay: 600,
    duration: 2700,
    opacity: [0,1],
    translateY: ["10%", "10%"],
    translateX: ["50%", "0%"],
    easing: "easeOutExpo",
  })

  anime({
    targets: ".word1",
    delay: 0,
    duration: 2500,
    translateY: ["-100%", "0%"],
    easing: "easeOutExpo",
  });

  anime({
    targets: ".word2",
    delay: 200,
    duration: 2500,
    translateY: ["-100%", "0%"],
    easing: "easeOutExpo",
  });

  anime({
    targets: ".word3",
    delay: 400,
    duration: 2500,
    translateY: ["-100%", "0%"],
    easing: "easeOutExpo",
  });

  anime({
    targets: ".word4",
    delay: 600,
    duration: 2500,
    translateY: ["-100%", "0%"],
    easing: "easeOutExpo",
  });

  anime({
    targets: ".word5",
    delay: 800,
    duration: 2500,
    translateY: ["-100%", "0%"],
    easing: "easeOutExpo",
  });

  anime({
    targets: ".word6",
    delay: 1000,
    duration: 2500,
    translateY: ["-100%", "0%"],
    easing: "easeOutExpo",
    complete: function (anime) {
      body.style.removeProperty("overflow");
    },
  });

  anime({
    targets: ".hero-btns",
    delay: 2400,
    duration: 1500,
    opacity: [0, 1],
    easing: "easeInOutExpo"
  });
}
