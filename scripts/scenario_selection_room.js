document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll('.by_clicking, .on_schedule').forEach(function (scenarioSelection) {
        const SCENARIO_BUTTON = scenarioSelection.querySelectorAll('.scenarios');
        const ELLIPSIS = document.querySelector('.more_hor').addEventListener('click', function (e) {
            e = window.event || e;
        })
        SCENARIO_BUTTON.forEach(function (btn) {
            const ICON_DEFAULT = btn.querySelector('.scenarios__icon');
            var counterNam = 0;
            var buttonStatus = 'not_active';
            var serverСonnection = true;
            if (buttonStatus === 'active') {
                btn.classList.add('scenarios_active');
                btn.classList.remove('scenarios_not-active');
                ICON_DEFAULT.classList.remove('scenarios__icon--default');
                btn.classList.remove('scenarios_animation');
                btn.querySelector('.scenarios__animation').style.display = 'none';
            }
            if (buttonStatus === 'not_active') {
                btn.classList.remove('scenarios_active');
                btn.classList.add('scenarios_not-active');
                ICON_DEFAULT.classList.add('scenarios__icon--default');
                btn.classList.remove('scenarios_animation');
                btn.querySelector('.scenarios__animation').style.display = 'none';
            }
            document.querySelector('.more_hor').addEventListener('click', function (e) {
                e.stopPropagation();
            })
            btn.addEventListener('click', function (event) {
                const ICON = event.currentTarget.querySelector('.scenarios__icon');
                const ICON_CONFIRMATION = event.currentTarget.querySelector('.scenarios__icon-confirmation');
                const ICON_ICON_LOADING = event.currentTarget.querySelector('.icon_loading');
                const TEXT = event.currentTarget.querySelector('.scenarios__text');
                const TEXT_INNER = event.currentTarget.querySelector('.scenarios__inner')
                const TEXT_CONFIRMATION = event.currentTarget.querySelector('.scenarios__text_confirmation');
                counterNam++;
                switch (buttonStatus) {
                    case 'active':
                        if (counterNam === 1) {
                            btn.style = 'background: #FFEEDF;';
                            ICON.style.display = 'none';
                            ICON_CONFIRMATION.style.display = 'block';
                            TEXT.style.display = 'none';
                            TEXT_INNER.style.display = 'none';
                            TEXT_CONFIRMATION.style.display = 'block';
                            ICON.classList.remove('scenarios__icon--default');
                        }
                        if (counterNam === 2) {
                            btn.querySelector('.scenarios__animation').style.display = 'grid';
                            btn.querySelector('.scenarios__content').style.display = 'none';
                            btn.classList.add('scenarios_animation');
                            let i = 0;
                            let timerId = setInterval(function () {
                                i++;
                                if (i >= 2 && serverСonnection === true) {
                                    clearInterval(timerId);
                                    btn.style = 'background: #FFFFFF;';
                                    TEXT.style = 'color: #BFBFBF;';
                                    TEXT_INNER.style = 'color: #BFBFBF;'
                                    TEXT_INNER.style.display = 'flex';
                                    TEXT_CONFIRMATION.style.display = 'none';
                                    ICON.classList.add('scenarios__icon--default');
                                    btn.querySelector('.scenarios__animation').style.display = 'none';
                                    btn.classList.remove('scenarios_animation');
                                    ICON.style.display = 'block';
                                    btn.querySelector('.scenarios__content').style.display = 'block';
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
                            TEXT_INNER.style.display = 'none';
                            TEXT_CONFIRMATION.style.display = 'block';
                            ICON.classList.remove('scenarios__icon--default');
                        }
                        if (counterNam === 2) {
                            btn.querySelector('.scenarios__animation').style.display = 'grid';
                            btn.querySelector('.scenarios__content').style.display = 'none';
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
                                    TEXT_INNER.style.display = 'flex';
                                    btn.classList.remove('scenarios_animation');
                                    btn.querySelector('.scenarios__animation').style.display = 'none';
                                    btn.querySelector('.scenarios__content').style.display = 'block';
                                    TEXT_CONFIRMATION.style.display = 'none';
                                    TEXT.style = 'color: #252020;';
                                    TEXT_INNER.style = 'color: #252020;';
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
                                TEXT_INNER.style.display = 'flex';
                                TEXT_CONFIRMATION.style = 'display: none';
                                TEXT.style = 'color: #252020;';
                                counterNam = 0;
                                buttonStatus = 'active';
                            }
                            if (buttonStatus === 'not_active') {
                                btn.style = 'background: #FFFFFF;';
                                ICON.style.display = 'block';
                                ICON_CONFIRMATION.style = 'display: none';
                                TEXT.style.display = 'block';
                                ICON.classList.add('scenarios__icon--default');
                                TEXT_INNER.style.display = 'flex';
                                TEXT_CONFIRMATION.style = 'display: none';
                                TEXT.style = 'color: #BFBFBF';
                                counterNam = 0;
                                buttonStatus = 'not_active';
                            }
                        }
                        if (i >= 10) {
                            clearInterval(timerId);
                        }
                    }, 1000);
                }
            })
        })
    })
})