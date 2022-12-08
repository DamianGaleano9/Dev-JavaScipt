// var coleccionDeDiscos = {
//     7853: {
//         tituloDelAlbum: "Bee Gees Greatest",
//         artista: "Bee Gee",
//         canciones: ["stayin' alive"]
//     },
//     5439: {
//         tituloAlmbun: "ABBA Gold"
//     }
// }

// function actualizarDiscos(discos, id, propiedad, valor) {
//     if(valor === "") {
//         delete discos[id][propiedad];  
//     } else if(propiedad === "canciones"){
//         discos[id][propiedad] = discos[id][propiedad] || [];
//         discos[id][propiedad].push(valor);
//     } else {
//         discos[id][propiedad] = valor;
//     }
// }


// console.log(coleccionDeDiscos[7853].tituloDelAlbum);
// // LLAMAMOS AL OBJETO ACCEDEMOS AL PRIMER ID Y VEMOS QUE EL TITULO ES EL QUE CORRESPONDE

// console.log(actualizarDiscos(coleccionDeDiscos, 7853, "tituloDelAlbum", ""));

// // AHORA LLAMAMOS A NUESTRA FUNCION QUE ELIMINA LA PROPIEDAD "tituloDelAlbum"


// console.log(coleccionDeDiscos[7853].tituloDelAlbum);

// DEVUELVE UNDEFINED QUE ES LO QUE QUEREMOS 


// AHORA ACTUALIZAMOS LOS DATOS PARA EL SEGUNDO ID Y CAMBIAREMOS PARA QUE SI NO EXISTE LA PROPIEDAD 
// CANCION Y CREE UNA EN EL VALOR QUE PASAMOS;


// console.log(coleccionDeDiscos[5439]);
// console.log(actualizarDiscos(coleccionDeDiscos, [5439], "canciones", "I Keep falling for you"));
// console.log(coleccionDeDiscos[5439].canciones)



// function rangoAleatorio(limiteInferior, limiteSuperior) {
//     return Math.floor(Math.random() * (limiteSuperior -limiteInferior + 1)) + limiteInferior;
// }


// console.log(rangoAleatorio(2, 10));
// console.log(rangoAleatorio(2, 10));
// console.log(rangoAleatorio(2, 10));
// console.log(rangoAleatorio(2, 10));
// console.log(rangoAleatorio(2, 10));


// for(var i = 0; i < 10; i++) {
//     console.log(rangoAleatorio(2,9))
// }


// // PARSE INT()

// console.log(parseInt("3"));
// console.log(parseInt("12"));
// console.log(parseInt("-49"));
// console.log(parseInt("3.22222220"));
// console.log(parseInt("9.3333"));
// console.log(parseInt("0"));


// var a = parseInt("5");
// var b = parseInt("7");

// console.log(a + b);


// a = parseInt();
// b = parseInt(); 

// console.log(a + b);
// console.log(parseInt("110111", 2))
// console.log(parseInt("110110", 4))
// console.log(parseInt(110110, 4))

// console.log(parseInt("3E0A", 16)) /* sistema hexadecimal*/

// function retornarMinimo(x,y){
//     if(x < y){
//         return x;
//     } else {
//         return y;
//     }
// }

// console.log(retornarMinimo(10, 8));


// OPERADOR CONDICIONAL O TERNARIO 

function retornarMinimoTernario(x, y) {
    return x < y ? x : y;
// se inicia con la condicion si es verdadera evaluara x del primer parametro de lo controrio evaluara y;

}

console.log(retornarMinimoTernario(2, 5));
console.log(retornarMinimoTernario(2, 2));
console.log(retornarMinimoTernario(90, 999));


var a = 5;
var b = 9;

console.log(a > b ? a + 2 : b * 3);
// para terminos de sintaxis el operador " : " significa sino ;



