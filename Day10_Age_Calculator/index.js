const ageDay = document.querySelector('.age-day ')
const ageMonth = document.querySelector('.age-month ')
const ageYear = document.querySelector('.age-year ')
const dayInput = document.querySelector('.day input')
const monthInput = document.querySelector('.month input')
const yearInput = document.querySelector('.year input')
const btn = document.querySelector('img')



dayInput.addEventListener('input', validateDay)
monthInput.addEventListener('input', validateMonth)
yearInput.addEventListener('input', validateYear)
btn.addEventListener('click', age)

function validateDay(){
if(!dayInput.value){
 notValid(dayInput, 'Please day cant be empty')
 return false
}
if(!/^(0?[1-9]|[12][0-9]|3[01])$/.test(dayInput.value)){
   notValid(dayInput, 'Must be a valid day')
  return false
}
else{
  valid(dayInput)
  return true
}
}

function validateMonth(){
    const numericMonth = parseInt(monthInput.value, 10);
    const numericDay = parseInt(dayInput.value, 10);

    if(!monthInput.value){
      notValid(monthInput, 'Please month cant be empty')
      return false
    }
    if(!/^(0?[1-9]|1[0-2])$/.test(monthInput.value)){
      return  notValid(monthInput, 'Must be a valid month')
    }
    if((numericMonth === 9 || numericMonth === 4 || numericMonth === 6 || numericMonth === 11) && numericDay > 30){
      notValid(monthInput, 'This month is not valid')
      return false
    }
    if((numericMonth === 2) && numericDay > 29){
      notValid(monthInput, 'This month is not valid')
      return false
    }
    else{
       valid(monthInput)
       return true
    }
}


function validateYear(){
    const numericYear = parseInt(yearInput.value, 10);
    const numericMonth = parseInt(monthInput.value, 10);
    const numericDay = parseInt(dayInput.value, 10);

    if(!yearInput.value){
       notValid(yearInput, "Year can't be empty")
       return false
    }
    if(!/^\d{4}$/.test(yearInput.value)){
      notValid(yearInput, 'Must be valid year')
      return false
    }
    if(numericMonth ===2 && numericDay ===29){
        if ((numericYear % 4 === 0 && numericYear % 100 !== 0) || (numericYear % 400 === 0)) {
          valid(yearInput); // Valid leap year date
          return true
          } else {
            notValid(yearInput, 'This not leap year'); // Not a leap year
            return false
          }
    }
    else{
       valid(yearInput)
       return true
    }
}
  

function notValid(input,msg){
input.style.borderColor = 'hsl(0, 100%, 67%)'
input.nextElementSibling.textContent = msg
input.previousElementSibling.style.color =' hsl(0, 100%, 67%)'
return false
}

function valid(input){
    input.style.borderColor = 'hsl(0, 0%, 86%)'
    input.nextElementSibling.textContent = ''
    input.previousElementSibling.style.color = 'hsl(0, 1%, 44%)'
    return true
}

function age(){

    if(!validateDay() || !validateMonth() || !validateYear()){
   
        return false
    }
    else{
       const birthAge = `${yearInput.value}-${monthInput.value}-${dayInput.value}`
       const age = calculateAge(birthAge)
      


       ageDay.querySelector('p').textContent = age.days < 2 ? 'day' : 'days'
       ageMonth.querySelector('p').textContent = age.months < 2 ? 'month' : 'months'
       ageYear.querySelector('p').textContent = age.years < 2 ? 'year' : 'years'
      
       ageDay.querySelector('span').textContent = age.days
       ageMonth.querySelector('span').textContent = age.months
       ageYear.querySelector('span').textContent = age.years
       return true
    }  
}

function calculateAge(birthdate) {
    const birthDate = new Date(birthdate);
    const currentDate = new Date();
  
    let years = currentDate.getFullYear() - birthDate.getFullYear();
    let months = currentDate.getMonth() - birthDate.getMonth();
    let days = currentDate.getDate() - birthDate.getDate();
  
    // Adjust negative values
    if (days < 0) {
        const lastMonthDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), 0).getDate();
        days += lastMonthDate;
        months--;
    }
  
    // Adjust negative values for months
    if (months < 0) {
        months += 12;
        years--;
    }

    return { years, months, days };
}
