const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const links = document.querySelectorAll('nav-links li');
const colNavRight = document.querySelector('.col-nav-right');
const address = document.querySelector('div.address-container')
const heroButton = document.querySelector('.hero-button')
const menuCircle = document.querySelector('#menu-circle')

hamburger.addEventListener('click', () => {
   navLinks.classList.toggle("open");
   hamburger.classList.toggle("open")
   colNavRight.classList.toggle("links-open")
   address.classList.toggle("links-open")
   address.classList.toggle("closed_menu")
   menuCircle.classList.toggle("open")
});