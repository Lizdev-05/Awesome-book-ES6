export const errorMessage = (message) => {
    document.querySelector('.error').textContent = message;
    setTimeout(() => {
      document.querySelector('.error').textContent = '';
    }, 4000);
  }
  