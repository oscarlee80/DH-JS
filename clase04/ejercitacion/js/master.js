window.addEventListener("load", cargar);

function cargar () {

    let entrar = true;
    let items = 0;
    while (entrar) {
        let items = window.prompt("Elija la cantidad de items");
        if (isNaN(items) || items < 3) {
            alert("Debe ingresar un numero mayor o igual a 3");
            continue;
        } else {
            let confirmar = confirm(`Esta de acuerdo con el numero ${items} de tareas?`)
            if (confirmar == true) {
                entrar = false;
                let listaTareas = [];
                for (let index = 0; index < items; index++) {
                    let texto = prompt("Indique su tarea");
                    listaTareas.push(texto);
                }
                
            } else {
                continue;
            }
        }
    }
    console.log(items);
}

