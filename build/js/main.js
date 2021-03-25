'use strict';


var body = $('body');
var DURATION = 300;
var mobileBreakpoint = 768;
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

(function () {
	$('.nav__link').on('click', function() {
    var href = $(this).attr('href');
    $('html, body').animate({scrollTop: $(href).offset().top + 'px'}, 1500);

    return false;
  });
})();

(function() {
	var sl = document.querySelector('.__js_pro-style-slider');

	if (sl) {
		var slideCount = sl.querySelectorAll('.swiper-slide:not(.swiper-slide-duplicate)').length;
		var fraction = document.querySelector('.pro-style__fraction');


		var video,videoPoster, videoBtn;

		if (fraction) {
			var current = fraction.querySelector('.pro-style__fraction-current');
			var total = fraction.querySelector('.pro-style__fraction-total');
		}

		var slider = new Swiper ('.__js_pro-style-slider', {
			slidesPerView: 1,
			spaceBetween: 0,
			speed: 300,
			loop: false,
			pagination: {
				el: '.pro-style__paginate',
				clickable: true,
			},
			navigation: {
				nextEl: '.pro-style__nav-btn--next',
				prevEl: '.pro-style__nav-btn--prev',
			},
			on: {
				afterInit: function() {
					current.textContent = this.realIndex + 1;
					total.textContent = slideCount;

					video = $('.video video');
					videoPoster = $('.video__poster');
					videoBtn = $('.video__btn');


					videoBtn.on('click', function() {
						$(this).parent().fadeOut(DURATION).addClass('hide');
						$(this).parent().siblings().trigger('play');
					});

					video.on('click', function() {
						if (videoPoster.hasClass('hide')) {
							videoPoster.fadeIn(DURATION).removeClass('hide');
						}

						video.trigger('pause');
					});

				},
				slideChange: function() {
					current.textContent = this.realIndex + 1;

					video = $('.video video');
					videoPoster = $('.video__poster');

					if (videoPoster.hasClass('hide')) {
						videoPoster.fadeIn(DURATION).removeClass('hide');
					}

					video.trigger('pause');
				},
			}
		});


	}

	//video.on('click')

})();

(function () {
	AOS.init({
		// Global settings:
		disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
		startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
		initClassName: 'aos-init', // class applied after initialization
		animatedClassName: 'aos-animate', // class applied on animation
		useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
		disableMutationObserver: false, // disables automatic mutations' detections (advanced)
		debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
		throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)


		// Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
		offset: 120, // offset (in px) from the original trigger point
		delay: 0, // values from 0 to 3000, with step 50ms
		duration: 800, // values from 0 to 3000, with step 50ms
		easing: 'ease', // default easing for AOS animations
		once: false, // whether animation should happen only once - while scrolling down
		mirror: false, // whether elements should animate out while scrolling past them
		anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
	});
})();






