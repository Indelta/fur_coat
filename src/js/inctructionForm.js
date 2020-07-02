import formSender from './formSender';

export default function inctructionForm (form) {
  const phone = form.querySelector('input[name="phone"]').value;
  const popup = document.querySelector('.popup');
  const instruction = document.querySelector('.instruction');
  const formData = new FormData(form);
  const btnSubmit = document.querySelector('.popup__btn');
  const valueBtn = btnSubmit.value;


  if (!phone || phone.length < 1) {
    validForm(document.querySelector('.popup__input-phone'));
  } else {
    btnSubmit.disabled = true;
    btnSubmit.value = 'Отправка...';    
    formSender(formData, './send.php')
    .then((response) => {
    form.reset();
    btnSubmit.disabled = false;
    btnSubmit.value = valueBtn
    popup.classList.remove('active');  
    instruction.classList.add('active'); 
    })
    .catch((er) => {
      console.log(er)
    }     
   );   
  }
};

function validForm(element) {
  element.classList.add("animate");
  setTimeout(() => {
    element.classList.remove("animate");
  }, 500);
}




