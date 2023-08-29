const ADD_SCENARIOS_BUTTON = document.querySelector('#pin_the_script');
const SHOW_NOTIFICATION = document.querySelector('.notification__container');
const WRAPPER = document.querySelector('.wrapper');
const MENU = document.querySelectorAll('.add-devices__button');    // кнопка вызова скрипта 
const MAIN_CONTAINER = document.querySelector('.main__container');
const ONE_BLOCK = document.querySelector('.one_block');
const TWO_BLOCKS = document.querySelector('.two_blocks');
const MULTI_BLOCKS = document.querySelector('.multi_blocks');
const NOTIFICATION_FOOTER = document.querySelector('.notification__footer');
const FOOTER_CONTAINER = document.querySelector('.footer__container');
const CANCELLATION_TWO_BLOCKS = document.querySelector('.two_blocks > #cancellation');
const CANCELLATION_MULTI_BLOCKS = document.querySelector('.multi_blocks > #cancellation');
const DELETE = document.querySelector('#delete');
const TITLE__TEXT = document.querySelector('.title__text');
const SUBTITEL_TEXT = document.querySelector('.subtitel__text');
const NOTIFICATION_BUTTON = document.querySelectorAll('.notification__button');

MENU.forEach(function(menu) {
    menu.addEventListener('click', function(e) {
        e.stopPropagation();
    
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
        
        CANCELLATION_MULTI_BLOCKS.addEventListener('click', function() {
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
        if (DELETE != null) {
            DELETE.addEventListener('click', function() {
                TWO_BLOCKS.style.display = 'flex';
                MULTI_BLOCKS.style.display = 'none';
                MAIN_CONTAINER.style.display = '';
                TITLE__TEXT.innerHTML = 'Подтверждение';  // Изменение текста заголовка 
                SUBTITEL_TEXT.innerHTML = 'Вы точно хотите удалить сценарий?';  // Изменение текста подзаголовка
                NOTIFICATION_BUTTON.style = 'margin: 0;'
                NOTIFICATION_FOOTER.style = '';
                FOOTER_CONTAINER.style = '';
        
                CANCELLATION_TWO_BLOCKS.addEventListener('click', function() {
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
        }
    })
})
document.addEventListener('click', function(e) {
    const withinBoundaries = e.composedPath().includes(FOOTER_CONTAINER);

    if(!withinBoundaries) {
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



