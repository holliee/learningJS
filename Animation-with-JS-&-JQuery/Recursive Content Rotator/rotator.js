(function () {
	"use strict";

	let counter = 1;

	function contentRotator() {
		$(`#container p:nth-child(${counter})`).fadeIn(2000, function () {

			if ($(this).is("#container p:last-child")) {
				//wait seven seconds
				setTimeout(function () {

					//fade the paragraphs out
					$(`#container p:nth-child(${counter})`).fadeOut(2000, function () {
						//set the counter back to 1
						counter = 1;

						//reun contentRotator again
						contentRotator();
					});

				}, 7000);

			} else {
				//wait seven seconds
				setTimeout(function () {
					//fade the paragraphs out
					$(`#container p:nth-child(${counter})`).fadeOut(2000, function () {
						//increment the counter
						counter++;

						//reun contentRotator again
						contentRotator();
					});

				}, 7000);
			}

		}); //end fadein callback function

	}

	contentRotator();

}());
