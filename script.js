var isIE = /*@cc_on!@*/false || !!document.documentMode;
var today = new Date();
var year = today.getFullYear();
var scrollDiv = document.createElement("div");
document.getElementById("date").textContent = year;

if(isIE){
  divs =  document.getElementsByClassName("screen");
  for(var i = 0;i<divs.length;i++){
  divs[i].style.width = "1400px";
  divs[i].style.height = "100%";
  divs[i].style.paddingBottom = "40px";
  divs[i].style.paddingTop = "40px";
  divs[i].style.marginTop = "-50px";
  }

}

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
});
if(!isIE){
$(".landing_text").delay(7000).fadeOut(2000, function(){
  $("#lpage").css({
    "justify-content":"flex-end"
  });
});
}

jQuery(function( $ ){ //Prevent conflict - http://snipplr.com/view/43906/

// Back to Top
	jQuery(scrollDiv).attr("id", "toTop").attr("data-toggle", "tooltip").attr("data-placement", "left").attr("title", "Back to Top").html("<i class='fa  fa-chevron-up'></i>").appendTo("body");
	jQuery(window).scroll(function () {
		if (jQuery(this).scrollTop() > document.getElementById('lpage').offsetHeight) {
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
