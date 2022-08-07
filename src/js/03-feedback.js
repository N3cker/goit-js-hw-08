import throttle from 'lodash.throttle'

const form = document.querySelector('.feedback-form');
const inputs = document.querySelectorAll('input[name="email"], textarea[name="message"]');

const feedbackFormState = JSON.parse(localStorage.getItem("feedback-form-state"));

const formFields = {
    email: feedbackFormState?.email || '',
    message: feedbackFormState?.message || ''
};

inputs.forEach(input => {
    if(input.name === "email") {
        input.value = formFields.email;
    }else if(input.name === "message") {
        input.value = formFields.message;
    }

    input.addEventListener('input', throttle((event) => {
        if(input.name === "email") {
            formFields.email = input.value;
        }else if(input.name === "message") {
            formFields.message = input.value;
        }
        localStorage.setItem("feedback-form-state", JSON.stringify(formFields));
    }, 500))
})

form.addEventListener('submit', () => {
    console.log(formFields);
    localStorage.removeItem("feedback-form-state");
})