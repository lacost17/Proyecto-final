// Archivo: agenda.js

// Lista para guardar los clientes
let clientes = [];

// Función que dibuja la tabla actualizada
function renderClientes() {
  const tbody = document.getElementById('listaClientes');
  tbody.innerHTML = '';

  clientes.forEach((cliente, indice) => {
    const fila = `
      <tr>
        <td>${cliente.nombre}</td>
        <td>${cliente.telefono}</td>
        <td>${cliente.fecha}</td>
        <td>
          <button onclick="editarCliente(${indice})">Editar</button>
          <button onclick="eliminarCliente(${indice})">Eliminar</button>
        </td>
      </tr>`;
    tbody.innerHTML += fila;
  });
}

// Agregar nuevo cliente
function agregarCliente() {
  const nombre = document.getElementById('nombre').value;
  const telefono = document.getElementById('telefono').value;
  const fecha = document.getElementById('fecha').value;

  if (nombre && telefono && fecha) {
    clientes.push({ nombre, telefono, fecha });
    renderClientes();
    limpiarFormulario();
  } else {
    alert('Por favor completa todos los campos.');
  }
}

// Eliminar cliente por índice
function eliminarCliente(indice) {
  clientes.splice(indice, 1);
  renderClientes();
}

// Cargar datos en el formulario para editar
function editarCliente(indice) {
  const cliente = clientes[indice];
  document.getElementById('nombre').value = cliente.nombre;
  document.getElementById('telefono').value = cliente.telefono;
  document.getElementById('fecha').value = cliente.fecha;
  document.getElementById('indiceEditar').value = indice;
}

// Actualizar información de un cliente existente
function actualizarCliente() {
  const indice = document.getElementById('indiceEditar').value;
  const nombre = document.getElementById('nombre').value;
  const telefono = document.getElementById('telefono').value;
  const fecha = document.getElementById('fecha').value;

  if (indice !== '' && nombre && telefono && fecha) {
    clientes[indice] = { nombre, telefono, fecha };
    renderClientes();
    limpiarFormulario();
  } else {
    alert('Completa todos los campos y selecciona un cliente para actualizar.');
  }
}

// Limpiar el formulario
function limpiarFormulario() {
  document.getElementById('nombre').value = '';
  document.getElementById('telefono').value = '';
  document.getElementById('fecha').value = '';
  document.getElementById('indiceEditar').value = '';
}

  