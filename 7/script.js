// Zadanie 1
document.addEventListener("DOMContentLoaded", () => {
    const items = document.querySelectorAll('#categories > .item');
    console.log(`Number of categories: ${items.length}`);
    
    items.forEach(item => {
        const title = item.querySelector('h2').textContent;
        const elementsCount = item.querySelectorAll('ul li').length;
        console.log(`Kategoria: ${title}, Liczba elementów: ${elementsCount}`);
    });
});

// Zadanie 2
const ingredients = [
    "Potatoes",
    "Mushrooms",
    "Garlic",
    "Tomatoes",
    "Herbs",
    "Condiments"
];

document.addEventListener('DOMContentLoaded', () => {
    const ingredientsList = document.getElementById('ingredients');

    const fragment = document.createDocumentFragment();

    ingredients.forEach(ingredient => {
        const li = document.createElement('li');
        li.textContent = ingredient;
        li.classList.add('item');
        fragment.appendChild(li);
    });

    ingredientsList.appendChild(fragment);
});

// Zadanie 3
const images = [
    {
        url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260",
        alt: "White and Black Long Fur Cat",
    },
    {
        url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260",
        alt: "Orange and White Koi Fish Near Yellow Koi Fish",
    },
    {
        url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260",
        alt: "Group of Horses Running",
    },
];

document.addEventListener('DOMContentLoaded', () => {
    const gallery = document.querySelector('.gallery');

    const galleryItems = images.map(({ url, alt }) => 
        `<li><img src="${url}" alt="${alt}"></li>`
    ).join('');

    gallery.insertAdjacentHTML('beforeend', galleryItems);
});