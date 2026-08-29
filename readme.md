# Nómada Viajes — Trabajo Práctico N° 1

> "Tu próximo destino, a un clic de distancia"

Plataforma web e-commerce B2C orientada a la venta de paquetes turísticos combinados (vuelos, alojamientos y excursiones). Este proyecto corresponde a la etapa de diseño, arquitectura, especificación de requerimientos y prototipado para la materia Aplicaciones Web 1.

---

## Integrantes del Grupo

* Agorio, Lautaro
* Giovannetti, Juan Ignacio
* Loza, Benjamín
* Méndez, Benjamín
* Rossi, Tiziana

---

## Descripción del Proyecto

Nómada Viajes es una agencia de viajes online diseñada para digitalizar por completo el proceso de consulta, selección y reserva de paquetes turísticos. 

### Objetivos Principales
* Centralizar la oferta de destinos en un catálogo dinámico y filtrable (por destino, fecha, tipo de viaje y presupuesto).
* Reducir tiempos de gestión mediante validaciones frontend y flujos de reserva transparentes.
* Optimizar la experiencia de usuario mediante una arquitectura de navegación combinada (MPA / SPA).

---

## Arquitectura de la Información y Navegación

El sitio implementa un enfoque combinado para equilibrar indexación en buscadores (SEO) y fluidez de interacción:

* **MPA (Multi-Page Application):** Páginas informativas (`Inicio`, `Nosotros`, `Contacto`, `Login / Registro`) para asegurar tiempos de carga inicial simples y rastreo SEO independiente.
* **SPA (Single-Page Application):** Módulos interactivos (`Catálogo de paquetes`, `Carrito`, `Checkout`, `Mi Cuenta`) para filtrar y operar sin recargar la página completa, evitando la pérdida de contexto.

### Sitemap (Mapa del Sitio)
* **Inicio (Home):** Buscador rápido, ofertas destacadas y accesos directos.
* **Catálogo de Paquetes:** Grilla de paquetes con filtros en tiempo real, detalle del paquete, carrito y checkout.
* **Nosotros:** Historia, visión y equipo de trabajo.
* **Contacto / Consultas:** Formulario de contacto y datos de la agencia.
* **Mi Cuenta y Autenticación:** Perfil, reservas, historial de pagos, login y registro.

---

## Requerimientos Funcionales Frontend

* Menú de navegación responsive colapsable (menú hamburguesa) para dispositivos móviles.
* Buscador y filtros en tiempo real por destino, rango de fechas, precio y tipo de viaje.
* Carrito de compras dinámico con recálculo automático de importes.
* Formulario de reserva/consulta con validación de campos obligatorios mediante JavaScript.
* Carruseles y galerías dinámicas para paquetes destacados y detalles de itinerario.

---

## Infraestructura y Dominio

* **Dominio propuesto:** `nomadaviajes.com.ar`

---

## Prototipado y Diseño UX/UI

El proceso de diseño de interfaz abarca las siguientes fases:
1. Bocetos a mano alzada
2. Wireframes
3. Mockups de alta fidelidad

---
