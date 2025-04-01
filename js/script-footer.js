// Кнопка "Наверх" с плавной прокруткой
document.addEventListener('DOMContentLoaded', function () {
	const backToTopButton = document.querySelector('.back-to-top');

	window.addEventListener('scroll', function () {
		if (window.pageYOffset > 300) {
			backToTopButton.classList.add('visible');
		} else {
			backToTopButton.classList.remove('visible');
		}
	});

	backToTopButton.addEventListener('click', function () {
		window.scrollTo({
			top: 0,
			behavior: 'smooth'
		});
	});
});