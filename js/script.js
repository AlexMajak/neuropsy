document.addEventListener('DOMContentLoaded', () => {
	// Background parallax effect
	const container = document.getElementById('container');
	const background = document.querySelector('.background-gradient');

	let mouseX = 0;
	let mouseY = 0;

	document.addEventListener('mousemove', (e) => {
		mouseX = (e.clientX / window.innerWidth - 0.5) * 20;
		mouseY = (e.clientY / window.innerHeight - 0.5) * 20;

		background.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
	});

	// Gallery mouse interaction
	const gallery = document.querySelector('.gallery-container');
	const images = document.querySelectorAll('.gallery-image');
	let currentImage = 0;
	let isMouseMoving = false;
	let mouseTimeout;

	// Show first image
	images[0].classList.add('active');

	gallery.addEventListener('mousemove', (e) => {
		// Clear any existing timeout
		clearTimeout(mouseTimeout);
		isMouseMoving = true;

		// Calculate which image to show based on mouse position
		const rect = gallery.getBoundingClientRect();
		const x = e.clientX - rect.left;
		const width = rect.width;
		const imageIndex = Math.floor((x / width) * images.length);

		// Only change if we're on a different image
		if (imageIndex !== currentImage && imageIndex >= 0 && imageIndex < images.length) {
			images[currentImage].classList.remove('active');
			currentImage = imageIndex;
			images[currentImage].classList.add('active');
		}

		// Add parallax effect to current image
		const moveX = (e.clientX - rect.left - rect.width / 2) / 30;
		const moveY = (e.clientY - rect.top - rect.height / 2) / 30;
		images[currentImage].style.transform = `scale(1.1) translate(${moveX}px, ${moveY}px)`;

		// Set timeout to reset mouse movement flag
		mouseTimeout = setTimeout(() => {
			isMouseMoving = false;
		}, 100);
	});

	gallery.addEventListener('mouseleave', () => {
		// Reset transform on mouse leave
		images[currentImage].style.transform = 'scale(1)';
	});

	// Scroll animations
	const animateOnScroll = () => {
		const elements = document.querySelectorAll('.animate-on-scroll');

		elements.forEach(element => {
			const elementTop = element.getBoundingClientRect().top;
			const elementBottom = element.getBoundingClientRect().bottom;

			if (elementTop < window.innerHeight * 0.8 && elementBottom > 0) {
				element.classList.add('visible');
			}
		});
	};

	// Initial check for elements in view
	animateOnScroll();

	// Listen for scroll events
	window.addEventListener('scroll', animateOnScroll);

	// Smooth scroll for navigation
	document.querySelectorAll('a[href^="#"]').forEach(anchor => {
		anchor.addEventListener('click', function (e) {
			e.preventDefault();
			const target = document.querySelector(this.getAttribute('href'));
			if (target) {
				target.scrollIntoView({
					behavior: 'smooth'
				});
			}
		});
	});

	// Form submission
	const contactForm = document.getElementById('contact-form');
	if (contactForm) {
		contactForm.addEventListener('submit', (e) => {
			e.preventDefault();
			// Here you would typically handle the form submission
			alert('Спасибо за ваше сообщение! Мы свяжемся с вами в ближайшее время.');
			contactForm.reset();
		});
	}

	// Service card hover effects
	const serviceCards = document.querySelectorAll('.service-card');
	serviceCards.forEach(card => {
		card.addEventListener('mouseenter', () => {
			card.style.transform = 'translateY(-5px)';
		});

		card.addEventListener('mouseleave', () => {
			card.style.transform = 'translateY(0)';
		});
	});
});

// start nav
document.addEventListener("DOMContentLoaded", function () {
	const headerNav = document.querySelector(".header-nav");

	window.addEventListener("scroll", function () {
		if (window.scrollY > 50) {
			headerNav.classList.add("visible");
			headerNav.style.background = "#fff";
			headerNav.style.boxShadow = "0px 4px 10px rgba(0, 0, 0, 0.1)";
		} else {
			headerNav.classList.remove("visible");
			headerNav.style.background = "transparent";
			headerNav.style.boxShadow = "none";
		}
	});

	// Smooth scroll for navigation
	document.querySelectorAll('nav ul li a').forEach(anchor => {
		anchor.addEventListener('click', function (e) {
			e.preventDefault();
			const targetId = this.getAttribute('href').substring(1);
			const targetElement = document.getElementById(targetId);
			if (targetElement) {
				window.scrollTo({
					top: targetElement.offsetTop - 50,
					behavior: "smooth"
				});
			}
		});
	});
});
// end nav