const form = document.querySelector('form')
const emailInput = document.querySelector('input[type=email]')
const errorMsg = document.querySelector('.error-msg')
const formContainer = document.querySelector('.email')
const subscribeContainer= document.querySelector('.subscribe-newsletter')
const emailValue = document.querySelector('.subscribe-newsletter p span')


form.addEventListener('submit', handleFormSubmit)
emailInput.addEventListener('input', validateEmail)

function validateEmail(){
    if(!emailInput.value){
        errorMsg.textContent = 'Please enter email'
        emailInput.style.borderColor = 'hsl(4, 100%, 67%)'
        return false
    }
    if(!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(emailInput.value)){
        errorMsg.textContent ='Enter valid email'
        emailInput.style.borderColor = 'hsl(4, 100%, 67%)'
        return false
    }
    else{
        errorMsg.textContent =''
        emailInput.style.borderColor = 'hsl(231, 7%, 60%)'
        return true
    }
}

function handleFormSubmit(e){
e.preventDefault()
if(!validateEmail()){
    return false
}
else{
    formContainer.style.display = 'none'
    subscribeContainer.style.display = 'block'
    emailValue.textContent = emailInput.value
    return true
}
}

subscribeContainer.querySelector('button').addEventListener('click',()=>{
    formContainer.style.display = 'flex'
    subscribeContainer.style.display = 'none'
})