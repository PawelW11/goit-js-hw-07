const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];
// Wybieramy element ul.gallery
const galleryList = document.querySelector(".gallery");

// Tworzymy łańcuch szablonu HTML, który zawiera wszystkie obrazy i opakowuje je w znaczniki <li>
const galleryHTML = images.map((image) => `
  <li>
    <img src="${image.url}" alt="${image.alt}">
  </li>
`).join("");

// Dodajemy galerię do listy ul.gallery za pomocą insertAdjacentHTML
galleryList.insertAdjacentHTML("beforeend", galleryHTML);