const BUTTON = document.querySelector('.footer_button_size');
const ICON1 = document.querySelector('.password_reset__icon1');
const ICON2 = document.querySelector('.password_reset__icon2');
const TEXT = document.querySelector('.main__subtitle');
const INPUT = document.querySelector('.input-container');
const HEADER_CONTAINER = document.querySelector('.header__container');
const FOOTER_TEXT = document.querySelector('.footer__text');
const EMAIL_INPUT = document.querySelector('#email');
const EMAIL__SUBTITLE = document.querySelector('#email__subtitle');
let buttonClick = 0;
let counterNumber = 1;



function validateEmail(email) {
    const re = new RegExp(
        /^[a-zA-Z0-9][\-_]{0,1}([a-zA-Z0-9][\-_]{0,1})*[a-zA-Z0-9]@[a-zA-Z0-9][-\.]{0,1}([a-zA-Z][-\.]{0,1})*[a-zA-Z0-9]\.[a-zA-Z0-9]{1,}([\.\-]{0,1}[a-zA-Z]){0,}[a-zA-Z0-9]{0,}$/i
    );
    return re.test(String(email).toLowerCase());
}

BUTTON.addEventListener('click', function () {
    var email = document.querySelector('#email').value;

    if (counterNumber == 1) {
        let inputErrorCheck1 = false;
        let inputErrorCheck2 = false;
        EMAIL__SUBTITLE.innerHTML = 'Пожалуйста, введите email';

        if (email == null || email == '') {
            EMAIL__SUBTITLE.style.display = 'block';
            EMAIL_INPUT.classList.add('input--error');
            inputErrorCheck1 = false;
        } else {
            EMAIL__SUBTITLE.style.display = 'none';
            EMAIL_INPUT.classList.remove('input--error');
            inputErrorCheck1 = true;
        }

        if (!validateEmail(email) && !(email == null || email == '')) {
            EMAIL_INPUT.classList.add('input--error');
            EMAIL__SUBTITLE.style.display = 'block';
            EMAIL__SUBTITLE.innerHTML = 'Пожалуйста, введите правильный email';
            inputErrorCheck2 = false;
        } else {
            inputErrorCheck2 = true;
        }
        if ((inputErrorCheck1 && inputErrorCheck2) === true) {
            counterNumber++;
            buttonClick = 0;
        }
    }
    if (counterNumber == 2) {
        ICON1.style.display = 'none';
        ICON2.style.display = 'block';
        INPUT.style.display = 'none';
        TEXT.style.display = 'block';
        HEADER_CONTAINER.style.display = 'none';
        BUTTON.textContent = 'Авторизация';
        FOOTER_TEXT.style.display = 'none';
    }
})