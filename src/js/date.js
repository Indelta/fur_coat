export default function showDate() {
  const date = new Date();
  date.setDate(date.getDate() + 3);
  document.querySelector('.present__until-date').innerHTML = formatDate(date)
}

function formatDate(date) {
  var dd = date.getDate();
  if (dd < 10) dd = '0' + dd;

  var mm = date.getMonth() + 1;
  if (mm < 10) mm = '0' + mm;

  var yy = date.getFullYear();

  return dd + '.' + mm + '.' + yy;
}