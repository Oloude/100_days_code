const btns = document.querySelectorAll('.btns-rating button')
const submitBtn = document.querySelector('.accent')
const container = document.querySelector('.container')
let rating

btns.forEach(btn=>{
    btn.addEventListener('click',handleReviewBtnClick)
})

function handleReviewBtnClick(event){
  rating = event.target.dataset.rating
   
}

submitBtn.addEventListener('click', handleSubmitBtn)

function handleSubmitBtn(){
container.innerHTML = `

<div class='review-message-container'>
<div>
    <img src="./images/illustration-thank-you.svg" alt="illustration-thank-you">
</div>
<div class="review-message"><p>You selected ${rating} out of 5</p></div>
<h2>Thank you!</h2>
<p>We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!</p>
</div>


`
}





