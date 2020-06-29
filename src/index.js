import * as $ from 'jquery';
import './styles/main.scss';
import Swiper from 'swiper';
import AOS from 'aos';
import showPopup from './js/stiker';
import formSender from './js/formSender';


// import './js/header.js';
// import './js/mobile-menu.js';
// import './js/scroll.js';
// import './js/modal.js';
// import './js/scrollBlock';

document.addEventListener('DOMContentLoaded', function() {
  showPopup();

  document.querySelector('.popup__btn').addEventListener('click', (e) => {
    e.preventDefault();
    formSender(document.querySelector('.popup__inner'));
  })


  const mySwiper = new Swiper(".swiper-container", {
    slidesPerView: "auto",
    centeredSlides: true,
    spaceBetween: 15,
    breakpoints: {
      1600: {
        slidesPerView: 1.4,
        spaceBetween: 20,
      },
    },
    pagination: {
      el: ".swiper-pagination",
    },
  });
    AOS.init({
      // Global settings:
      disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
      startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
      initClassName: 'aos-init', // class applied after initialization
      animatedClassName: 'aos-animate', // class applied on animation
      useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
      disableMutationObserver: false, // disables automatic mutations' detections (advanced)
      debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
      throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
      
    
      // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
      offset: 120, // offset (in px) from the original trigger point
      delay: 0, // values from 0 to 3000, with step 50ms
      duration: 800, // values from 0 to 3000, with step 50ms
      easing: 'ease', // default easing for AOS animations
      once: false, // whether animation should happen only once - while scrolling down
      mirror: false, // whether elements should animate out while scrolling past them
      anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
    
    });
 }, false);



