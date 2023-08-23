function calcCartPrice() {
	const totalPrice = document.querySelector('.shop__card-total-price')
	let accumulator = 0

	document.querySelectorAll('.cart-item').forEach(item => {
		const dataCounter = parseInt(item.querySelector('[data-counter]').innerText)
		const price = parseInt(item.querySelector('.price__currency').innerText)
		accumulator += dataCounter * price
	})
	totalPrice.innerText = accumulator
	console.log(accumulator)
}
