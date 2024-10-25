// Seleccionar los elementos del DOM
const abrirModalBtn = document.querySelector('#btn-abrir-modal');
const modal = document.querySelector('#modal');
const cerrarModalBtn = document.querySelector('#btn-cerrar-modal');
const btnRegistrar = document.querySelector('#btn-registrarse');
const modalRegistro = document.querySelector('#modal-registro');
const btnCerrarRegistro = document.querySelector('#btn-cerrar-registro');
const btnCerrarComprapromo = document.querySelector('#btn-cerrar-compra')

abrirModalBtn.addEventListener('click', () => {
  modal.showModal(); // Muestra el modal primero
});

cerrarModalBtn.addEventListener('click', () => {
  modal.close(); // Cerrar el modal primero 
});

btnRegistrar.addEventListener('click', () => {
  modal.close(); // Cierra el primer modal
  modalRegistro.showModal(); // Abre el segundo modal
});

btnCerrarRegistro.addEventListener('click', () => {
  modalRegistro.close();
});
