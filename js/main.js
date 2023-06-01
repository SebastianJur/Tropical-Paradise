const nav = document.querySelector('.nav');
const navBtn = document.querySelector('.burger-btn');
const allNavItems = document.querySelectorAll('.nav__item');
const navBtnBars = document.querySelector('.burger-btn__bars');
const allSections = document.querySelectorAll('.section');
const footerYear = document.querySelector('.footer__year');

const disableScroll = () => {
	document.body.style.overflow = 'hidden';
};

const enableScroll = () => {
	document.body.style.overflow = '';
};

const handleNav = () => {
	nav.classList.toggle('nav--active');

	allNavItems.forEach((item) => {
		item.addEventListener('click', () => {
			nav.classList.remove('nav--active');
			allNavItems.forEach((item) => {
				item.classList.remove('nav-item-animation');
			});
			enableScroll();
		});
	});

	handleNavItemsAnimation();

	if (nav.classList.contains('nav--active')) {
		disableScroll();
		navBtnBars.classList.remove('black-bars-color');
	} else {
		enableScroll();
		navBtnBars.classList.add('black-bars-color');
		handleObserver();
	}
};

const handleNavItemsAnimation = () => {
	let delayTime = 0;

	allNavItems.forEach((item) => {
		item.classList.toggle('nav-item-animation');
		item.style.animationDelay = '.' + delayTime + 's';
		delayTime++;
	});
};

const handleObserver = () => {
	const currentSection = window.scrollY;

	allSections.forEach((section) => {
		if (
			section.classList.contains('white-section') &&
			section.offsetTop <= currentSection + 60
		) {
			navBtnBars.classList.add('black-bars-color');
		} else if (
			!section.classList.contains('white-section') &&
			section.offsetTop <= currentSection + 60
		) {
			navBtnBars.classList.remove('black-bars-color');
		}
	});
};

const handleCurrentYear = () => {
	const year = new Date().getFullYear();
	footerYear.innerText = year;
};

navBtn.addEventListener('click', handleNav);
window.addEventListener('scroll', handleObserver);
handleCurrentYear();
