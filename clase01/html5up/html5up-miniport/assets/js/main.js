window.onload = function () 
{
    let ocultarH1 = document.getElementById("titular");
    ocultarH1.style.display = "none"; 
    
    let byn = document.querySelector("#lechuza");
    byn.style.filter = "grayscale(100%)";

    let copyright = document.querySelector("#copyright");
    console.log(copyright);

    let rojo = document.querySelectorAll("h2");
    
    console.log(rojo);

    for (let index = 0; index < rojo.length; index++) {
        rojo[index].style.color = "red";
    }
}