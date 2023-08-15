const preloader = document.querySelector('.preloader')
console.log(preloader)
window.addEventListener('load', () => {
	preloader.classList.add('preloader__load')
})
