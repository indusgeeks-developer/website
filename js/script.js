$(document).ready(function(){

	$(window).scroll(function () {
		if ($(this).scrollTop() > 100) {
			$('#btn-float').addClass('btn-fixed');
		} else {
	      $('#btn-float').removeClass('btn-fixed');
	    }
	});

	$('input[name="nav-check"]').click(function(){

		$("html, body").css("overflow-y", "hidden")
	    if($(this).prop("checked") == true){
	        $(".mobile-body-overly").css({"display":"block", "overflow":"hidden"});
	        $('input[name="drop-check"]').prop("checked", false);
	    }
	    else if($(this).prop("checked") == false){
	    	$("html, body").css("overflow-y", "auto");
	        $(".mobile-body-overly").css({"display":"none"});
	    }
    });

    var width=0;
	width=$(this).width();

    $( window ).resize(function() {
    	if(width==$(window).width()){
    		return;
    	}
    	$("html, body").css("overflow-y", "auto");
		$('input[type=checkbox]').prop("checked", false);
		$(".mobile-body-overly").css({"display":"none"});
	});

   $('.slider-hero').slick({
	  	infinite: true,
		dots: true,
		arrows: false,
		autoplay: true,
		autoplaySpeed: 3000,
		fade: true,
		fadeSpeed: 1000
	});

	$('.slider-testimonials').slick({
		infinite: true,
		dots: false,
		prevArrow: $(".prev"),
    	nextArrow: $(".next"),
		fade: true,
		fadeSpeed: 1000	
	});
	
});