const inputs = document.querySelectorAll('.calc input')
const formatter = new Intl.NumberFormat('ru')


const totalPrice = document.querySelector('#total-price')

const radioType = document.querySelectorAll('input[name="type"]')
const radioMaterials= document.querySelectorAll('input[name="materials"]')
const radioMaterialsNak = document.querySelectorAll('input[name="materials-nak"]')
const radioMaterialsKorp = document.querySelectorAll('input[name="materials-korp"]')
const radioMaterialsRoof = document.querySelectorAll('input[name="roof"]')
const radioPokrit = document.querySelectorAll('input[name="pokrit"]')
const radioColorFur = document.querySelectorAll('input[name="color-fur"]')
const radioSoundConf = document.querySelectorAll('input[name="sound-conf"]')
const radioMaterialsTop = document.querySelectorAll('input[name="materials-top"]')

const raioTypeLabel = document.querySelectorAll('.calc__radio-wrapper-type')

const prevBtn = document.querySelector('.calc__prev-button')
const nextBtn = document.querySelector('.calc__next-button')
const calcSections = document.querySelectorAll('.calc__section')




/*******TOTAL-PRICE */
let countPrice = 0
for (const radio of radioType){
    radio.checked ? countPrice = parseFloat(radio.value) : countPrice
}
totalPrice.innerText = formatter.format(countPrice)


function radioBut(countPrice, radioAll){
    for (const radio of radioAll){
        radio.checked ? countPrice *= parseFloat(radio.value) : countPrice
    }
    return countPrice
}

for (const input of inputs)[
    input.addEventListener('input', () => {
        for (const radio of radioType){
            radio.checked ? countPrice = parseFloat(radio.value) : countPrice
        }
        console.log(countPrice);
        countPrice = radioBut(countPrice, radioMaterials)
        countPrice = radioBut(countPrice, radioMaterialsNak)
        countPrice = radioBut(countPrice, radioMaterialsKorp)
        countPrice = radioBut(countPrice, radioMaterialsRoof)
        countPrice = radioBut(countPrice, radioPokrit)
        countPrice = radioBut(countPrice, radioColorFur)
        countPrice = radioBut(countPrice, radioSoundConf)
        
        totalPrice.innerText = formatter.format(parseInt(countPrice))
    })
]

/****GUITAR-CHOICE*****/
for (const label of raioTypeLabel){
    label.addEventListener('click', ()=>{
        raioTypeLabel.forEach((l)=>l.classList.remove('calc__radio-wrapper-type-active'))
        label.classList.add('calc__radio-wrapper-type-active')
    })
}

/*******MULTI-STEP*******/
let formStepsNum = 0
visibleButton()
function updateFormSteps(){
    calcSections.forEach((section)=>{
        section.classList.remove('calc__section-active')
    })
    calcSections[formStepsNum].classList.add('calc__section-active')
}
function visibleButton(){
    prevBtn.style.display = 'inline-block'   
    nextBtn.style.display = 'inline-block'
    if(formStepsNum == 0){
        prevBtn.style.display = 'none'
    }else if(formStepsNum+1 === calcSections.length){
        nextBtn.style.display = 'none'       
    }
}


prevBtn.addEventListener('click', (e)=>{
    e.preventDefault()
    formStepsNum--
    updateFormSteps()
    visibleButton()
})
nextBtn.addEventListener('click', (e)=>{
    e.preventDefault()
    formStepsNum++
    updateFormSteps()
    visibleButton()
})