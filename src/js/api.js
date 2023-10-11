const BASE_URL = 'https://books-backend.p.goit.global/books/';

export async function fetchCategories() {
  const response = await fetch(`${BASE_URL}category-list`);
  const data = await response.json();
  return data;
}

export async function fetchTopBooks() {
  const response = await fetch(`${BASE_URL}top-books`);
  const data = await response.json();
  return data;
}

export async function fetchBooksByCategory(category) {
  const response = await fetch(`${BASE_URL}category?category=${category}`);
  const data = await response.json();
  return data;
}

export async function fetchBookDetails(bookId) {
  const response = await fetch(`${BASE_URL}${bookId}`);
  const data = await response.json();
  return data;
}
