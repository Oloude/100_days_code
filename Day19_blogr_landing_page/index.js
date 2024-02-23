const arrowDown = document.querySelectorAll('.arrow')
const nav = document.querySelector('nav')
const menu = document.querySelector('img.menu')
const closeIcon = document.querySelector('.close-icon')

const isSubActive={
    company:false,
    connect:false,
    product:false
}

menu.addEventListener('click', ()=>{
    menu.style.display = 'none'
    nav.style.display = 'flex'
    closeIcon.style.display = 'block'
})
closeIcon.addEventListener('click',()=>{
    menu.style.display = 'block'
    nav.style.display = 'none'
    closeIcon.style.display = 'none'
})

arrowDown.forEach(arrow=>{
    arrow.addEventListener('click', (e)=>{
      let nav =  e.target.id
      isSubActive[nav] = !isSubActive[nav]
      if(isSubActive[nav]){
        e.target.style.rotate = "180deg"
        document.querySelector(`.${nav}-sub`).style.display = 'flex'
      }
      else{
        e.target.style.rotate = "0deg"
        document.querySelector(`.${nav}-sub`).style.display = 'none'
      }
      
    
    })
})

