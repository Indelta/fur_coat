import showThankYou from './showThankyou';
import disableScroll from './disableScroll';
import formSender from './formSender';

export default function calcForm (form) {
  const phone = form.querySelector('input[name="phone"]').value;
  const formData = new FormData(form);
  const btnSubmit = document.querySelector('.calc__btn');
  const valueBtn = btnSubmit.value;

  for (var pair of formData.entries()) {
    console.log(pair[0]+ ', ' + pair[1]); 
}

  if (!phone || phone.length < 1) {
    validForm(document.querySelector('.calc__input-phone'));
  } else {
    btnSubmit.disabled = true;
    btnSubmit.value = 'Отправка...';  
    formSender(formData, './send.php')
    .then((response) => {
      form.reset();
      btnSubmit.disabled = false;
      btnSubmit.value = valueBtn
      const thankyouPage = document.querySelector('.thankyou');
      document.querySelector('.thankyou__subtitle').innerHTML = 'После расчета стоимости с вами свяжется наш менеджер';
      thankyouPage.classList.add('active');
      showThankYou();
      disableScroll();
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