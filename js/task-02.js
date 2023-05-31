const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsEl = document.querySelector('#ingredients');

console.log(ingredientsEl);
ingredients.forEach(element => {
  const addingItem = document.createElement('li');
  addingItem.classList = ('item');
  ingredientsEl.append(addingItem)
  addingItem.textContent = element; 
});






