import disableScroll from './disableScroll';
import enableScroll from './enableScroll';

export default function showPopup () {
  const stikers = document.querySelectorAll('.production__stiker'); 
  const popup = document.querySelector('.popup');
  const instruction = document.querySelector('.instruction');
  const closeBtn = document.querySelectorAll('#close'); 
  const thankyou = document.querySelector('.thankyou');
  const question = document.querySelector('.question')

  stikers.forEach( (el) => {
    el.addEventListener('click', () => {
      console.log(1);
      popup.classList.add('active');
      disableScroll();
    })

    window.addEventListener( 'scroll', (event) => {
      if( pageYOffset > 900 ) {
        el.classList.add('active');
      } else {
        el.classList.remove('active');
      }
      
    })
    
  })
  
closeBtn.forEach( (el) => {
  el.addEventListener('click', () => {
    popup.classList.remove('active');
    instruction.classList.remove('active');
    thankyou.classList.remove('active');
    question.classList.remove('active');
    enableScroll();
  })
})



}