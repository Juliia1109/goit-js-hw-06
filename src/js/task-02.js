const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];



const ingredient = document.querySelector(`#ingredients`)
console.log(ingredient)
const result = ingredients
  .map((element) => 
    `<li class ='item'>${element}</li>`
).join('\n')
  console.log(result)
ingredient.innerHTML = result;