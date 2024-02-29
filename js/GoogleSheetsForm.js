

const scriptURL = 'https://script.google.com/macros/s/AKfycbwtqDSs0xZD3slodS0PxURoE8iWVFDWNW9TBe0uZYuL_sYi88GEUzveHMoghonpVINb/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you! your form is submitted successfully." ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
  form.reset()
})