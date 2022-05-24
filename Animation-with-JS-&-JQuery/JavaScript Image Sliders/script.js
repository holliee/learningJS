window.addEventListener('load', function () {
    //how many slides
    const slideCount = document.querySelectorAll('#slider-wrapper ul li').length;

    // how wide is each slide
    const slideWidth = document.querySelector("#slider-wrapper").offsetWidth;

    //total width of the slider
    const totalWidth = slideCount * slideWidth + 'px';

    //slider DOM element
    const slider = document.querySelector('#slider-wrapper ul');

    //next button
    const next = document.getElementById('next');

    //previous button
    const previous = document.getElementById('prev');

    //upper left corner of the slider
    let leftPosition = 0;

    //to keep track of each slide
    let counter = 0;

    //sets the width of the slider (which is also in the CSS)
    slider.style.width = totalWidth;

    next.addEventListener('click', function (event) {
        event.preventDefault();
        counter++;
        if (counter == slideCount) { counter = 0; }
        leftPosition = `-${counter * slideWidth}px`;
        slider.style.left = leftPosition;

    });

    previous.addEventListener('click', function (event) {
        event.preventDefault();
        counter--;
        if (counter < 0) { counter = slideCount - 1; }
        leftPosition = `-${counter * slideWidth}px`;
        slider.style.left = leftPosition;

    });
});
