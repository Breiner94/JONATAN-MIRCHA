
//-------------------------------- 15 --------------------------
/*
15) Programa una función para convertir números de base binaria a
decimal y viceversa, pe. miFuncion(100,2) devolverá 4 base 10.
*/

// 28 a binario es 11100
// 10011011 a decimal es 125
// en este programa se introduce el numero y la base a la que se desea llevar el numero 

/* 
const binaria_decimal =(num=undefined,base=undefined)=>{
    if (num === undefined) return console.warn("No ingresaste el numero");
    if ( typeof num !== "number") return console.warn("Tipo de dato no valido para el numero");
    if ( Number.isInteger(num) === false) return console.warn("El numero debe ser un entero");
    if ( Math.sign(num) === -1) return console.warn("El numero debe ser positivo");
    if ( num === 0) return console.log(0);
    if (base === undefined) return console.warn("No ingresaste la base a convertir");
    if ( typeof base !== "number") return console.warn(" Tipo de dato no valido para la base");




    switch (base) {
        case 2:
            let residuo="";
            let ultimo_cociente="1";
            let num_entrada=num;
        
            while (num>=2){
                residuo=residuo+(num%2).toString();
                num=Math.floor(num/2);
            }
        
            residuo=residuo + ultimo_cociente;
            residuo=residuo.split("").reverse().join("");
            console.log(`El numero ${num_entrada} a binario es ${residuo}`);
            
            break;

        case 10:
            let num_entrada2=num;
            num=num.toString().split("").reverse()
            let decimal=[];
            let acumulador=0;
            
            for (let i = 0; i < num.length; i++) {
                decimal[i]=num[i]*Math.pow(2,i)
                acumulador=acumulador+decimal[i];
            }
        
            console.log(`El numero ${num_entrada2} a decimal es ${acumulador}`)

            break;
    
        default:
            console.log("base incorrecta")
            break;
    }

}
binaria_decimal();
binaria_decimal("",2);
binaria_decimal(-28,2);
binaria_decimal(28);
binaria_decimal(28.4,2);
binaria_decimal(28,2);
binaria_decimal(10011011,10);
*/


//-------------------------------- 16 --------------------------
/*
16) Programa una función que devuelva el monto final después de 
aplicar un descuento a una cantidad dada, pe. miFuncion(1000, 20)
devolverá 800.
*/

/* 
const descuento =(precio=undefined , descu=undefined )=>{
    if (precio === undefined) return console.error ("No ingresaste el precio");
    if (typeof precio !== "number") return console.error ("Tipo de dato no valido para el precio");
    if (Math.sign(precio)===-1) return console.warn ("El precio debe ser un numero positivo");
    if (Number.isInteger(precio) !== true ) return console.warn("El precio debe ser un numero entero");
    if (descu === undefined) return console.error ("No ingresaste el descuento");
    if (typeof descu !== "number") return console.error ("Tipo de dato no valido para el descuento ");
    if (Math.sign(descu) !==1) return console.warn ("el descuento debe ser un numero positivo");
    
      
    
    let cost_total = precio - precio *(descu/100);
    console.log (cost_total);
      
}
    
descuento();
descuento("",20);
descuento(-1000,20);
descuento(1000.6,20);
descuento(1000);
descuento(1000,"");
descuento(1000,-20);
descuento(1000,20);
*/


//-------------------------------- 17 --------------------------
/* 
17) Programa una función que dada una fecha válida determine cuantos
años han pasado hasta el día de hoy, 
pe. miFuncion(new Date(1984,4,23)) devolverá 35 años (en 2020). 
*/

/*
console.log(Date());

let fecha= new Date;
// dia del mes
console.log(fecha.getDate());
// dia de la semana domingo = 0, 
console.log(fecha.getDay());
// año en el que estamos
console.log(fecha.getFullYear());
// mes diciembre = 0
console.log(fecha.getMonth());
console.log(fecha.getHours());
console.log(fecha.getMinutes());
console.log(fecha.getSeconds());
console.log(fecha.toDateString());
console.log(fecha.toLocaleString());
console.log(fecha.toLocaleDateString());
console.log(fecha.toLocaleTimeString());

 */

/* 
const fecha =(año=undefined,mes=undefined,dia=undefined)=>{
    
    if (año===undefined) return console.warn("No ingresaste el año");
    if (typeof año !== "number") return console.error("Tipo de dato no valido para el año");
    if (Math.sign(año) === -1) return console.error("No se admite numero negativo para el año");
    let fecha_tope=new Date; // fecha actual se utiliza para validacion del año correcto
    if (año<1970 || año>fecha_tope.getFullYear()) return console.error("El año debe estar entre 1970 y el año actual");

    if (mes ===undefined) return console.warn("No ingresaste el mes");
    if (typeof mes !== "number") return console.error("Tipo de dato no valido para el mes");
    if (Math.sign(mes) === -1) return console.error("No se admite numero negativo para el mes");
    if ((mes<0 || mes>11)) return console.error("El mes debe estar entre 0 y 11, siendo enero el mes 0 ");

    if (dia ===undefined) return console.warn("No ingresaste el dia");
    if (typeof dia !== "number") return console.error("Tipo de dato no valido para el dia");
    if (Math.sign(dia) === -1) return console.error("No se admite numero negativo para el dia");
    if (dia<1 || dia>31) return console.error("El dia debe estar entre 1 y 31");


    let fecha_hoy=new Date; // fecha actual
    let fecha_ingresada = fecha_hoy.setFullYear(año,mes,dia); // devuelve el número de milisegundos entre el 1 de enero de 1970 hasta la fecha ingresada. (ver uso de este metodo de la clase Date)

    let fecha_actual=Date.now(); // segundos desde 1970 hasta ahora mismo
    let tiempo_mlsegundos = fecha_actual-fecha_ingresada; // tiempo en milisegundos desde la fecha ingresada hasta la fecha actual.
    let años=Math.floor(tiempo_mlsegundos/(1000*60*60*24*365)); // conversion de miliseg a años desde la fecha ingresada hasta la fecha actual.
    return console.log(`Han pasado ${años} años`)

}

fecha();
fecha(1984);
fecha(1984,4);
fecha(true,4,23);
fecha(1984,"cuatro",23);
fecha(1984,4,"veinti tres");
fecha(-1984,4,23);
fecha(1984,-4,23);
fecha(1984,4,-23);
fecha(2025,4,23);
fecha(1984,12,23);
fecha(1984,4,0);
fecha(1984,4,23);
 */