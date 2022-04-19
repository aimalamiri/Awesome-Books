const booksList = document.getElementById('book-list');
import insertBookIntoDom from './utilties.js';

export default class Library {
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
      }
    }
  }

  load() {
    const booksData = this.#getFromStorage();
    if (booksData) {
      for (let i = 0; i < booksData.length; i += 1) {
        this.books.push(booksData[i]);
        insertBookIntoDom(booksData[i]);
      }
    }
  }
}
