import Book from './add.js';
// Function for displaying books
/* eslint-disable no-undef */

export const displayBooks = (title, author, id) => {
  const bookList = document.querySelector('.book-list');
  const items = document.createElement('li');
  items.innerHTML += `
    <div class="title-div"><h2><q>${title}</q></h2>
    <h2> by </h2>
    <h2> ${author}</h2></div>
       `;
  const removeBtn = document.createElement('button');
  removeBtn.textContent = 'Remove';
  removeBtn.className = 'removeBtn';
  items.appendChild(removeBtn);
  bookList.appendChild(items);

  removeBtn.addEventListener('click', () => {
    const book = new Book(title, author, id);
    id = removeBtn.id;
    book.remove();
    items.remove();
  });
};

document.addEventListener('DOMContentLoaded', () => {
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const id = Date.now();
    const book = new Book(title, author, id);
    book.addBook();
    if (title && author) {
      displayBooks(book.title, book.author, book.id);
    }
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
  });
});
