const menu = document.querySelector('.menu-icon')
const closeIcon = document.querySelector('.close-icon')
const nav = document.querySelector('nav')

menu.addEventListener('click',()=>{
    closeIcon.style.display = 'block'
    nav.style.display = 'flex'
    menu.style.display = 'none'
})

closeIcon.addEventListener('click', ()=>{
    closeIcon.style.display = 'none'
    nav.style.display = 'none'
    menu.style.display = 'block'
})