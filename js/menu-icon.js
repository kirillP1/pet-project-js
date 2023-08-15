const icon = document.querySelector('.menu-icon')
const iconOpen = document.querySelector('.menu-icon__open')
const iconClose = document.querySelector('.navbar__close')
const navbar = document.querySelector('.navbar')
const menuItems = document.querySelectorAll('.navbar__menu-item')

iconOpen.addEventListener('click', () => {
	navbar.classList.add('navbar__active')
})
iconClose.addEventListener('click', () => {
	navbar.classList.remove('navbar__active')
})
menuItems.forEach(item => {
	item.addEventListener('click', () => {
		navbar.classList.remove('navbar__active')
	})
})
window.addEventListener('scroll', () => {
	if (window.scrollY > 100) {
		icon.classList.add('icon__scroll')
	} else {
		icon.classList.remove('icon__scroll')
	}
})
