const form = document.querySelector('#form')
const emailInput = document.querySelector('.required')
const buttonEmail = document.querySelector('.button-email')
const spanEmail = document.querySelector('.span-required')
const spanEmailValidate = document.querySelector('.span-email')
const firstSection = document.querySelector('.first-section')
const secondSection = document.querySelector('.second-section')
const emailRegex = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/
function setError(){
    emailInput.style.border = '2px solid #e63636'
    spanEmail.style.display = 'block'
}
function removeError() {
    emailInput.style.border = 'none'
    spanEmail.style.display = 'none'
}
function emailValidate(){
     if(emailRegex.test(emailInput.value) == false){
        setError()
    }else{
        removeError()
    }
}
buttonEmail.addEventListener('click', (ev) => {
    if(emailRegex.test(emailInput.value) == true){
     const valueEmail = emailInput.value
     spanEmailValidate.innerText = valueEmail
     firstSection.style.display = 'none'
     secondSection.style.display = 'block'

    }else{
        alert('Tente novamente')
    }
    

})

    




//     section confirmation validate 
