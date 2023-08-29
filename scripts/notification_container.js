document.addEventListener("DOMContentLoaded", function () {
    const ADD_SCENARIOS_BUTTON = document.querySelector('#pin_the_script'); // кнопка "Закрепить сценарий"
    const SHOW_NOTIFICATION = document.querySelector('.notification__container'); // блок с контентом уведомлений 
    const WRAPPER = document.querySelector('.wrapper'); // блок с основным контентом страницы
    const MENU = document.querySelectorAll('.more_hor'); // кнопка меню у сценариев 
    const MAIN_CONTAINER = document.querySelector('.main__container'); // Блок с текстом уведомления 
    const ONE_BLOCK = document.querySelector('.one_block'); // одна кнопка в notification__footer
    const TWO_BLOCKS = document.querySelector('.two_blocks'); // две кнопки в notification__footer
    const MULTI_BLOCKS = document.querySelector('.multi_blocks'); // более двух кнопок в notification__footer
    const NOTIFICATION_FOOTER = document.querySelector('.notification__footer'); // блок с кнопками 
    const FOOTER_CONTAINER = document.querySelector('.footer__container'); // блок с кнопками
    const CANCELLATION_TWO_BLOCKS = document.querySelector('.two_blocks > #cancellation'); // кнопка отмена
    const CANCELLATION_MULTI_BLOCKS = document.querySelector('.multi_blocks > #cancellation'); // кнопка отмена
    const DELETE_MULTI_BLOCKS = document.querySelector('#delete_multi_blocks'); // кнопка удалить в блоке с более двумя кнопками
    const DELETE_TWO_BLOCKS = document.querySelector('#delete_two_blocks'); // кнопка удалить в блоке с двумя кнопками
    const TITLE__TEXT = document.querySelector('.title__text'); // заголовок уведомления 
    const SUBTITEL_TEXT = document.querySelector('.subtitel__text'); // текст уведомления 
    const NOTIFICATION_BUTTON = document.querySelectorAll('.notification__button'); // кнопки 
    const DELETE_SCENARIOS_NOTIFICATION = document.querySelectorAll('.delete-notification'); // кнопка удалить у "Скоро сработают"


    MENU.forEach(function (menu) {
        menu.addEventListener('click', function (e) {
            e.stopPropagation();
            // блок с одной кнопкой 
            ADD_SCENARIOS_BUTTON.addEventListener('click', function () {
                var byClicking = document.querySelector('.by_clicking');
                var numberByClicking = byClicking.querySelectorAll('.scenarios').length;
                var onSchedule = document.querySelector('.on_schedule');
                var numberOnSchedule = onSchedule.querySelectorAll('.scenarios').length;

                if (numberByClicking >= 10) {
                    MAIN_CONTAINER.style.display = '';
                    SHOW_NOTIFICATION.style.display = 'grid';
                    MULTI_BLOCKS.style.display = 'none';
                    ONE_BLOCK.style.display = '';
                    NOTIFICATION_FOOTER.style = '';
                    FOOTER_CONTAINER.style = '';
                    TITLE__TEXT.innerHTML = 'Уведомление';  // Изменение текста заголовка 
                    SUBTITEL_TEXT.innerHTML = 'Нельзя закрепить больше 10 сценариев на главном экране';  // Изменение текста подзаголовка 
                }
                if (numberOnSchedule >= 10) {
                    MAIN_CONTAINER.style.display = '';
                    MAIN_CONTAINER.style.display = 'none';
                    SHOW_NOTIFICATION.style.display = 'grid';
                    MULTI_BLOCKS.style.display = 'none';
                    ONE_BLOCK.style.display = '';
                    NOTIFICATION_FOOTER.style = '';
                    FOOTER_CONTAINER.style = '';
                    TITLE__TEXT.innerHTML = 'Уведомление';  // Изменение текста заголовка 
                    SUBTITEL_TEXT.innerHTML = 'Нельзя закрепить больше 10 сценариев на главном экране';  // Изменение текста подзаголовка
                }
                const BUTTON = document.querySelector('.notification__button');
                BUTTON.addEventListener('click', function () {
                    SHOW_NOTIFICATION.style.display = 'none';
                    WRAPPER.style.opacity = '1';
                })
            })

            // блок с двумя и более кнопками 
            WRAPPER.style.opacity = '0.3';
            ONE_BLOCK.style.display = 'none';
            SHOW_NOTIFICATION.style.display = 'grid';
            MAIN_CONTAINER.style.display = 'none';
            MULTI_BLOCKS.style.display = 'block';
            NOTIFICATION_FOOTER.style = `
            padding: 0 15px 10px 15px;
            background: none;
            pading: 0;
        `;
            FOOTER_CONTAINER.style = `
            padding: 10px 15px 10px 15px;
            border-radius: 5px;
        `;

            CANCELLATION_MULTI_BLOCKS.addEventListener('click', function () {
                WRAPPER.style.opacity = '1';
                SHOW_NOTIFICATION.style.display = 'none';
                MAIN_CONTAINER.style.display = '';
                MULTI_BLOCKS.style.display = 'none';
                ONE_BLOCK.style.display = '';
                NOTIFICATION_FOOTER.style = '';
                FOOTER_CONTAINER.style = '';
                TWO_BLOCKS.style.display = 'none';
            })

            // блок с двумя кнопками 
            DELETE_MULTI_BLOCKS.addEventListener('click', function () {
                TWO_BLOCKS.style.display = 'flex';
                MULTI_BLOCKS.style.display = 'none';
                MAIN_CONTAINER.style.display = '';
                TITLE__TEXT.innerHTML = 'Подтверждение';  // Изменение текста заголовка 
                SUBTITEL_TEXT.innerHTML = 'Вы точно хотите удалить сценарий?';  // Изменение текста подзаголовка
                NOTIFICATION_BUTTON.style = 'margin: 0;'
                NOTIFICATION_FOOTER.style = '';
                FOOTER_CONTAINER.style = '';

                CANCELLATION_TWO_BLOCKS.addEventListener('click', function () {
                    TWO_BLOCKS.style.display = 'none';
                    WRAPPER.style.opacity = '1';
                    SHOW_NOTIFICATION.style.display = 'none';
                    MAIN_CONTAINER.style.display = '';
                    MULTI_BLOCKS.style.display = 'none';
                    ONE_BLOCK.style.display = '';
                    NOTIFICATION_FOOTER.style = '';
                    FOOTER_CONTAINER.style = '';
                })
            })
        })
    })
    // отлавливает клик по документу
    document.addEventListener('click', function (e) {
        const withinBoundaries = e.composedPath().includes(FOOTER_CONTAINER); // клик только по кнопке меню "..."

        if (!withinBoundaries) {
            WRAPPER.style.opacity = '1';
            SHOW_NOTIFICATION.style.display = 'none';
            MAIN_CONTAINER.style.display = '';
            MULTI_BLOCKS.style.display = 'none';
            ONE_BLOCK.style.display = '';
            NOTIFICATION_FOOTER.style = '';
            FOOTER_CONTAINER.style = '';
            TWO_BLOCKS.style.display = 'none';
        }
    })

    var scenariosNotificationAll = document.querySelector('.main-notification__content');
    var scenariosNotificationLength = scenariosNotificationAll.querySelectorAll('.scenarios-notification').length;

    if (scenariosNotificationLength == undefined) {
        document.querySelector('.main-notification__titel').style.display = 'none';
        document.querySelector('.main-notification__section').style.display = 'none';
    }

    DELETE_SCENARIOS_NOTIFICATION.forEach(function (del) {
        del.addEventListener('click', function (e) {
            console.log(scenariosNotificationLength);
            const scenariosNotification = document.querySelector('.scenarios-notification');
            e.stopPropagation();
            console.log(e);
            // блок с двумя и более кнопками 
            WRAPPER.style.opacity = '0.3';
            ONE_BLOCK.style.display = 'none';
            SHOW_NOTIFICATION.style.display = 'grid';
            MAIN_CONTAINER.style.display = '';
            TITLE__TEXT.innerHTML = 'Подтверждение';  // Изменение текста заголовка 
            SUBTITEL_TEXT.innerHTML = 'Вы точно хотите отменить сценарий?';  // Изменение текста подзаголовка
            TWO_BLOCKS.style.display = 'flex';
            NOTIFICATION_FOOTER.style = ``;
            FOOTER_CONTAINER.style = ``;

            if (scenariosNotification.length == 0) {
                document.querySelector('.main-notification__section').style.display = 'none';
                document.querySelector('.main-notification__titel').style.display = 'none';
            }
            CANCELLATION_TWO_BLOCKS.addEventListener('click', function () {
                TWO_BLOCKS.style.display = 'none';
                WRAPPER.style.opacity = '1';
                SHOW_NOTIFICATION.style.display = 'none';
                MAIN_CONTAINER.style.display = '';
                MULTI_BLOCKS.style.display = 'none';
                ONE_BLOCK.style.display = '';
                NOTIFICATION_FOOTER.style = '';
                FOOTER_CONTAINER.style = '';
            })
            DELETE_TWO_BLOCKS.addEventListener('click', function () {
                TWO_BLOCKS.style.display = 'none';
                WRAPPER.style.opacity = '1';
                SHOW_NOTIFICATION.style.display = 'none';
                MAIN_CONTAINER.style.display = '';
                MULTI_BLOCKS.style.display = 'none';
                ONE_BLOCK.style.display = '';
                NOTIFICATION_FOOTER.style = '';
                FOOTER_CONTAINER.style = '';
                scenariosNotification.parentNode.removeChild(scenariosNotification);
            })
        })
    })
})