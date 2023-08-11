const closeBtn = document.querySelector('.popup__close-btn')
const popup = document.querySelector('.popup')
const button = document.querySelector('.contact__all-button')

closeBtn.addEventListener('click', ()=>{
    popup.classList.remove('popup__active')
})

button.addEventListener('click', ()=>{
    popup.classList.add('popup__active')
})
