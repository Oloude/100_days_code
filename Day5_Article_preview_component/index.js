const shareBtn = document.querySelector('.share-btn')
let isActive = false

shareBtn.addEventListener('click', handleShareBtnClick)
window.addEventListener('load', ()=>{
  shareBtn.previousElementSibling.style.display='none'
})


function handleShareBtnClick(){
isActive =!isActive
if(isActive){
    shareBtn.parentElement.classList.add('btns')
    shareBtn.previousElementSibling.classList.add('hidden-icons')
    shareBtn.previousElementSibling.children[0].classList.add('active')
    shareBtn.previousElementSibling.style.display ='flex'
   
}else{
    shareBtn.parentElement.classList.remove('btns')
    shareBtn.previousElementSibling.classList.remove('hidden-icons')
    shareBtn.previousElementSibling.style.display ="none"
   
}
}