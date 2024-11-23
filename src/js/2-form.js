const form = document.querySelector('.feedback-form');

const LS_KEY_FORM_DATA = 'feedback-form-state';
const formData = {
  email: '',
  message: '',
};


populateText();

form.addEventListener('input', onInputForm);
form.addEventListener('submit', onSubmitForm);

function onInputForm(evt) {
  
  formData.email = form.elements.email.value;
  formData.message = form.elements.message.value;

  
  localStorage.setItem(LS_KEY_FORM_DATA, JSON.stringify(formData));
}

function onSubmitForm(evt) {
  evt.preventDefault();

  
  if (!formData.email || !formData.message) {
    alert('Fill please all fields');
    return;
  }

 
  console.log('Submitted data:', formData);


  form.reset();
  localStorage.removeItem(LS_KEY_FORM_DATA);
  formData.email = '';
  formData.message = '';
}

function populateText() {
 
  const savedData = localStorage.getItem(LS_KEY_FORM_DATA);

  if (!savedData) return;

  try {
    const parsedData = JSON.parse(savedData);

    if (parsedData.email && parsedData.message) {
      form.elements.email.value = parsedData.email;
      form.elements.message.value = parsedData.message;

     
      formData.email = parsedData.email;
      formData.message = parsedData.message;
    }
  } catch (error) {
    console.error('Error parsing data from localStorage:', error);
  }
}
