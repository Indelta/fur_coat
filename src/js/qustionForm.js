import showThankYou from './showThankyou';
import disableScroll from './disableScroll';

export default function questionForm(form) {
  const phone = form.querySelector('input[name="phone"]').value;

  if (!phone || phone.length < 1) {
    validForm(document.querySelector('.question__input'));
  } else {
    document.querySelector('.question').classList.remove('active');
    document.querySelector('.thankyou__subtitle').innerHTML = 'С вами скоро свяжется наш менеджер';
    showThankYou();
    disableScroll();
  }
}

function validForm(element) {
  element.classList.add("animate");
  setTimeout(() => {
    element.classList.remove("animate");
  }, 500);
}