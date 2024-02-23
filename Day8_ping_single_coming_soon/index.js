const form = document.querySelector('form')
const errorMsg = document.querySelector('.form-input span')
const emailInput = document.querySelector('.form-input input')


form.addEventListener('submit', handleFormSubmit)
emailInput.addEventListener('input', validateEmail)

function validateEmail(){
    let pattern = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/ig;
    if(!emailInput.value){
        errorMsg.textContent = 'please enter an email'
       emailInput.style.borderColor = 'hsl(354, 100%, 66%)'
     return false
    }
    if(!pattern.test(emailInput.value)){
        errorMsg.textContent = 'please enter a valid email'
       emailInput.style.borderColor = 'hsl(354, 100%, 66%)'
     return false
    }
    else{
        errorMsg.textContent = ''
       emailInput.style.borderColor = ' hsl(223, 100%, 88%)'
     return true
    }
}

function handleFormSubmit(e){
    e.preventDefault()
    if(!validateEmail()){
        return false
    }
    return true
}
















