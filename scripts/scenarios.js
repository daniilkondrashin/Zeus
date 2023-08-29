document.addEventListener("DOMContentLoaded", function () {
    const BUTTON = document.querySelectorAll('.mode_selection__button');
    const BY_CLICKING = document.querySelector('#by_clicking'); 
    const ON_SCHEDULE = document.querySelector('#on_schedule');
    var buttonId;
    document.querySelector('.on_schedule').style = "display: none;"
    BY_CLICKING.classList.add('mode_selection__button--active');
    BY_CLICKING.classList.add('by_clicking--active');
    BUTTON.forEach(function (btn) {
        btn.addEventListener('click', function (event) {
            buttonId = event.currentTarget.id;
            // если переключатель в положении "по нажатию" то отобразицтся конент by_clicking
            if (buttonId === 'by_clicking') {
                BY_CLICKING.classList.add('mode_selection__button--active');
                document.querySelector('.on_schedule').style = "display: none;"
                document.querySelector('.by_clicking').style = "display: grid;"
                BY_CLICKING.classList.add('by_clicking--active');
            } else if (buttonId === 'on_schedule') {
                BY_CLICKING.classList.remove('mode_selection__button--active');
                BY_CLICKING.classList.remove('by_clicking--active');
            }
            if (buttonId === 'on_schedule') {
                ON_SCHEDULE.classList.add('mode_selection__button--active');
                document.querySelector('.on_schedule').style = "display: grid;"
                document.querySelector('.by_clicking').style = "display: none;"
                ON_SCHEDULE.classList.add('on_schedule--active');
            } else if (buttonId === 'by_clicking') {
                ON_SCHEDULE.classList.remove('mode_selection__button--active');
                ON_SCHEDULE.classList.remove('on_schedule--active');
            }
        })
    })
})