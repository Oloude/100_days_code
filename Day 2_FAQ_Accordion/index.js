const article = document.querySelectorAll('article')
const articleText = document.querySelectorAll('.article-content-div')
const btns = document.querySelectorAll('.icon-toggle')

let isActive = false

window.addEventListener('load', ()=>{
    articleText.forEach(item =>{
        item.classList.add('hide')
         
    })
    articleText[0].classList.remove('hide')
    articleText[0].classList.add('active')
    btns[0].src = "./images/icon-minus.svg"
})

btns.forEach(btn=>{
    btn.addEventListener('click', handleBtnClick)
})

btns.forEach(btn=>{
    btn.addEventListener('dblclick', handleBtnDblClick)
})

function handleBtnDblClick(e){
isActive = false
e.target.parentElement.nextElementSibling.classList.add('hide')
e.target.parentElement.nextElementSibling.classList.remove('active')
e.target.src = "./images/icon-plus.svg"
}

function handleBtnClick(e){
    isActive = true
  articleText.forEach(item=>{
    item.classList.remove("active")
    item.classList.add('hide')
   btns.forEach(btn => {
    btn.src = "./images/icon-plus.svg"
   });
  })
  if(isActive){
    e.target.parentElement.nextElementSibling.classList.add('active')
    e.target.parentElement.nextElementSibling.classList.remove('hide')
    e.target.src = "./images/icon-minus.svg"  
  }
 
}


