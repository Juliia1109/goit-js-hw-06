const inputType = document.querySelector('#validation-input')
console.log(inputType)
const dataLength = inputType.getAttribute('data-length') 
console.log(dataLength)

inputType.addEventListener('blur', event => {
    if (event.currentTarget.value.length == dataLength) {
        event.currentTarget.classList.add('valid')
        event.currentTarget.classList.remove('invalid')
    } else {
        event.currentTarget.classList.remove('valid')
        event.currentTarget.classList.add('invalid')
    }
})