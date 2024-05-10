//dos input donde agrego 3 numeros en cada uno
//al tercer numero no permitir que ingresen mas
//llamar a la api de rick and morty y que aparezcan las 3 fotos de los 3 personajes de cada boton

function obtenerArray(idArray){
    if(document.getElementById(idArray).value == ""){
        let arrayNumeros = []                                                              // si esta vacio, que lo inicialice como array
        return arrayNumeros
    }
    let arrayNumeros = JSON.parse(document.getElementById(idArray).value)                  // sino, que lo obenga y lo convierta a array
    return arrayNumeros
}



function guardarArray(idArray,numero){
    let arrayNumeros
    if(document.getElementById(idArray).value == ""){                                
        arrayNumeros = []                                                                  // si esta vacio, que lo inicialice como array
    } else{
        arrayNumeros = JSON.parse(document.getElementById(idArray).value)                  // sino, que lo obtenga, y lo convierta a array
    }

    arrayNumeros.push(numero)                                                              // le agrego el numero ingresado
    document.getElementById(idArray).value = JSON.stringify(arrayNumeros)                  // lo guardo como string
}



function boton1(){

    let numeros1 = parseInt(document.getElementById('numeros1').value)                      

    if(numeros1>0 && numeros1<827){
        
        guardarArray("arrayNumeros",numeros1) 
        let arrayNumeros = obtenerArray("arrayNumeros")

        if (arrayNumeros.length==3){               
            document.getElementById("numeros1").disabled=true
        }  
       
        document.getElementById('numeros1').value="" 

    } else {
        alert("Debe ingresar un numero mayor a 0 y menor a 827")
    }
   
}



function boton2(){
    let numeros2 = parseInt(document.getElementById('numeros2').value)

    if(numeros2>0 && numeros2<827){

        guardarArray("arrayNumeros",numeros2)
        let arrayNumeros = obtenerArray("arrayNumeros")

        if (arrayNumeros.length==6){
            document.getElementById("numeros2").disabled=true
            let array = obtenerArray("arrayNumeros")
            buscarPersonajes(array)
        }  
    } else {
         alert("Debe ingresar un numero mayor a 0 y menor a 827")
    }
  
    document.getElementById('numeros2').value="" 
}


function buscarPersonajes(array){
        console.log(array)     
    fetch("https://rickandmortyapi.com/api/character/" + array)
    .then(Response=>Response.json())
    .then(data=>{
        console.log(data)
        var personaje1 = data.find(elemento => elemento.id == array[0]);
        var personaje2 = data.find(elemento => elemento.id == array[1]);
        var personaje3 = data.find(elemento => elemento.id == array[2]);
        var personaje4 = data.find(elemento => elemento.id == array[3]);
        var personaje5 = data.find(elemento => elemento.id == array[4]);
        var personaje6 = data.find(elemento => elemento.id == array[5]);
        
        document.getElementById('imagen1').src=personaje1.image
        document.getElementById('imagen2').src=personaje2.image
        document.getElementById('imagen3').src=personaje3.image
        document.getElementById('imagen4').src=personaje4.image
        document.getElementById('imagen5').src=personaje5.image
        document.getElementById('imagen6').src=personaje6.image
    })
     .catch(error=>{
        document.getElementById('error').innerHTML="Ha ocurrido un error: " + error
    })
             
}


