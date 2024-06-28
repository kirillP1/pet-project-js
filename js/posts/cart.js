const addCartBtns = document.querySelectorAll('.shop__all-button')
const cartWrapper = document.querySelector('.shop__cart-wrapper')
console.log('c')
updateBtn()

addCartBtns.forEach(btn => {
	btn.addEventListener('click', event => {
		const product = event.target.closest('.shop__product-wrapper')
		const productInfo = {
			id: product.dataset.id,
			imgSrc: product.querySelector('.shop__product-img').getAttribute('src'),
			title: product.querySelector('.shop__item-title').innerText,
			counter: product.querySelector('[data-counter]').innerText,
			price: product.querySelector('.shop__price-currency').innerText,
		}
		console.log(product.id)
		const itemInCart = cartWrapper.querySelector(
			`[data-id="${productInfo.id}"]`
		)
		if (itemInCart) {
			const dataCounter = itemInCart.querySelector('[data-counter]')
			dataCounter.innerText =
				parseInt(dataCounter.innerText) + parseInt(productInfo.counter)
		} else {
			const cartItemHTML = `<div class="cart-item" data-id="${productInfo.id}">
                <div class="cart-item__top">
                    <div class="cart-item__img">
                        <img src="${productInfo.imgSrc}" alt="${productInfo.title}">
                    </div>
                    <div class="cart-item__desc">
                        <div class="cart-item__title">${productInfo.title}</div>

                        <!-- cart-item__details -->
                        <div class="cart-item__details">

                            <div class="items items--small counter-wrapper">
                                <div class="items__control" data-action="minus">-</div>
                                <div class="items__current" data-counter="">${productInfo.counter}</div>
                                <div class="items__control" data-action="plus">+</div>
                            </div>

                            <div class="price">
                                <div class="price__currency">${productInfo.price}</div>
                            </div>

                        </div>
                        <!-- // cart-item__details -->

                    </div>
                </div>
            </div>`
			cartWrapper.insertAdjacentHTML('beforeend', cartItemHTML)
			updateBtn()
			toogleCartStatus()
		}
		calcCartPrice()
	})
})
