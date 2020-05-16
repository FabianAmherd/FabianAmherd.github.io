window.onscroll = function() {
   var mouse = document.getElementsByClassName
   ('mouse');
   mouse = mouse[0]
   if ( window.pageYOffset > 100 ) {
       mouse.classList.add("scrolled");
   }
}