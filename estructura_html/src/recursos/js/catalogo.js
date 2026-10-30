//importa filtros.js
import { iniciarFiltros } from "./filtros.js" 

// Convierte un número en precio: 420000 -> $420.000
function formatearPrecio(precio) {
    return "$" + precio.toLocaleString("es-AR")
}

function renderizarPaquetes(contenedor, /*es la referencia del DOM*/ paquetes /*es el arreglo*/) {

    // Si no hay resultados se muestra un mensaje en lugar de la grilla
    if (paquetes.length === 0) {
        contenedor.innerHTML = `<p>No hay paquetes que coincidan con los filtros elegidos.</p>`
        return
    }

    let paquetesHTML = ''
    paquetes.forEach((paquete) => {
        paquetesHTML += `
        <article>
            <h3>${paquete.nombre}</h3>
            <img src="${paquete.imagen}" alt="${paquete.descripcionImagen}" width="400">
            <ul>
                <li>
                    ${paquete.noches} noches
                </li>
                <li>
                    ${formatearPrecio(paquete.precio)} por persona
                </li>
                <li>
                    <a href="./detalle.html?id=${paquete.id}">
                        Ver paquete
                    </a>
                </li>
            </ul>
        </article>
        `
    })
    contenedor.innerHTML = paquetesHTML
}

// La llama index.js: dibuja todo el catálogo y deja listos los filtros
function iniciarCatalogo(contenedor, formulario, paquetes) {
    // 1) Renderizamos todos los paquetes
    renderizarPaquetes(contenedor, paquetes)

    // 2) filtros.js escucha el formulario y llama a esta función con el arreglo ya filtrado
    iniciarFiltros(formulario, paquetes, (paquetesFiltrados) => {
        renderizarPaquetes(contenedor, paquetesFiltrados)
    })
}

// 2: Exportación nombrada -> las que sean necesarias
export { renderizarPaquetes, iniciarCatalogo }