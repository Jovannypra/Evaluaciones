function sayHello() {
    var name =
        document.getElementById("name").value;
    var message = "<h2>Hello " + name + "!</h2>"

    /* para quitar los h2 a darle tocar 
hay que agregar .textContent  */
    /*
    document
    .getElementById("content")
    .textContent = message;*/

    document
        .getElementById("content")
        .innerHTML = message;
    /*Si escriben blanco cambia el titulo  a Amo esto*/
    if (name === "blanco") {
        var title =
            document
                .querySelector("#title")
                .textContent;
        title += "& Amo esto";
        document
            /* Si hay un solo h1 podria cambiar #title por h1*/
            .querySelector("#title")
            .textContent = title;
    }

}