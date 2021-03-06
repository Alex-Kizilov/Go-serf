$(function() {

	$('.header__slider').slick({
		infinite: true,
		fade: true,
		prevArrow: '<img class="slider-arrows slider-arrows__left" src="images/arrows-right.svg" alt=""></img>',
		nextArrow: '<img class="slider-arrows slider-arrows__right" src="images/arrows-right.svg" alt=""></img>',
		asNavFor: '.slider-dotshead',
	});

	$('.slider-dotshead').slick({
		slidesToShow: 4,
		slidesToScroll: 4,
		infinite: false,
		asNavFor: '.header__sliderhead',
	});

	$('.surf-slider').slick({
		slidesToShow: 4,
		slidesToScroll: 1,
		prevArrow: '<img class="slider-arrows slider-arrows__left" src="images/arrows-right.svg" alt=""></img>',
		nextArrow: '<img class="slider-arrows slider-arrows__right" src="images/arrows-right.svg" alt=""></img>',
		asNavFor: '.slider-map',
	});

	$('.slider-map').slick({
		slidesToShow: 8,
		slidesToScroll: 1,
		arrows: false,
		asNavFor: '.surf-slider',
		focusOnSelect: true,
	});

	$('.travel__slider').slick({
		infinite: true,
		fade: true,
		prevArrow: '<img class="slider-arrows slider-arrows__left" src="images/arrows-right.svg" alt=""></img>',
		nextArrow: '<img class="slider-arrows slider-arrows__right" src="images/arrows-right.svg" alt=""></img>',
	});

});
console.log()
