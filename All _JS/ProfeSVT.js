let estudiantes = [];
let idCounter = 1;

const form = document.getElementById("form1");
const tabla = document.querySelector("#tablaEstudiantes tbody");
const Patrontexto = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ]+[a-zA-ZáéíóúÁÉÍÓÚñÑ]/;

form.addEventListener("submit", e => {
  e.preventDefault();
  if(!Patrontexto.test(nombre.value)){
      alert("El nombre no es valido, utiliza un nombre valido")
      nombre.focus();
      return false;
    }

    if(!Patrontexto.test(carrera.value)){
      alert("Esta carrera no es valida")
      nombre.focus();
      return false;
    }

    if(!Patrontexto.test(nacionalidad.value)){
      alert("Esta nacionalidad no es valida")
      nombre.focus();
      return false;
    }
  
  const estudiante = {
    id: idCounter++,
    nombre: document.getElementById("nombre").value,
    fechaNacimiento: document.getElementById("fechaNacimiento").value,
    carrera: document.getElementById("carrera").value,
    nacionalidad: document.getElementById("nacionalidad").value
  };
  estudiantes.push(estudiante);
  mostrarEstudiantes();
  form.reset();
});

function mostrarEstudiantes() {
  tabla.innerHTML = "";
  estudiantes.forEach(e => {
    const fila = document.createElement("tr");
    fila.innerHTML = `
      <td>${e.id}</td>
      <td>${e.nombre}</td>
      <td>${e.fechaNacimiento}</td>
      <td>${e.carrera}</td>
      <td>${e.nacionalidad}</td>
      <td>
        <button onclick="eliminar(${e.id})">Eliminar</button>
        <button onclick="editar(${e.id})">Editar</button>
      </td>
    `;
    tabla.appendChild(fila);
  });

}

function eliminar(id) {
  estudiantes = estudiantes.filter(e => e.id !== id);
  mostrarEstudiantes();
}