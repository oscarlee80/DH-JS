window.addEventListener("load", cargar);

function cargar () {

    let parrafos = document.querySelectorAll('p');
    let miH1 = document.querySelector('h1');
    let miH2 = document.querySelector('h2');
    let miA = document.querySelector('a');

    for (let index = 0; index < parrafos.length; index++) {
        parrafos[index].addEventListener("mouseover", cambioColor);
        parrafos[index].addEventListener("mouseout", colorOriginal);
    }
    
    miH1.addEventListener("mouseover", cambioColor);
    miH2.addEventListener("mouseover", cambioColor);

    miH1.addEventListener("mouseout", colorOriginal);
    miH2.addEventListener("mouseout", colorOriginal);


    function cambioColor () {
        this.style.color = "blue";
    }
    
    function colorOriginal () {
        this.style.color = "black";
    }
    
    miA.addEventListener('click', function (event) {
        alert('Redirigiendo a Netflix');
        console.log(event);
        event.preventDefault();
        window.location.href = "https://netflix.com";
    });

    let intervalo = setTimeout(mensaje, 3000);

    function mensaje () {
        alert("Holaaaaa ameeego");
    }
}    