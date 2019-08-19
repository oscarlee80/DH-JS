window.onload = function () {

    let h1 = document.querySelector('h1');
    let parrafo = document.querySelector ('p');
    let ul = document.querySelector ('.lista');

    h1.innerHTML = "<i> Trabajando con el DOM </i>";
    h1.onmouseover = function () { 
        h1.classList.remove ('titulo');        
    }
    h1.onmouseout = function () { 
        h1.classList.add ('titulo');
        parrafo.classList.add ('resaltar');
    }
    h1.onclick = function () { 
        h1.style.color = "green";
    }

    let nuevoli = document.createElement ('li');
    nuevoli.innerText = "Banana";
    lista.append(nuevoli);
 
    let otroli = document.createElement ('li');
    let granada = document.createTextNode ('Granada');
    otroli.append (granada);
    lista.append (otroli);
    
    

}