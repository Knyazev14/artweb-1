export function headerMenu() {
    var menuHeader = document.querySelector('.menu');
    var theBody = document.querySelector('body');

    if (menuHeader) {
        document.addEventListener('click', clickMenu);

        function clickMenu(click) {
            if (click.target.closest('.menu__icon')) {
                menuHeader.classList.toggle('menu-open');
                theBody.classList.toggle('body-lock');

                // Предотвращение прокрутки при открытом меню
                if (theBody.classList.contains('body-lock')) {
                    theBody.style.overflow = 'hidden';
                } else {
                    theBody.style.overflow = '';
                }
            }
            if (!click.target.closest('.menu__wrap') && !click.target.closest('.menu__icon')) {
                menuHeader.classList.remove('menu-open');
                theBody.classList.remove('body-lock');
                theBody.style.overflow = ''; // Восстановление обычной прокрутки
            }
        }
    }
}
