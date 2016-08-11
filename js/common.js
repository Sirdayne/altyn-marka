$(function() {

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

	$(".loader_inner").fadeOut();
	$(".loader").delay(400).fadeOut("fast");

});
