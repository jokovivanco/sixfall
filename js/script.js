const navbar = document.querySelector('.navbar');
$(window).scroll(function() {
	if($(this).scrollTop() > 100) {
		navbar.classList.add('scroll-down');
	}
	else {
		navbar.classList.remove('scroll-down');
	}
});

const navLink = document.querySelectorAll('.nav-link');
navLink.forEach(function(el) {
	el.addEventListener('click', function(e) {
		
	})
})