// Navigation
export const handleLinkClick = (e) => {
  const navLinks = document.getElementsByClassName('nav-link');
  for (let i = 0; i < navLinks.length; i += 1) {
    navLinks[i].style.color = '';
  }

  if (e.target.classList.contains('addNav')) {
    document.querySelector('#add').style.display = 'block';
    e.target.style.color = '#f5f5f5';
    document.querySelector('#contact').style.display = 'none';
    document.querySelector('#book-lists').style.display = 'none';
  }
  if (e.target.classList.contains('contact')) {
    document.querySelector('#contact').style.display = 'flex';
    e.target.style.color = '#f5f5f5';
    document.querySelector('#book-lists').style.display = 'none';
    document.querySelector('.form-section').style.display = 'none';
  }

  if (e.target.classList.contains('list')) {
    document.querySelector('#book-lists').style.display = 'block';
    e.target.style.color = '#f5f5f5';
    document.querySelector('#contact').style.display = 'none';
    document.querySelector('.form-section').style.display = 'none';
  }
};

document.addEventListener('click', (e) => {
  handleLinkClick(e);
});