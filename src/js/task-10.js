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

div1.addEventListener("click", createBoxes);


function createBoxes(amount) {
  let event = getRandomHexColor()
  const createElements = []
for (let i = 0; i < amount; i++) {
   const divEl = document.createElement('div');
  // console.log(divEl)
  divEl.style.width = '30px' + '10px';
  divEl.style.height = '30px' + '10px';
  divEl.style.backgroundColor = event;
  createElements.push(divEl)
  
}

  div1.append(...createElements)
   return createElements
}




function destroyBoxes() {

  
}