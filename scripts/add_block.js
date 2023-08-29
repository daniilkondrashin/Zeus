document.addEventListener("DOMContentLoaded", function () {
    const ADD_BUTTON = document.querySelector('.header__container-button');
    const ADD_CONTAINER = document.querySelector('.add-container__items');

    ADD_BUTTON.addEventListener('click', function () {
        ADD_CONTAINER.classList.add('add_container-visible');
    })

    document.addEventListener('click', function (e) {
        const withinBoundaries = e.composedPath().includes(ADD_CONTAINER && ADD_BUTTON);

        if (!withinBoundaries) {
            ADD_CONTAINER.classList.remove('add_container-visible');
        }
    })
})
