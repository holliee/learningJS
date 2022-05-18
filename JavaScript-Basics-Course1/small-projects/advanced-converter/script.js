(function () {

    //written by Hollie O'Brien
    "use strict";

    let convertType = 'miles';
    const heading = document.querySelector('h1');
    const intro = document.querySelector('p');
    const answerDiv = document.getElementById('answer');
    const form = document.getElementById('container');

    document.addEventListener('keydown', function (event) {
        //handle keypress of K or M key
        var key = event.code;

        if (key === 'KeyK') {
            //change value of convertType variable
            convertType = 'kilometers';

            //change heading
            heading.innerHTML = 'Kilometers to Miles Converter';

            //change intro paragraph
            intro.innerHTML = 'Type in a number of kilometers and click the button to convert the distance to miles.';

        }
        else if (key === 'KeyM') {
            convertType = 'miles';
            heading.innerHTML = 'Miles to Kilometers Converter';
            intro.innerHTML = 'Type in a number of miles and click the button to convert the distance to kilometers.';

        }
    });

    document.addEventListener('submit', function (event) {
        //handle submission of form and distance conversion
        event.preventDefault();

        const distance = parseFloat(document.getElementById('distance').value);

        if (distance) {
            //convert M to K 1.609344
            //convert K to M 0.621371192

            if (convertType == 'miles') {
                const converted = (distance * 1.609344).toFixed(3);
                answerDiv.innerHTML = `${distance} miles converts to ${converted} kilometers`;

            } else {
                const converted = (distance * 0.621371192).toFixed(3);
                answerDiv.innerHTML = `${distance} kilometers converts to ${converted} miles`;

            }

        } else {
            answerDiv.innerHTML = '<h2>Please provide a number</h2>';
        }

    });

}());