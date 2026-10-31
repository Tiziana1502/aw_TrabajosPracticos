//Siempre los import van arriba de todo
import paquetes from "./paquetes.js" //no nombrada
import { renderizarPaquetes, iniciarCatalogo } from "./catalogo.js" //nombrada
import { iniciarFormulario } from "./formulario.js" 

// Referenciamos elementos del DOM a partir de su ID
// Los 5 HTML cargan este archivo, por eso cada elemento se usa solo si existe en la página abierta
const encabezado = document.getElementById("encabezado-principal")
const botonAbrir = document.getElementById("boton-abrir")
const botonCerrar = document.getElementById("boton-cerrar")
const contenedorPaquetes = document.getElementById("contenedor-paquetes")
const formFiltros = document.getElementById("form-filtros")
const formReserva = document.getElementById("form-reserva")
const botonAgregar = document.getElementById("boton-agregar")

// Condicional para activar el MENÚ HAMBURGUESA 
if (encabezado && botonAbrir && botonCerrar) {
    // Escuchador: el botón de las tres rayas abre el menú
    botonAbrir.addEventListener('click', (evento) => {     
        encabezado.classList.add("menu-abierto")
        botonAbrir.setAttribute("aria-expanded", "true")
    })

    // Escuchador: el botón de la cruz cierra el menú
    botonCerrar.addEventListener('click', (evento) => {
        encabezado.classList.remove("menu-abierto")
        botonAbrir.setAttribute("aria-expanded", "false")
    })

    // Escuchador: la tecla Escape también cierra el menú
    document.addEventListener('keydown', (evento) => {
        if (evento.key === "Escape") {
            encabezado.classList.remove("menu-abierto")
            botonAbrir.setAttribute("aria-expanded", "false")
        }
    })
}

// CATÁLOGO (solo existe en catalogo.html)
if (contenedorPaquetes && formFiltros) {
    iniciarCatalogo(contenedorPaquetes, formFiltros, paquetes)
}

// FORMULARIO DE RESERVA (solo existe en formulario.html)
if (formReserva) {
    iniciarFormulario(formReserva)
}

// DETALLE: botón "Agregar al carrito" (solo existe en detalle.html)
if (botonAgregar) {
    // Escuchador: al hacer clic se avisa por consola
    botonAgregar.addEventListener('click', (evento) => {
        console.log("Se ha agregado al carrito")
    })
}