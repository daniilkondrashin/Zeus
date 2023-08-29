document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll('.dropdown').forEach(function (dropDownWrapper) {
        const dropDownBtn = dropDownWrapper.querySelector('.dropdown_button');
        const dropDownSvg = dropDownWrapper.querySelector('.arrow_pos');
        const dropDownList = dropDownWrapper.querySelector('.dropdown_list');
        const DropDownListItems = dropDownList.querySelectorAll('.dropdown_list-item');
        const dropDownInput = dropDownWrapper.querySelector('.dropdown_input-hidden');

        
        dropDownInput.value = 'by_clicking';
        
        dropDownBtn.addEventListener('click', function () {
            dropDownSvg.classList.toggle('down');
        })

        DropDownListItems.forEach(function (listItem) {
            listItem.addEventListener('click', function (e) {
                e.stopPropagation();
                // dropDownBtn.focus();
                dropDownSvg.classList.remove('down');
            })
        })
        document.addEventListener('click', function (e) {
            if (e.target !== dropDownBtn) {
                dropDownSvg.classList.remove('down');
            }
        })
        dropDownBtn.addEventListener('click', function () {
            dropDownList.classList.toggle('dropdown_list--visible');
        })

        DropDownListItems.forEach(function (listItem) {
            listItem.addEventListener('click', function (e) {
                e.stopPropagation();
                dropDownBtn.style.color = 'rgba(37, 32, 32, 1)';
                dropDownBtn.innerText = this.innerText;
                // dropDownBtn.focus();
                dropDownInput.value = this.dataset.value;
                dropDownList.classList.remove('dropdown_list--visible');

                if (dropDownInput.value === 'by_clicking') {
                    // document.querySelector('.actions_content').style.display='block';
                    document.querySelector('.on_schedule_content').style.display = 'none';
                    document.querySelector('.by_clicking_content').style.display = 'block';
                } else if (dropDownInput.value === 'on_schedule') {
                    // document.querySelector('.actions_content').style.display='none';
                    document.querySelector('.on_schedule_content').style.display = 'block';
                    document.querySelector('.by_clicking_content').style.display = 'none';
                }
            })
        })

        document.addEventListener('click', function (e) {
            if (e.target !== dropDownBtn) {
                dropDownList.classList.remove('dropdown_list--visible');
            }
        })
        document.addEventListener('keydown', function (e) {
            if (e.key === 'Tab' || e.key === 'Escape') {
                dropDownList.classList.remove('dropdown_list--visible');
            }
        })
    })
})




