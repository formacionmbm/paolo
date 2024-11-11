function enMayusculas() {
    let textointroducido = document.getElementById("texto"); //la variable "let" va a coger el material del elemento "texto" del "document" que es el html
    textointroducido.value = textointroducido.value.toUpperCase(); //aqui va a cambiar el "valor" que es lo que está en minusculas a mayusculas
}