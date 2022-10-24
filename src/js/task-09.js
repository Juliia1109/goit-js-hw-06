function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


const bodyEl = document.querySelector('body')
console.log(bodyEl)

// const buttonEl = document.querySelector('.change-color')
// console.log(buttonEl)

const spanColor = document.querySelector('.color')
console.log(spanColor)

bodyEl.addEventListener('click', () => {
  // const event = getRandomHexColor()
  bodyEl.style.backgroundColor = getRandomHexColor()
  spanColor.textContent = getRandomHexColor()
})