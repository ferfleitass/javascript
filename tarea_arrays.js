// 1. Qué son los Arrays
// 1.1 Crea una función llamada `procesarPedido` que recibe un array `pedido`.
// Debes sacar el primer elemento (nombre del cliente), añadir "bebida" al inicio del array y añadir el nombre del cliente al final.
function procesarPedido(pedido) {
    const nombre_cliente = pedido.shift();

    pedido.unshift("bebida");

    pedido.push(nombre_cliente);

    return pedido;
}

const pedido1 = ["Fernando","lomito","gaseosa"];
const entregar = procesarPedido (pedido1);
console.log(entregar);

// 2. Iteración de Arrays en Javascript
// 2.1 Crea una función llamada `sumarPares` que reciba un array de números.
// Debes iterar sobre el array, sumar todos los números pares y devolver la suma.
function sumarPares(numeros) {
    let suma = 0;
    for (let i = 0; i < numeros.length; i++){
    if (numeros[i] % 2 === 0){
        suma += numeros[i];
    }
    }
    return suma;
}
const array_numeros = [2,6,12,8,10,16];
const resultados =  sumarPares (array_numeros);
console.log(resultados);

// 3. Buscar en Arrays
// 3.1 Escribe una función llamada `palabrasTerminanConA` que reciba un array de palabras y devuelva `true` si todas terminan con "a", o `false` si al menos una no lo hace.
function palabrasTerminanConA(palabras) {
    const palabrasTerminanConA =  palabras.filter(palabra => !palabra.endsWith("a"));
    return palabrasTerminanConA.length === 0;
}

const palabras = ['casa', 'silla', 'mesa']
console.log(palabrasTerminanConA(palabras)) // -> true

const palabras2 = ["casa","silla","mesa","auto"];
console.log(palabrasTerminanConA(palabras2)); // -> false

// 4. Transformar Arrays
// 4.1 Crea una función llamada `buscaPalabras` que reciba dos parámetros: un array `words` y una palabra `word`.
// Busca el índice de la palabra en el array y devuelve todas las palabras más largas que ese índice.
function buscaPalabras(words, word) {
    const index = words.indexOf(word);

    if (index === -1){
        return [];
    }
    const longituPalabra = word.length;
    const palabrasLargas = words.filter(palabra => palabra.length > longituPalabra);
    return palabrasLargas;
}
const words = ["casa","lomito","cancion","globo"];
const  palabraEncontrar = "lomito";
console.log(buscaPalabras(words,palabraEncontrar));

const palabraNoEncontrar = "juan";
console.log(buscaPalabras(words,palabraNoEncontrar));

// 5. Matrices
// 5.1 Crea una función llamada `findJavaScript` que reciba una matriz de cadenas y devuelva la posición de "JavaScript".
// Si no la encuentra, devuelve [-1, -1].
function findJavaScript(matrix) {
    for (let i = 0; i < matrix.length; i++){
        const index = matrix[i].indexOf("JavaScript");
    
    if(index !== -1){
        return [i,index];
    }
}
return [-1,-1];
}
const matrix = [
    ['HTML', 'CSS', 'JavaScript'],
    ['Java', 'C++', 'Python'],
    ['Ruby', 'Go', 'Swift']
  ]
  
  const position = findJavaScript(matrix);
  console.log(position); // -> [0, 2]

// 6. Algoritmos con Arrays
// 6.1 Crea una función llamada `findMinMaxPages` que reciba un array de números (representando el número de páginas de libros).
// La función debe devolver un array con dos posiciones: el índice del libro con menos páginas y el índice del libro con más páginas.
function findMinMaxPages(books) {
    if (books.length === 0){
        return [-1,-1];
    }
    let menosIndex = 0;
    let masIndex = 0;

    for (let i = 1; i < books.length; i++){
        if (books[i] < books[menosIndex]){
            menosIndex = i;
        }
        if (books[i] > books[masIndex]){
            masIndex = i;
        }
    }
    return [menosIndex,masIndex];
}

const libros = [350, 120, 540, 275, 390, 130, 670];
const resultado = findMinMaxPages(libros);
console.log(resultado); // -> [1, 6]

// Exportar las funciones para que puedan ser completadas y probadas
module.exports = {
    procesarPedido,
    sumarPares,
    palabrasTerminanConA,
    buscaPalabras,
    findJavaScript,
    findMinMaxPages
};
