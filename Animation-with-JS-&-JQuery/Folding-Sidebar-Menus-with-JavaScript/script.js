(function () {
    "use strict";
    const subMenus = document.querySelectorAll('ul li ul');
    hideSubMenu();

    const mainLinks = document.querySelectorAll('.menulink');
    for (let eachLink of mainLinks) {
        eachLink.addEventListener('click', function (event) {
            event.preventDefault();

            let thisMenu = this.parentNode.querySelector('ul');


            if (thisMenu.classList.contains('hide-menu')) {
                hideSubMenu();
                thisMenu.className = 'show-menu';

            } else {
                thisMenu.className = 'hide-menu';

            }
        });

    }
    function hideSubMenu() {
        for (let eachSubMenu of subMenus) {
            eachSubMenu.className = 'hide-menu';
        }
    }

}());