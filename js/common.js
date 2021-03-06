$(function() {
    
    $('.modal-back').click(function(){
        $('.thx').fadeOut('fast');
        $('.modal-back').fadeOut('fast');
    });

	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	//Chrome Smooth Scroll
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {
	};
	$("img, a").on("dragstart", function(event) { event.preventDefault(); });
});

$(document).ready(function(){
    $('.main-header-slider').slick({
        dots:true,
        autoplay:true,
        autoplaySpeed: 4000,
        draggable:false,
    });
    $('.partners-slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive:[
            {
                breakpoint: 680,
                settings: {slidesToShow: 2}
            },
            {
                breakpoint: 360,
                settings: {slidesToShow: 1}
            }
        ]
    });
    $('.history-slider').slick({
        dots:true,
        customPaging: function(slider, i) {
            return '<button>' +(2014+i) + '</button>';
        },
    });
    $('.burger').click(function(){
       $('.menu-wrap').toggleClass('open-menu');
    });
});


$(window).load(function() {
    
    $('.loader_inner').addClass('animated bounceOutDown');
    
    //$('.loader').css('animation', 'loader 1s linear');
    //$("html, body").animate({ scrollTop: 0 }, 1200);
    
    setTimeout(
        function() 
            {
                $(".loader-right").addClass('animated slideOutRight');
                $(".loader-left").addClass('animated slideOutLeft'); 
            }, 800);
            
});
