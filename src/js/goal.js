export default () => {
  document.querySelector('.head__phone').addEventListener('click', () => {
    ym(65411236, 'reachGoal', 'ClickTel');
    gtag('event', 'send', {'event_category': 'Btn', 'event_action': 'Click', 'event_label': 'ClickTel' });
  })

  document.querySelector('.footer__phone').addEventListener('click', () => {
    ym(65411236, 'reachGoal', 'ClickTel');
    gtag('event', 'send', {'event_category': 'Btn', 'event_action': 'Click', 'event_label': 'ClickTel' });
  })

  document.querySelector('.instruction__btn').addEventListener('click', () => {
    ym(65411236, 'reachGoal', 'DownloadKIZ');
    gtag('event', 'send', {'event_category': 'Event', 'event_action': 'Send', 'event_label': 'DownloadKIZ' });
  })

  document.querySelector('.popup__btn').addEventListener('click', () => {
    ym(65411236, 'reachGoal', 'ClickKIZ');
    gtag('event', 'send', {'event_category': 'Btn', 'event_action': 'Click', 'event_label': 'ClickKIZ' });
  })

  document.querySelector('.question__btn').addEventListener('click', () => {
    ym(65411236, 'reachGoal', 'ClickQuestion');
    gtag('event', 'send', {'event_category': 'Btn', 'event_action': 'Click', 'event_label': 'ClickQuestion' });
  })

  document.querySelector('.calc__btn').addEventListener('click', () => {
    ym(65411236, 'reachGoal', 'ClickCalc');
    gtag('event', 'send', {'event_category': 'Btn', 'event_action': 'Click', 'event_label': 'ClickCalc' });
  })

  document.querySelector('.comfort__btn').addEventListener('click', () => {
    ym(65411236, 'reachGoal', 'ClickCalc');
    gtag('event', 'send', {'event_category': 'Btn', 'event_action': 'Click', 'event_label': 'ClickCalc' });
  })

  document.querySelector('.present__btn').addEventListener('click', () => {
    ym(65411236, 'reachGoal', 'ClickDelivery');
    gtag('event', 'send', {'event_category': 'Btn', 'event_action': 'Click', 'event_label': 'ClickDelivery' });
  })

  document.querySelector('.comfort__link').addEventListener('click', () => {
    ym(65411236, 'reachGoal', 'ClickDelivery');
    gtag('event', 'send', {'event_category': 'Btn', 'event_action': 'Click', 'event_label': 'ClickDelivery' });
  })

  document.querySelector('.head__link-insta').addEventListener('click', () => {
    ym(65411236, 'reachGoal', 'ClickInstagram');
    gtag('event', 'send', {'event_category': 'Btn', 'event_action': 'Click', 'event_label': 'ClickInstagram' });
  })
  // document.querySelector('.head__viber').addEventListener('click', () => {
  //   ym(65411236, 'reachGoal', 'ClickViber');
  //   gtag('event', 'send', {'event_category': 'Btn', 'event_action': 'Click', 'event_label': 'ClickViber' });
  // })

  // document.querySelector('.head__whatsApp').addEventListener('click', () => {
  //   ym(65411236, 'reachGoal', 'ClickWhatsApp');
  //   gtag('event', 'send', {'event_category': 'Btn', 'event_action': 'Click', 'event_label': 'ClickWhatsApp' });
  // })
}