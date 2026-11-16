// Menú de Smashing Buu. "cantidad" es el stock disponible.
const productos = [
    {
        id: 1,
        titulo: 'Gohan',
        descripcion: 'Pan de papa, carne smash, doble feta de cheddar y porción de papas extra crunch.',
        precio: 12000,
        cantidad: 10,
        categoria: 'Fase 1',
        imagen: 'img/gohan.webp'
    },
    {
        id: 2,
        titulo: 'Krillin',
        descripcion: 'Pan artesano, medallón smash, jamón, queso y papas extra crunch.',
        precio: 12000,
        cantidad: 10,
        categoria: 'Fase 1',
        imagen: 'img/krillin.webp'
    },
    {
        id: 3,
        titulo: 'Vegeta',
        descripcion: 'Pan de papa, medallón smash, cheddar, bacon y papas extra crunch.',
        precio: 13000,
        cantidad: 10,
        categoria: 'Fase 1',
        imagen: 'img/vegeta.webp'
    },
    {
        id: 4,
        titulo: 'Broly',
        descripcion: 'Pan de semillas, medallón smash, cheddar en fetas, bacon, lechuga y tomate.',
        precio: 14000,
        cantidad: 10,
        categoria: 'Fase 1',
        imagen: 'img/broly.webp'
    },
    {
        id: 5,
        titulo: 'Freezer',
        descripcion: 'Pan de queso, medallón smash, cheddar, roquefort, rúcula, cebolla morada caramelizada y papas extra crunch.',
        precio: 15000,
        cantidad: 10,
        categoria: 'Fase 1',
        imagen: 'img/freezer.webp'
    },
    {
        id: 6,
        titulo: 'Gohan Fase 2',
        descripcion: 'Pan de papa, doble carne smash, triple feta de cheddar y porción de papas.',
        precio: 14000,
        cantidad: 10,
        categoria: 'Fase 2',
        imagen: 'img/gohan-f2.webp'
    },
    {
        id: 7,
        titulo: 'Krillin Fase 2',
        descripcion: 'Pan artesano, doble medallón smash, cheddar, jamón, queso y papas extra crunch.',
        precio: 15000,
        cantidad: 10,
        categoria: 'Fase 2',
        imagen: 'img/krillin-f2.webp'
    },
    {
        id: 8,
        titulo: 'Vegeta Fase 2',
        descripcion: 'Pan de papa, doble medallón smash, cheddar y doble porción de papas extra crunch.',
        precio: 16000,
        cantidad: 10,
        categoria: 'Fase 2',
        imagen: 'img/vegeta-f2.webp'
    },
    {
        id: 9,
        titulo: 'Goku Fase 2',
        descripcion: 'Pan de papa, doble medallón smash, cheddar, bacon, papas extra crunch con baño de cheddar y bacon.',
        precio: 18000,
        cantidad: 10,
        categoria: 'Fase 2',
        imagen: 'img/goku-f2.webp'
    },
    {
        id: 10,
        titulo: 'Broly Fase 2',
        descripcion: 'Pan de semillas, medallón smash, cheddar, cebolla crispy, bacon, lechuga, tomate y papas extra crunch.',
        precio: 17000,
        cantidad: 10,
        categoria: 'Fase 2',
        imagen: 'img/broly.webp'
    },
    {
        id: 11,
        titulo: 'Freezer Fase 2',
        descripcion: 'Pan de queso, doble medallón smash, cheddar, rúcula, roquefort, cebolla morada caramelizada y papas extra crunch.',
        precio: 18000,
        cantidad: 10,
        categoria: 'Fase 2',
        imagen: 'img/freezer.webp'
    },
    {
        id: 12,
        titulo: 'Gohan Fase 3',
        descripcion: 'Pan de papa, triple carne smash, 5 fetas de cheddar y porción de papas extra crunch.',
        precio: 17000,
        cantidad: 10,
        categoria: 'Fase 3',
        imagen: 'img/gohan-f3.webp'
    },
    {
        id: 13,
        titulo: 'Krillin Fase 3',
        descripcion: 'Pan artesano, triple medallón smash, cheddar y porción de papas extra crunch.',
        precio: 18000,
        cantidad: 10,
        categoria: 'Fase 3',
        imagen: 'img/krillin-f3.webp'
    },
    {
        id: 14,
        titulo: 'Vegeta Fase 3',
        descripcion: 'Pan de papa, triple medallón smash, cheddar, bacon y porción de papas extra crunch.',
        precio: 18000,
        cantidad: 10,
        categoria: 'Fase 3',
        imagen: 'img/vegeta-f3.webp'
    },
    {
        id: 15,
        titulo: 'Goku Nivel Dios',
        descripcion: 'Pan de papa, triple medallón smash, cheddar, bacon, papas extra crunch con baño de cheddar líquido y bacon.',
        precio: 20000,
        cantidad: 10,
        categoria: 'Fase 3',
        imagen: 'img/goku-dios.webp'
    },
    {
        id: 16,
        titulo: 'Broly Fase 3',
        descripcion: 'Pan de semillas, doble medallón smash, cheddar, cebolla crispy, bacon, lechuga, tomate y papas extra crunch.',
        precio: 20000,
        cantidad: 10,
        categoria: 'Fase 3',
        imagen: 'img/broly.webp'
    },
    {
        id: 17,
        titulo: 'Papas Estado Base',
        descripcion: 'Papas extra crunch.',
        precio: 7000,
        cantidad: 10,
        categoria: 'Papas',
        imagen: 'img/papas-base.webp'
    },
    {
        id: 18,
        titulo: 'Papas Sayajin',
        descripcion: 'Porción de papas extra crunch con baño de cheddar.',
        precio: 8500,
        cantidad: 10,
        categoria: 'Papas',
        imagen: 'img/papas-sayajin.webp'
    },
    {
        id: 19,
        titulo: 'Papas Súper Sayajin',
        descripcion: 'Papas extra crunch con baño de cheddar, bacon y verdeo.',
        precio: 10000,
        cantidad: 10,
        categoria: 'Papas',
        imagen: 'img/papas-super.webp'
    },
    {
        id: 20,
        titulo: 'Coca Cola 500cc',
        descripcion: 'Botella de 500cc.',
        precio: 3000,
        cantidad: 20,
        categoria: 'Bebidas',
        imagen: 'img/coca.webp'
    },
    {
        id: 21,
        titulo: 'Sprite 500cc',
        descripcion: 'Botella de 500cc.',
        precio: 3000,
        cantidad: 20,
        categoria: 'Bebidas',
        imagen: 'img/sprite.webp'
    },
    {
        id: 22,
        titulo: 'Fanta 500cc',
        descripcion: 'Botella de 500cc.',
        precio: 3000,
        cantidad: 20,
        categoria: 'Bebidas',
        imagen: 'img/fanta.webp'
    },
    {
        id: 23,
        titulo: 'Agua mineral 500cc',
        descripcion: 'Botella de 500cc.',
        precio: 2000,
        cantidad: 20,
        categoria: 'Bebidas',
        imagen: 'img/agua.webp'
    },
    {
        id: 24,
        titulo: 'Cerveza Brahma 473cc',
        descripcion: 'Lata de 473cc.',
        precio: 3000,
        cantidad: 20,
        categoria: 'Bebidas',
        imagen: 'img/brahma.webp'
    },
    {
        id: 25,
        titulo: 'Cerveza Heineken 473cc',
        descripcion: 'Lata de 473cc.',
        precio: 4000,
        cantidad: 20,
        categoria: 'Bebidas',
        imagen: 'img/heineken.webp'
    },
]

// Productos que el usuario agregó al carrito: [{ id, titulo, precio, cantidad }]
const carrito = []

/*
Desarrollar una funcion llamada filtrarProductosCarritoPorCategoria(categoria) y debe devolver una nueva lista con todos los productos que pertenezcan a esa categoria
Si ninguno coincide devolver array vacio

Un filtro es, recorrer toda una lista buscando los elementos que cumplan con cierto criterio (condicion). Aquellos que cumplan seran sumados a una lista resultante (inicialmente vacia).
*/
function filtrarProductosPorCategoria(categoria) {
    // "todos" devuelve la lista completa
    if (categoria === 'todos') {
        return productos
    }

    const resultado = []
    for (const producto of productos) {
        if (producto.categoria === categoria) {
            resultado.push(producto)
        }
    }
    return resultado
}

// Muestra el precio con separador de miles: 12500 -> "$12.500"
function formatearPrecio(numero) {
    return '$' + numero.toLocaleString('es-AR')
}

// Si la imagen no existe, muestra una de reemplazo con el nombre del producto
function imagenDeReemplazo(img, texto) {
    img.onerror = null // evita un bucle si también falla el reemplazo
    img.src = 'https://placehold.co/400x300/f3f4f6/6b7280?text=' + encodeURIComponent(texto)
}

// Las fases tienen un aura de ki con llamas (más intensa en cada fase)
function llamasKi() {
    return '<span class="ki__llamas" aria-hidden="true"><i></i><i></i><i></i><i></i><i></i></span>'
}

function etiquetaCategoria(categoria) {
    if (categoria.startsWith('Fase')) {
        const numero = categoria.split(' ')[1] // "Fase 2" -> "2"
        return `<span class="producto__categoria ki ki--${numero}">${llamasKi()}${categoria}</span>`
    }
    return `<span class="producto__categoria">${categoria}</span>`
}

// ===== Buscar por id =====
function buscarProducto(id) {
    for (const producto of productos) {
        if (producto.id === id) {
            return producto
        }
    }
    return null
}

function buscarEnCarrito(id) {
    for (const item of carrito) {
        if (item.id === id) {
            return item
        }
    }
    return null
}

// ===== Render de productos =====
// animar = true hace que las tarjetas entren una tras otra (al cargar o filtrar)
function renderProductos(lista, animar) {
    const htmlProductos = []
    let indice = 0

    for (const producto of lista) {
        const sinStock = producto.cantidad === 0
        const htmlstring = `
            <div class="producto" style="--i: ${indice}">
                <img class="producto__imagen" src="${producto.imagen}" alt="${producto.titulo.replace(/"/g, '')}"
                     onerror="imagenDeReemplazo(this, '${producto.titulo.replace(/"/g, '')}')">
                ${etiquetaCategoria(producto.categoria)}
                <h3 class="producto__titulo">${producto.titulo}</h3>
                <p class="producto__descripcion">${producto.descripcion}</p>
                <div class="producto__precio">${formatearPrecio(producto.precio)}</div>
                <div class="producto__cantidad">Disponibles: ${producto.cantidad}</div>
                <button class="producto__boton" data-id="${producto.id}" ${sinStock ? 'disabled' : ''}>
                    ${sinStock ? 'Agotado' : 'Agregar al pedido'}
                </button>
            </div>`
        htmlProductos.push(htmlstring)
        indice = indice + 1
    }

    const contenedor = document.getElementById('productos')
    if (animar) {
        contenedor.classList.add('animar')
    } else {
        contenedor.classList.remove('animar')
    }
    if (htmlProductos.length === 0) {
        contenedor.innerHTML = '<p class="vacio">No hay productos en esta sección del menú.</p>'
    } else {
        contenedor.innerHTML = htmlProductos.join('')
    }
}

// ===== Render del carrito =====
function calcularTotal() {
    let total = 0
    for (const item of carrito) {
        total = total + item.precio * item.cantidad
    }
    return total
}

function calcularCantidadTotal() {
    let cantidad = 0
    for (const item of carrito) {
        cantidad = cantidad + item.cantidad
    }
    return cantidad
}

function renderCarrito() {
    const lista = document.getElementById('carrito-lista')

    if (carrito.length === 0) {
        lista.innerHTML = '<p class="vacio">Tu pedido está vacío.</p>'
    } else {
        const htmlItems = []
        for (const item of carrito) {
            htmlItems.push(`
                <div class="carrito-item">
                    <img class="carrito-item__imagen" src="${item.imagen}" alt="${item.titulo.replace(/"/g, '')}"
                         onerror="imagenDeReemplazo(this, '${item.titulo.replace(/"/g, '')}')">
                    <div class="carrito-item__info">
                        <h4 class="carrito-item__titulo">${item.titulo}</h4>
                        <span class="carrito-item__detalle">${item.cantidad} x ${formatearPrecio(item.precio)}</span>
                    </div>
                    <div class="carrito-item__derecha">
                        <strong>${formatearPrecio(item.precio * item.cantidad)}</strong>
                        <button class="carrito-item__quitar" data-id="${item.id}" title="Quitar uno">✕</button>
                    </div>
                </div>`)
        }
        lista.innerHTML = htmlItems.join('')
    }

    document.getElementById('carrito-total').textContent = formatearPrecio(calcularTotal())
    document.getElementById('carrito-contador').textContent = calcularCantidadTotal()
}

// ===== Acciones =====
// Devuelve true si se pudo agregar (había stock)
function agregarAlCarrito(id) {
    const producto = buscarProducto(id)
    if (producto === null || producto.cantidad === 0) {
        return false
    }

    producto.cantidad = producto.cantidad - 1 // descuenta stock

    const item = buscarEnCarrito(id)
    if (item === null) {
        carrito.push({ id: producto.id, titulo: producto.titulo, precio: producto.precio, imagen: producto.imagen, cantidad: 1 })
    } else {
        item.cantidad = item.cantidad + 1
    }

    actualizarPantalla()
    return true
}

function quitarDelCarrito(id) {
    const item = buscarEnCarrito(id)
    if (item === null) {
        return
    }

    buscarProducto(id).cantidad += 1 // devuelve el stock
    item.cantidad = item.cantidad - 1

    if (item.cantidad === 0) {
        carrito.splice(carrito.indexOf(item), 1)
    }

    actualizarPantalla()
}

function vaciarCarrito() {
    for (const item of carrito) {
        buscarProducto(item.id).cantidad += item.cantidad
    }
    carrito.length = 0
    actualizarPantalla()
}

function finalizarCompra() {
    if (carrito.length === 0) {
        alert('Tu pedido está vacío.')
        return
    }
    alert('¡Gracias por pedir en Smashing Buu! 🍔🔥 Total: ' + formatearPrecio(calcularTotal()))
    carrito.length = 0 // el stock ya quedó descontado
    actualizarPantalla()
    cerrarCarrito()
}

// Reinicia la animación de "salto" del contador del carrito
function animarContador() {
    const contador = document.getElementById('carrito-contador')
    contador.classList.remove('salto')
    void contador.offsetWidth // truco para que el navegador reinicie la animación
    contador.classList.add('salto')
}

// ===== Panel del carrito =====
function abrirCarrito() {
    document.getElementById('carrito-panel').classList.add('abierto')
    document.getElementById('overlay').classList.add('visible')
}

function cerrarCarrito() {
    document.getElementById('carrito-panel').classList.remove('abierto')
    document.getElementById('overlay').classList.remove('visible')
}

// ===== Estado de la pantalla =====
let categoriaActual = 'todos'

function actualizarPantalla(animar) {
    renderProductos(filtrarProductosPorCategoria(categoriaActual), animar)
    renderCarrito()
}

// ===== Eventos =====
// Botones "Comprar" (delegación: un solo listener para todas las tarjetas)
document.getElementById('productos').addEventListener('click', function (evento) {
    const boton = evento.target.closest('.producto__boton')
    if (!boton) {
        return
    }

    const id = Number(boton.dataset.id)
    // Guardamos la posición del botón ANTES de re-dibujar las tarjetas
    const origen = boton.getBoundingClientRect()

    if (agregarAlCarrito(id)) {
        // El dragón lleva la foto del producto hasta "Mi pedido" (ver dragon.js)
        lanzarDragon(origen, buscarProducto(id).imagen, animarContador)
    }
})

// Botones "✕" dentro del carrito
document.getElementById('carrito-lista').addEventListener('click', function (evento) {
    const boton = evento.target.closest('.carrito-item__quitar')
    if (boton) {
        quitarDelCarrito(Number(boton.dataset.id))
    }
})

// Filtros del menú
for (const enlace of document.querySelectorAll('[data-categoria]')) {
    enlace.addEventListener('click', function (evento) {
        evento.preventDefault()
        categoriaActual = enlace.dataset.categoria

        for (const otro of document.querySelectorAll('[data-categoria]')) {
            otro.classList.remove('activo')
        }
        enlace.classList.add('activo')

        actualizarPantalla(true)
    })
}

document.getElementById('abrir-carrito').addEventListener('click', function (evento) {
    evento.preventDefault()
    abrirCarrito()
})
document.getElementById('cerrar-carrito').addEventListener('click', cerrarCarrito)
document.getElementById('overlay').addEventListener('click', cerrarCarrito)
document.getElementById('vaciar-carrito').addEventListener('click', vaciarCarrito)
document.getElementById('finalizar-compra').addEventListener('click', finalizarCompra)

// Primer render
actualizarPantalla(true)
