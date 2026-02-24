console.log("💚 ARCHIVO SELECCIONAR.JS CARGADO 💚");

// Arreglo donde se guardan los productos seleccionados
let s = [];

// Catálogos y productos disponibles (base de datos en arreglo)
const p = {
    Tennis: [
        "ADIDAS - MUJER $1559",
        "NIKE - HOMBRES $5999",
        "ADIDAS - HOMBRES $599",
        "NIKE - HOMBRES $5999",
        "NIKE - HOMBRES $3999",
        "MGBDSZ - HOMBRES $1423"
    ],
    playeras: [
        "ADIDAS $336",
        "ADIDAS $489",
        "ADIDAS $550",
        "PUMA $1499",
        "JOMA $949",
        "ADIDAS $3109"
    ],
    calcetas: [
        "Calceta Adidas $199.00",
        "Calceta Nike $299.00",
        "Calceta Nike $239.00",
        "Calceta Adidas $241.00",
        "Calceta Adidas $241.00",
        "Calcetas Adidas $156.00"
    ],
    balones: [
        "Balón adidas $399.00",
        "Balón All Court $729.00",
        "Balón Puma $499.00",
        "Balón adidas Mini messi $399.00",
        "Balón Nike Park $549.00",
        "Balón Reebok $999.00"
    ]
};

// Detecta el catálogo actual dependiendo del título de la página
function obtenerCatalogoActual() {
    const titulo = document.querySelector("h1.titulo"); // Obtiene título de la sección
    if (!titulo) return null;

    const texto = titulo.textContent.trim().toLowerCase();

    if (texto.includes("tennis")) return "Tennis";
    if (texto.includes("playeras")) return "playeras";
    if (texto.includes("calcetas")) return "calcetas";
    if (texto.includes("balones")) return "balones";

    return null;
}

// Seleccionar/deseleccionar productos
function toggleProducto(id) {
    const tipo = obtenerCatalogoActual(); // Detecta de qué categoría es el producto
    if (!tipo) return;

    const pr = document.getElementById(`producto-${id}`); // Contenedor del producto
    const b = document.getElementById(`btn-${id}`); // Botón del producto

    const clave = `${tipo}-${id}`; // Ejemplo: "balones-3"
    const i = s.indexOf(clave); // Busca si ya está seleccionado

    if (i > -1) {
        // ➤ Si ya estaba seleccionado, se quita
        s.splice(i, 1);
        pr.classList.remove('seleccionado');
        b.classList.remove('seleccionado');
        b.textContent = 'Seleccionar';
    } else {
        // ➤ Si NO estaba seleccionado, se agrega
        s.push(clave);
        pr.classList.add('seleccionado');
        b.classList.add('seleccionado');
        b.textContent = 'Seleccionado ✓';
    }

    actualizarLista(); // Actualiza el contador y la lista
}

// Actualiza la lista de productos seleccionados en pantalla y popover
function actualizarLista() {
    const lista = document.getElementById('lista-seleccionados'); // Lista en la página
    const contador = document.getElementById('contador-seleccionados'); // Número total
    const listaPopover = document.getElementById('seleccionadospopover'); // Lista en popover

    // Construye listado según los productos seleccionados
    const contenido = s.map(clave => {
        const [tipo, id] = clave.split('-');
        return `<li>${p[tipo][id - 1]}</li>`; // Obtiene nombre del arreglo p
    }).join('');

    if (lista) lista.innerHTML = contenido;
    if (contador) contador.textContent = s.length;
    if (listaPopover) listaPopover.innerHTML = contenido;
}

// Calcula y muestra el total a pagar en el popover
function mostrarPopover() {
    const lista = document.getElementById("seleccionadospopover");
    const totalTexto = document.getElementById("totalPagar");

    lista.innerHTML = "";
    let total = 0; // Acumulador del precio total

    s.forEach(clave => {
        const [tipo, id] = clave.split("-");
        const producto = p[tipo]?.[id - 1];

        if (!producto) return;

        lista.innerHTML += `<li>${producto}</li>`;

        // Extrae el precio del texto sin importar símbolos o comas
        const match = producto.match(/\$([\d.,]+)/);

        if (match) {
            let precio = match[1].replace(/,/g, ""); // Quita comas
            total += parseFloat(precio); // Convierte a número y suma
        }
    });

    totalTexto.textContent = "Total: $" + total.toFixed(2); // Muestra total
}
