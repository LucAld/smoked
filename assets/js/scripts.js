////////// JAVASCRIPT - MAIN SHEET //////////


// Navbar follow
var body = document.querySelector("body");

function scrolled(){
	var currentScroll = document.body.scrollTop || document.documentElement.scrollTop;

  // console.log('currentScroll=' + currentScroll + ', header.offsetHeight=' + header.offsetHeight);
  if (currentScroll >= 100 && !body.classList.contains('follow')) {
		body.classList.add('follow');

	} else if (currentScroll < 100 && body.classList.contains('follow')) {
		body.classList.remove('follow');
	}
}

addEventListener("scroll", scrolled, false);


// Smooth scroll
$(document).ready(function() {
	$('.nav-scroll').on('click', function() {
		var page = $(this).attr('href');
		var speed = 600;
		$('html, body').animate( { scrollTop: $(page).offset().top - 81}, speed);
		return false;
	});
});