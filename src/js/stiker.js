export default function showPopup () {
  const stiker = document.querySelector('.stiker'); 
  const popup = document.querySelector('.popup');
  const instruction = document.querySelector('.instruction');
  const closeBtn = document.querySelectorAll('#close'); 
  const body = document.querySelector('body');


  stiker.addEventListener('click', () => {
    popup.classList.add('active');
    body.style.overflow = 'hidden';
  })


closeBtn.forEach( (el) => {
  el.addEventListener('click', () => {
    popup.classList.remove('active');
    instruction.classList.remove('active');
    body.style.overflow = 'auto';
  })
})

}