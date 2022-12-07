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