// index.js

import { fetchCategories, fetchBooksByCategory } from './api.js';
import { createCategoryList, createBookList } from './category-markup.js';

const categoryListElement = document.querySelector('.category-list');

async function loadBooksByCategory(category) {
  try {
    const books = await fetchBooksByCategory(category);
    createBookList(books);
  } catch (error) {
    console.error('Error loading books:', error);
  }
}

async function initializeApp() {
  try {
    // Load categories
    const categories = await fetchCategories();
    createCategoryList(categories);

    // Event listener for category clicks
    categoryListElement.addEventListener('click', event => {
      if (event.target.classList.contains('category-item')) {
        const selectedCategory = event.target.dataset.category;
        loadBooksByCategory(selectedCategory);
      }
    });
  } catch (error) {
    console.error('Error initializing app:', error);
  }
}

initializeApp();
