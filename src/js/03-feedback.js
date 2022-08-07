import throttle from 'lodash.throttle'

const submitBtn = document.querySelector('[type="submit"]');
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

submitBtn.addEventListener('click', (event) => {
    event.preventDefault();
    console.log(formFields);
    inputs.forEach(input => {
        input.value = '';
    })
    localStorage.removeItem("feedback-form-state");
})