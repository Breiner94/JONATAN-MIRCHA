//-------------------------------- 12 --------------------------

/* 
12) Programa una función que determine si un número es primo
(aquel que solo es divisible por sí mismo y 1) o no, 
pe. miFuncion(7) devolverá true.
*/ 


/* 
const num_primo = (num=undefined)=>{
    if (num===undefined) return console.warn("No ingresaste el numero");
    if (typeof num !== "number") return console.error("Tipo de dato no válido");
    if (Number.isInteger(num) === false) return console.error("Ingrese un numero entero")
    if (num === 0) return console.error("No se admite el numero cero");
    if (Math.sign(num)===-1) return console.error("No se admiten numeros negativos");

    let contador=0;
    for (let i = 1; i <=num; i++) {
        if(num%i === 0 ){
            contador=contador+1;
        }        
    }
    return (contador>2) 
    ? console.log(`El número ${num} No es un numero primo`)
    : console.log(`El número ${num} SI es un número primo`);

}

num_primo();
num_primo("hola");
num_primo(7.4);
num_primo(0);
num_primo(5);
num_primo(20);
*/


//-------------------------------- 13 --------------------------

/* 
13) Programa una función que determine si un número es par o impar,
pe. miFuncion(29) devolverá Impar.
*/

/* 
const num_par = (num=undefined)=>{
    if (num===undefined) return console.warn("No ingresaste el número")
    if (typeof num !== "number") return console.error(" Tipo de dato no valido");
    
    return (num%2===0)
    ? console.log(` El número ${num} es par`)
    : console.log(` El número ${num} es impar`);
}
num_par();
num_par("hola");
num_par(4);
num_par(0);
num_par(3);

*/


//-------------------------------- 14 --------------------------

/*   
14) Programa una función para convertir grados Celsius a  Fahrenheit
y viceversa, pe. miFuncion(0,"C") devolverá 32°F.
*/

/* 
let convert_temperatura =(num=undefined,unidad=undefined)=>{
    if (num===undefined) return console.error("No ingresaste la temperatura")
    if (typeof num !=="number") return console.warn("Tipo de dato no valido para temperatura")
    if (unidad === undefined) return console.error("No ingresaste la unidad")
    if (typeof unidad !=="string") return console.warn("Tipo de dato no valido para la unidad")
    

    if (unidad==="c"){
        return console.log(`${num}°C son ${(num*9/5)+32}°F`);
    }
    else if(unidad==="f") {
        return console.log(`${num}°F son ${(num-32)*5/9}°C`);
    }
    else{
        return console.log("Unidad no valida");
    }
}
convert_temperatura();
convert_temperatura(true,"f");
convert_temperatura(0);
convert_temperatura(0,"");
convert_temperatura(0,true);
convert_temperatura(0,"c")
convert_temperatura(212,"f")
*/




