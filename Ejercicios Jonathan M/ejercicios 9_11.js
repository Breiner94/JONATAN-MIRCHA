//-------------------------------- 9 --------------------------

/*
9) Programa una función que obtenga un numero aleatorio entre 501
y 600.
*/

// utilizando math.floor 

/* 
const num_aleatorio = (max=undefined,min=undefined)=>{
    // Math.random() metodo que genera numero aleatorio entre 0 y 1 sin incluir el 1.
    let numero_random1 = Math.random() *(max-min) // se establece el rango del numero aleatorio, sin incluir el numero maximo.
    let numero_random2 = Math.random() *(max-min) + min // se le suma el min para establecer el limite inferior.
    let numero_random3 = Math.random() *(max + 1 - min) + min // se le suma 1 al limite superior para aumentar el rango de numero aleatorio.
    let numero_random4 = Math.floor(Math.random()*(max+1-min)+min) // se redondea hacia abajo al entero mas cercano.
    
    return console.log(numero_random4);

}
num_aleatorio(7,3);
*/

// forma mas compacta 

/* 
const num_random = (max=undefined,min=undefined)=>{
    let number_random = Math.floor(Math.random()*(max + 1 - min)+min);
    return console.log(number_random);
}
num_random(7,3);
*/

//-------------------------------- 10 --------------------------

/* 
10) Programa una función que reciba un número y evalúe si es 
capicúa o no (que se lee igual en un sentido que en otro), 
pe. miFuncion(2002) devolverá true.
*/

/* 
const num_capicua = (num=undefined)=>{
    if (!num) return console.error("No ingresaste el dato");
    if (typeof num !=="number") return console.error("Tipo de dato no valido");

    let num1 = num.toString().split("");
    let num2 = num.toString().split("")
    let num_inv=[];
    for (let i = 0; i < num1.length; i++) {
        num_inv[i]=num2[num2.length-1];
        num2.pop();
    }
    
    let num3 = num_inv.join("");
    if (num==num3){
        return console.log(true);
    }
    else{
        return console.log(false);
    }

}

num_capicua();
num_capicua("hola");
num_capicua(212.212);
num_capicua(2002);
*/

//-------------------------------- 11 --------------------------

/*   
11) Programa una función que calcule el num_factorial de un número
(El num_factorial de un entero positivo n, se define como el producto
de todos los números enteros positivos desde 1 hasta n),
pe. miFuncion(5) devolverá 120.
*/

/* 
const num_factorial =(num=undefined)=>{
    if (num===undefined) return console.warn("no ingresaste el numero");
    if (typeof num !== "number") return console.error("tipo de dato no valido");
    if (Number.isInteger(num)!==true) return console.warn("el numero debe ser un entero")
    if (Math.sign(num)===-1) return console.error("no se admiten numeros negativos");
    if (num===0) return console.error("no se admite el numero cero");

    let acumulador=1;
    for (let i = 1; i <=num; i++) {
        acumulador=acumulador*i;
        
    }
    return console.log(acumulador);
}
num_factorial();
num_factorial(true);
num_factorial(-1);
num_factorial(5.67);
num_factorial(0)
num_factorial(5);
*/


