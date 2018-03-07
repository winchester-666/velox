jQuery(document).ready(function($) {
	var filterizd = $('.filtr-container').filterizr();

	$(".clients_slider").slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		// centerMode: true,
		centerPadding: '60px',
		dots: true,
		infinite: true,
		responsive: [
		{
			breakpoint: 768,
			settings: {
				centerPadding: '40px',
				slidesToShow: 3
			}
		},
		{
			breakpoint: 480,
			settings: {
				centerPadding: '40px',
				slidesToShow: 1
			}
		}
		]
	});


	$('#scroll_top').click(function() {
		$('html, body').animate({scrollTop: 0},800);
		return false;
	});
	$(window).scroll(function(){
		$('header').toggleClass('header_background', $(this).scrollTop() > 300);
	});

	$('#menu-toggle').click(function(){
		$(this).toggleClass('open');
		$('.header_menu').toggleClass('open_menu');
	});

	$(".portfolio_list_cat li").click(function(event) {
		$(".portfolio_list_cat li").removeClass('active');
		$(this).addClass('active');
	});

	$('a[href^="#scroll_"]').click(function(){
		var el = $(this).attr('href');

		$('html, body').animate({ scrollTop: $(el).offset().top}, 1000);
		return false;
	});
});