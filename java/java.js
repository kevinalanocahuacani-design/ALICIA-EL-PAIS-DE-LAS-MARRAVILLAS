
 // ============================================
 // EJERCICIO 1: LA POCIÓN MÁGICA DE ALICIA
 // ============================================

const formularioPocion = document.getElementById("form-pocion");
const resultadoPocion = document.getElementById("resultado-pocion");

function calcularPocion() {
    const campoAltura = document.getElementById("altura");
    const campoPocion = document.getElementById("cantidad-pocion");

    const altura = Number(campoAltura.value);
    const pocion = Number(campoPocion.value);

    resultadoPocion.className = "resultado";

    // 1. Validar campos vacíos
    if (campoAltura.value.trim() === "" || campoPocion.value.trim() === "") {
        mostrarMensaje(resultadoPocion, "Completa los dos campos antes de calcular.", true);
    } 
    // 2. Validar rango de altura
    else if (!Number.isFinite(altura) || altura <= 0 || altura > 300) {
        mostrarMensaje(resultadoPocion, "La altura debe ser mayor que 0 y no superar 300 cm.", true);
    } 
    // 3. Validar rango de poción
    else if (!Number.isFinite(pocion) || pocion < 0 || pocion > 100) {
        mostrarMensaje(resultadoPocion, "La poción debe estar entre 0 y 100 ml.", true);
    } 
    // 4. Si todo está bien, hacer el cálculo
    else {
        const alturaFinal = altura + pocion * 2;
        let mensaje;

        if (alturaFinal <= 120) {
            mensaje = "¡Alicia puede pasar por la puerta!";
        } else if (alturaFinal <= 150) {
            mensaje = "Alicia es demasiado alta para la puerta.";
        } else {
            mensaje = "Alicia es muchísimo más alta que la puerta. ¡Corrige la poción!";
        }

        // Usamos comillas invertidas para insertar variables directamente de forma más limpia
        resultadoPocion.textContent = `Altura final: ${alturaFinal.toFixed(2)} cm. ${mensaje}`;
        resultadoPocion.classList.add("exito");
    }
}

formularioPocion.addEventListener("submit", (evento) => {
    evento.preventDefault();
    calcularPocion();
});

// ============================================
// EJERCICIO 2: LA MERIENDA DEL SOMBRERERO LOCO
// ============================================

const formularioMerienda = document.getElementById("form-merienda");
const resultadoMerienda = document.getElementById("resultado-merienda");

function calcularMerienda() {
    const nombre = document.getElementById("nombre-invitado").value.trim();
    const bebida = document.getElementById("bebida").value;
    const campoTazas = document.getElementById("tazas");
    const tazas = Number(campoTazas.value);

    let precioUnitario = 0;
    let nombreBebida = "";

    resultadoMerienda.className = "resultado";

    // Validar nombre
    if (nombre === "") {
        mostrarMensaje(
            resultadoMerienda,
            "Escribe el nombre del invitado.",
            true
        );
        return;
    }

    // Validar bebida
    if (bebida === "") {
        mostrarMensaje(
            resultadoMerienda,
            "Selecciona una bebida.",
            true
        );
        return;
    }

    // Validar cantidad de tazas
    if (campoTazas.value.trim() === "" ||
        !Number.isInteger(tazas) ||
        tazas < 1 || tazas > 20) {

        mostrarMensaje(
            resultadoMerienda,
            "La cantidad debe ser un número entero entre 1 y 20.",
            true
        );
        return;
    }

    // Obtener precio mediante switch
    switch (bebida) {
        case "te":
            precioUnitario = 8;
            nombreBebida = "Té de rosas";
            break;

        case "cafe":
            precioUnitario = 12;
            nombreBebida = "Café del Gato";
            break;

        case "limonada":
            precioUnitario = 10;
            nombreBebida = "Limonada mágica";
            break;

        case "leche":
            precioUnitario = 7;
            nombreBebida = "Leche de luna";
            break;

        default:
            mostrarMensaje(
                resultadoMerienda,
                "La bebida seleccionada no es válida.",
                true
            );
            return;
    }

    // Calcular subtotal
    const subtotal = precioUnitario * tazas;
    let descuento = 0;

    // Descuento del 10 % por comprar 5 tazas o más
    if (tazas >= 5) {
        descuento = subtotal * 0.10;
    }

    const total = subtotal - descuento;

    // Mostrar el resultado
    resultadoMerienda.textContent =
        "Invitado: " + nombre +
        " | Bebida: " + nombreBebida +
        " | Tazas: " + tazas +
        " | Precio unitario: " + formatoBs(precioUnitario) +
        " | Subtotal: " + formatoBs(subtotal) +
        " | Descuento: " + formatoBs(descuento) +
        " | Total: " + formatoBs(total);

    resultadoMerienda.classList.add("exito");
}

formularioMerienda.addEventListener("submit", function(evento) {
    evento.preventDefault();
    calcularMerienda();
});


// ============================================
// EJERCICIO 3: EL DESAFÍO DE LA REINA
// ============================================

const formularioReina = document.getElementById("form-reina");
const resultadoReina = document.getElementById("resultado-reina");

function analizarCartas() {
    const campoCartas = document.getElementById("numero-cartas");
    const cantidad = Number(campoCartas.value);

    resultadoReina.className = "resultado";

    // Validar número de cartas
    if (campoCartas.value.trim() === "" ||
        !Number.isInteger(cantidad) ||
        cantidad < 1 || cantidad > 100) {

        mostrarMensaje(
            resultadoReina,
            "Introduce un número entero entre 1 y 100.",
            true
        );
        return;
    }

    let sumaPares = 0;
    let sumaImpares = 0;
    let cantidadPares = 0;
    let cantidadImpares = 0;

    const pares = [];
    const impares = [];

    // Recorrer los números con for
    for (let numero = 1; numero <= cantidad; numero++) {

        // Comprobar si el número es par o impar
        if (numero % 2 === 0) {
            pares.push(numero);
            sumaPares = sumaPares + numero;
            cantidadPares++;
        } else {
            impares.push(numero);
            sumaImpares = sumaImpares + numero;
            cantidadImpares++;
        }
    }

    // Comparar las sumas
    let ganador;

    if (sumaPares > sumaImpares) {
        ganador = "¡Ganan las cartas pares!";
    } else if (sumaImpares > sumaPares) {
        ganador = "¡Ganan las cartas impares!";
    } else {
        ganador = "¡Empate entre pares e impares!";
    }

    // Mostrar el análisis
    resultadoReina.textContent =
        "Secuencia: 1 hasta " + cantidad +
        " | Pares: " + (pares.length > 0 ? pares.join(", ") : "ninguno") +
        " | Cantidad de pares: " + cantidadPares +
        " | Suma de pares: " + sumaPares +
        " | Impares: " + impares.join(", ") +
        " | Cantidad de impares: " + cantidadImpares +
        " | Suma de impares: " + sumaImpares +
        " | Resultado: " + ganador;

    resultadoReina.classList.add("exito");
}

formularioReina.addEventListener("submit", function(evento) {
    evento.preventDefault();
    analizarCartas();
});


// ============================================
// FUNCIONES AUXILIARES
// ============================================

// Mostrar mensajes de error o información
function mostrarMensaje(elemento, mensaje, esError) {
    elemento.textContent = mensaje;
    elemento.className = esError
        ? "resultado error"
        : "resultado";
}

// Mostrar cantidades monetarias en bolivianos
function formatoBs(valor) {
    return "Bs " + valor.toFixed(2);
}
