const nameInput = document.querySelector('#name')
const number = document.querySelector('#number')
const month = document.querySelector('#month')
const year = document.querySelector('#year')
const cvc = document.querySelector('#cvc')
const cvcNumber = document.querySelector('.cvc-number')
const cardNumber = document.querySelector('.card-number')
const expiryDate= document.querySelector('.expiry-date')
const cardName = document.querySelector('.card-name')
const form = document.querySelector('form')
const formContainer = document.querySelector('section.form')

number.addEventListener('input',validateName)
number.addEventListener('input',validateNumber)
month.addEventListener('input',validateMonth)
year.addEventListener('input',validateYear)
cvc.addEventListener('input',validateCvc)
form.addEventListener('submit', handleFormSubmit)

function validateName(){
    if(!nameInput.value){
        notValid(nameInput, "Can't be blank")
        return false
    }
    if(!/^[a-zA-Z]+(?: [a-zA-Z'-]+)+$/.test(nameInput.value)){
        notValid(nameInput, "Invalid name")
        return false
    }
    else{
        isValid(nameInput)
        return true
    }
}

function validateNumber(){
    if(!number.value){
        notValid(number, "Can't be blank")
        return false
    }
    if(!/^\d{4} \d{4} \d{4} \d{4}$/.test(number.value)){
        notValid(number, "Wrong format numbers only")
        return false
    }
    else{
        isValid(number)
        return true
    }
}

function validateMonth(){
    if(!month.value){
        notValid(month, "Can't be blank")
        return false
    }
    if(!/^(0[1-9]|1[0-2])$/.test(month.value)){
        notValid(month, "Invalid month")
        return false
    }
    else{
        isValid(month)
        return true
    }
}

function validateYear(){
    if(!year.value){
        notValid(year, "Can't be blank")
        return false
    }
    if(!/^\d{2}$/.test(year.value)){
        notValid(year, "Invalid year")
        return false
    }
    else{
        isValid(year)
        return true
    }
}

function validateCvc(){
    if(!cvc.value){
        notValid(cvc, "Can't be blank")
        return false
    }
    if(!/^\d{3}$/.test(cvc.value)){
        notValid(cvc, "Invalid cvc")
        return false
    }
    else{
        isValid(cvc)
        return true
    }
}

function handleFormSubmit(){
    if(!validateCvc() || !validateMonth() || !validateName() || !validateNumber() || !validateYear()){
        return false
    }
else{
    cvcNumber.textContent = cvc.value
    cardName.textContent = nameInput.value
    cardNumber.textContent = number.value
    expiryDate.textContent = `${month.value}/${year.value}`

    formContainer.innerHTML =`
    <div class="gratitude">
    <img src="images/icon-complete.svg">
    <h1>Thank you</h1>
    <p>We have added your card details</p>
    <button>Continue</button>
    </div>
    `
}
}







function isValid(input){
input.style.borderColor = 'hsl(270, 3%, 87%)'
input.nextElementSibling.textContent = ''
}

function notValid(input , msg){
    input.style.borderColor = 'hsl(0, 100%, 66%)'
input.nextElementSibling.textContent = msg
}