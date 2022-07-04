import { errorMessage } from "./error.js";

const form = document.getElementById('form');
let books = JSON.parse(localStorage.getItem('books'));

export default class Book {
    constructor(title, author, id) {
      this.title = title;
      this.author = author;
      this.id = id;
    }

  
    addBook() {
      const { title, author, id } = this;
      const bookList = { title, author, id };
      books = JSON.parse(localStorage.getItem('books'));
      if (title === '' || author === '') {
        errorMessage('Kindly fill all inputs');
      } else if (books !== null) {
        books.push(bookList);
        localStorage.setItem('books', JSON.stringify(books));
        books = JSON.parse(localStorage.getItem('books'));
      } else {
        books = [];
        books.push(bookList);
        localStorage.setItem('books', JSON.stringify(books));
        books = JSON.parse(localStorage.getItem('books'));
      }
    }

    remove() {
        const { id } = this;
        books = books.filter((book) => {
          if (book.id === id) {
            return false;
          }
          return true;
        });
    
        localStorage.setItem('books', JSON.stringify(books));
      }
      
}



