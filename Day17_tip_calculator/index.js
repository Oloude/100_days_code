const btns = document.querySelectorAll('div.tips button')
const customTip = document.querySelector('div.tips input')
const billInput = document.querySelector('.bill input')
const personInput = document.querySelector('.people-input input')
const tipAmount = document.querySelector('.amount')
const total = document.querySelector('.total-value')
const resetBtn = document.querySelector('.reset')
const error = document.querySelector('span')
let clickedBtnValue = null;
let isTotal = false


billInput.addEventListener('input', validateBillInput)
personInput.addEventListener('input', validatePersonInput)

function validateBillInput(){
    if(!billInput.value){
        billInput.parentElement.style.borderColor = "red"
        return false
    }
    else{
        billInput.parentElement.style.borderColor = "hsl(172, 67%, 45%)"
        return true
    }
}

function validatePersonInput(){
    if(!personInput.value){
        isInvalid(personInput, "Cant be empty")
        return false
    }
    if(personInput.value ==='0'){
        isInvalid(personInput, "Cant be zero")
        return false
    }
    else{ 
  isValid(personInput)
  return true
    }
}



function isValid(input){
    input.parentElement.style.borderColor = "hsl(172, 67%, 45%)"
    error.textContent = ''
}

function isInvalid(input, msg){
    input.parentElement.style.borderColor = "red"
    error.textContent = msg
}

 btns.forEach(btn=>{
    btn.addEventListener('click', (e)=>{
        clickedBtnValue = e.target.textContent;
    })
})



function checkValidation() {
    const billValid = validateBillInput();
    const personValid = validatePersonInput();
    const tipValue = clickedBtnValue? clickedBtnValue.slice(0,-1): '' || customTip.value

    if (billValid && personValid && (clickedBtnValue || customTip.value)) {
        tip = (Number(billInput.value) * Number(tipValue))/100
        tipAmount.textContent = "$"+(tip/Number(personInput.value)).toFixed(2)
        total.textContent = "$"+((tip + Number(billInput.value))/Number(personInput.value)).toFixed(2)
        return true
    }
    else{
        return false
    }
}

resetBtn.addEventListener('click', ()=>{
    checkValidation()
})

resetBtn.addEventListener('dblclick', ()=>{
    tipAmount.textContent = '$0.00'
    total.textContent = '$0.00'
    clickedBtnValue= null
    customTip.value= ''
    billInput.value=''
    personInput.value=''
})