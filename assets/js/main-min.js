/* HAMBURGER */
var $hamburger = $('.hamburger');
    $('nav').hide();
$hamburger.on('click', function(e) {
    $hamburger.toggleClass('is-active');
    $('header').toggleClass('is-active');
    $('nav').removeClass('hide');
    $('nav').slideToggle(150);
});

$(document).on('click', function(event) {
  if (!$(event.target).closest('.nav-menu').length) {
      $hamburger.removeClass('is-active');
	  $('header').removeClass('is-active');
      $('nav').slideUp(150);
  }
});

/* COLOUR CHANGE */
$(document).ready(function(){       
    var scroll_pos = 0;
    var path = window.location.pathname;
    var page = path.split("/").pop();
//    if(page == "index.html") {
//        $(document).scroll(function() { 
//            scroll_pos = $(this).scrollTop();
//            if(scroll_pos > 630 && scroll_pos < 4800) {
//                $('#change a').css('color', '#fff');
//                $('#change').css('color', '#fff');
//            } else {
//                $('#change a').css('color', '#000');
//                $('#change').css('color', '#000');
//            }
//        });
//    }
	
function navColour() {
	var pageScrollPosition = $(window).scrollTop();
	$('.page-section').each(function(index, element) {
		var thisBlock = $(this);
		var thisTop = thisBlock.offset().top;
		var thisHeight = thisBlock.outerHeight();
		var thisBottom = thisTop + thisHeight;

		if(pageScrollPosition >= thisTop && pageScrollPosition < thisBottom) {
			if(thisBlock.hasClass('dark')) {
				$('header').removeClass('light').addClass('dark');
			} else if(thisBlock.hasClass('light')) {	
				$('header').removeClass('dark').addClass('light');
			} else {
				$('header').removeClass('light').removeClass('dark');
			}
		}
	});
};
navColour();
$(window).scroll(function (event) {
	navColour();
});
$(window).on('resize', function(){
	navColour();	
});	
	
});

jQuery(document).ready(function($) {
  $("#splash-modal").fadeIn(1000);
  
});

$(".close").on("click", function() {
  $("#splash-modal").fadeOut(500);
});

// /* Mail Chimp */
// (function($) {
//     window.fnames = new Array();
//      window.ftypes = new Array();
//      fnames[0]='EMAIL';
//      ftypes[0]='email';
//      fnames[1]='FNAME';
//      ftypes[1]='text';
//      fnames[2]='LNAME';
//      ftypes[2]='text';
//      fnames[3]='ADDRESS';
//      ftypes[3]='address';
//      fnames[4]='PHONE';
//      ftypes[4]='phone';
//      fnames[5]='BIRTHDAY';
//      ftypes[5]='birthday';
//      fnames[6]='MMERGE6';
//      ftypes[6]='text';
//      fnames[7]='MMERGE7';
//      ftypes[7]='text';
// }
    
// (jQuery));var $mcj = jQuery.noConflict(true);