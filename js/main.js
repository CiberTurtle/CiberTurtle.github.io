/*
	Made By u/ciber_turtle
	Made: 13-12-2019
	Updated: dd-mm-ccyy
*/

//Get the button:
goToTopButton = document.getElementById('goToTopBtn');

window.onscroll = function() {
	scrollFunction();
};

function scrollFunction() {
	if (document.body.scrollTop > 75 || document.documentElement.scrollTop > 75) {
		goToTopButton.style.display = 'block';
	} else {
		goToTopButton.style.display = 'none';
	}
}

function topFunction() {
	document.body.scrollTop = 0;
	document.documentElement.scrollTop = 0;
}
