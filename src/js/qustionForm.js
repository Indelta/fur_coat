import showThankYou from "./showThankyou";
import disableScroll from "./disableScroll";
import formSender from './formSender';

export default function questionForm(form) {
  const phone = form.querySelector('input[name="phone"]').value;
  const formData = new FormData(form);
  const btnSubmit = document.querySelector(".question__btn");
  const valueBtn = btnSubmit.value;

  if (!phone || phone.length < 1) {
    validForm(document.querySelector(".question__input"));
  } else {
    btnSubmit.disabled = true;
    btnSubmit.value = "Отправка...";
    formSender(formData, "./send.php")
      .then((response) => {
        form.reset();
        btnSubmit.disabled = false;
        btnSubmit.value = valueBtn;
        document.querySelector(".question").classList.remove("active");
        document.querySelector(".thankyou__subtitle").innerHTML =
          "С вами скоро свяжется наш менеджер";
        showThankYou();
        disableScroll();
      })
      .catch((er) => {
        console.log(er);
      });
  }
}

function validForm(element) {
  element.classList.add("animate");
  setTimeout(() => {
    element.classList.remove("animate");
  }, 500);
}
