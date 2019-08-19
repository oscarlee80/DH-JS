window.addEventListener('load', cargar);

function cargar () {
    let formulario = document.querySelector(".form");
    formulario.elements.email.focus();
    
    formulario.onsubmit = function (event) {
        if (!validaciones ()) {
            event.preventDefault();
        } else {
            formulario.submit();
        }
    }
    function validaciones () {
        // let email = formulario.elements.email;
        let {email, password, passwordRepeat, userName, termsCondition} = formulario.elements;
        // console.log(email.value);
        if (!validacionEmail(email)) return false;
        return true;

    }
    function validacionEmail (email) {
        let errorEmail = document.getElementById('errorEmail');
        let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!re.test(email.value)) {
            email.classList.add('is-invalid');
            errorEmail.innerHTML = "Email inválido";
            errorEmail.classList.add('alert-danger');
            errorEmail.classList.add('text-center');
        } else {
            email.classList.remove('is-invalid');
            errorEmail.innerHTML = "";
            errorEmail.classList.remove('alert-danger');
            errorEmail.classList.remove('text-center');
            email.classList.add('is-valid');
            formulario.elements.password.focus();
            return true;
        }
    }

    function validacionPaswword (password) {
        let errorPassword = document.getElementById('errorPassword');
        let re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
        if (!re.test(password.value)) {
            password.classlist.add('is-invalid');
            let placeholder = password.getAttribute("placeholder");
            password.setAttribute("placeholder", "Contraseña invalida");
        } else {
            password.classList.remove('is-invalid');
            errorPassword.innerHTML = "";
            errorPassword.classList.remove('alert-danger');
            errorPassword.classList.remove('text-center');
            formulario.elements.passwordRepeat.focus();
            return true;
        }
    }
}

