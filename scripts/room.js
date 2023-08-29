document.addEventListener("DOMContentLoaded", function () {
    const BUTTON = document.querySelectorAll('.mode_selection__button');
    const BY_CLICKING = document.querySelector('#by_clicking');
    const ON_SCHEDULE = document.querySelector('#on_schedule');
    const PREMISES = document.querySelector('.premises');
    const GROUPS = document.querySelector('.groups-devices')
    var buttonId;
    BY_CLICKING.classList.add('mode_selection__button--active');
    BY_CLICKING.classList.add('by_clicking--active');
    BUTTON.forEach(function (btn) {
        btn.addEventListener('click', function (event) {
            buttonId = event.currentTarget.id;
            if (buttonId === 'by_clicking') {
                BY_CLICKING.classList.add('mode_selection__button--active');
                BY_CLICKING.classList.add('by_clicking--active');
                PREMISES.style.display = 'block';
                GROUPS.style.display = 'none';
            } else if (buttonId === 'on_schedule') {
                BY_CLICKING.classList.remove('mode_selection__button--active');
                BY_CLICKING.classList.remove('by_clicking--active');
            }
            if (buttonId === 'on_schedule') {
                ON_SCHEDULE.classList.add('mode_selection__button--active');
                ON_SCHEDULE.classList.add('on_schedule--active');
                PREMISES.style.display = 'none';
                GROUPS.style.display = 'block';
            } else if (buttonId === 'by_clicking') {
                ON_SCHEDULE.classList.remove('mode_selection__button--active');
                ON_SCHEDULE.classList.remove('on_schedule--active');
            }
        })
    })
})