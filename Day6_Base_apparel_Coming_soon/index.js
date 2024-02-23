const form = document.querySelector('form')
const errorIcon = document.querySelector('.error-icon')
const errorMsg = document.querySelector('.error-msg')
const errorDiv = document.querySelector('.email-input')
const input = document.querySelector('.email-input input')


form.addEventListener('submit', handleSubmit)

function validatdEmail(){
if(!input.value.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)){
    errorMsg.textContent = 'Please provide a valid email'
    errorDiv.style.borderColor= 'red'
    errorIcon.style.display = "block"
    return false
}
else{
    errorMsg.textContent = ''
    errorDiv.style.borderColor= 'hsl(0, 36%, 70%)'
    errorIcon.style.display = "none"
    return true
}
}

function handleSubmit(event){
    event.preventDefault();
    if(!validatdEmail())return false
    return true 
}
