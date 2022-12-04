const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsList = document.querySelector('#ingredients')
let collectItems = [];

ingredients.map(items => {
    const itemEl = document.createElement('li');
    itemEl.textContent = items;
    itemEl.classList.add('item');
    collectItems.push(itemEl);
  });

ingredientsList.append(...collectItems);