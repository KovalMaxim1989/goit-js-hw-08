import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const email = document.querySelector('.feedback-form input');
const message = document.querySelector('.feedback-form textarea');

autoForm();

form.addEventListener('input', throttle(onInput, 500));
form.addEventListener('submit', onSubmit);

function onInput(evt) {

  let savedData = localStorage.getItem('feedback-form-state');
  savedData = savedData ? JSON.parse(savedData) : {}; 
  savedData[evt.target.name] = evt.target.value; 
  localStorage.setItem('feedback-form-state', JSON.stringify(savedData)); 
};

function onSubmit(evt) {
    evt.preventDefault();
    if(email.value === "") {
        return alert('введіть пошту')
  }
   if(message.value === "") {
        return alert('введіть повідомлення')
    }
    const formData = new FormData(form);
  formData.forEach((value, name) => console.log(name+":", value));

   evt.currentTarget.reset();
   localStorage.removeItem("feedback-form-state");
};
function autoForm() {

   let savedData = localStorage.getItem('feedback-form-state');
  if (savedData) {
    savedData = JSON.parse(savedData);
    Object.entries(savedData).forEach(([name, value]) => {
      form.elements[name].value = value;
    });
  }
}