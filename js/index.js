const bookForm = document.querySelector('#book-form');
const bookTitle = document.querySelector('#book-title');
const bookAuthor = document.querySelector('#book-author');

const booksList = [];

bookForm.addEventListener('submit', () => {
  const book = {
    id: Math.round(Math.random() * 10000000),
    title: bookTitle.value,
    author: bookAuthor.value,
  };

  booksList.push(book);
  bookTitle.value = '';
  bookAuthor.value = '';
})
