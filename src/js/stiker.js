export default function showPopup () {
  const stiker = document.querySelector('.stiker'); 
  const popup = document.querySelector('.popup');
  const closeBtn = document.querySelector('.popup__close'); 
  const body = document.querySelector('body');


  stiker.addEventListener('click', () => {
    popup.classList.add('active');
    body.style.overflow = 'hidden';
  })

  closeBtn.addEventListener('click', () => {
    popup.classList.remove('active');
    body.style.overflow = 'auto';
  })
}