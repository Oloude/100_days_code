const countNumber = document.querySelector('header > div p')
const markRead = document.querySelector('header > p')
const articles = document.querySelectorAll('article')

const isArticleClicked={
    1:false,
    2:false,
    3:false,
    4:false,
    5:false,
    6:false,
    7:false
}



articles.forEach(article =>{
    article.addEventListener('click', (e)=>{
  isArticleClicked[e.currentTarget.id] = !isArticleClicked[e.currentTarget.id]
  if(isArticleClicked[e.currentTarget.id]){
e.currentTarget.style.backgroundColor = 'hsl(0, 0%, 100%)'
countNumber.textContent = countNumber.textContent-1
e.currentTarget.querySelector('h2 p').classList.remove('unread')
  }else{
    e.currentTarget.style.backgroundColor = 'hsl(210, 60%, 98%)'
    e.currentTarget.querySelector('h2 p').classList.add('unread')
    countNumber.textContent = `${Number(countNumber.textContent) + 1}`
  }
    })
})

markRead.addEventListener('click',()=>{
articles.forEach((article, index)=>{
    isArticleClicked[index+1] = true
    article.style.backgroundColor = 'hsl(0, 0%, 100%)'
    countNumber.textContent = 0
    article.querySelector('h2 p').classList.remove('unread')
})
})