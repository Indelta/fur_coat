export default function formSender (form) {
  const phone = form.querySelector('input[name=phone]');
  const popup = document.querySelector('.popup');
  const body = document.querySelector('body');
  const instruction = document.querySelector('.instruction');

  popup.classList.remove('active');
  body.style.overflow = 'auto';

  instruction.classList.add('active');  
}