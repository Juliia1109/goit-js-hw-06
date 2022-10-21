const inputFontSize  = document.querySelector('#font-size-control')
console.log(inputFontSize)
const spanText = document.querySelector('#text')
console.log(spanText)
inputFontSize.addEventListener('input', event => {
    spanText.style.fontSize = event.currentTarget.value + 'px';
})