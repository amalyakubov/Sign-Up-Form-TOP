const firstPassword = document.getElementById('password');
const secondPassword = document.getElementById('confirm-password');
const inputs = document.querySelector('input');
const errorDisplay = document.getElementById('error');

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

function addClass() {
    firstPassword.classList.add('error');
    secondPassword.classList.add('error');
}


document.addEventListener('submit', (event) => {
    if (!isValid()) {
        addClass();
        errorDisplay.innerHTML = 'Passwords do not match';
    } else {
        firstPassword.classList.remove('error');
        secondPassword.classList.remove('error');   
    }
});
