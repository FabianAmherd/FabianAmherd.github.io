/* Main javascript file */
/* Navigation javascript */
var hamburger = document.querySelector('.hamburger');
var navLinks = document.querySelector('.nav-links');
var links = document.querySelectorAll('nav-links li');
var colNavRight = document.querySelector('.col-nav-right');
var address = document.querySelector('div.address-container')
var heroButton = document.querySelector('.hero-button');
var menuCircle = document.querySelector('#menu-circle');
var navlogo = document.querySelector('.nav-logo')
var logo = document.querySelector('.logo')
var mouse = document.querySelector('.mouse')

hamburger.addEventListener('click', () => {
   navLinks.classList.toggle("open");
   hamburger.classList.toggle("open")
   colNavRight.classList.toggle("links-open")
   address.classList.toggle("links-open")
   address.classList.toggle("closed_menu")
   menuCircle.classList.toggle("open")
});

document.querySelectorAll('.menu-li').forEach(item => {
   item.addEventListener('click', event => {
      navLinks.classList.toggle("open");
      hamburger.classList.toggle("open")
      colNavRight.classList.toggle("links-open")
      address.classList.toggle("links-open")
      address.classList.toggle("closed_menu")
      menuCircle.classList.toggle("open")
   })
})

navlogo.addEventListener('click', () => {
   navLinks.classList.toggle("open");
   hamburger.classList.toggle("open")
   colNavRight.classList.toggle("links-open")
   address.classList.toggle("links-open")
   address.classList.toggle("closed_menu")
   menuCircle.classList.toggle("open")
});

if(location.href != 'http://127.0.0.1:5501/angebot.html'){
logo.addEventListener('click', () => {
   document.querySelector('html').style.scrollBehavior = 'smooth'
   setTimeout(() => {document.querySelector('html').removeAttribute('style')},2000);
});}

mouse.addEventListener('click', () => {
   document.querySelector('html').style.scrollBehavior = 'smooth'
   setTimeout(() => {document.querySelector('html').removeAttribute('style')},2000);
});

window.onscroll = function() {
   var mouse = document.getElementsByClassName
   ('mouse');
   mouse = mouse[0]
   if ( window.pageYOffset > 100 ) {
       mouse.classList.add("scrolled");
   }
}