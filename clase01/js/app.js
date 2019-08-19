let saludo = "Hola Mundo";
let booleano = true;
let nombre = ['oscar','lee'];

// const numeroPi = 3.1416;
// console.log(numeroPi);

// let fruit = "manzana";

// console.log(saludo);
// console.log(booleano);
// console.log(nombre);

let ironMan =
{
    nombre: "Iron Man",
    equipo: "Avengers",
    poderes: ["Volar", "Lanzar Misiles", "Disparar laser"],
    energia: 100,
    getPoder: function (num) 
    {
        return this.poderes[num]
    }
}

let Hulk =
{
    nombre: "Hulk",
    equipo: "Avengers",
    poderes: ["Aplastar", "Gritar", "Golpear"],
    energia: 100,
    getPoder: function (num) 
    {
        return this.poderes[num];
    }
}

console.log(Hulk.getPoder(2));

let misDatos = 
{
    nombre: "Oscar",
    apellido: "Lee",
    dni: 28413165,
    comidaFavorita: "pho",
    edad : 38,
    saludar: function () 
    {
        return ("Hola mi nombre es " + this.nombre + " " + this.apellido + " y mi edad es " + this.edad + " años");
    }
}

for (let key in misDatos) {
    // Vieja forma
    // console.log(misDatos[key]);
    // Nueva Forma
    console.log(`${key}: ${misDatos[key]}`);
}

console.log(misDatos.saludar());

let botonDePrueba = document.querySelector("#miBoton");

botonDePrueba.onclick = function(){alert("Boton tu vieja!")}
