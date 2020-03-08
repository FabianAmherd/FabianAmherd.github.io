document.addEventListener('DOMContentLoaded', () => {
   anime.timeline({
      targets: '.welcome',
      easing: 'easeOutExpo',
   })

   .add({
      delay: 2200,
      translateY: '-100vh',
      duration: 1500,
      complete: function(anime) {
         document.querySelector('.welcome').remove()
      },
   })

   anime({
      targets: '.welcome_logo',
      opacity: 1,
      scale: 0.5,
      duration: 1800,
      easing: 'easeOutExpo'
   })

   
   anime({
      targets: '.welcome_logo',
      boxShadow: "20px 20px 40px #d4d4d4, -20px -20px 40px #ffffff",
      duration: 200,
      easing: 'easeOutExpo'
   })

   anime({
      targets: '.welcome>span>span',
      delay: 400,
      opacity: 1,
      duration: 2200,
      translateY: ['-100%', '0%'],
      easing: 'easeOutExpo'
   })



   anime({
      targets: '.hero-button',
      opacity: 1,
      delay: 5800,
      duration: 1000,
      translateY: ['-30px', '0px'],
      easing: 'easeOutExpo'
   })




})