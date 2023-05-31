const firstPassword = document.getElementById('password');
const secondPassword = document.getElementById('confirm-password');
const inputs = document.querySelector('input');


function allInputsFilled() {
    if (inputs.value != '') {
        return true;
    } else {
        return false;
    }
}

function isValid() {
    if (firstPassword.value === secondPassword.value && allInputsFilled() && secondPassword.value != '') {
        return true;
    } else {
        return false;
    }
}

document.addEventListener('submit', (event) => {
    if (isValid()) {
        firstPassword.classList.add('error');
        secondPassword.classList.add('error');
    }
});

