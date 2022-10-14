(function(window) {
	var speakWord = "Good Bye";
	var byeSpeaker = function (nombre) {
  		console.log(speakWord + " " + nombre);
	}
	
	window.byeSpeaker = byeSpeaker;

})(window);