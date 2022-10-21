function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


const refs = {
  colorEl:document.querySelector('.widget'),
  spanEl:document.querySelector('.color'),
  buttonEl:document.querySelector('.change-color'),
}


// const colorEl = document.querySelector('.widget')
console.log(refs.colorEl)
// const spanEl = document.querySelector('.color')
console.log(refs.spanEl)
// const buttonEl = document.querySelector('.change-color')
console.log(refs.buttonEl )