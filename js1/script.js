(function () {

  var nombre = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
  
  for (var i = 0; i < nombre.length; i++) {
    var firstLetter = nombre[i].charAt(0).toLowerCase();
  
    if (firstLetter === 'j') {
      byeSpeaker(nombre[i]);
    }
    else {
      helloSpeaker(nombre[i]);
    }
  }
  
  })();