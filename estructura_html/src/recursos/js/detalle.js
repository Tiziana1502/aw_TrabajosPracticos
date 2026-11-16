// DETALLE: muestra el paquete que llega por la URL (detalle.html?id=bariloche)

// Convierte un número en precio: 420000 -> $420.000
function formatearPrecio(precio) {
    return "$" + precio.toLocaleString("es-AR")
}

// Convierte la fecha del JSON (AAAA-MM-DD) al formato argentino (DD/MM/AAAA)
function formatearFecha(fecha) {
    const [anio, mes, dia] = fecha.split("-")
    return `${dia}/${mes}/${anio}`
}

// Pone en mayúscula la primera letra: "aventura" -> "Aventura"
function capitalizar(texto) {
    return texto.charAt(0).toUpperCase() + texto.slice(1)
}

// Arma los <li> de una lista a partir de un arreglo de textos
function armarLista(items) {
    let listaHTML = ''
    items.forEach((item) => {
        listaHTML += `<li>${item}</li>`
    })
    return listaHTML
}

// Busca el paquete cuyo id coincide con el de la URL
// find devuelve el primer objeto que cumple la condición, o undefined si no hay ninguno
function buscarPaquete(paquetes, id) {
    return paquetes.find((paquete) => paquete.id === id)
}

function renderizarDetalle(contenedor, paquete) {
    contenedor.innerHTML = `
        <h1>${paquete.nombre}</h1>
        <section class="galeria">
            <ul>
                <li>Destino: ${paquete.destino}</li>
                <li>Duración: ${paquete.noches} noches / ${paquete.noches + 1} días</li>
                <li>Fecha de salida: ${formatearFecha(paquete.fechaSalida)}</li>
                <li>Tipo de viaje: ${capitalizar(paquete.tipoViaje)}</li>
            </ul>
            <img src="${paquete.imagen}" alt="${paquete.descripcionImagen}" width="400">
        </section>

        <section class="itinerario">
            <h2>Descripción del itinerario</h2>
            <ul>${armarLista(paquete.itinerario)}</ul>
        </section>

        <section class="incluye">
            <h2>Qué incluye</h2>
            <ul>${armarLista(paquete.incluye)}</ul>
        </section>

        <section class="no-incluye">
            <h2>Qué no incluye</h2>
            <ul>${armarLista(paquete.noIncluye)}</ul>
        </section>

        <section class="reserva">
            <h2>Reservá tu lugar</h2>
            <p class="precio-final">
                ${formatearPrecio(paquete.precio)} <span>por persona</span>
            </p>
            <div class="campo-personas">
                <label for="id-personas">Cantidad de personas</label>
                <input type="number" name="personas" id="id-personas" min="1" max="10" value="2">
            </div>
            <button type="button" id="boton-agregar">
                Agregar al carrito
            </button>
        </section>
    `
    // El título de la pestaña también cambia según el paquete
    document.title = `Nomada Viajes - ${paquete.nombre}`
}

// La llama index.js: lee el id de la URL, busca el paquete y lo dibuja
// Devuelve el paquete encontrado (o undefined) para que index.js lo use después
function iniciarDetalle(contenedor, paquetes) {
    // URLSearchParams lee lo que viene después del "?" en la URL
    const parametros = new URLSearchParams(window.location.search)
    const id = parametros.get("id")

    // Si se entra desde el menú (sin id), se muestra el primer paquete
    const paquete = id ? buscarPaquete(paquetes, id) : paquetes[0]

    if (!paquete) {
        contenedor.innerHTML = `
            <h1>Paquete no encontrado</h1>
            <p>El paquete que buscás no existe. <a href="./catalogo.html">Volver al catálogo</a></p>
        `
        return undefined
    }

    renderizarDetalle(contenedor, paquete)
    return paquete
}

export { iniciarDetalle, buscarPaquete }