console.log('submit')
const form = document.querySelector('#signupForm');
const status = document.querySelector('#form-message');

const submitButton = document.querySelector('button[type="submit"]');

submitButton.disabled = true;

form.addEventListener('input', () => {
    if (form.checkValidity()) {
        submitButton.disabled = false;
    } else {
        submitButton.disabled = true;
    }
});

const toggle  = document.querySelector('#theme-toggle');
if (!toggle) {
    throw new Error('Missing #theme-toggle element');
}

toggle.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    });

const detailBtn = document.getElementById('detailbtn');
const detail = document.getElementById('detail');

if (detailBtn && detail) {
    detailBtn.addEventListener('click', () => {
        detail.hidden = !detail.hidden;
    });
}
