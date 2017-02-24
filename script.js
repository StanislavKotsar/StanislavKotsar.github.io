// var divHeight = window.innerHeight;
// var divs = document.getElementsByClassName("screen");

// for(var i = 0; i< divs.length; i++){
// 	divs[i].style.height = divHeight+"px";
// 	divs[i].style.width = "100%";
// }

$('a[href*="#"]:not([href="#"])').click(function() {
  if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
    if (target.length) {
      $('html, body').animate({
        scrollTop: target.offset().top
      }, 1000);
      return false;
    }
  }
});