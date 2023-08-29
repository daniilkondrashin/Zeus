
//              ProgressBar

const circle = document.querySelector('.progress-ring__circle');
const radius = circle.r.baseVal.value;
const circumference = 2 * Math.PI * radius;

circle.style.strokeDasharray = `${circumference} ${circumference}`;
circle.style.strokeDashoffset = circumference;

function setProgress(percent) {
    const offset = circumference - percent / 100 * circumference;
    circle.style.strokeDashoffset = offset;
}



//          Registration

const BUTTON = document.querySelector('.footer_button_size');   // Кнопка Далее/Создать
const INITIALS = document.querySelector('.initials');  // Первая страница Имя/Фамилия 
const CONTACT_DETAILS = document.querySelector('.contact_details'); // Вторая страница Email/Телефон
const CONFIRMATION_CODE = document.querySelector('.confirmation_code');  //  Третья страница Подтверждение пароля
const PASSWORD = document.querySelector('.password');  // Четвертая страница Создание пароля 
const TITEL = document.querySelector('.titel');  // Заголовок 
const HEADER_CONTAINER = document.querySelector('.header__container');  // Шапка страницы 
const BACK = document.querySelector('.arrow_link'); // Кнопка вернуться назад
const DONE = document.querySelector('.done'); // Страница "Готово". Появляется по завершению регистрации внутри прогрессбара 
// Вывод данных о прогрессе регистрации в прогрессбар
const PROGRESSBAR_NUMBER = document.querySelector('.progressbar_number');
const CHECK_MARK = document.querySelector('.progressbar_number-check_mark');

const NEW_CODE = document.querySelector('.waiting_for_the_code');  // Кнопка "Получить новый код"
const enteredNumber = document.querySelector('#enteredNumber') // Номер телефона на который должен прийти код 

// Название input
const NAME__SUBTITLE = document.querySelector('#name__subtitle');
const SURNAME__SUBTITLE = document.querySelector('#surname__subtitle');
const EMAIL__SUBTITLE = document.querySelector('#email__subtitle');
const PHONE_NUMBER__SUBTITLE = document.querySelector('#phone_number__subtitle');
const CONFIRMATION_CODE__SUBTITLE = document.querySelector('#confirmation_code__subtitle');
const PASSWORD__SUBTITLE = document.querySelector('#password__subtitle');
const PASSWORDS_DO_NOT_MATCH = document.querySelector('#passwords_do_not_match');
const SUBTITLE_PASSWORD_ERROR = document.querySelector('#subtitle_password_error');
const INPUT = document.querySelectorAll('.input');

// Id input
const EMAIL_INPUT = document.querySelector('#email');
const NAME_INPUT = document.querySelector('#name');
const SURNAME_INPUT = document.querySelector('#surname');
const PHONE_NUMBER_INPUT = document.querySelector('#phone_number');
const CONFIRMATION_CODE_INPUT = document.querySelector('#confirmation_code');
const PASSWORD_INPUT = document.querySelector('#password');
const CONFIRM_PASSWORD_INPUT = document.querySelector('#confirm_password');

let counterNumber = 1;  // Счетчик. Считает номер страницы. От этого зависит выводимый контент. Увеличивается на один при нажатии на кнопку Далее. Уменьшается при нажатии на Назад

// Первая страница 
if (counterNumber == 1) {
    HEADER_CONTAINER.style.display = "none"; // Убирает шапку 
    setProgress(1); // Устанавливает прогрессбар на 1%
    PROGRESSBAR_NUMBER.innerHTML = '1/4'; // Номер страницы в прогрессбаре 
}
// Ввод в input number только цифр 
const changeNum = e => {
    const VALUE_NUM = e.value;
    e.value = VALUE_NUM.replace(/[^0-9+]/g, '');
}
const changeConfirmationCode = e => {
    const VALUE_NUM = e.value;
    e.value = VALUE_NUM.replace(/[^0-9]/g, '');
}
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
// При фокусе на input number добавляет +
PHONE_NUMBER_INPUT.onblur = function () {
    if (PHONE_NUMBER_INPUT.value == '' || PHONE_NUMBER_INPUT.value == '+') {
        this.value = "";
    }
};
PHONE_NUMBER_INPUT.onfocus = function () {
    if (PHONE_NUMBER_INPUT.value == '') {
        this.value = "+";
    }
};

let buttonClick = 0; // Защита от ложных срабатываний при нажатии на кнопку далее
// Событие click на кнопке далее
BUTTON.addEventListener('click', function () {   

    // value у input
    var name = document.querySelector('#name').value;
    var surname = document.querySelector('#surname').value;
    var email = document.querySelector('#email').value;
    var phone_number = document.querySelector('#phone_number').value;
    var confirmation_code = document.querySelector('#confirmation_code').value;
    var password = document.querySelector('#password').value;
    var confirm_password = document.querySelector('#confirm_password').value;

    // Первая страница
    if (counterNumber == 1) {
        buttonClick++; 
        //          Проверка на заполненность input
        // inputErrorCheck - Разрешение на переход на другую страницу. Если поле заполнено, то true
        let inputErrorCheck1 = false;
        let inputErrorCheck2 = false;
        if ((name == null || name == '')) {
            NAME__SUBTITLE.style.display = 'block'; // Если поле пустое или ошибка валидации, то поле краснеет и выводит причину ошибки 
            NAME_INPUT.classList.add('input--error'); // Если поле пустое или ошибка валидации, то поле краснеет и выводит причину ошибки 
            inputErrorCheck1 = false;
        } else {
            NAME__SUBTITLE.style.display = 'none';
            NAME_INPUT.classList.remove('input--error');
            inputErrorCheck1 = true;
        }
        if (surname == null || surname == '') {
            SURNAME_INPUT.classList.add('input--error');
            SURNAME__SUBTITLE.style.display = 'block';
            inputErrorCheck2 = false;
        } else {
            SURNAME__SUBTITLE.style.display = 'none';
            SURNAME_INPUT.classList.remove('input--error');
            inputErrorCheck2 = true;
        }
        // Если все inputErrorCheck === true, то дает разрешение на переход на следующую страницу 
        if ((inputErrorCheck1 && inputErrorCheck2) === true) {
            counterNumber++;
            buttonClick = 0;
        }
    }

    if (counterNumber == 2) {
        //          Проверка на заполненность input
        buttonClick++;
        let inputErrorCheck1 = false;
        let inputErrorCheck2 = false;
        let inputErrorCheck3 = false;
        let inputErrorCheck4 = false;
        // Данные ошибки выводятся если поле пустое 
        EMAIL__SUBTITLE.innerHTML = 'Пожалуйста, введите email';
        PHONE_NUMBER__SUBTITLE.innerHTML = 'Пожалуйста, введите номер телефона';
        if (buttonClick > 1) {
            if (email == null || email == '') {
                EMAIL__SUBTITLE.style.display = 'block';
                EMAIL_INPUT.classList.add('input--error');
                inputErrorCheck1 = false;
            } else {
                EMAIL__SUBTITLE.style.display = 'none';
                EMAIL_INPUT.classList.remove('input--error');
                inputErrorCheck1 = true;
            }

            // Проверка поля на валидацию и заполненность
            if (!validateEmail(email) && !(email == null || email == '')) {
                EMAIL_INPUT.classList.add('input--error');
                EMAIL__SUBTITLE.style.display = 'block';
                EMAIL__SUBTITLE.innerHTML = 'Пожалуйста, введите правильный email';
                inputErrorCheck3 = false;
            } else {
                inputErrorCheck3 = true;
            }

            if ((phone_number == null || phone_number == '') && buttonClick > 1) {
                PHONE_NUMBER_INPUT.classList.add('input--error');
                PHONE_NUMBER__SUBTITLE.style.display = 'block';
                inputErrorCheck2 = false;
            } else {
                PHONE_NUMBER__SUBTITLE.style.display = 'none';
                PHONE_NUMBER_INPUT.classList.remove('input--error');
                inputErrorCheck2 = true;
            }

            // Проверка поля на валидацию и заполненность
            if (!validateNum(phone_number) && !(phone_number == null || phone_number == '')) {
                PHONE_NUMBER_INPUT.classList.add('input--error');
                PHONE_NUMBER__SUBTITLE.style.display = 'block';
                PHONE_NUMBER__SUBTITLE.innerHTML = 'Пожалуйста, введите правильный номер телефона';
                inputErrorCheck4 = false;
            } else {
                inputErrorCheck4 = true;
            }
        }
        if ((inputErrorCheck1 && inputErrorCheck2 && inputErrorCheck3 && inputErrorCheck4) === true) {
            counterNumber++;
            buttonClick = 0;
        }

        HEADER_CONTAINER.style.display = "";
        INITIALS.style.display = "none";
        CONTACT_DETAILS.style.display = "block";
        PROGRESSBAR_NUMBER.innerHTML = '2/4';
        setProgress(25);
    }
    if (counterNumber == 3) {
        //          Проверка на заполненность input
        buttonClick++;
        let inputErrorCheck1 = false;
        if (buttonClick > 1) {
            if (confirmation_code == null || confirmation_code == '') {
                CONFIRMATION_CODE__SUBTITLE.style.display = 'block';
                CONFIRMATION_CODE_INPUT.classList.add('input--error');
                inputErrorCheck1 = false;
            } else {
                CONFIRMATION_CODE__SUBTITLE.style.display = 'none';
                CONFIRMATION_CODE_INPUT.classList.remove('input--error');
                inputErrorCheck1 = true;
            }
        }
        if (inputErrorCheck1 === true) {
            counterNumber++;
            buttonClick = 0;
        }

        TITEL.innerHTML = 'Введите код';
        enteredNumber.innerHTML = phone_number;
        CONTACT_DETAILS.style.display = "none";
        CONFIRMATION_CODE.style.display = "block";
        PROGRESSBAR_NUMBER.innerHTML = '3/4';
        setProgress(50);
    }
    if (counterNumber == 4) {
        //          Проверка на заполненность input
        buttonClick++;
        let inputErrorCheck1 = false;
        let inputErrorCheck2 = false;
        let inputErrorCheck3 = false;
        let password1 = password;
        let password2 = confirm_password;
        if (buttonClick > 1) {
            if (password == null || password == '') {
                PASSWORD__SUBTITLE.style.display = 'block';
                PASSWORD_INPUT.classList.add('input--error');
                inputErrorCheck1 = false;
            } else {
                PASSWORD__SUBTITLE.style.display = 'none';
                PASSWORD_INPUT.classList.remove('input--error');
                inputErrorCheck1 = true;
            }
            if (password1 != password2) {
                inputErrorCheck2 = false;
                PASSWORDS_DO_NOT_MATCH.style.display = 'block';
                CONFIRM_PASSWORD_INPUT.classList.add('input--error');
            } else {
                inputErrorCheck2 = true;
                PASSWORDS_DO_NOT_MATCH.style.display = 'none';
                CONFIRM_PASSWORD_INPUT.classList.remove('input--error');
            }
            if (password1.length < 8) {
                inputErrorCheck3 = false;
                PASSWORD_INPUT.classList.add('input--error');
                SUBTITLE_PASSWORD_ERROR.classList.add('subtitle_error');
            } else {
                inputErrorCheck3 = true;
                PASSWORD_INPUT.classList.remove('input--error');
                SUBTITLE_PASSWORD_ERROR.classList.remove('subtitle_error');
            }
        }
        if ((inputErrorCheck1 && inputErrorCheck2 && inputErrorCheck3) === true) {
            counterNumber++;
        }

        TITEL.innerHTML = 'Придумайте пароль';
        CONFIRMATION_CODE.style.display = "none";
        PASSWORD.style.display = "block";
        BUTTON.textContent = 'Создать аккаунт';
        PROGRESSBAR_NUMBER.innerHTML = '4/4';
        setProgress(75);
    }
    if (counterNumber == 5) {
        TITEL.innerHTML = 'Поздравляем!';
        PASSWORD.style.display = "none";
        DONE.style.display = "block";
        BUTTON.textContent = 'Авторизация';
        PROGRESSBAR_NUMBER.style = 'display: none;';
        CHECK_MARK.style = 'transition: 0.5s;';
        CHECK_MARK.classList.remove('--hidden');
        setProgress(100);
    }
    if (counterNumber == 6) {
        counterNumber--;
    }
});
// Событие click на кнопке назад
BACK.addEventListener('click', function () {
    counterNumber--;
    if (counterNumber == 1) {
        HEADER_CONTAINER.style.display = "none";
        INITIALS.style.display = "block";
        CONTACT_DETAILS.style.display = "none";
        PROGRESSBAR_NUMBER.innerHTML = '1/4';
        setProgress(1);
    }
    if (counterNumber == 2) {
        TITEL.innerHTML = 'Создайте аккаунт';
        HEADER_CONTAINER.style.display = "";
        INITIALS.style.display = "none";
        CONTACT_DETAILS.style.display = "block";
        CONFIRMATION_CODE.style.display = "none";
        PROGRESSBAR_NUMBER.innerHTML = '2/4';
        setProgress(25);
    }
    if (counterNumber == 3) {
        TITEL.innerHTML = 'Введите код';
        CONTACT_DETAILS.style.display = "none";
        CONFIRMATION_CODE.style.display = "block";
        PASSWORD.style.display = "none";
        BUTTON.textContent = 'Далее';
        PROGRESSBAR_NUMBER.innerHTML = '3/4';
        setProgress(50);
    }
    if (counterNumber == 4) {
        TITEL.innerHTML = 'Придумайте пароль';
        CONFIRMATION_CODE.style.display = "none";
        PASSWORD.style.display = "block";
        DONE.style.display = "none";
        BUTTON.textContent = 'Создать аккаунт';
        PROGRESSBAR_NUMBER.innerHTML = '4/4';
        PROGRESSBAR_NUMBER.style = '';
        CHECK_MARK.style = 'transition: 0s;';
        CHECK_MARK.classList.add('--hidden');
        setProgress(75);
    }
    if (counterNumber == 5) {
        TITEL.innerHTML = 'Придумайте пароль';
        CONFIRMATION_CODE.style.display = "none";
        PASSWORD.style.display = "block";
        setProgress(100);
    }
});