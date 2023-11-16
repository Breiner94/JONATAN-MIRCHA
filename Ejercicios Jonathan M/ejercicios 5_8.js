/*
5) Programa una función que invierta las palabras de una cadena 
de texto, pe. miFuncion("Hola Mundo") devolverá "odnuM aloH".
*/

/* 
const texto_reverse = (texto=undefined)=>{
    (typeof texto != "string") 
    ? console.error("Tipo de dato o valido") 
    : console.log(texto.split("").reverse().join(""))
}
texto_reverse()
texto_reverse(2)
texto_reverse("Hola breiner")
 */

// otra forma

/*
let lista1="";
let lista2=[];
const reverse = (texto=undefined)=>{
    lista1=texto.split("");
    for (let i=0;i<texto.length;i++){
        lista2[i]=lista1[lista1.length-1];
        lista1.pop();
    }
    lista2 =lista2.join("")
    return console.log(lista2);
}
reverse("hola");
*/

// --------------------------------------------------------------
/* 
6) Programa una función para contar el número de veces que se 
repite una palabra en un texto largo, pe. 
miFuncion("hola mundo adios mundo", "mundo") devolverá 2.
*/

/* 
este ejercicio se realiza utilizando las EXPRESIONES REGULARES:
es una secuencia de caracteres que conforma un patrón de búsqueda.
Se utilizan principalmente para la búsqueda de patrones de cadenas 
de caracteres u operaciones de sustituciones.
*/

/* const expresion_regular = (texto=undefined,patron=undefined)=>{
    if (texto===undefined) return console.warn("no ingresaste el texto");
    if (typeof texto!="string") return console.warn("tipo de dato no valido");
    if (patron===undefined) return console.warn("no ingresaste el patron de busqueda");
    if (typeof patron != "string") return console.warn("tipo de dato no valido");

    let exp_regular= new RegExp(patron,"ig")
    let array_expresiones_regulares=(texto.match(exp_regular));
    console.log(array_expresiones_regulares.length);
}
expresion_regular();
expresion_regular(2);
expresion_regular("hola como estas");
expresion_regular("hola como estas",true);
expresion_regular("hola mundo adios mundo","mundo");
 */

// --------------------------------------------------------------
/* 
7) Programa una función que valide si una palabra o frase dada, es
 un palíndromo (que se lee igual en un sentido que en otro),
pe. mifuncion("Salas") devolverá true.
*/

/* const palindromo =(palabra=undefined)=>{
    if (palabra===undefined) return console.warn("no ingresaste la palabra");
    if (typeof palabra !=="string") return console.error("tipo de dato no valido");
    
    let palabra1=palabra.toUpperCase().split("").reverse().join("");
    if (palabra===palabra1){
        return console.log("true")
    }
    else{
        return console.log("false")
    }
}

palindromo();
palindromo(34);
palindromo("SALAS");
 */

// otra forma 

/* 
const palindromo =(palabra=undefined)=>{
    if (palabra===undefined) return console.log("no ingresaste el la palabra o frase");
    if (typeof palabra != "string") return console.log("tipo de dato no valido");
    
    let palabra1=palabra.split("");
    let palabra_invertida=[];

    for (let i = 0; i < palabra.length; i++) {
        palabra_invertida[i] = palabra1[palabra1.length-1];
        palabra1.pop()
    }
    palabra_invertida=palabra_invertida.join("")
    return console.log(palabra_invertida);
}
palindromo()
palindromo(true)
palindromo("hola");
 */

// --------------------------------------------------------------
/* 
8) Programa una función que elimine cierto patrón de caracteres
de un texto dado, 
pe. miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") 
devolverá  "1, 2, 3, 4 y 5.
*/

/* 
const eliminar_patron = (texto=undefined,patron=undefined)=>{
    if (texto===undefined) return console.warn("no ingresaste el texto");
    if (typeof texto !== "string") return console.error("tipo de dato no valido");
    if (patron === undefined) return console.warn("no ingresaste el patron");
    if (typeof patron !== "string") return console.error("tipo de dato no valido");
    
    let exp_regular = new RegExp(patron,"ig");
    let text_actualizado = texto.replace(exp_regular,"");
    return console.log(text_actualizado);

}

eliminar_patron();
eliminar_patron(3);
eliminar_patron("hola");
eliminar_patron("xyz1, xyz2, xyz3, xyz4 y xyz5","xyz");
*/

