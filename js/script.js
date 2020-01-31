// Resize your browser for effect
$(document).ready(function(){
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