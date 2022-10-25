const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const ingredientsEl = document.querySelector('#ingredients')



const makeAnItemEl = (element) => {

const listItemEl = document.createElement('li');

  listItemEl.classList.add('item');
  listItemEl.textContent = element;
return listItemEl;
};

const itemEl  = ingredients .map(el => makeAnItemEl(el));

ingredientsEl.append(...itemEl);
