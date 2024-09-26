// estructurasDeControl.js

// Ejercicio 1: Condicionales if-else
// Instrucción: Escribe una función que reciba un número y verifique si es par o impar.
// Imprime "El número es par" o "El número es impar" según corresponda.
function verificarParidad(numero) {
    if (isNaN(numero)){
        console.log("Ingrese un numero válido");
        return;
    }
    if (numero % 2 === 0){
        console.log(numero + "es un numero par");
    } else{
        console.log(numero + "es un numero impar");

    }
}
verificarParidad(4);
verificarParidad(7);

// Ejercicio 2: Condicionales anidados
// Instrucción: Escribe una función que reciba una edad y determine si la persona es:
// "Menor de edad" (menor a 18), "Adulto" (entre 18 y 65), o "Adulto mayor" (mayor a 65).
function clasificarEdad(edad) {
    if (isNaN(edad) || edad <0){
        console.log("Ingrese una edad");
        return;
    }
    if (edad < 18){
        console.log(edad + "Menor de edad");
    } else if (edad >= 18 && edad <= 65){
        console.log(edad + "Adulto");
    } else {
        console.log(edad + "Adulto Mayor");
    }
}
clasificarEdad(18);
clasificarEdad(17);
clasificarEdad(66);
// Ejercicio 3: Bucles while
// Instrucción: Crea una función que reciba un número entero positivo y utilice un bucle `while` para imprimir todos los números desde ese número hasta 0.
function cuentaRegresiva() {
    var numero = 5;
    if (isNaN(numero) || numero <0){
        console.log("Ingrese un numero positivo");
        return;
    }
    while (numero >= 0){
        console.log(numero);
        numero--;
    }
}

cuentaRegresiva();

// Ejercicio 4: Bucles do-while
// Instrucción: Escribe una función que imprima "Estoy aprendiendo JavaScript" 5 veces utilizando un bucle `do-while`.
function repetirMensaje() {
    let mensaje = "Estoy aprendiendo JavaScript";
    let contador = 0; 

    do {
        console.log(mensaje); 
        contador++; 
    } while (contador < 5); 
}


repetirMensaje();


// Ejercicio 5: Bucle for
// Instrucción: Escribe una función que reciba un número entero positivo y utilice un bucle `for` para imprimir todos los números pares entre 0 y ese número.
function imprimirPares(numero) {
numero = parseInt(prompt("Ingrese un numero positivo"));    
if (isNaN(numero) || numero< 0){
    console.log("Ingrese un numero positivo");
}else{
    for(let i = 0; i <= numero; i++){
        if (i % 2 === 0){
            console.log(i);
        }
    }

}
}
imprimirPares();
    

// Ejercicio 6: Uso de break
// Instrucción: Escribe una función que recorra los números del 1 al 10, pero detén el bucle cuando el número sea igual a 6.
function detenerEnSeis() {
    for(let i = 1; i <= 10; i++){
        if(i===6){
            break;
        }
        console.log(i);
    }
}

// Ejercicio 7: Uso de continue
// Instrucción: Crea una función que recorra los números del 1 al 10, pero que se salte el número 5 usando `continue`.
function saltarCinco() {
    for(let i = 1; i <= 10; i++){
        if(i===5){
            continue;
        }
        console.log(i);
    }
}
saltarCinco();

// Ejercicio 8: Switch básico
// Instrucción: Escribe una función que reciba un número del 1 al 7 y devuelva el día de la semana correspondiente (1 es "Lunes", 2 es "Martes", ..., 7 es "Domingo"). Usa la estructura `switch`.
function obtenerDiaSemana(dia) {
    const numero = parseInt(prompt("Ingrese un numero"));

        
            switch(numero){
                case 1:
                    console.log("Lunes");
                    break;
                case 2:
                    console.log("Martes");
                    break;
                case 3:
                    console.log("Miércoles");
                    break;
                case 4:
                    console.log("Jueves");
                    break;
                 case 5:
                    console.log("Viernes");
                    break;
                case 6:
                    console.log("Sábado");
                    break;
                case 7:
                    console.log("Domingo");
                    break;
                default: 
                    console.log("Numero fuera de rango");
   
            
        }

    
}
obtenerDiaSemana();

// Ejercicio 9: Switch con múltiples casos
// Instrucción: Escribe una función que reciba un carácter y devuelva si es una vocal. Utiliza un `switch` y agrupa los casos para las vocales (a, e, i, o, u).
function esVocal(letra) {
    const letras = prompt("Ingrese una letra");

        
    switch(letras){
        case "a":
            console.log("Vocal");
            break;
        case "e":
            console.log("Vocal");
            break;
        case "i":
            console.log("Vocal");
            break;
        case "o":
            console.log("Vocal");
            break;
         case "u":
            console.log("Vocal");
            break;

    
    }   
}
esVocal();

// Ejercicio 10: Condicionales complejos con operadores lógicos
// Instrucción: Escribe una función que reciba tres números y determine si todos son positivos, al menos uno es negativo, o todos son negativos. Usa operadores lógicos (`&&`, `||`).
function evaluarNumeros(a, b, c) {
    const todosPositivos = (a > 0 && b > 0 && c > 0);
    const alMenosUnoNegativo = (a < 0 || b < 0 || c < 0);
    const todosNegativos = (a < 0 && b < 0 && c < 0);
    
    if (todosPositivos) {
        return "Todos son positivos.";
    } else if (alMenosUnoNegativo) {
        return "Al menos uno es negativo.";
    } else if (todosNegativos) {
        return "Todos son negativos.";
    } else {
        return "Hay números cero.";
    }
}
console.log(evaluarNumeros(5, 3, 2)); 
console.log(evaluarNumeros(-1, 3, 2)); 
console.log(evaluarNumeros(-5, -3, -2)); 
console.log(evaluarNumeros(0, 3, 2));  
// Exportar todas las funciones
export {
    verificarParidad,
    clasificarEdad,
    cuentaRegresiva,
    repetirMensaje,
    imprimirPares,
    detenerEnSeis,
    saltarCinco,
    obtenerDiaSemana,
    esVocal,
    evaluarNumeros,
};
