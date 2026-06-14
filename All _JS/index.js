document.getElementById("loginForm").addEventListener("submit", async function(e){

    e.preventDefault();

    const usuario = document.getElementById("usuario").value;
    const password = document.getElementById("password").value;
    const nivelSeleccionado = document.getElementById("user-select").value;

    const response = await fetch("../All_JSON/index.json");
    const usuarios = await response.json();

    let accesoPermitido = false;

    usuarios.forEach(user => {

        const nivelJson = user["Nivel de acceso"];

        if(Array.isArray(user.Nombre)){

            const indice = user.Nombre.indexOf(usuario);

            if(
                indice !== -1 &&
                user.Contrasena[indice] === password &&
                nivelJson === `Nivel ${6-nivelSeleccionado}`
            ){
                accesoPermitido = true;
                window.location.href = "../Decano/decano.html";
            }

        }else{

            if(
                user.Nombre === usuario &&
                user.Contrasena === password &&
                nivelJson === `Nivel ${6-nivelSeleccionado}`
            ){

                accesoPermitido = true;

                switch(nivelJson){

                    case "Nivel 1":
                        window.location.href="../Estudiante/est.html";
                        break;

                    case "Nivel 2":
                        window.location.href="../Profesores/ProfeSVT/ProfeSVT.html";
                        break;

                    case "Nivel 3":
                        window.location.href="../Secretaria/sec.html";
                        break;

                    case "Nivel 4":
                        window.location.href="../JefeDepartamento/FS/svt.html";
                        break;
                }
            }
        }
    });

    if(!accesoPermitido){
        alert("Usuario o contraseña o nivel de acceso incorrectos");
    }

});
