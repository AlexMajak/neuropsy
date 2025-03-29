// section-3
document.querySelectorAll('.service-header').forEach(header => {
	header.addEventListener('click', () => {
		const serviceItem = header.parentElement;
		serviceItem.classList.toggle('active');
	});
});