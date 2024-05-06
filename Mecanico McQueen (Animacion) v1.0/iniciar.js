function ingresar()
{

let user = document.getElementById("Usuario").value;
let pass = document.getElementById("Contraseña").value;

if(user == 'Juan123@gmail.com' && pass == '1234')
    {
        window.location = "principal.html";
    }

else
{

    alert("Datos Incorrectos! Intentelo de nuevo")

}

}