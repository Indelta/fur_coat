import * as $ from 'jquery';
import './styles/main.scss';
import Swiper from 'swiper';
import AOS from 'aos';
import Iti from "intl-tel-input";
import showPopup from './js/stiker';
import instructionForm from './js/inctructionForm';
import discountForm  from './js/discountForm';
import calcForm  from './js/calcForm';
import questionForm from './js/qustionForm';
import scrollManager from './js/scrollManager';
import askQuestion from './js/question';
// import showDate from "./js/date";
import goal from "./js/goal";
import utils from "./js/utils";

// import './js/header.js';
// import './js/mobile-menu.js';
// import './js/scroll.js';
// import './js/modal.js';
// import './js/scrollBlock';

document.addEventListener('DOMContentLoaded', function() {
  goal();
  showPopup();
  scrollManager();
  askQuestion();
  // showDate();

  const params = new URLSearchParams(window.location.search);
  $('input[name="utm_term"]').val(params.get("utm_term"));
  $('input[name="utm_source"]').val(params.get("utm_source"));
  $('input[name="utm_medium"]').val(params.get("utm_medium"));
  $('input[name="utm_campaign"]').val(params.get("utm_campaign"));
  $('input[name="utm_content"]').val(params.get("utm_content"));

  document.querySelector('#popup__inner').addEventListener('submit', (e) => {
    e.preventDefault();
    instructionForm(document.querySelector('#popup__inner'));
  });

  document.querySelector('#present').addEventListener('submit', (e) => {
    e.preventDefault();
    discountForm(document.querySelector('#present'));
  });

  document.querySelector('#calc').addEventListener('submit', (e) => {
    e.preventDefault();
    calcForm(document.querySelector('#calc'));
  });

  document.querySelector('#question__inner').addEventListener('submit', (e) => {
    e.preventDefault();
    questionForm(document.querySelector('#question__inner'));
  });

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

    const inputs = document.querySelectorAll("#id-phone");

    inputs.forEach((el) => {
      var iti = new Iti(el, {
        preferredCountries: ["ru", "by"],
        allowExtensions: true,
        autoFormat: false,
        autoHideDialCode: false,
        autoPlaceholder: false,
        defaultCountry: "auto",
        ipinfoToken: "yolo",
        nationalMode: false,
        numberType: "MOBILE",
        preventInvalidNumbers: true,
        utilsScript: utils,
      });
  
      iti._init();
    })

    // const inputs = document.querySelectorAll("#id-phone");
    // const im = new Inputmask({ mask: "+9 (999) 999-99-99[9]", clearMaskOnLostFocus: false });
    // im.mask(inputs); 
 }, false);



