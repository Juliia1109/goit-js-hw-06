function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


const colorEl = document.querySelector('.widget')
console.log(colorEl)
const spanEl = document.querySelector('.color')
console.log(spanEl)
const buttonEl = document.querySelector('.change-color')
console.log(buttonEl )