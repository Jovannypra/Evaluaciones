(function(window) {
	var speakWord = "Good Bye";
	var byeSpeaker = function (names) {
  		console.log(speakWord + " " + names);
	}
	
	window.byeSpeaker = byeSpeaker;

})(window);