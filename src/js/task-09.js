function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


const bodyEl = document.querySelector('body')

const spanColor = document.querySelector('.color')


bodyEl.addEventListener('click', () => {
  bodyEl.style.backgroundColor = getRandomHexColor()
  spanColor.textContent = getRandomHexColor()
})