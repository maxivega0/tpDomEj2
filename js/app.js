class Persona{
    #nombre;
    #edades;
    #dni;
    #sexo;
    #peso;
    #altura;
    #anio;
    constructor(nombre, edades, dni, sexo, peso, altura, anio){
        this.#nombre = nombre;
        this.#edades = edades;
        this.#dni = dni;
        this.#sexo = sexo;
        this.#peso = peso;
        this.#altura = altura;
        this.#anio = anio;
    }

    get nombre(){
        return this.#nombre;
    }
    set nombre(nuevoNombre) {
        if (nuevoNombre.length > 0) {
          this.#nombre = nuevoNombre;
        }
      }
    get edades(){
        return this.#edades;
    } 
    set edades(nuevaEdades){
        return this.#nombre = nuevEedades
    }
    get dni(){
        return this.#dni;
    }
    set dni(nuevoDni){
        return this.#dni = nuevoDni
    }
    get sexo(){
        return this.#sexo;
    }
    set sexo(nuevoSexo){
        return this.#sexo = nuevoSexo
    }
    get peso(){
        return this.#peso;
    }
    set peso(nuevoPeso){
        return this.#peso = nuevoPeso
    }
    get altura(){
        return this.#altura;
    }
    set altura(nuevaAltura){
        return this.#altura = nuevaAltura
    }
    get anio(){
        return this.#anio;
    }
    set anio(nuevoAnio){
        return this.#anio = nuevoAnio
    }
}
// let humano = new Persona("Julian",31,44186712,"hombre",61,175,2002);
// console.log(humano);
let arrayPersonas = [];

const formulario = document.getElementById("formulario")
formulario.addEventListener("submit", crearPersona);

const btnGeneracion = document.getElementById("mostrarGeneracion");
btnGeneracion.addEventListener("click", mostrarGeneracion)

const btnMayorEdad = document.getElementById("esMayor");
btnMayorEdad.addEventListener("click", esMayor);


function crearPersona(e){
    e.preventDefault();
    let nombre = document.getElementById("nombreApellido").value;
    let edades = document.getElementById("edades").value;
    let dni = document.getElementById("documento").value;
    let peso = document.getElementById("peso").value;
    let altura = document.getElementById("altura").value;
    let anio = document.getElementById("anio").value;
    let sexo = document.getElementById("sexo").value;
 console.log(sexo);

    peso = parseFloat(peso);
    console.log(peso);
    const persona = new Persona(nombre, edades, dni,sexo, peso, altura, anio, sexo);
    if (arrayPersonas.length > 0) {
        arrayPersonas.splice(0,1);
        arrayPersonas.push(persona);
    }else{
        arrayPersonas.push(persona);
    }

    formulario.reset(); 
    console.log(arrayPersonas);
}


function mostrarGeneracion(){
    let persona = arrayPersonas[0];
    let mostrarGeneracion = document.querySelector("#generacion");
    let alerta = document.createElement("div");
    if (persona === undefined) {
        alerta.innerHTML = `<i class="bi bi-exclamation-circle-fill"></i> La persona llamada ${persona.nombre} pertenece a la "Silent Generation"`;
        alerta.className += "alert alert-danger my-3";
    }else{
        if (persona.anio >= 1930 && persona.anio <= 1948) {
        alerta.innerHTML = `<i class="bi bi-exclamation-circle-fill"></i> La persona llamada ${persona.nombre} pertenece a la "Silent Generation"`;
        alerta.className += "alert alert-warning my-3";
        }else if(persona.anio>= 1949 && persona.anio <= 1968 ){
        alerta.innerHTML = `<i class="bi bi-exclamation-circle-fill"></i> La persona llamada ${persona.nombre} pertenece a la generación "Baby Boom"`;
        alerta.className += "alert alert-warning my-3";
        }else if(persona.anio>= 1969 && persona.anio <= 1980 ){
        alerta.innerHTML = `<i class="bi bi-exclamation-circle-fill"></i> La persona llamada ${persona.nombre} pertenece a la generación "X"`;
        alerta.className += "alert alert-warning my-3";
        }else if(persona.anio>= 1981 && persona.anio <= 1993 ){
        alerta.innerHTML = `<i class="bi bi-exclamation-circle-fill"></i> La persona llamada ${persona.nombre} pertenece a la generación "Y`;
        alerta.className += "alert alert-warning my-3";
        }else if(persona.anio>= 1994 && persona.anio <= 2010 ){
        alerta.innerHTML = `<i class="bi bi-exclamation-circle-fill"></i> La persona llamada ${persona.nombre} pertenece a la generación "Z"`;
        alerta.className += "alert alert-warning my-3";
        }
        mostrarGeneracion.appendChild(alerta);
    }
}

function esMayor(){
    let persona = arrayPersonas[0];
    let mostrarEdad = document.querySelector("#mostrarEdades");
    let alerta = document.createElement("div");

    console.log(persona.edades);
    if (persona.edades >= 18) {
        alerta.innerHTML = `<i class="bi bi-check-circle-fill"></i> La persona ${persona.nombre} es mayor de edad`;
        alerta.className += "alert alert-success my-3";
    }else{
        alerta.innerHTML = `<i class="bi bi-check-circle-fill"></i> La persona ${persona.nombre} es menor de edad`;
        alerta.className += "alert alert-success my-3";
    }
    mostrarEdad.appendChild(alerta);
}