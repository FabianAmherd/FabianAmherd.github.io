const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const links = document.querySelectorAll('nav-links li');
var colNavRight = document.querySelectorAll('.menu-li'), i;
const address = document.querySelector('div.address-container')
const heroButton = document.querySelector('.hero-button')


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
            opacity: [0, 1],
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
            duration: 300,
         });
         anime({
            targets: link,

         });
      }, 50 * i);
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