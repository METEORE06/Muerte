async function cargarLista(rutaArchivo, idTabla) {

    try {

        const respuesta = await fetch(rutaArchivo);
        const estudiantes = await respuesta.json();

        const tbody = document.querySelector(`#${idTabla} tbody`);

        tbody.innerHTML = "";

        estudiantes.forEach((estudiante, indice) => {

            const fila = document.createElement("tr");

            fila.innerHTML = `
                <td>${indice + 1}</td>
                <td>${estudiante.Nombre}</td>
                <td>${estudiante.Carrera}</td>
                <td>${estudiante.Total_creditos}</td>
                <td>${estudiante.Nota_final}</td>
                <td>${estudiante.Nacionalidad}</td>
               <td>${obtenerEstado(estudiante.Nota_final)}</td>
            `;

            tbody.appendChild(fila);

        });

    } catch (error) {

        console.error("Error al cargar la lista:", error);

    }

    function obtenerEstado(nota) {
        if (nota >= 10.00) {
            return "Acepto";
        }else if(nota >= 9.9){
            return "Admisible";
        } else {
            return "Fallido";
        }
    }
}




cargarLista("../All_JSON/estSVT.json", "tablaSVT");
cargarLista("../All_JSON/estPC.json", "tablaPC");
cargarLista("../All_JSON/estMA.json", "tablaMA");