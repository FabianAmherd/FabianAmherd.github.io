const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const links = document.querySelectorAll('nav-links li');
const sunPath = "M51 25.5C51 39.5833 39.5833 51 25.5 51C11.4167 51 0 39.5833 0 25.5C0 11.4167 11.4167 0 25.5 0C39.5833 0 51 11.4167 51 25.5Z";
const moonPath = "M12.5 25.5C12.5 36.2017 20.0065 45.3636 23.6114 49.1464C24.2478 49.8142 23.7677 50.9587 22.8501 50.864C10.012 49.5384 0 38.6884 0 25.5C0 12.3116 10.012 1.46157 22.8501 0.136028C23.7677 0.0412854 24.2478 1.18576 23.6114 1.85356C20.0065 5.63639 12.5 14.7983 12.5 25.5Z";

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
      targets: '.hero-title>span>span',
      opacity: 1,
      delay: 1800,
      duration: 1500,
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

   
});

hamburger.addEventListener('click', () => {
   navLinks.classList.toggle("open");
   hamburger.classList.toggle("open");
});