document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll('.weekday_content').forEach(function (choosingTheDayOfTheWeek) {
        const weekday = choosingTheDayOfTheWeek.querySelectorAll('.weekday')
        const weekdayInput = choosingTheDayOfTheWeek.querySelector('.weekday_input')
        weekday.forEach(function (btn) {
            btn.addEventListener('click', function (event) {
                weekdayInput.value = this.dataset.value;

                btn.classList.toggle('weekday--active');
            })
        })
    })
})