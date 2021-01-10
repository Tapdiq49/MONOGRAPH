const navbar = document.querySelector('.navbar');
const body = document.querySelector('body');

navbar.addEventListener('click', () => {
	body.classList.toggle('show-nav');
});