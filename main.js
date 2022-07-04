// import Book from "./modules/add.js";
import { displayBooks } from "./modules/display.js";
import { handleLinkClick } from "./modules/spa.js";
import * as dateTime from "./modules/date.js"




// Setting date
 document.getElementById('timeDisplay').innerHTML = `
 <p class="date"> ${dateTime.date}</p>
 <p class="time">${dateTime.hour}:${dateTime.min}:${dateTime.sec}</p>
 `;


// Getting books from local storage
let books = JSON.parse(localStorage.getItem('books'));
if (books !== null) {
    books.forEach((book) => {
      displayBooks(book.title, book.author, book.id);
    });
  }

// Single page navigation
  const nav = document.querySelectorAll(".nav-link")
  nav.forEach(el =>{
 el.addEventListener('click', (e) =>{
    handleLinkClick(e);
}
  )})

