$(document).ready(function(){

	 document.activeElement.blur();

	// var b = document.getElementsByClassName("hero")[0];  
	// console.log(b);

	// b.addEventListener("mousemove", function(event) {
	//   parallaxed(event);
	// });

	// function parallaxed(e) {
	//       var amountMovedX = (e.clientX * -0.2/6);
	//       var amountMovedY = (e.clientY * -0.3/8);
	//       var x = document.getElementsByClassName("parallaxed");
	//       console.log(x);
	//       var i;
	//       for (i = 0; i < x.length; i++) {
	//         x[i].style.transform='translate(' + amountMovedX + 'px,' + amountMovedY + 'px)'
	//       }
	// }

	$(window).scroll(function () {
		if ($(this).scrollTop() > 120) {
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

	//particles.js
	img_src = [
		'img/particle-assets/tri_red.png',
		'img/particle-assets/sq_green.png',
		'img/particle-assets/rect_yellow.png',
		'img/particle-assets/line_purple.png',
		'img/particle-assets/diag_cyan.png',
		'img/particle-assets/circ_teal.png',
		'img/particle-assets/arc_blue.png',
		'img/particle-assets/circ_yellow.png',
		'img/particle-assets/diag_cyan.png'
	];

	// Name images included
	image_type = img_src.map(function(cuurentEl, index){ 
		console.log("image"+index);
		return "image" + index;
	});

	particlesJS('particles-js',
	  {
	    "particles": {
	      "number": {
	        "value": img_src.length, // No of images
	        "density": {
	          "enable": true,
	          "value_area": 750 // Specify area (Lesser is greater density)
	        }
	      },
	      "color": {
	        "value": "#5affd4"
	      },
	      "shape": {
	        "type":  image_type, // Add images to particle-js
	        "stroke": {
	          "width": 0,
	        },
	        "polygon": {
	          "nb_sides": 4
	        }
	      },
	      "opacity": {
	        "value": 0.9, // Adjust opactiy
	        "random": false,
	        "anim": {
	          "enable": false,
	        }
	      },
	      "size": {
	        "value": 20, // Adjust the image size
	        "random": false,
	        "anim": {
	          "enable": false,	         
	        }
	      },
	      "line_linked": {
	        "enable": false,
	        "distance": 200,
	        "color": "#ffffff",
	        "opacity": 1,
	        "width": 2
	      },
	      "move": {
	        "enable": true,
	        "speed": 0.5,   // Speed of particle motion
	        "direction": "none",
	        "random": true,
	        "straight": false,
	        "bounce": false,
	        "attract": {
	          "enable": false,
	          "rotateX": 600,
	          "rotateY": 1200
	        }
	      }
	    },
	    "retina_detect": true
	  }
	);
});