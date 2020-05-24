/* Main javascript file */
/* Navigation javascript */
var hamburger = document.querySelector('.hamburger');
var navLinks = document.querySelector('.nav-links');
var links = document.querySelectorAll('nav-links li');
var colNavRight = document.querySelector('.col-nav-right');
var address = document.querySelector('div.address-container')
var heroButton = document.querySelector('.hero-button');
var menuCircle = document.querySelector('#menu-circle');
var navlogo = document.querySelector('.nav-logo');
var logo = document.querySelector('.logo');
var btn1 = document.querySelector('.btn1');
var btn2 = document.querySelector('.btn2');
var html = document.querySelector('html');
var introduction = document.querySelector('#introduction');

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
      setTimeout(() => {
         if (html.classList.contains('to-angebothtml') || html.classList.contains('to-indexhtml')){}
         else{
         navLinks.classList.toggle("open");
         hamburger.classList.toggle("open")
         colNavRight.classList.toggle("links-open")
         address.classList.toggle("links-open")
         address.classList.toggle("closed_menu")
         menuCircle.classList.toggle("open")
         }
      },0)
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

if (btn1)
   btn1.addEventListener('click', () => {
      introduction.scrollIntoView({behavior: "smooth", block: "center"})
   })


if (btn2){
   btn2.addEventListener('click', () => {
      document.querySelector('html').style.scrollBehavior = 'smooth'
      setTimeout(() => {document.querySelector('html').removeAttribute('style')},2000);
   });
};

function hidescrollbar(){
   document.querySelector('body').style.overflowY = 'hidden'
   setTimeout(() => {document.querySelector('body').removeAttribute('style')},1000);
}