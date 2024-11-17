const first_button = document.getElementById('button-first');
const second_button = document.getElementById('button-second');

const first_page = document.getElementById('first-page');
const second_page = document.getElementById('second-page');

const email = document.getElementById('email');
const error_message = document.getElementById('error-message');
const email_message = document.getElementById('email_address')

second_page.style.display = "none";
error_message.style.display = "none";

first_button.addEventListener('click', () => {
  if (email.checkValidity()) {
    second_page.style.display = "flex";
    first_page.style.display = 'none';
    email_message.innerHTML = email.value
  }
  else {
    error_message.style.display = 'flex'
  }
});


second_button.addEventListener('click', () => {
  second_page.style.display = 'none';
  first_page.style.display = 'flex'
})

