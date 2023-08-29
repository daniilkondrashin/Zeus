document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll('#device_switch').forEach(function (checkboxWrapper) {
        var chkBox = checkboxWrapper.querySelector('.switch_size');
        var divOpacity = checkboxWrapper.querySelector('.turning_on_the_device')

        chkBox.onchange = function () {
            if (chkBox.checked) {
                divOpacity.classList.toggle('turning_on_the_device--opacity');
            }
            else {
                divOpacity.classList.remove('turning_on_the_device--opacity');
            }
        }
    })
})