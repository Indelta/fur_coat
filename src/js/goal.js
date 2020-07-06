export default () => {
  document.querySelector('.head__phone').addEventListener('click', () => {
    ym(61473721, 'reachGoal', 'ClickTel');
    gtag('event', 'send', {'event_category': 'Btn', 'event_action': 'Click', 'event_label': 'ClickTel' });
  })

  document.querySelector('.footer__phone').addEventListener('click', () => {
    ym(61473721, 'reachGoal', 'ClickTel');
    gtag('event', 'send', {'event_category': 'Btn', 'event_action': 'Click', 'event_label': 'ClickTel' });
  })

  document.querySelector('.head__viber').addEventListener('click', () => {
    ym(61473721, 'reachGoal', 'ClickViber');
    gtag('event', 'send', {'event_category': 'Btn', 'event_action': 'Click', 'event_label': 'ClickViber' });
  })

  document.querySelector('.head__whatsApp').addEventListener('click', () => {
    ym(61473721, 'reachGoal', 'ClickWhatsApp');
    gtag('event', 'send', {'event_category': 'Btn', 'event_action': 'Click', 'event_label': 'ClickWhatsApp' });
  })
}