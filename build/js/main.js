'use strict';

var body = $('body');
var DURATION = 300;
var mobileBreakpoint = 992;
var windowWidth = $(window).width();

function setOverlay(cb) {
	var overlay = $('<div class="overlay"></div>');
	overlay.on('click', cb);
	return overlay;
}

function getScrollbarWidth() {
	var block = $('<div>').css({'height':'50px','width':'50px'});
	var indicator = $('<div>').css({'height':'200px'});

	$('body').append(block.append(indicator));

	var w1 = $('div', block).innerWidth();
	block.css('overflow-y', 'scroll');

	var w2 = $('div', block).innerWidth();
	$(block).remove();

	return (w1 - w2);
}

/*
(function() {
	const breakpoint = window.matchMedia( '(min-width:1200px)' );
	let mySwiper;
	const breakpointChecker = function() {
		// if larger viewport and multi-row layout needed
		if ( breakpoint.matches === true ) {
				// clean up old instances and inline styles when available
				if ( mySwiper !== undefined ) mySwiper.destroy( true, true );
				// or/and do nothing
				return;
		// else if a small viewport and single column layout needed
		} else if ( breakpoint.matches === false ) {
				// fire small viewport version of swiper
				return enableSwiper();
		}
	};

	const sl = document.querySelector('.__js_catalog-carousel');

	if (sl) {
		const enableSwiper = function() {
			mySwiper = new Swiper ('.__js_catalog-carousel', {
				slidesPerView: 1,
				spaceBetween: 12,
				speed: 300,
				loop: true,
				pagination: {
					el: '.swiper-pagination',
				},
				breakpoints: {
					640: {
						slidesPerView: 2,
					},
					992: {
						slidesPerView: 3,
					}
				}
			});
		};

		breakpointChecker();

		$(window).on('resize', function() {
			breakpointChecker();
		});
	}
})();


(function() {
	var autoplayDelay = 5000;

	var heroSlider = new Swiper ('.__js_hero-slider', {
		slidesPerView: 1,
		spaceBetween: 0,
		speed: 300,
		loop: true,
		autoplay: {
   		delay: autoplayDelay,
 		},
		pagination: {
			el: '.hero__paginate',
			clickable: true,
        renderBullet: function (index, className) {
					return '<span class="' + className + '"><svg width="32" height="32" viewBox="0 0 32 32"><circle style="animation-duration: ' + (autoplayDelay + 50) + 'ms" cx="16" cy="16" r="15" fill="none"></circle></svg></span>';
        },
		},
		navigation: {
			nextEl: '.hero__nav-btn--next',
			prevEl: '.hero__nav-btn--prev',
		},
	});
})();*/




/* Modal */
/*(function(){
	$(document).ready(function() {
		$(".fancybox").fancybox();

		$(".__js_service-modal").fancybox({
			smallBtn: false,
			toolbar: false

		});

		$('.__js_fancybox-close').on('click', function() {
			$.fancybox.close();
		});
	});
})();*/






