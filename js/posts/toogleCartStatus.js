const alert = document.querySelector('[role="alert"]')
const orderForm = document.querySelector('#order-form')
function toogleCartStatus() {
	const cartWrapper = document.querySelector('.shop__cart-wrapper')

	if (cartWrapper.children.length > 0) {
		alert.style.display = 'none'
		orderForm.style.display = 'block'
	} else {
		alert.style.display = 'block'
		orderForm.style.display = 'none'
	}
}
