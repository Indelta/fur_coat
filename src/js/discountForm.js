import showThankYou from './showThankyou';
import disableScroll from './disableScroll';
import formSender from './formSender';

export default function discountForm (form) {
  const phone = form.querySelector('input[name="phone"]').value;
  const formData = new FormData(form);
  const btnSubmit = document.querySelector('.present__btn');
  const valueBtn = btnSubmit.value;

  if (!phone || phone.length < 1) {
    validForm(document.querySelector('.present__input'));
  } else {
    btnSubmit.disabled = true;
    btnSubmit.value = 'Отправка...';  
    formSender(formData, './send.php')
    .then((response) => {
      form.reset();
      btnSubmit.disabled = false;
      btnSubmit.value = valueBtn
      document.querySelector('.thankyou__subtitle').innerHTML = 'Скидка забронирована на ваш номер телефона на 3 месяца';
      showThankYou();
      disableScroll();
      ym(61473721, 'reachGoal', 'DiscontForm');
      gtag('event', 'send', {'event_category': 'Event', 'event_action': 'Send', 'event_label': 'DiscontForm' });
    })
    .catch((er) => {
      console.log(er)
    }     
   );    
  }
}

function validForm(element) {
  element.classList.add("animate");
  setTimeout(() => {
    element.classList.remove("animate");
  }, 500);
}