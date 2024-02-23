const form = document.querySelector('form')
const firstNameInput = document.querySelector('input.firstName')
const lastNameInput = document.querySelector('input.lastName')
const emailInput = document.querySelector('input.email')
const passwordInput = document.querySelector('input.password')
const firstNameErrorMsg = document.querySelector('span.firstName-errorMsg')
const lastNameErrorMsg = document.querySelector('span.lastName-errorMsg')
const emailErrorMsg = document.querySelector('span.email-errorMsg')
const passwordErrorMsg = document.querySelector('span.password-errorMsg')


form.addEventListener('submit', handleFormSubmit)

firstNameInput.addEventListener('input', validateFirstNameInput)
lastNameInput.addEventListener('input', validateLastNameInput)
emailInput.addEventListener('input', validateEmailInput)
passwordInput.addEventListener('input', validatePasswordInput)

function validateFirstNameInput(){
    if(!firstNameInput.value){
        firstNameErrorMsg.textContent = 'First name cannot be empty'
        firstNameInput.parentElement.style.borderColor = 'hsl(0, 100%, 74%)'
        firstNameInput.nextElementSibling.style.display='block'
        return false
    }
    if(!/^(?![A-Za-z]$)[A-Za-z]+$/ig.test(firstNameInput.value)){
        firstNameErrorMsg.textContent = 'Invalid first name'
        firstNameInput.parentElement.style.borderColor = 'hsl(0, 100%, 74%)'
        firstNameInput.nextElementSibling.style.display='block'
        return false
    }
    else{
        firstNameErrorMsg.textContent = ''
        firstNameInput.parentElement.style.borderColor = 'hsl(246, 25%, 93%)'
        firstNameInput.nextElementSibling.style.display='none'
        return true
    }
}

function validateLastNameInput(){
    if(!lastNameInput.value){
        lastNameErrorMsg.textContent = 'Last name cannot be empty'
        lastNameInput.parentElement.style.borderColor = 'hsl(0, 100%, 74%)'
        lastNameInput.nextElementSibling.style.display='block'
        return false
    }
    if(!/^(?![A-Za-z]$)[A-Za-z]+$/ig.test(lastNameInput.value)){
        lastNameErrorMsg.textContent = 'Invalid last name'
        lastNameInput.parentElement.style.borderColor = 'hsl(0, 100%, 74%)'
        lastNameInput.nextElementSibling.style.display='block'
        return false
    }
    else{
        lastNameErrorMsg.textContent = ''
        lastNameInput.parentElement.style.borderColor = 'hsl(246, 25%, 93%)'
        lastNameInput.nextElementSibling.style.display='none'
        return true
    }
}

function validateEmailInput(){
    if(!emailInput.value){
        emailErrorMsg.textContent= 'Email cannot be empty'
        emailInput.parentElement.style.borderColor = 'hsl(0, 100%, 74%)'
       emailInput.nextElementSibling.style.display='block'
        return false
    }
    if(!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/ig.test(emailInput.value)){
        emailErrorMsg.textContent = 'Invalid email'
        emailInput.parentElement.style.borderColor = 'hsl(0, 100%, 74%)'
        emailInput.nextElementSibling.style.display='block'
        return false
    }
    else{
        emailErrorMsg.textContent = ''
        emailInput.parentElement.style.borderColor = 'hsl(246, 25%, 93%)'
        emailInput.nextElementSibling.style.display='none'
        return true
    }
}

function validatePasswordInput(){
    if(!passwordInput.value){
        passwordErrorMsg.textContent= 'Password cannot be empty'
       passwordInput.parentElement.style.borderColor = 'hsl(0, 100%, 74%)'
       passwordInput.nextElementSibling.style.display='block'
        return false
    }
    if(!/^.{6,}$/ig.test(passwordInput.value)){
        passwordErrorMsg.textContent = 'Password must be atleast 6 character long'
        passwordInput.parentElement.style.borderColor = 'hsl(0, 100%, 74%)'
        passwordInput.nextElementSibling.style.display='block'
        return false
    }
    else{
        passwordErrorMsg.textContent = ''
       passwordInput.parentElement.style.borderColor = 'hsl(246, 25%, 93%)'
        passwordInput.nextElementSibling.style.display='none'
        return true
    }
}

function handleFormSubmit(e){
   
    if(!validateEmailInput() || !validateFirstNameInput() || !validateLastNameInput() || !validatePasswordInput()){
        
        return false}

    else{

        return true
    }
}