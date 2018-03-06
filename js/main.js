jQuery(document).ready(function($) {
	var filterizd = $('.filtr-container').filterizr();

	$(".clients_slider").slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		// centerMode: true,
		centerPadding: '60px',
		dots: true,
		infinite: true,
	});
});