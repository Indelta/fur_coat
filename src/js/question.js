import disableScroll from './disableScroll';

export default function askQuestion() {
  const btns = document.querySelectorAll('#question');
  const questionPopup = document.querySelector('.question');

  btns.forEach((el) => {
    el.addEventListener('click', () => {
      questionPopup.classList.add('active');
      disableScroll();
    })
  })
}