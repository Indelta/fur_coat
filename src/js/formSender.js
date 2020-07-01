export default function formSender(formData, url) {
  return fetch(url, {
    method: 'POST',
    body: formData
  })
}