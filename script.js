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

$('body').scrollspy({
    target: '.navbar-fixed-top'
})

var today = new Date();
var year = today.getFullYear();
document.getElementById("date").textContent = year;

jQuery(function( $ ){ //Prevent conflict - http://snipplr.com/view/43906/

// Back to Top
	var scrollDiv = document.createElement("div");
	jQuery(scrollDiv).attr("id", "toTop").attr("data-toggle", "tooltip").attr("data-placement", "left").attr("title", "Back to Top").html("<i class='fa  fa-chevron-up'></i>").appendTo("body");
	jQuery(window).scroll(function () {
		if (jQuery(this).scrollTop() > 700) {
			jQuery("#toTop").fadeIn();
		} else {
			jQuery("#toTop").fadeOut();
		}
	});
	jQuery("#toTop").click(function () {
		jQuery("body,html").animate({
			scrollTop: 0
		},
		800);
	});
  });
