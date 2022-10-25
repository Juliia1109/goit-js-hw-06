const inputFontSize  = document.querySelector('#font-size-control')

const spanText = document.querySelector('#text')

inputFontSize.addEventListener('input', event => {
    spanText.style.fontSize = event.currentTarget.value + 'px';
})