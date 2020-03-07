const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const links = document.querySelectorAll('nav-links li');

const heroButton = document.querySelector('.hero-button')

heroButton.addEventListener('click', () => {
   const timeline = anime.timeline({
      easing : "easeOutExpo"
   });
   timeline.add({
      targets: ".hero-button",
      opacity: '0',
      duration: 1000
   })

   .add({
      targets: '.word1',
      delay: 1800,
      duration: 2000,
      translateY: ['-100%', '0%'],
      easing: 'easeOutExpo'
   })

   .add({
      targets: 'nav',
      duration: 1000,
      translateY: ['-100px', '0px'],
      translateX: ['0', '0'],
      easing: 'easeOutExpo',
      opacity: 1,
   })

   anime({
      targets: '.word2',
      delay: 2900,
      duration: 2000,
      translateY: ['-100%', '0%'],
      easing: 'easeOutExpo'
   })

   anime({
      targets: '.word3',
      delay: 3000,
      duration: 2000,
      translateY: ['-100%', '0%'],
      easing: 'easeOutExpo'
   })

   anime({
      targets: '.word4',
      delay: 3100,
      duration: 2000,
      translateY: ['-100%', '0%'],
      easing: 'easeOutExpo'
   })


   
});

hamburger.addEventListener('click', () => {
   navLinks.classList.toggle("open");
   hamburger.classList.toggle("open");
});