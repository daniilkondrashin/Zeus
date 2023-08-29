document.addEventListener("DOMContentLoaded", function () {
    const ADD_BUTTON = document.querySelector('.menu__icon');
    const ADD_CONTAINER = document.querySelector('.menu_items');

    ADD_BUTTON.addEventListener('click', function () {
        ADD_CONTAINER.classList.toggle('menu_items--visible');
    })

    document.addEventListener('click', function (e) {
        const withinBoundaries = e.composedPath().includes(ADD_CONTAINER && ADD_BUTTON);

        if (!withinBoundaries) {
            ADD_CONTAINER.classList.remove('menu_items--visible');
        }
    })
})