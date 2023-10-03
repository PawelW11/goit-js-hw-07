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

// Wykorzystujemy map() do przekształcenia tablicy ingredients w tablicę elementów <li>
const ingredientsArr = ingredients.map((ingredient) => {
  // Tworzymy nowy element <li>
  const li = document.createElement("li");

  // Ustawiamy zawartość tekstową elementu <li> na nazwę składnika
  li.textContent = ingredient;

  // Dodajemy klasę "item" do elementu <li>
  li.classList.add("item");

  return li; // Zwracamy element <li> z map()
});

// Dodajemy wszystkie elementy <li> do listy ul#ingredients w jednej operacji
ingredientsList.append(...ingredientsArr);
