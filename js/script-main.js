// section-3
document.querySelectorAll('.service-header').forEach(header => {
	header.addEventListener('click', () => {
		const serviceItem = header.parentElement;
		serviceItem.classList.toggle('active');
	});
});

//section-7
document.addEventListener('DOMContentLoaded', function () {
	const tabs = document.querySelectorAll('.tab');
	const contentBlocks = document.querySelectorAll('.content-block');
	const consultLinks = document.querySelectorAll('.consult-link');

	// Обработчик для вкладок
	tabs.forEach(tab => {
		tab.addEventListener('click', function () {
			switchToTab(this.getAttribute('data-tab'));
		});
	});

	// Обработчик для ссылок в консультации
	consultLinks.forEach(link => {
		link.addEventListener('click', function () {
			switchToTab(this.getAttribute('data-tab'));
		});
	});
});

// Функция для переключения вкладок
function switchToTab(tabId) {
	// Remove active class from all tabs
	document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
	// Add active class to corresponding tab
	document.querySelector(`.tab[data-tab="${tabId}"]`).classList.add('active');

	// Hide all content blocks
	document.querySelectorAll('.content-block').forEach(block => block.classList.remove('active'));
	// Show the corresponding content block
	document.getElementById(tabId).classList.add('active');

	// Прокрутка к верху секции section-7
	document.querySelector('.section-7').scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// Форма на отправку
document.getElementById('consultation-form').addEventListener('submit', function (e) {
	e.preventDefault();

	// Здесь можно добавить обработку формы (AJAX запрос и т.д.)
	alert('Форма отправлена! Мы свяжемся с вами в ближайшее время.');
	this.reset();
});