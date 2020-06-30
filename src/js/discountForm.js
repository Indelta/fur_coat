import showThankYou from './showThankyou';
import disableScroll from './disableScroll';

export default function discountForm (form) {
  const phone = form.querySelector('input[name="phone"]').value;

  if (!phone || phone.length < 1) {
    validForm(document.querySelector('.present__input'));
  } else {
    document.querySelector('.thankyou__subtitle').innerHTML = 'Скидка забронирована на ваш номер телефона на 3 месяца';
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