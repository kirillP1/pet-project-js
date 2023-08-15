window.addEventListener('scroll', e => {
	document.documentElement.style.setProperty('--scrollTop', `${this.scrollY}px`) // Update method
})

function addScrollTo(id_) {
	document.querySelectorAll(`.${id_}-a`).forEach(a => {
		a.addEventListener('click', () => smoother.scrollTo(`#${id_}`, true))
	})
}

addScrollTo('contact')
addScrollTo('goods')
addScrollTo('companies')
addScrollTo('calc')
addScrollTo('form')
addScrollTo('header')

gsap.registerPlugin(ScrollTrigger, ScrollSmoother)
let smoother = ScrollSmoother.create({
	wrapper: '.wrapper',
	content: '.content',
})
