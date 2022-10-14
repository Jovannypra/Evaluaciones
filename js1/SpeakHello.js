(function(window) {
	var speakWord = "Hello";
	var helloSpeaker = function (nombre) {
		console.log(speakWord + " " + nombre);
	}

	window.helloSpeaker = helloSpeaker;

})(window);