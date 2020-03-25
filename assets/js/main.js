const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const links = document.querySelectorAll('nav-links li');

const heroButton = document.querySelector('.hero-button')

heroButton.addEventListener('click', () => {
   const timeline = anime.timeline({
   });

   timeline.add({
      targets: ".intro",
      opacity: 0,
      easing: 'easeOutExpo',
      duration: 1500,
      complete: function(anime) {
         document.querySelector('.intro').remove()
      },
   })

   .add({
      targets: 'nav',
      delay: 3600,
      duration: 1500,
      translateY: ['-100px', '0px'],
      translateX: ['0', '0'],
      easing: 'easeOutExpo',
      opacity: 1,
   })

   anime({
      targets: '.word1',
      delay: 1800,
      duration: 2700,
      translateY: ['-100%', '0%'],
      easing: 'easeOutExpo'
   })

   anime({
      targets: '.word2',
      delay: 2000,
      duration: 2700,
      translateY: ['-100%', '0%'],
      easing: 'easeOutExpo'
   })

   anime({
      targets: '.word3',
      delay: 2200,
      duration: 2700,
      translateY: ['-100%', '0%'],
      easing: 'easeOutExpo'
   })

   anime({
      targets: '.word4',
      delay: 3000,
      duration: 2700,
      translateY: ['-100%', '0%'],
      easing: 'easeOutExpo'
   })

   anime({
      targets: '.word5',
      delay: 3200,
      duration: 2700,
      translateY: ['-100%', '0%'],
      easing: 'easeOutExpo'
   })


   
});

hamburger.addEventListener('click', () => {
   navLinks.classList.toggle("open");
   hamburger.classList.toggle("open");
});