const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
// Wybieramy element ul#ingredients
const ingredientsList = document.querySelector("#ingredients");

// Tworzymy elementy <li> i dodajemy je do listy
ingredients.forEach((ingredient) => {
  // Tworzymy nowy element <li>
  const li = document.createElement("li");

  // Ustawiamy zawartość tekstową elementu <li> na nazwę składnika
  li.textContent = ingredient;

  // Dodajemy klasę "item" do elementu <li>
  li.classList.add("item");

  // Dodajemy element <li> do listy ul#ingredients
  ingredientsList.appendChild(li);
});