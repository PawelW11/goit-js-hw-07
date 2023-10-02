// Wybieramy element ul#categories
const categoriesList = document.getElementById("categories");

// Znajdujemy wszystkie elementy li.item
const categoryItems = categoriesList.querySelectorAll("li.item");

// Liczymy liczbę kategorii
const numberOfCategories = categoryItems.length;

// Wyświetlamy liczbę kategorii w konsoli
console.log("Number of categories: " + numberOfCategories);

// Iterujemy przez każdy element li.item
categoryItems.forEach((categoryItem) => {
  // Znajdujemy tytuł kategorii (element h2)
  const categoryTitle = categoryItem.querySelector("h2").textContent;

  // Znajdujemy wszystkie elementy li w danej kategorii
  const categoryElements = categoryItem.querySelectorAll("ul li");

  // Liczymy liczbę elementów w kategorii
  const numberOfElements = categoryElements.length;

  // Wyświetlamy informacje o kategorii w konsoli
  console.log("Category: " + categoryTitle);
  console.log("Elements: " + numberOfElements);
});