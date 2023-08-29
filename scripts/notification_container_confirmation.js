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
    const BUTTON = document.querySelector('.footer_button_size');

    BUTTON.addEventListener('click', function(){
        console.log(".msg");
        WRAPPER.style.opacity = '0.3'; // opacity wrapper на 0,3
        ONE_BLOCK.style.display = 'none'; // убирает болок с одной кнопкой 
        SHOW_NOTIFICATION.style.display = 'grid'; // показать блок с текстом 
        TITLE__TEXT.innerHTML = 'Подтверждение';  // Изменение текста заголовка 
        SUBTITEL_TEXT.innerHTML = 'Вы точно хотите завершить все сессии?';  // Изменение текста подзаголовка
        TWO_BLOCKS.style.display = 'flex'; // показать блок с двумя кнопками 
        // кнопка отмена. При нажатии скрывает блок с двумя кнопками и блок с уведомлениями
        CANCELLATION_TWO_BLOCKS.addEventListener('click', function () {
            TWO_BLOCKS.style.display = 'none'; // убрать блок с двумя кнопками 
            WRAPPER.style.opacity = '1'; // opacity wrapper на 1
            SHOW_NOTIFICATION.style.display = 'none'; // убрать блок с текстом 
            MULTI_BLOCKS.style.display = 'none'; // контейнер с двумя и более  кнопками display:none
        })
    })
})