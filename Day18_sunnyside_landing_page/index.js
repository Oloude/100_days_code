const menu = document.querySelector('.menu ')
const navigation = document.querySelector('nav')
let isActive = false


menu.addEventListener('click', ()=>{
    isActive= !isActive
    if(isActive){
        navigation.style.display = 'flex'
    }else{
        navigation.style.display = 'none'
    }
});
