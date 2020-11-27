const navbar = document.querySelector('.navbar');
$(window).scroll(function() {
	if($(this).scrollTop() > 100) {
		navbar.classList.add('scroll-down');
	}
	else {
		navbar.classList.remove('scroll-down');
	}
});

$(".navbar-nav a").on("click", function(e) {
	$(".navbar").find(".active").removeClass("active");
	$(this).addClass("active");
})

$(".nav-link").on("click", function(e) {

	let el = $($(this).attr('href'));

	$('html').animate({
		scrollTop: el.offset().top - 20
	}, 1000);

	e.preventDefault();
});