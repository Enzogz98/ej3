function agregarTarea() {
    const tarea = document.getElementById('tareaInput').value;

    if (tarea.trim() === '') {
        alert('Por favor, ingrese una tarea válida.');
        return;
    }

    const nuevaTarea = document.createElement('li');
    nuevaTarea.className = 'list-group-item d-flex justify-content-between align-items-center';
    nuevaTarea.innerHTML = `
        ${tarea}
        <button class="btn btn-danger btn-sm" onclick="eliminarTarea(this)">Eliminar</button>
    `;

    document.getElementById('listaTareas').appendChild(nuevaTarea);

    document.getElementById('tareaInput').value = '';
}

function eliminarTarea(botonEliminar) {
    const tareaEliminar = botonEliminar.parentElement;
    tareaEliminar.remove();
}