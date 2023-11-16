//-------------------------------- 24 --------------------------
/* 
24) Programa una función que dado un arreglo de números devuelva un objeto con dos arreglos, el primero tendrá los numeros ordenados en forma ascendente y el segundo de forma descendiente, pe. miFuncion([7, 5,7,8,6]) devolverá { asc: [5,6,7,7,8], desc: [8,7,7,6,5] }.
*/


/* 
const orden_arreglo=(arreglo=undefined)=>{
    
    if (arreglo===undefined) return console.warn("No ingresaste el arreglo")
    if(arreglo.length===0) return console.warn("El arreglo no tiene elementos")
    if ((arreglo instanceof Array)===false) return console.error("Tipo de dato no valido")
    if(arreglo.some(element => typeof(element)!=="number")) return console.log("Hay elementos que no son numeros, revise!!")

    return console.info({
    asc: arreglo.map(element=>element).sort(),
    des: arreglo.map(element=>element).sort().reverse()
    });

}
orden_arreglo();
orden_arreglo([]);
orden_arreglo(45);
orden_arreglo([2,5,6,"hola"]);
orden_arreglo([7,5,7,8,6]);
 */



//-------------------------------- 25 --------------------------
/* 
25) Programa una función que dado un arreglo de elementos, elimine los duplicados, pe. miFuncion(["x", 10, "x", 2, "10", 10, true, true]) devolverá ["x", 10, 2, "10", true].
*/

/* 
const elements_duplicados = (array = undefined)=>{

    if (array===undefined) return console.warn("No ingresaste el arreglo")
    if(array.length===0) return console.warn("El arreglo no tiene elementos")
    if ((array instanceof Array)===false) return console.error("Tipo de dato no valido")


const duplicados=(item,i)=>{
    return array.indexOf(item)===i;
    }

let result = array.filter(duplicados);
console.log(result)

}

elements_duplicados();
elements_duplicados([]);
elements_duplicados(true);
elements_duplicados(["x", 10, "x", 2, "10", 10, true, true]);
*/


//-------------------------------- 26 --------------------------
/* 
26) Programa una función que dado un arreglo de números obtenga el promedio, pe. promedio([9,8,7,6,5,4,3,2,1,0]) devolverá 4.5.
*/

/* 
const  promedio =(arreglo=undefined)=>{

    if (arreglo===undefined) return console.warn("No ingresaste el arreglo");
    if(arreglo.length===0) return console.warn("El arreglo no tiene elementos");
    if ((arreglo instanceof Array)===false) return console.error("Tipo de dato no valido");
    if ( arreglo.some(Element => typeof(Element)!=="number")) return console.error("Hay elementos que no son numeros, revise!!")



    let acumulador = 0;
    for(let i=0;i<arreglo.length;i++){
      acumulador = acumulador + arreglo[i];
    }

    return console.log(`promedio: ${acumulador/arreglo.length}`)  
}
promedio();
promedio([]);
promedio(4);
promedio([2,5,"hola",5]);
promedio([9,8,7,6,5,4,3,2,1,0]);
 */