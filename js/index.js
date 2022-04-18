const bookForm = document.querySelector('#book-form');
const booksList = document.getElementById('book-list');
const bookTitle = document.querySelector('#book-title');
const bookAuthor = document.querySelector('#book-author');

const booksData = [];

function AddBook(book) {
  const bookElement = `
 <li class="book">
  <h5>${book.title}</h5>
  <h6>${book.author}</h6>
  <button data-id="${book.id}" class="book-remove">Remove</button>
 </li>`;
  booksList.innerHTML += bookElement;
}

function storageWriter() {
  localStorage.setItem('books', JSON.stringify(booksData));
}

bookForm.addEventListener('submit', () => {
  const book = {
    id: Math.round(Math.random() * 10000000),
    title: bookTitle.value,
    author: bookAuthor.value,
  };
  AddBook(book);
  booksData.push(book);
  storageWriter();
  bookTitle.value = '';
  bookAuthor.value = '';
});

window.addEventListener('load', () => {
  const books = JSON.parse(localStorage.getItem('books'));
  for (let i = 0; i < books.length; i += 1) {
    booksData.push(books[i]);
    AddBook(books[i]);
  }
});

document.addEventListener('click', (e) => {
  const id = e.target.getAttribute('data-id');
  for (let i = 0; i < booksData.length; i += 1) {
    if (booksData[i].id === Number(id)) {
      booksData.splice(i, 1);
      console.log(booksData);
      console.log('ReWrite the storage');
      booksList.innerHTML = '';
      for (let i = 0; i < booksData.length; i += 1) {
        AddBook(booksData[i]);
      }
      storageWriter();
      break;
    }
  }
});