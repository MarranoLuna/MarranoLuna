const frutas=['pera','manzana','frutilla','kiwi','naranja'];

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
}
