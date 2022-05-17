(function () {

    "use strict";

    const btn = document.querySelector('button');
    const par = document.querySelector('p');

    btn.addEventListener('click', function () {
        par.style.color = 'green';
    });

}());