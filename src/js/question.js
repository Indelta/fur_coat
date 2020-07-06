import disableScroll from './disableScroll';

export default function askQuestion() {
  const btns = document.querySelectorAll('#question');
  const headIcons = document.querySelectorAll('.head__ico');
  const questionPopup = document.querySelector('.question');

  btns.forEach((el) => {
    el.addEventListener('click', () => {
      questionPopup.classList.add('active');
      document.querySelector('.question__textarea').focus();
      disableScroll();
    })
  })
}