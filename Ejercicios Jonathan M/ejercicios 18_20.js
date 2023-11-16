//-------------------------------- 18 --------------------------
/*18) Programa una función que dada una texto de texto cuente el número de vocales y consonantes, pe. miFuncion("Hola Mundo") devuelva Vocales: 4, Consonantes: 5.
*/

/* 
const consonantes = (texto=undefined)=>{

    if (texto===undefined) return console.warn("No ingresaste el texto");
    if (typeof texto !== "string") return console.error("Tipo de dato no valido");
    if (!texto) return console.warn("ingrese al menos una letra o vocal");
    

    let numeroLetras = texto.match(/[a-z]/ig);
    let numeroVocales = texto.match(/[aáeéiíoóuú]/ig);
    let numeroConsonantes = texto.match(/[bcdfghjklmnñpqrstvwxyz]/ig);

    if (numeroLetras===null){
        return console.log(`En el texto ingresado tiene: 0 vocales y 0 consonantes`)
    }

    else if(numeroVocales===null){
        numeroVocales=0;
        return console.log(`El texto ingresado tiene: ${numeroVocales} vocales, y ${numeroConsonantes.length} consonantes`);
    }
    else if (numeroConsonantes===null){
        numeroConsonantes=0;
        return console.log(`El texto ingresado tiene: ${numeroVocales.length} vocales, y ${numeroConsonantes} consonantes`);
    }

    return console.log(`El texto ingresado tiene: ${numeroVocales.length} vocales, y ${numeroConsonantes.length} consonantes`);
}
consonantes();
consonantes(true);
consonantes("");
consonantes("5%&reÍR");
consonantes("Hola Mundo");
*/


//-------------------------------- 19 --------------------------
/*
19) Programa una función que valide que un texto sea un nombre válido, pe. miFuncion("Jonathan MirCha") devolverá verdadero.
*/

/* 
const nombre_valido = (texto=undefined)=>{

    let digito = texto.match(/\d/)
    let espacio = texto.match(/\s/);
    let PRUEBA = texto.match(/\S/g).join("");
    let caracter = PRUEBA.match(/\W/g)

    let vocales = texto.match(/[aáeéiíoóuú]/ig);
    let consonates = texto.match(/[bcdfghjklmnñpqrstvwxyz]/ig);

    if (espacio === null ){
        return console.log("Debe haber un espacio entre nombres y apellidos")
    } 
    else if (digito !== null) {
        return console.log("Nombre no valido, contiene numeros")
    }
    else if (caracter !== null){
        return console.log("Nombre no valido, contiene caracteres especiales")
    }
    else if (vocales !== null && consonates !== null){
        return console.log(`El nombre ${texto} es valido`);
    }

}
nombre_valido("olgercaipe");
nombre_valido("olger 32caipe");
nombre_valido("olger $caipe");
nombre_valido("olger caipe");
*/

// OTRA FORMA MAS EFICIENTE-------

/* 
const validarNombre = (texto=undefined)=>{

    if (texto===undefined) return console.warn("No ingresaste el nombre");
    if (typeof texto !== "string") return console.error("tipo de dato no valido");
    if (texto.match(/\d/) !== null) return console.error("El nombre no debe contener numeros");

    let expregnom = /^[a-z]+\s[a-z]+\s?[a-z]+\s?[a-z]+$/ig;
    let nombre = texto.match(expregnom);

    if (nombre===null) return console.log("Nombre no valido, el nombre y apellido debe ir separado por un espacio y no debe conterner caracteres especiales");
    
    else return console.log(`nombre valido: ${nombre}`);

}

validarNombre()
validarNombre(37484)
validarNombre("olh3455 br4784")
validarNombre("olh% br")
validarNombre("olger breiner caipe caipe")
validarNombre("olger breiner caipe")
validarNombre("olger caipe")

 */


/* 

// expresiones regulares con el metodo match()

let palabra ="859% rtt ey"

console.log(palabra.match(/\w/g)) // toma en un arreglo caracteres alfanumericos
console.log(palabra.match(/\S/g)) // toma en un arreglo todos los caracteres excepto el espacio
console.log(palabra.match(/\s/g)) // toma en un arreglo todos los espacios
console.log(palabra.match(/\d/g)) // toma en un arreglo todos los digitos
console.log(palabra.match(/\D/g)) // toma en un arrglo todos los caracteres excepto los digitos
console.log(palabra.match(/[a-z]/g)) // toma en un arreglo todos los caracteres del alfabeto vocales y consonantes
console.log(palabra.match(/[aáeéiíoóuú]/ig)); // toma en un arreglo las vocales 
console.log(palabra.match(/[bcdfghjklmnñpqrstvwxyz]/ig)); // toma en un arreglo las consonantes
console.log(palabra.match(/\W/g)); // toma en un arreglo  los caracteres diferentes a los alfanumericos
*/


//-------------------------------- 20 --------------------------
/*
20) Programa una función que valide que un texto sea un email válido, pe. miFuncion("jonmircha@gmail.com") devolverá verdadero.
*/

/* 
const email_valido = (texto = undefined)=>{
    if (texto===undefined) return console.warn("No ingresaste el correo");
    if (typeof texto !== "string") return console.error("tipo de dato no valido");
    let exp_reg = /^[a-zA-Z]\w+[@][a-z]+\.[a-z]+\.?[a-z]+$/g;
    let correo = texto.match(exp_reg);

    if (correo === null) return console.log("correo ingresado no valido");
    else return console.log(`correo valido: ${correo}`);

}

email_valido();
email_valido(true);
email_valido("2bcaipec@unal.edu.co");
email_valido("obcaipec@unal.edu.co");
email_valido("breinercaipe@hotmail.com");
email_valido("jonmircha@gmail.com");
*/



/* 

// aprendizaje de expresiones regulares 
// https://www.youtube.com/watch?v=wfogZfIS03U&ab_channel=FalconMasters

let datos = "Carlos Arturo\n449 123 45.67 \ncarlos_@hotmail.com \nwww.carlos.com \n\nManuel \n448-234-56-78 \nalejandro@outlook.com \nhttps://www.manuel.alejandro.com.mx \nhttp://alejandro.com.mx \n\nCesar Alan \n449 345 67 89 \ncesar@hotmail.com \ncesar.net " 
console.log(datos)

let regexp=/\d{3}[\s-.]\d{3}[\s-.]\d{2}[\s-.]\d{2}/gm;
let regexp1=/^\w+\s?\w+?\s?$/gm;
console.log(datos.match(regexp));
console.log(datos.match(regexp1));
 */

