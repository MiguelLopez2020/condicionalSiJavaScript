

function datos() {

    var contactoCovid = prompt("Ha tenido contacto con alguien positivo de covid")
    if (contactoCovid === "si") {
        document.write("Ponte en Cuarentena")
    } else if (contactoCovid === "no") {
        document.write("Gracias por cuidarte")
    } else {
        document.write("escribe si o no")
    }

    var Sintomas = prompt("tiene sintomas")
    if (Sintomas === "si") {
        document.write("El servicio medico va en camino")
    } else if (Sintomas === "no") {
        document.write("ojo puedes ser asintomatico")
    } else {
        document.write("escribe si o no")
    }
    console.log("Recuerde que este servicio es gratuito")
}




