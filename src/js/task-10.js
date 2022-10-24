function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const div1 = document.querySelector('#controls')
console.log(div1)
const div2 = document.querySelector('#boxes')
console.log(div2)
const buttonCreate = document.querySelector('[data-create]')
console.log(buttonCreate)
const buttonDestroy = document.querySelector('[data-destroy]')
console.log(buttonDestroy)
const input = document.querySelector('input')
console.log(input)

function createBoxes(amount) {
  // let event = getRandomHexColor()
  const createElements = []
for (let i = 0; i < amount; i++) {
   const divEl = document.createElement('div');
  // console.log(divEl)
  divEl.style.width = '30px'
  divEl.style.height = '30px'
  divEl.style.backgroundColor = getRandomHexColor();
  createElements.push(divEl)
  
}
 return createElements
}
const elements = createBoxes(div1)
div1.append(...elements)


// function destroyBoxes() {

  
// }