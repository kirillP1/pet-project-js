/*document.addEventListener('mousemove', e => {
	document.documentElement.style.setProperty(`--move-x`, `${e.clientX}px`)  
    document.documentElement.style.setProperty(`--move-y`, `${e.clientY}px`)
    console.log(document.documentElement.style.getPropertyValue('--move-x'))
    console.log(document.documentElement.style.getPropertyValue('--move-y'))
})*/
document.querySelectorAll('.cursor').forEach(node => {
    document.addEventListener('mousemove', e =>{
        node.style.cssText = `--move-x: ${e.clientX-200}px; --move-y: ${e.clientY-400}px;`
    })
})
document.querySelectorAll('.magic-list__item').forEach(item => {
    item.addEventListener('click', e => {
        e.preventDefault();
    })

})