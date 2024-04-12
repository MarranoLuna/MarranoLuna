/*const frutas=['pera','manzana','frutilla','kiwi','naranja'];

// 3 formas de recorrer un array

for(i=0;i<frutas.length;i++){
    console.log(frutas[i]); 
}
console.log(' ');


frutas.forEach(fruta=>{
    console.log(fruta); 
})
console.log(' ');


for(const fruta of frutas){
    if (fruta=='manzana') console.log(fruta);
}*/


function buscar(){
    var valor=document.getElementById('numero').value;
    fetch('https://rickandmortyapi.com/api/character/' + valor)
    .then (response=>response.json())
    .then (data=>{
            console.log(data.name)
    });

}

//document.getElementById("numero").innerHTML="El personaje "+data.name+" esta "+data.status