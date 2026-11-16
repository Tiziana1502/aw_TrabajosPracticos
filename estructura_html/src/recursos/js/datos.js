// DATOS: obtiene los paquetes desde el archivo JSON con fetch
// La ruta es relativa a la página HTML que carga index.js
const RUTA_PAQUETES = "./recursos/datos/paquetes.json"

async function obtenerPaquetes() {
    try {
        const respuesta = await fetch(RUTA_PAQUETES)

        // fetch no lanza error si el servidor responde 404 o 500, por eso se revisa ok
        if (!respuesta.ok) {
            throw new Error(`Error ${respuesta.status} al pedir ${RUTA_PAQUETES}`)
        }

        // Se convierte el texto JSON en un arreglo de objetos
        const paquetes = await respuesta.json()
        return paquetes
    } catch (error) {
        console.error("No se pudieron cargar los paquetes:", error)
        return null
    }
}

export { obtenerPaquetes }