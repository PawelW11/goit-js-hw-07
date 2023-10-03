// Wybieramy element ul#categories
const categoriesList = document.querySelector("#categories");

// Znajdujemy wszystkie elementy li.item wewnątrz ul#categories
const categoryItems = categoriesList.querySelectorAll("li.item");

// Liczymy liczbę kategorii
const numberOfCategories = categoryItems.length;
console.log('Number of categories:', numberOfCategories);

// Iterujemy przez każdy element li.item i wyświetlamy informacje o kategorii
categoryItems.forEach((categoryItem) => {
  // Znajdujemy tytuł kategorii (tag h2)
  const categoryTitle = categoryItem.querySelector("h2").textContent;

  // Znajdujemy wszystkie elementy li wewnątrz aktualnej kategorii
  const categoryElements = categoryItem.querySelectorAll("li");

  // Liczymy liczbę elementów w kategorii
  const numberOfElements = categoryElements.length;

  // Wyświetlamy informacje o kategorii w konsoli
  console.log('Category:', categoryTitle);
  console.log('Elements:', numberOfElements);
});
