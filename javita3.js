window.onload=() => { //MUY recomendable empezar así

    function enMayusculas(element) {
        element.value = element.value.toUpperCase(); //aqui va a cambiar el "valor" que es lo que está en minusculas a mayusculas
    }



    let element = document.getElementById("texto");
    element.addEventListener("keyup",(event) => enMayusculas(event.target))

}