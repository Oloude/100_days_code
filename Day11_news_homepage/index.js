const menuIcon = document.querySelector('.menu-icon')
const closeIcon = document.querySelector('.close-icon')
const nav = document.querySelector('nav')
const body = document.querySelector('body')

menuIcon.addEventListener('click', ()=>{
nav.style.display = 'flex'
body.classList.add('overlay')
})
closeIcon.addEventListener('click',()=>{
    nav.style.display ='none'
    body.classList.remove('overlay')
})

Soft orange: hsl(35, 77%, 62%)
- Soft red: hsl(5, 85%, 63%)

### Neutral

Off-white: hsl(36, 100%, 99%)
Grayish blue: hsl(233, 8%, 79%)
Dark grayish blue: hsl(236, 13%, 42%)
Very dark blue: hsl(240, 100%, 5%)

