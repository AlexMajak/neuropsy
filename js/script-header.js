// Скрипт для работы гамбургер-меню
document.addEventListener('DOMContentLoaded', function () {
	const hamburger = document.querySelector('.hamburger');
	const headerNav = document.querySelector('.header-nav');
	const headerContacts = document.querySelector('.header-contacts');

	hamburger.addEventListener('click', function () {
		this.classList.toggle('active');
		this.setAttribute('aria-expanded', this.classList.contains('active'));
		headerNav.classList.toggle('active');
		headerContacts.classList.toggle('active');
	});

	// Закрытие меню при клике на ссылку (для мобильных)
	document.querySelectorAll('.nav-item a').forEach(link => {
		link.addEventListener('click', function () {
			if (window.innerWidth < 768) {
				hamburger.classList.remove('active');
				hamburger.setAttribute('aria-expanded', 'false');
				headerNav.classList.remove('active');
				headerContacts.classList.remove('active');
			}
		});
	});

	// Автоматическое закрытие меню при ресайзе
	window.addEventListener('resize', function () {
		if (window.innerWidth >= 768) {
			hamburger.classList.remove('active');
			hamburger.setAttribute('aria-expanded', 'false');
			headerNav.classList.remove('active');
			headerContacts.classList.remove('active');
		}
	});
});