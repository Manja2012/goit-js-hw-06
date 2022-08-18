const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const list = document.querySelector("#ingredients");
const arrayOfLi = [];
ingredients
  .forEach((ingredient) => {
  const newLi = document.createElement("li");
  newLi.classList.add("item");
  newLi.textContent = ingredient;
  arrayOfLi.push(newLi);
})
list.append(...arrayOfLi);