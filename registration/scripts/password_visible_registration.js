const PASSWORD_INPUT1 = document.querySelector('#password');
const PASSWORD_INPUT2 = document.querySelector('#confirm_password');
const password_invisible = document.querySelector('.password_invisible__icon');
const password_visible = document.querySelector('.password_visible__icon');

password_visible.classList.add('--hidden');

password_invisible.addEventListener('click', function() {
    if (PASSWORD_INPUT1.type === "password") {
        PASSWORD_INPUT1.type = "text";
        PASSWORD_INPUT2.type = "text";
        password_visible.classList.remove('--hidden');
        password_invisible.classList.add('--hidden');
    } else {
        PASSWORD_INPUT1.type = "password";
        PASSWORD_INPUT2.type = "password";
        password_visible.classList.add('--hidden');
        password_invisible.classList.remove('--hidden');
    }
})

password_visible.addEventListener('click', function() {
    if (PASSWORD_INPUT1.type === "password") {
        PASSWORD_INPUT1.type = "text";
        PASSWORD_INPUT2.type = "text";
        password_visible.classList.add('--hidden');
        password_invisible.classList.remove('--hidden');
    } else {
        PASSWORD_INPUT1.type = "password";
        PASSWORD_INPUT2.type = "password";
        password_visible.classList.add('--hidden');
        password_invisible.classList.remove('--hidden');
    }
})
