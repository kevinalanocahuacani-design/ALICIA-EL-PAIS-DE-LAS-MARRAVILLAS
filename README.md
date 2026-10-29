# 🎩 Alicia en el País de las Maravillas: Práctica de JavaScript, HTML5 y CSS3

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Git](https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white)

> **Programación Web I** | Proyecto práctico sobre formularios HTML, diseño con CSS3 nativo y manipulación del DOM con JavaScript ES6+.

---

## 📋 Información de la Entrega

* **Estudiante Kevin Brayan Alanoca Huacani
* **🌐 Página Web Publicada:** [Ver Sitio en Vivo][(https://tu-usuario.github.io/alicia-dom-js/)](https://kevinalanocahuacani-design.github.io/ALICIA-EL-PAIS-DE-LAS-MARRAVILLAS/)
* **📦 Repositorio Git:** [Ver Repositorio](https://github.com/tu-usuario/alicia-dom-js)
* **🎥 Video Explicativo (≤ 3 min):** [Ver Demostración en YouTube](https://youtu.be/tu-video-demostracion)
* **📅 Fecha de Entrega:** 28 de Octubre de 2026

---

## 📖 Descripción General

Aplicación web interactiva inspirada en *Alicia en el país de las maravillas*. Integra tres ejercicios prácticos diseñados para reforzar el flujo de manipulación básica del DOM, manejo de eventos de formulario y estructuras de control en JavaScript nativo.

### 🌟 Características Principales
* **Cero Frameworks:** Desarrollado 100% en HTML5, CSS3 y JavaScript nativo.
* **Procesamiento en Cliente:** Uso de `preventDefault()` para evitar recargas de página.
* **Validación Robusta:** Captura y control de datos requeridos, rangos numéricos y entradas no válidas.
* **Estilos Tradicionales:** Maquetación responsiva sin Flexbox ni CSS Grid (cumpliendo RNF-05).

---

## 🚀 Ejercicios Desarrollados

### 🧪 Ejercicio 1: La Poción Mágica de Alicia
* **Estructuras:** Secuencial y condicional (`if`, `else if`, `else`).
* **Lógica:** Alicia consume una poción para intentar cruzar una puerta de altura fija ($100\text{ cm}$).
* **Fórmula:** 
  $$\text{Nueva Altura} = \text{Altura Inicial} + (\text{Cantidad de Poción in ml} \times 2)$$
* **Validaciones:** Altura inicial $> 0\text{ cm}$ y poción dentro del rango permitido ($1\text{ ml}$ a $100\text{ ml}$).

### ☕ Ejercicio 2: La Merienda del Sombrerero Loco
* **Estructuras:** Selección múltiple (`switch`) y condicionales.
* **Lógica:** Procesa pedidos de bebidas para los invitados aplicando tarifas dinámicas y descuentos.
* **Precios:**
  * Té de Jazmín: `$15.00`
  * Café del Sombrerero: `$20.00`
  * Jugo de Rosas: `$12.00`
  * Infusión Mágica: `$25.00`
* **Descuento:** Se aplica un $10\%$ de descuento si se piden más de 5 tazas.

### 🃏 Ejercicio 3: El Desafío de la Reina de Corazones
* **Estructuras:** Repetitiva (`for`) y condicional.
* **Lógica:** Analiza una secuencia de $N$ cartas numeradas del $1$ al $N$.
* **Procesamiento:** Recorre la secuencia con un bucle `for`, clasifica números en pares e impares mediante el operador módulo (`%`), suma los valores de cada grupo y declara al ganador.

---

## 📁 Estructura del Proyecto

```bash
.
├── index.html              # Archivo principal HTML con los 3 formularios
├── estilos/
│   └── estilos.css         # Hoja de estilos (Paleta Alicia en el País de las Maravillas)
├── js/
│   └── script.js           # Lógica JavaScript, validaciones y manipulación del DOM
└── README.md               # Documentación general del repositorio
```

---

## 🔍 Explicación Técnica del Código

```javascript
// 1. Manejo del evento Submit evitando la recarga de página
form.addEventListener('submit', function(e) {
    e.preventDefault(); // Previene la recarga automática del navegador
    
    // 2. Obtención y parsing de valores desde el DOM
    const inputVal = parseInt(document.getElementById('inputId').value);
    
    // 3. Modificación dinámica del contenido
    resultadoElement.textContent = `Resultado: ${inputVal}`;
});
```

---

## 🧪 Tabla de Casos de Prueba

### Ejercicio 1: La Poción Mágica
| # | Entrada (Altura, Poción) | Resultado Esperado | Estado |
|---|---|---|---|
| 1 | Altura: `80`, Poción: `15` | Nueva altura: $110\text{ cm}$. ¡Alicia puede pasar la puerta! | ✅ Pasó |
| 2 | Altura: `50`, Poción: `20` | Nueva altura: $90\text{ cm}$. Alicia no alcanza la altura de la puerta ($100\text{ cm}$). | ✅ Pasó |
| 3 | Altura: `-10`, Poción: `10` | Error: La altura inicial debe ser un número positivo. | ✅ Pasó |
| 4 | Altura: `70`, Poción: `150` | Error: La poción debe estar entre $1\text{ ml}$ y $100\text{ ml}$. | ✅ Pasó |
| 5 | Altura: `""`, Poción: `""` | Error: Por favor, ingrese todos los valores requeridos. | ✅ Pasó |

### Ejercicio 2: La Merienda del Sombrerero
| # | Entrada (Nombre, Bebida, Tazas) | Resultado Esperado | Estado |
|---|---|---|---|
| 1 | Nombre: `"Conejo"`, Bebida: `"Café"`, Tazas: `2` | Subtotal: `$40.00`, Desc: `$0.00`, Total: `$40.00`. | ✅ Pasó |
| 2 | Nombre: `"Alicia"`, Bebida: `"Té"`, Tazas: `6` | Subtotal: `$90.00`, Desc (10%): `$9.00`, Total: `$81.00`. | ✅ Pasó |
| 3 | Nombre: `""`, Bebida: `"Jugo"`, Tazas: `3` | Error: El nombre del invitado no puede estar vacío. | ✅ Pasó |
| 4 | Nombre: `"Gato"`, Bebida: `"Té"`, Tazas: `0` | Error: La cantidad de tazas debe ser mayor a 0. | ✅ Pasó |
| 5 | Nombre: `"Sombrerero"`, Bebida: `"Infusión"`, Tazas: `25` | Error: El máximo de tazas permitido por pedido es 20. | ✅ Pasó |

### Ejercicio 3: El Desafío de la Reina
| # | Entrada (Cantidad $N$) | Resultado Esperado | Estado |
|---|---|---|---|
| 1 | $N = 5$ | Pares: 2 (Suma: 6), Impares: 3 (Suma: 9). Mayor suma: Impares. | ✅ Pasó |
| 2 | $N = 4$ | Pares: 2 (Suma: 6), Impares: 2 (Suma: 4). Mayor suma: Pares. | ✅ Pasó |
| 3 | $N = 0$ | Error: Ingrese una cantidad de cartas válida entre 1 y 50. | ✅ Pasó |
| 4 | $N = 60$ | Error: Ingrese una cantidad de cartas válida entre 1 y 50. | ✅ Pasó |
| 5 | $N = 1$ | Pares: 0 (Suma: 0), Impares: 1 (Suma: 1). Mayor suma: Impares. | ✅ Pasó |

---

## 🎬 Guion del Video Explicativo (≤ 3 Minutos)

1. **[0:00 – 0:20] Presentación:** Introducción del estudiante y navegación inicial por la página publicada.
2. **[0:20 – 1:45] Demostración:** Ejecución en vivo de los tres ejercicios con datos válidos y prueba de validación de errores.
3. **[1:45 – 2:40] Lógica del Código:** Explicación en el editor del uso de `preventDefault()`, captura con `getElementById()`, condicionales `if/else`, `switch` y el bucle `for`.
4. **[2:40 – 3:00] Cierre:** Verificación final de los tres enlaces de entrega.
