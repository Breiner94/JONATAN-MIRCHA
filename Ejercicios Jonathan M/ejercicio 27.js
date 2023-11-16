//-------------------------------- 27 --------------------------
/* 
27) Programa una clase llamada Pelicula.

La clase recibirá un objeto al momento de instanciarse con los siguentes datos: id de la película en IMDB (Base de datos de películas en Internet), titulo, director, año de estreno, país o países de origen, géneros y calificación en IMBD.
  - Todos los datos del objeto son obligatorios.
  - Valida que el id IMDB tenga 9 caracteres, los primeros 2 sean letras y los 7 restantes números.
  - Valida que el título no rebase los 100 caracteres.
  - Valida que el director no rebase los 50 caracteres.
  - Valida que el año de estreno sea un número entero de 4 dígitos.
  - Valida que el país o paises sea introducidos en forma de arreglo.
  - Valida que los géneros sean introducidos en forma de arreglo.
  - Valida que los géneros introducidos esten dentro de los géneros aceptados*.
  - Crea un método estático que devuelva los géneros aceptados*.
  - Valida que la calificación sea un número entre 0 y 10 pudiendo ser decimal de una posición.
  - Crea un método que devuelva toda la ficha técnica de la película.
  - Apartir de un arreglo con la información de 3 películas genera 3 instancias de la clase de forma automatizada e imprime la ficha técnica de cada película.

* Géneros Aceptados: Action, Adult, Adventure, Animation, Biography, Comedy, Crime, Documentary ,Drama, Family, Fantasy, Film Noir, Game-Show, History, Horror, Musical, Music, Mystery, News, Reality-TV, Romance, Sci-Fi, Short, Sport, Talk-Show, Thriller, War, Western.
 */

// ---------------- REPASO POO-----------------------------

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

// creacion de objetos por medio de clases (azucar sintactico) 

/* 
class Perro {
  constructor(nombre,apellido){
    this.nombre=nombre,
    this.apellido=apellido;
  }

  sonar(){
    console.log("Hago sonidos porque esto vivo");
  }
  ladrar(){
    console.log("guau guau!!!");
  }

  saludar(){
  console.log(`hola me llamo ${this.nombre}, ${this.apellido}`);
  }

}


// creamos los objetos:
const objeto1 = new Perro("snopy","caipe");
const objeto2 = new Perro("lola","bony");

// llamamos a todo lo relacionado del objeto 1:

// console.log(objeto1);
// console.log(objeto1.nombre);
// console.log(objeto1.apellido);
objeto1.saludar();
objeto1.sonar();
objeto1.ladrar();

*/

/*
const objeto1 = ['Agua', 'Cacaolat', 'Jagger'];
const objeto2 = new Array('Agua', 'Cacaolat', 'Jagger');
console.log(objeto2);
objeto2.pop()
console.log(objeto2);

const palabra = "hola mundo"
let palabra2 = new String("hola mundo");

console.log(palabra)
console.log(palabra2);
palabra2=palabra2.split("")
console.log(palabra2);


console.log(window)
console.log(Object)
*/

// ------------- ANGULAR -------------------
/* 
class CuentaBancaria {

  constructor (titular){
    this.saldo=0;
    this.titular=titular;
  }

  depositar(cantidad){
    this.saldo=this.saldo+cantidad;
    console.log(`su saldo actual es: ${this.saldo} $`);
  }

  retirar(cantidad){
    if (cantidad<=this.saldo){
    this.saldo=this.saldo-cantidad;
    console.log(`su saldo actual es: ${this.saldo} $`);
    }
    else{
      console.log("saldo insuficiente")
    }
  }
}

const miCuenta = new CuentaBancaria("carlos");
miCuenta.depositar(100);
miCuenta.retirar(100);
 */