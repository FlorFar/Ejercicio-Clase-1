const seleccionEstado = document.getElementById('estado');
const estadoSeleccionado = document.getElementById('estadoSeleccionado');

seleccionEstado.addEventListener('change', (e) => {
    estadoSeleccionado.value = e.target.value;
})