const menu= document.querySelector('.menu')
const closeIcon= document.querySelector('.close-icon')
const nav = document.querySelector('nav')
const arrowDown = document.querySelectorAll('.arrow-down')
const featureSub = document.querySelector('.feature-sub')
const companySub =document.querySelector('.company-sub')

let isFeatureActive = false
let isCompanyActive = false


menu.addEventListener('click', ()=>{
    nav.style.display = 'flex'
})
closeIcon.addEventListener('click',()=>{
    nav.style.display = 'none'
})

arrowDown.forEach(arrow=>{
arrow.addEventListener('click', (e)=>{
    if(e.target.id === 'feature'){
       isFeatureActive = !isFeatureActive
       if(isFeatureActive){
        e.target.src = 'images/icon-arrow-up.svg'
        featureSub.style.display= 'flex'
       }else{
        e.target.src = 'images/icon-arrow-down.svg'
        featureSub.style.display= 'none'
       }
    }
    if(e.target.id === 'company'){
        isCompanyActive = !isCompanyActive
        if(isCompanyActive){
         e.target.src = 'images/icon-arrow-up.svg'
         companySub.style.display= 'flex'
        }else{
         e.target.src = 'images/icon-arrow-down.svg'
         companySub.style.display= 'none'
        }
     }
})
})






