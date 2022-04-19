const bookForm = document.querySelector('#book-form');
const bookTitle = document.querySelector('#book-title');
const bookAuthor = document.querySelector('#book-author');

import Book from './Book.js';
import Library from './Library.js';

const library = new Library();

bookForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const book = new Book(bookTitle.value, bookAuthor.value);
  library.addBook(book);
  bookTitle.value = '';
  bookAuthor.value = '';
});

window.addEventListener('load', () => {
  library.load();
});

document.addEventListener('click', (e) => {
  const id = e.target.getAttribute('data-id');
  library.removeBook(id);
});
