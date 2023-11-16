//-------------------------------- 21 --------------------------
/* 
21) Programa una función que dado un array numérico devuelve otro array con los números elevados al cuadrado, pe. mi_funcion([1, 4, 5]) devolverá [1, 16, 25].
*/


/* 
const array_numerico =(arreglo=undefined)=>{

    if (arreglo === undefined) return console.warn("No ingresaste el arreglo");
    if ((arreglo instanceof Array)===false) return console.error("Tipo de dato no valido");
    if (arreglo.length === 0) return console.warn("El arreglo no contiene elementos");
    if ( arreglo.some(Element => typeof(Element)!=="number")) return console.error("Hay elementos que no son numeros, revise!!")


    for (let i=0;i<arreglo.length;i++){
        arreglo[i]=Math.pow(arreglo[i],2);
    }

    return console.log(arreglo);

}

array_numerico();
array_numerico(45);
array_numerico(true);
array_numerico("");
array_numerico([]);
array_numerico([2,5,6,"hola"]);
array_numerico([1, 4, 5]);
 */


//-------------------------------- 22 --------------------------
/* 
22) Programa una función que dado un array devuelva el número mas alto y el más bajo de dicho array, pe. miFuncion([1, 4, 5, 99, -60]) devolverá [99, -60].
*/

/* 
const max_min =(arreglo=undefined)=>{

    if (arreglo === undefined) return console.warn("No ingresaste el arreglo");
    if ((arreglo instanceof Array)===false) return console.error("Tipo de dato no válido");
    if (arreglo.length === 0) return console.warn("El arreglo no contiene elementos");
    if ( arreglo.some(Element => typeof(Element)!=="number")) return console.error("Hay elementos que no son numeros, revise!!")

    let max = arreglo[0];
    let min = arreglo[0];

    for (let i = 1; i <= arreglo.length; i++) {
        if (max<arreglo[i]) {
            max=arreglo[i]
        }
        else if(min>arreglo[i]){
        min = arreglo[i];
        }
    }

    return console.log(`Número máximo: ${max}, Número mínimo: ${min}`)
}

max_min();
max_min(true);
max_min([]);
max_min([2,4,5,6,"hola"]);
max_min([1, 4, 5, 99, -60, 10, 0,-330]);
*/


//-------------------------------- 23 --------------------------
/* 
23) Programa una función que dado un array de números devuelva un objeto con 2 arreglos en el primero almacena los números pares y en el segundo los impares, pe. miFuncion([1,2,3,4,5,6,7,8,9,0]) devolverá {pares: [2,4,6,8,0], impares: [1,3,5,7,9]}.
*/


/* 
const pares_impares = (arreglo=undefined)=>{

    if (arreglo === undefined) return console.warn("No ingresaste el arreglo");
    if ((arreglo instanceof Array)===false) return console.error("Tipo de dato no válido");
    if (arreglo.length === 0) return console.warn("El arreglo no contiene elementos");    
    if ( arreglo.some(Element => typeof(Element)!=="number")) return console.error("Hay elementos que no son numeros, revise!!")


    const arreglo_pares=arreglo.filter(elemento => elemento %2 === 0);
    const arreglo_impares=arreglo.filter(elemento => elemento %2 === 1);
    
    // creacion de objeto con 2 atributos

    const objeto = {
        pares: arreglo_pares,
        impares: arreglo_impares,
    }
    return console.log(objeto)
}


pares_impares();
pares_impares(true);
pares_impares([]);
pares_impares([1,4,6,"hola"]);
pares_impares([1,2,3,4,5,6,7,8,9,0]);
 */




// REEPASO POO OBJETOS ---


/*
// crecion de objeto literal que es proptotipo del objeto OBJECT
// este objeto animal tiene 3 atributos y un metodo

const animal = {
    nombre: "snopy",
    apellido:"caipe",
    arreglo:[1,2,3,4,5],
    sonar(){
        console.log("hola hago sonidos porque estoy vivo")
    }
}

// llamado del objeto por consola:
console.log(animal);
// llamado del objeto por consola con el atributo nombre:
console.log(animal.nombre);
// llamado del metodo:
animal.sonar()
*/


/*
// funcion constructora:
// se crean objetos por medio de la funcion constructora

function FuncionConstructora (nombre, genero){
    // atributos
    this.nombre = nombre;
    this.genero = genero;
}

// metodos:
FuncionConstructora.prototype.sonar=function(){
    console.log("hola hago sonidos porque estoy vivo")
}

FuncionConstructora.prototype.saludar=function(){
    console.log(`hola me llamo ${this.nombre}`)
}

// creacion de objetos:
const snopy = new FuncionConstructora("snoppy","macho");
const lola = new FuncionConstructora("lola","hembra");

// llamado de objetos por consola:
console.log(snopy);
console.log(lola);

// llamado de metodos por consola 
snopy.sonar()
snopy.saludar()
*/

