const toTop = document.querySelector('.to-top')

window.addEventListener('scroll', () => {
	console.log('d')
	if (window.scrollY > 500) {
		toTop.classList.add('to-top__scroll')
	} else {
		toTop.classList.remove('to-top__scroll')
	}
})
