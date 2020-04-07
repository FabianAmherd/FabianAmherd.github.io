const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const links = document.querySelectorAll('nav-links li');
var colNavRight = document.querySelectorAll('.menu-li'), i;
const address = document.querySelector('div.address-container')
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
      delay: 3400,
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
   for (i = 0; i < colNavRight.length; ++i) {
      colNavRight[i].classList.toggle("open")
      colNavRight[i].classList.toggle("closed")
   }
   address.classList.toggle("open")
   address.classList.toggle("closed")

   var linksOn = document.querySelectorAll("li.menu-li.open"), i;
   var linksOff = document.querySelectorAll("li.menu-li.closed"), i;
   const addressOn = document.querySelector("div.address-container.open")
   const addressOff = document.querySelector("div.address-container.closed")
   


   linksOn.forEach((link, i) => {
      setTimeout(() => {
         anime({
            targets: link,
            opacity: 1,
            easing: 'easeOutExpo',
            duration: 1500,
         });
         anime({
            targets: link,
            translateY: ['50%', '0%'],
            easing: 'easeOutExpo',
            duration: 1500,
         });
      }, 200 * i);
   })

   linksOff.forEach((link, i) => {
      setTimeout(() => {
         anime({
            delay: 0,
            targets: link,
            opacity: 0,      
            translateY: ['0%', '-200%'],
            easing: 'easeInExpo',
            duration: 500,
         });
         anime({
            targets: link,

         });
      }, 100 * i);
   })

   anime({
      delay: 700,
      targets: addressOn,
      opacity: 1,
      translateY: ['60%', '0%'],
      easing: 'easeOutExpo',
      duration: 1200,
   })

   anime({
      delay: 0,
      targets: addressOff,
      opacity: 0,
      translateY: ['0%', '-100%'],
      easing: 'easeInExpo',
      duration: 500,
   })

});