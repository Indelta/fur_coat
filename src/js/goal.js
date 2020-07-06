export default () => {
  document.querySelector('.head__phone').addEventListener('click', () => {
    ym(61473721, 'reachGoal', 'ClickTel');
    gtag('event', 'send', {'event_category': 'Btn', 'event_action': 'Click', 'event_label': 'ClickTel' });
  })

  document.querySelector('.footer__phone').addEventListener('click', () => {
    ym(61473721, 'reachGoal', 'ClickTel');
    gtag('event', 'send', {'event_category': 'Btn', 'event_action': 'Click', 'event_label': 'ClickTel' });
  })
}