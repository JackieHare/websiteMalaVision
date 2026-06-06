document.querySelectorAll('.nav-link').forEach((link) => {
    link.addEventListener('click', () => {
        const menu = document.querySelector('#mainMenu');
        const toggle = document.querySelector('.menu-toggle');

        if (menu && toggle && menu.classList.contains('show')) {
            toggle.click();
        }
    });
});
