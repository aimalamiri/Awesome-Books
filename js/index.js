const bookForm = document.querySelector("#book-form");
const booksList = document.getElementById("book-list");
const bookTitle = document.querySelector("#book-title");
const bookAuthor = document.querySelector("#book-author");

const booksData = [];

bookForm.addEventListener("submit", () => {
  const book = {
    id: Math.round(Math.random() * 10000000),
    title: bookTitle.value,
    author: bookAuthor.value,
  };
AddBook(book)
  booksData.push(book);
  bookTitle.value = "";
  bookAuthor.value = "";
});

function AddBook (book) {
  const bookElement = `
 
 <li>
 <h2>${book.title}<h2/>
 <span>${book.author}<span/>
 <button data-id="book.id" class="remove">Remove<button/>
 <li/> `;
 booksList.innerHTML += bookElement;
}