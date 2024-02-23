

const scriptURL = 'https://script.google.com/macros/s/AKfycbwb4B1B6S-2QMlPvlCDGAyVtVU8cgHJXHjYFVTYngx-v3AMKT83HRhU4VgYX4rLnN-6/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you! your form is submitted successfully." ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
  form.reset()
})