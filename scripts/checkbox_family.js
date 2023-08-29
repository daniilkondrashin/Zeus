document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll('.prof_on_off').forEach(function (checkboxWrapper) {
        var chkBox = checkboxWrapper.querySelector('.switch_size');
        var divOpacity = checkboxWrapper.querySelector('.Prof_btn_f')

        chkBox.onchange = function () {
            if (chkBox.checked) {
                divOpacity.classList.toggle('Prof_btn_f--opacity');
            }
            else {
                divOpacity.classList.remove('Prof_btn_f--opacity');
            }
        }
    })
})