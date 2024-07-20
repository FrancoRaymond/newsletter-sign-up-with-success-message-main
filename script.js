const form = document.getElementById('form');
const emailError = document.getElementById('emailError');
const emailField = document.getElementById('emailField');
const thankYouMessage = document.querySelector('.thankYouMessage')
const container = document.querySelector('.container')
const dismissMessage = document.querySelector('.dismissMessage')
const emailEntered = document.getElementById('emailEntered')

form.addEventListener('submit', function(event) {
  event.preventDefault();

  const emailValue = emailField.value;
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const isValidEmail = regex.test(emailValue);

  if (!isValidEmail) {
    emailError.style.display = 'block';
    emailField.classList.toggle('active');
  } else {
    emailError.style.display = 'none';
    emailEntered.innerText = emailValue;
    container.classList.add('hide')
    thankYouMessage.classList.add('active')
  }
});

dismissMessage.addEventListener('click', function(){
  thankYouMessage.classList.remove('active')
  container.classList.remove('hide')
  form.reset()
});
