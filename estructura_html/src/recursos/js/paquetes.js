// Datos de los paquetes en un módulo independiente
// Cada paquete sigue el contrato de datos definido en el documento TP4
const paquetesViajes = [
    {
        id: "bariloche",
        nombre: "Bariloche al completo",
        destino: "Bariloche",
        imagen: "./recursos/imagenes/paquetes/bariloche.webp",
        descripcionImagen: "Vista del lago Nahuel Huapi con cerros nevados, Bariloche",
        noches: 5,
        precio: 420000,
        tipoViaje: "aventura",
        fechaSalida: "2026-12-10",
        destacado: true,
        oferta: false,
        itinerario: [
            "Día 1: Llegada y traslado al hotel",
            "Día 2: Circuito Chico y cerro Campanario",
            "Día 3: Excursión a Isla Victoria",
            "Día 4: Cerro Catedral",
            "Día 5: Regreso"
        ],
        incluye: ["Vuelo ida y vuelta", "Alojamiento con desayuno", "Traslados", "Excursión a Isla Victoria"],
        noIncluye: ["Almuerzos y cenas", "Entradas a atracciones opcionales"]
    },
    {
        id: "cataratas",
        nombre: "Cataratas + Selva Misionera",
        destino: "Cataratas del Iguazú",
        imagen: "./recursos/imagenes/paquetes/cataratas.webp",
        descripcionImagen: "Cascada principal del Parque Nacional Iguazú",
        noches: 4,
        precio: 360000,
        tipoViaje: "naturaleza",
        fechaSalida: "2027-01-15",
        destacado: true,
        oferta: false,
        itinerario: [
            "Día 1: Llegada a Puerto Iguazú",
            "Día 2: Cataratas del lado argentino",
            "Día 3: Selva misionera y Güirá Oga",
            "Día 4: Regreso"
        ],
        incluye: ["Vuelo ida y vuelta", "Alojamiento con desayuno", "Entrada al Parque Nacional"],
        noIncluye: ["Comidas", "Cataratas del lado brasileño"]
    },
    {
        id: "salta",
        nombre: "Salta y sus paisajes",
        destino: "Salta",
        imagen: "./recursos/imagenes/paquetes/salta.webp",
        descripcionImagen: "Cerros multicolores de la Quebrada de Humahuaca, Salta",
        noches: 6,
        precio: 395000,
        tipoViaje: "naturaleza",
        fechaSalida: "2027-03-05",
        destacado: true,
        oferta: false,
        itinerario: [
            "Día 1: Llegada y city tour por Salta",
            "Día 2: Cafayate y Quebrada de las Conchas",
            "Día 3: Cachi y Valles Calchaquíes",
            "Día 4: Quebrada de Humahuaca",
            "Día 5: Tren a las Nubes (opcional)",
            "Día 6: Regreso"
        ],
        incluye: ["Vuelo ida y vuelta", "Alojamiento con desayuno", "Excursiones guiadas"],
        noIncluye: ["Almuerzos y cenas", "Tren a las Nubes"]
    },
    {
        id: "mendoza",
        nombre: "Mendoza, Ruta del Vino",
        destino: "Mendoza",
        imagen: "./recursos/imagenes/paquetes/mendoza.webp",
        descripcionImagen: "Viñedos en la Ruta del Vino, Mendoza",
        noches: 4,
        precio: 340000,
        tipoViaje: "naturaleza",
        fechaSalida: "2027-02-12",
        destacado: false,
        oferta: true,
        itinerario: [
            "Día 1: Llegada y recorrida por la ciudad",
            "Día 2: Bodegas de Luján de Cuyo",
            "Día 3: Valle de Uco",
            "Día 4: Regreso"
        ],
        incluye: ["Alojamiento con desayuno", "Visitas a bodegas con degustación", "Traslados"],
        noIncluye: ["Pasajes", "Almuerzos y cenas"]
    },
    {
        id: "florianopolis",
        nombre: "Florianópolis Total",
        destino: "Florianópolis",
        imagen: "./recursos/imagenes/paquetes/florianopolis.webp",
        descripcionImagen: "Playa de Florianópolis, Brasil",
        noches: 7,
        precio: 580000,
        tipoViaje: "playa",
        fechaSalida: "2027-01-08",
        destacado: false,
        oferta: true,
        itinerario: [
            "Día 1: Llegada y traslado al hotel",
            "Día 2 al 6: Días libres de playa",
            "Día 7: Regreso"
        ],
        incluye: ["Vuelo ida y vuelta", "Alojamiento con desayuno", "Traslados"],
        noIncluye: ["Comidas", "Excursiones opcionales"]
    },
    {
        id: "rio-de-janeiro",
        nombre: "Río de Janeiro",
        destino: "Río de Janeiro",
        imagen: "./recursos/imagenes/paquetes/rio.webp",
        descripcionImagen: "Vista del Cristo Redentor en Río de Janeiro",
        noches: 6,
        precio: 610000,
        tipoViaje: "playa",
        fechaSalida: "2027-02-20",
        destacado: true,
        oferta: false,
        itinerario: [
            "Día 1: Llegada y Copacabana",
            "Día 2: Cristo Redentor y Pan de Azúcar",
            "Día 3: Ipanema y Arpoador",
            "Día 4 al 5: Días libres",
            "Día 6: Regreso"
        ],
        incluye: ["Vuelo ida y vuelta", "Alojamiento con desayuno", "Entrada al Cristo Redentor"],
        noIncluye: ["Almuerzos y cenas", "Seguro de viaje"]
    },
    {
        id: "buenos-aires",
        nombre: "Escapada a Buenos Aires",
        destino: "Buenos Aires",
        imagen: "./recursos/imagenes/paquetes/obelisco.webp",
        descripcionImagen: "Avenida 9 de Julio y el Obelisco, Buenos Aires",
        noches: 3,
        precio: 150000,
        tipoViaje: "ciudad",
        fechaSalida: "2026-11-27",
        destacado: false,
        oferta: true,
        itinerario: [
            "Día 1: Llegada y Plaza de Mayo",
            "Día 2: San Telmo, La Boca y Recoleta",
            "Día 3: Regreso"
        ],
        incluye: ["Alojamiento con desayuno", "City tour", "Traslados"],
        noIncluye: ["Pasajes", "Cenas show de tango"]
    }
];

//Dos maneras de exportar
// 1: Exportación no nombrada -> solo puede haber una sola
export default paquetesViajes
