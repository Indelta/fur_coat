import showThankYou from './showThankyou';
import disableScroll from './disableScroll';

export default function calcForm (form) {
  const phone = form.querySelector('input[name="phone"]').value;

  if (!phone || phone.length < 1) {
    validForm(document.querySelector('.calc__input-phone'));
  } else {
  const thankyouPage = document.querySelector('.thankyou');
  document.querySelector('.thankyou__subtitle').innerHTML = 'После расчета стоимости с вами свяжется наш менеджер';
  thankyouPage.classList.add('active');
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