const booksList = document.getElementById('book-list');

export default function insertBookIntoDom(book) {
  const bookElement = `
      <li class="book">
        <div><strong>"${book.title}"</strong> by ${book.author}</div>
        <button data-id="${book.id}" class="book-remove">Remove</button>
      </li>`;
  booksList.innerHTML += bookElement;
}
