document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll('.s_list').forEach(function (scenarioSelection) {
        const SCENARIO_BUTTON = scenarioSelection.querySelectorAll('.s_block');
        SCENARIO_BUTTON.forEach(function (btn) {
            const ICON_DEFAULT = btn.querySelector('.icon');
            var counterNam = 0;
            var buttonStatus = 'not_active';
            var serverСonnection = true;
            if (buttonStatus === 'active') {
                btn.classList.add('s_block_default--active');
                btn.classList.remove('s_block_default--not_active');
                ICON_DEFAULT.classList.remove('icon--default');
            }
            if (buttonStatus === 'not_active') {
                btn.classList.remove('s_block_default--active');
                btn.classList.add('s_block_default--not_active');
                ICON_DEFAULT.classList.add('icon--default');
            }
            btn.addEventListener('click', function (event) {
                const ICON = event.currentTarget.querySelector('.icon');
                const ICON_CONFIRMATION = event.currentTarget.querySelector('.icon_confirmation');
                const ICON_ICON_LOADING = event.currentTarget.querySelector('.icon_loading')
                const TEXT = event.currentTarget.querySelector('.s_text');
                const TEXT_CONFIRMATION = event.currentTarget.querySelector('.s_text_confirmation');
                counterNam++;
                switch (buttonStatus) {
                    case 'active':
                        if (counterNam === 1) {
                            btn.style = 'background: #FFEEDF;';
                            ICON.style.display = 'none';
                            ICON_CONFIRMATION.style.display = 'block';
                            TEXT.style.display = 'none';
                            TEXT_CONFIRMATION.style.display = 'block';
                            ICON.classList.remove('icon--default');
                        }
                        if (counterNam === 2) {
                            btn.querySelector('.animation_button').style.display = 'block';
                            btn.querySelector('.s_info').style.display = 'none';
                            btn.classList.add('s_block--animation');
                            let i = 0;
                            let timerId = setInterval(function () {
                                i++;
                                if (i >= 2 && serverСonnection === true) {
                                    clearInterval(timerId);
                                    btn.style = 'background: #FFFFFF;';
                                    TEXT.style = 'color: #BFBFBF;';
                                    TEXT_CONFIRMATION.style.display = 'none';
                                    ICON.classList.add('icon--default');
                                    btn.querySelector('.animation_button').style.display = 'none';
                                    btn.classList.remove('s_block--animation');
                                    ICON.style.display = 'block';
                                    btn.querySelector('.s_info').style.display = 'block';
                                    ICON_CONFIRMATION.style.display = 'none';
                                    counterNam = 0;
                                    buttonStatus = 'not_active';
                                }
                            }, 1000);
                        }
                        break;
                    case 'not_active':
                        if (counterNam === 1) {
                            btn.style = 'background: #FFEEDF;';
                            ICON.style.display = 'none';
                            ICON_CONFIRMATION.style.display = 'block';
                            TEXT.style.display = 'none';
                            TEXT_CONFIRMATION.style.display = 'block';
                            ICON.classList.remove('icon--default');
                        }
                        if (counterNam === 2) {
                            btn.querySelector('.animation_button').style.display = 'block';
                            btn.querySelector('.s_info').style.display = 'none';
                            btn.classList.add('s_block--animation');
                            let i = 0;
                            let timerId = setInterval(function () {
                                i++;
                                if (i >= 2 && serverСonnection === true) {
                                    clearInterval(timerId);
                                    btn.style = 'background: #FFDBBC;';
                                    ICON.style.display = 'block';
                                    ICON_CONFIRMATION.style.display = 'none';
                                    TEXT_CONFIRMATION.style.display = 'none';
                                    TEXT.style.display = 'block';
                                    btn.classList.remove('s_block--animation');
                                    btn.querySelector('.animation_button').style.display = 'none';
                                    btn.querySelector('.s_info').style.display = 'block';
                                    TEXT_CONFIRMATION.style.display = 'none';
                                    TEXT.style = 'color: #252020;';
                                    counterNam = 0;
                                    buttonStatus = 'active';
                                }
                            }, 1000);
                        }
                        break;
                }
                if (counterNam === 1) {
                    var i = 0;
                    let buttonCheck = false;
                    let timerId = setInterval(function () {
                        i++;
                        if (counterNam === 0) {
                            clearInterval(timerId);
                            buttonCheck = true;
                        }
                        if (counterNam === 2) {
                            clearInterval(timerId);
                        }
                        if (i === 10) {
                            if (buttonStatus === 'active') {
                                btn.style = 'background: #FFDBBC;';
                                ICON.style.display = 'block';
                                ICON_CONFIRMATION.style.display = 'none';
                                TEXT.style.display = 'block';
                                TEXT_CONFIRMATION.style.display = 'none';
                                TEXT.style = 'color: #252020;';
                                counterNam = 0;
                                buttonStatus = 'active';
                            }
                            if (buttonStatus === 'not_active') {
                                btn.style = 'background: #FFFFFF;'
                                TEXT.style = 'color: #BFBFBF;';
                                ICON.classList.add('icon--default');
                                ICON.style.display = 'block';
                                ICON_CONFIRMATION.style.display = 'none';
                                counterNam = 0;
                                buttonStatus = 'not_active';
                            }
                        }
                        if (i >= 10) {
                            clearInterval(timerId);
                        }
                    }, 1000);
                    if (counterNam === 2) {
                        var i = 0;
                        let buttonCheck = false;
                        let timerId = setInterval(function () {
                            i++;
                            if (counterNam === 0) {
                                clearInterval(timerId);
                                buttonCheck = true;
                            }
                            if (counterNam === 2) {
                                clearInterval(timerId);
                            }
                            if (i === 10) {
                                if (buttonStatus === 'active') {
                                    btn.style = 'background: #FFDBBC;';
                                    ICON.style.display = 'block';
                                    ICON_CONFIRMATION.style.display = 'none';
                                    TEXT.style.display = 'block';
                                    TEXT_CONFIRMATION.style.display = 'none';
                                    TEXT.style = 'color: #252020;';
                                    counterNam = 0;
                                    buttonStatus = 'active';
                                }
                                if (buttonStatus === 'not_active') {
                                    btn.style = 'background: #FFFFFF;'
                                    TEXT.style = 'color: #BFBFBF;';
                                    ICON.classList.add('icon--default');
                                    ICON.style.display = 'block';
                                    ICON_CONFIRMATION.style.display = 'none';
                                    counterNam = 0;
                                    buttonStatus = 'not_active';
                                }
                            }
                            if (i >= 10) {
                                clearInterval(timerId);
                            }
                        }, 1000);
                    }
                }
            })
        })
    })
})