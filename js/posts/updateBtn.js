function updateBtn() {
	let plusBtns = document.querySelectorAll('[data-action="plus"]')
	let minusBtns = document.querySelectorAll('[data-action="minus"]')
	plusBtns.forEach(btn => {
		btn.addEventListener('click', () => {
			const shopItem = btn.parentNode.querySelector('.items__current')
			shopItem.innerText = parseInt(shopItem.innerText) + 1
			calcCartPrice()
		})
	})
	minusBtns.forEach(btn => {
		btn.addEventListener('click', () => {
			const shopItem = btn.parentNode.querySelector('.items__current')

			if (parseInt(shopItem.innerText) > 1) {
				shopItem.innerText = parseInt(shopItem.innerText) - 1
			} else {
				if (btn.closest('.cart-item')) {
					btn.closest('.cart-item').remove()
					toogleCartStatus()
				}
			}
			calcCartPrice()
		})
	})
}
