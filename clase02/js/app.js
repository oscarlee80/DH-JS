window.onload = function () 
{
    // let valor = prompt("Indique el numero");
    // console.log(valor);
    // for (let index = 1; index*valor < 135; index++) {
    //     console.log (valor + " x " + index + " = " + valor*index);
    //     document.write(`<br>${valor} x ${index} = ${valor*index}`);
    // }

    // let deAcuerdo = confirm("Desea continuar?");
    // console.log(deAcuerdo);

    // let dado = Math.ceil(Math.random()*6);
    // switch (dado) {
    //     case 2: 
    //     case 4:
    //     case 6:
    //         console.log(`El numero ${dado} es par`);
    //         break;
    
    //     default: console.log(`El numero ${dado} es impar`);
    //         break;
    // }

    // let fondo = prompt("Ingrese el color deseado para el fondo");
    // document.body.style.backgroundColor = fondo;

    let parrafos = document.querySelectorAll("p");

    let impar = 0;
    for (let i = 0; i < parrafos.length; i++) {
        if (i%2 ==0) {
            parrafos[i].style.color = "red";
            parrafos[i].style.fontWeight = "bold";
            parrafos[i].style.textAlign = "center";
        }
        if (i%2 !== 0) {
            impar = impar + 1;
        }
    }
    console.log(`Parrafos que no se vieron afectados : ${impar}`);
}