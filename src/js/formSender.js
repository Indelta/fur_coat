export default function inctructionForm (form) {
  const phone = form.querySelector('input[name="phone"]').value;
  const popup = document.querySelector('.popup');
  const instruction = document.querySelector('.instruction');

  if (!phone || phone.length < 1) {
    validForm(document.querySelector('.popup__input-phone'));
  } else {
    popup.classList.remove('active');  
    instruction.classList.add('active');  
  }
};

function validForm(element) {
  element.classList.add("animate");
  setTimeout(() => {
    element.classList.remove("animate");
  }, 500);
}




