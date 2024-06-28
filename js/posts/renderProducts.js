const productsContainer = document.querySelector('#shop__products-container')

async function getProducts() {
	const response = await fetch('./js/posts/products.json')
	const productsArray = await response.json()
	console.log(response)
	renderProducts(productsArray)
}
getProducts()
function renderProducts(productsArray) {
	const productsHTML = productsArray.map(product => {
		return `<div class="shop__product-wrapper" data-id='${product.id}'>
				<div class="shop__product" >
						<img src="${product.imgSrc}"
								class="shop__product-img">
						<div class="shop__card-body">
								<h4 class="shop__item-title">
										${product.title}
								</h4>
								<div class="shop__details-wrapper">
										<!-- Счетчик -->
										<div class="shop__items shop-counter-wrapper">
												<div class="shop__items-control items__control" data-action="minus">-</div>
												<div class="shop__items-current items__current" data-counter>${product.counter}</div>
												<div class="shop__items-control items__control" data-action="plus">+</div>
										</div>
										<!-- // Счетчик -->

										<div class="shop__price">
												<div class="shop__price-currency">${product.price} ₽</div>
										</div>
								</div>
								<button data-cart="" type="button" class="all-button shop__all-button">
										+ в корзину
								</button>
						</div>
				</div>
		</div>`
	})
	productsContainer.innerHTML += productsHTML.join('')
}
