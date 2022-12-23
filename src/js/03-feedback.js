import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const email = document.querySelector('.feedback-form input');
const message = document.querySelector('.feedback-form textarea');

autoForm();

form.addEventListener('input', throttle(onInput, 1000));
form.addEventListener('submit', onSubmit)

const  feedbackFormState = {email : "", message : ""};

function onInput(evt) {
  
  if (evt.target === email) {
    feedbackFormState.email = evt.target.value;
  }
  if (evt.target === message) {
    feedbackFormState.message = evt.target.value;
  }
  localStorage.setItem("feedback-form-state", JSON.stringify(feedbackFormState))
};

function onSubmit(evt) {
    evt.preventDefault();
    if(email.value === "") {
        return alert('введіть пошту')
    }
    console.log(localStorage.getItem("feedback-form-state"));
   evt.currentTarget.reset();
   localStorage.removeItem("feedback-form-state");
};
function autoForm() {
    const savedMessage =localStorage.getItem("feedback-form-state");
    if(savedMessage) {
        message.value = JSON.parse(savedMessage).message;
        email.value = JSON.parse(savedMessage).email;
    }
}