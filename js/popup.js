const closeBtn = document.querySelector('.popup__close-btn')
const popup = document.querySelector('.popup')
const buttons = document.querySelectorAll('.contact__all-button')


closeBtn.addEventListener('click', ()=>{
    popup.classList.remove('popup__active')
})
    
for (button of buttons){
    button.addEventListener('click', (e)=>{
        console.log('b');
        e.preventDefault()
        popup.classList.add('popup__active')
    })
}
