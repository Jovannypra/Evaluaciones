(function(window) {
	var speakWord = "Hello";
	var helloSpeaker = function (names) {
		console.log(speakWord + " " + names);
	}

	window.helloSpeaker = helloSpeaker;

})(window);