/* 
1). Programa una función que cuente el número de caracteres de una
cadena de texto, pe. miFuncion("Hola Mundo") devolverá 10.
*/

/* 
const num_caracteres = (texto)=>{
if (typeof texto !== "string") return console.error("tipo de dato no valido");
else{
    return console.log(texto.length);
}
}

num_caracteres("hola");
num_caracteres("Hola Mundo");
num_caracteres(2);
*/
// -------------------------------------------------------------------

/*
2). Programa una función que te devuelva el texto recortado según el 
número de caracteres indicados, pe. miFuncion("Hola Mundo", 4) 
devolverá "Hola".
*/

/* 
// concatenando cadenas 
let texto2=""
const text_cut = (texto=undefined,limite=undefined)=>{
    for (let i = 0; i < limite; i++) {
        texto2=texto2+texto[i]     
    }
    return console.log(texto2)
}
text_cut("hola mundo",4) 
*/

// otra forma con metodo split() 

/* 
let lista;
let palabra_recortada="";
const text_cut = (texto=undefined,limite=undefined)=>{
    if(texto===undefined) return console.error("No ingresaste un texto");
    if(typeof (texto) !== "string") return console.error("tipo de dato no valido ");
    if(limite===undefined) return console.error("No ingresaste un numero")
    if(Math.sign(limite)===-1) return console.error("No se pueden usar numeros negativos");
    
    lista=texto.split("")
    for (let i=0;i<limite;i++){
        palabra_recortada = palabra_recortada + lista[i];
    }
    return console.log(palabra_recortada)
}
text_cut()
text_cut(4,4)
text_cut(4)
text_cut("hola mundo")
text_cut("hola mundo",-4)
text_cut("hola mundo",4)
*/
// ------------------------------------------------------------------

/*
3). Programa una función que dada una String te devuelva un Array 
 de textos separados por cierto caracter,
pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'].
*/

/* 
const string_array = (texto=undefined)=>{
    if(texto===undefined) return console.error("no ingresaste el texto");
    if(typeof texto !== "string") return console.error("tipo de dato no valido");
    const lista=texto.split(" ");
    return console.log(lista);
}

string_array()
string_array(2)
string_array("hola que tal")

*/
// -------------------------------------------------------------------

/*
4) Programa una función que repita un texto X  veces, pe.
miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo.
*/
/* 
const repeat_texto =(texto=undefined,num=undefined)=>{
    if(texto === undefined) return console.warn("No ingresaste el texto");
    if(typeof texto !== "string") return console.error("tipo de dato no válido para el primer campo");
    if(num === undefined) return console.warn("No ingresate un número");
    if(typeof num !== "number") return console.error("Tipo de dato no valido para el segundo campo");
    if(Math.sign(num)===-1) return console.warn("No se permiten números negativos");
    
    
    let espacio=" "
    let palabra=texto;
    for (let i = 1; i <num; i++) {
        texto=texto+espacio+palabra;
    }
    return console.log(`${texto}`);
}

repeat_texto();
repeat_texto(4,3);
repeat_texto("Hola Mundo");
repeat_texto("Hola Mundo",true);
repeat_texto("Hola Mundo",-3);
repeat_texto("Hola Mundo",3);

*/


/* 
const repeat_texto = (texto=undefined,numero=undefined)=>{
    texto=texto.repeat(numero);
    return console.log(`${texto}`);
}
repeat_texto(" hola mundo",3);
*/

// con ciclo for 

/* const lista =[];
let palabra;
const repeat_texto = (texto=undefined,numero=undefined)=>{
    for (let i = 0; i <numero; i++) {
    lista[i]=texto
    palabra=lista.join("");
    }
    console.log(lista)
    return console.log(palabra)
}
repeat_texto(" Hola Mundo",3)
*/


