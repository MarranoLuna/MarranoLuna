
function getMultipleCharacter(characterId, characterId2) {
    var promise = fetch('https://rickandmortyapi.com/api/character/' + characterId + ',' + characterId2)
    return promise;
}

function btnBuscar_onClick() {

    document.getElementById("check").style.display = "none";
    document.getElementById("cruz").style.display = "none";
    var characterId = document.getElementById('numero').value
    var characterId2 = document.getElementById('numero2').value

    getMultipleCharacter(characterId, characterId2)
        .then(response => { 
            return response.json() 
        })
        .then(data => { 
            if (characterId != characterId2){
                var primerPersonaje = data[0]
                var segundoPersonaje = data[1]
            } else {
                var primerPersonaje = data[0]
                var segundoPersonaje = data[0]
            }
            

            console.log('primer personaje ',primerPersonaje)
            console.log('segundo personaje ',segundoPersonaje)
            console.log('Genero primer personaje ',primerPersonaje.gender)
            console.log('Genero segundo personaje ',segundoPersonaje.gender)
           
            document.getElementById('imagen1').src=primerPersonaje.image
            document.getElementById('imagen2').src=segundoPersonaje.image 

            var esIgualGenero = compararGeneros(primerPersonaje,segundoPersonaje)
            if (esIgualGenero){
                document.getElementById("check").style.display = "block";
            } else {
                document.getElementById("cruz").style.display = "block";
            }
        })

}

function compararGeneros (primerPersonaje,segundoPersonaje) {
    var genero=false
    if (primerPersonaje.gender==segundoPersonaje.gender){
        genero=true;
    }
    return genero;
}

//BOTON QUE TRAE UN PERSONAJE RANDOM
//CSS-TRICK
// randon uses y leaflet

