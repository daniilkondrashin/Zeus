var button = document.querySelector('.footer__button');
var inputEmail = document.querySelector('#email');
var inputPassword = document.querySelector('#password');

const EMAIL__SUBTITLE = document.querySelector('#email__subtitle');
const EMAIL_INPUT = document.querySelector('#email');
const PASSWORD__SUBTITLE = document.querySelector('#password__subtitle');
const PASSWORD_INPUT = document.querySelector('#password');



// Валидация input email
function validateEmail(email) {
    const re = new RegExp(
        /^[a-zA-Z0-9][\-_]{0,1}([a-zA-Z0-9][\-_]{0,1})*[a-zA-Z0-9]@[a-zA-Z0-9][-\.]{0,1}([a-zA-Z][-\.]{0,1})*[a-zA-Z0-9]\.[a-zA-Z0-9]{1,}([\.\-]{0,1}[a-zA-Z]){0,}[a-zA-Z0-9]{0,}$/i
    );
    return re.test(String(email).toLowerCase());
}
// Валидация input number
function validateNum(num) {
    const re = /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/;
    return re.test(String(num).toLowerCase());
}

button.addEventListener('click', function() {
    var email = document.querySelector('#email').value;
    var password = document.querySelector('#password').value;

    if (email == null || email == '') {
        EMAIL__SUBTITLE.style.display = 'block';
        EMAIL_INPUT.classList.add('input--error');
    } else {
        EMAIL__SUBTITLE.style.display = 'none';
        EMAIL_INPUT.classList.remove('input--error');
    }

    // Проверка поля на валидацию и заполненность
    if (!validateEmail(email) && !(email == null || email == '')) {
        EMAIL_INPUT.classList.add('input--error');
        EMAIL__SUBTITLE.style.display = 'block';
        EMAIL__SUBTITLE.innerHTML = 'Пожалуйста, введите правильный email';
    } else {
    }

    if (password == null || password == '') {
        PASSWORD__SUBTITLE.style.display = 'block';
        PASSWORD_INPUT.classList.add('input--error');
    } else {
        PASSWORD__SUBTITLE.style.display = 'none';
        PASSWORD_INPUT.classList.remove('input--error');
    }
})



    

