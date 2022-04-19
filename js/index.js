const bookForm = document.querySelector('#book-form');
const booksList = document.getElementById('book-list');
const bookTitle = document.querySelector('#book-title');
const bookAuthor = document.querySelector('#book-author');

function insertBookIntoDom(book) {
  const bookElement = `
      <li class="book">
        <h5>${book.title}</h5>
        <h6>${book.author}</h6>
        <button data-id="${book.id}" class="book-remove">Remove</button>
      </li>`;
  booksList.innerHTML += bookElement;
}

class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
    this.id = Math.round(Math.random() * 10000000);
  }
}

class Library {
  constructor() {
    this.books = [];
  }

  #saveIntoStorage() {
    localStorage.setItem('books', JSON.stringify(this.books));
  }

  #getFromStorage() {
    return JSON.parse(localStorage.getItem('books'));
  }

  addBook(book) {
    this.books.push(book);
    insertBookIntoDom(book);
    this.#saveIntoStorage();
  }

  removeBook(id) {
    for (let i = 0; i < this.books.length; i += 1) {
    if (this.books[i].id === Number(id)) {
      this.books.splice(i, 1);
      booksList.innerHTML = '';
      for (let i = 0; i < this.books.length; i += 1) {
        insertBookIntoDom(this.books[i]);
      }
      this.#saveIntoStorage();
      break;
  }}}

  load() {
    const booksData = this.#getFromStorage();
    if (booksData) {
      for (let i = 0; i < booksData.length; i += 1) {
        this.books.push(booksData[i]);
        insertBookIntoDom(booksData[i]);
      }
    }}
  
}

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