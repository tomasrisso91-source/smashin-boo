/* =========================================================
   Dragón de energía de Smashing Buu
   Un dragón chino tradicional (diseño propio: verde jade con
   musgo, cuernos ramificados y escamas) que vuela hasta "Mi pedido"
   llevando la foto del producto.
   ========================================================= */

const DRAGON_DURACION = 1900   // milisegundos que dura el vuelo
const DRAGON_SEGMENTOS = 48    // cantidad de "anillos" del cuerpo
const DRAGON_SEPARACION = 0.0075 // distancia (en tiempo) entre anillos

// Cabeza del dragón (diseño propio inspirado en el dragón chino tradicional:
// cuernos ramificados de ciervo, barba, melena y bigotes ondulantes, en verde jade con musgo),
// mirando a la derecha. Contornos finos y sombras planas.
const DRAGON_CABEZA_SVG = `
<svg viewBox="0 0 130 90" xmlns="http://www.w3.org/2000/svg"
     stroke="#13200e" stroke-width="2.2" stroke-linejoin="round" stroke-linecap="round">
    <!-- melena que flamea hacia atrás -->
    <path d="M44 26 C30 14 18 16 4 8 C14 20 18 24 26 28 C12 28 6 34 -6 34 C8 40 16 40 26 42 C14 48 8 56 -2 62 C14 60 24 54 34 52 C28 60 26 68 22 78 C34 70 40 62 46 56 Z" fill="#6f8259"/>
    <path d="M26 42 C16 46 10 52 4 58 C14 56 22 52 32 50 Z" fill="#4d5e3c" stroke="none"/>
    <!-- cuernos ramificados (como de ciervo): borde oscuro y color hueso encima -->
    <path d="M52 24 C46 12 40 4 26 0 M40 8 C40 2 44 -4 48 -8 M33 3 C28 -2 22 -4 16 -4" fill="none" stroke-width="6"/>
    <path d="M52 24 C46 12 40 4 26 0 M40 8 C40 2 44 -4 48 -8 M33 3 C28 -2 22 -4 16 -4" fill="none" stroke="#e8dcc0" stroke-width="3"/>
    <path d="M62 22 C60 10 58 2 50 -6 M58 8 C62 4 66 0 72 -2" fill="none" stroke-width="6"/>
    <path d="M62 22 C60 10 58 2 50 -6 M58 8 C62 4 66 0 72 -2" fill="none" stroke="#e8dcc0" stroke-width="3"/>
    <!-- mandíbula inferior con boca abierta -->
    <path d="M58 56 L112 60 C118 66 108 74 96 72 L64 68 C54 66 52 58 58 56 Z" fill="#3f6233"/>
    <path d="M66 60 L104 63 C102 67 98 68 94 68 L68 65 Z" fill="#7a1f1f" stroke="none"/>
    <path d="M72 66 L75 61 L78 66 M84 67 L87 62 L90 67" fill="#fff" stroke-width="1.6"/>
    <!-- barba debajo de la mandíbula -->
    <path d="M62 68 C60 78 66 84 58 92 C70 88 72 80 76 70 Z" fill="#6f8259"/>
    <path d="M78 70 C78 78 84 82 80 90 C90 84 90 78 90 71 Z" fill="#6f8259"/>
    <!-- cabeza -->
    <path d="M32 46 C28 26 50 16 72 20 L112 30 C126 33 126 50 114 53 L92 55 C78 66 48 68 36 60 Z" fill="#6e9a52"/>
    <!-- sombra plana -->
    <path d="M36 56 C52 62 74 60 90 52 L114 50 C110 53 104 54 92 55 C78 66 48 68 38 60 Z" fill="#3f6233" stroke="none"/>
    <!-- escamas en la frente -->
    <path d="M44 34 q4 -4 8 0 M52 30 q4 -4 8 0 M48 42 q4 -4 8 0 M40 44 q4 -4 8 0" fill="none" stroke="#26401f" stroke-width="1.6"/>
    <!-- brillo -->
    <path d="M74 24 L104 31 L100 34 L76 29 Z" fill="#b4d494" stroke="none"/>
    <!-- dientes de arriba -->
    <path d="M76 55 L79 61 L82 55 L85 61 L88 55 L91 60 L94 54" fill="#fff" stroke-width="1.6"/>
    <!-- ojo ámbar -->
    <path d="M60 34 L80 32 L76 42 L62 41 Z" fill="#fff3c4"/>
    <path d="M70 33 L75 33 L73 41 L69 41 Z" fill="#ffb300" stroke="none"/>
    <path d="M71 35 L73 35 L72 39 Z" fill="#13200e" stroke="none"/>
    <!-- ceja -->
    <path d="M54 30 L84 26" stroke-width="4"/>
    <!-- fosa nasal -->
    <path d="M112 37 L116 39" stroke-width="2.4"/>
    <!-- bigotes largos que ondulan: borde oscuro y color hueso encima -->
    <g class="bigote bigote--arriba">
        <path d="M112 34 C130 18 140 44 166 20 C186 2 202 26 232 4" fill="none" stroke-width="4.5"/>
        <path d="M112 34 C130 18 140 44 166 20 C186 2 202 26 232 4" fill="none" stroke="#eee6cc" stroke-width="2.4"/>
    </g>
    <g class="bigote bigote--abajo">
        <path d="M108 54 C126 70 142 50 164 76 C182 98 202 82 230 104" fill="none" stroke-width="4.5"/>
        <path d="M108 54 C126 70 142 50 164 76 C182 98 202 82 230 104" fill="none" stroke="#eee6cc" stroke-width="2.4"/>
    </g>
</svg>`

// Arte propio opcional: si existe img/dragon.png (cabeza mirando a la derecha,
// fondo transparente), se usa en lugar del dibujo SVG de arriba.
const DRAGON_IMAGEN = 'img/dragon.png'
let dragonImagenDisponible = false
const dragonPrecarga = new Image()
dragonPrecarga.onload = function () { dragonImagenDisponible = true }
dragonPrecarga.src = DRAGON_IMAGEN

// ---------- utilidades ----------
function centroDe(rect) {
    return { x: rect.left + rect.width / 2, y: rect.top + rect.height / 2 }
}

function suavizar(t) { // arranca y frena suave
    return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2
}

function limitar(valor, minimo, maximo) {
    return Math.max(minimo, Math.min(maximo, valor))
}

// Crea la función que da la posición del dragón en el instante t (0 a 1).
// Es una curva Bézier con un "loop" (vuelta en el aire) en el medio.
function crearRecorrido(inicio, fin) {
    const ancho = window.innerWidth
    const alto = window.innerHeight
    const lado = inicio.x < ancho / 2 ? 1 : -1

    const p1 = { x: limitar(inicio.x - lado * 220, 60, ancho - 60), y: limitar(inicio.y - 320, 80, alto) }
    const p2 = { x: limitar(fin.x - 260, 60, ancho - 60), y: limitar(fin.y + 380, 0, alto - 40) }
    const radioLoop = Math.min(90, ancho * 0.12)

    return function (t) {
        const u = 1 - t
        let x = u * u * u * inicio.x + 3 * u * u * t * p1.x + 3 * u * t * t * p2.x + t * t * t * fin.x
        let y = u * u * u * inicio.y + 3 * u * u * t * p1.y + 3 * u * t * t * p2.y + t * t * t * fin.y

        // loop entre t = 0.30 y t = 0.62
        if (t > 0.30 && t < 0.62) {
            const v = (t - 0.30) / 0.32
            const angulo = v * Math.PI * 2
            x += radioLoop * Math.sin(angulo) * lado
            y -= radioLoop * (1 - Math.cos(angulo))
        }
        return { x: x, y: y }
    }
}

// ---------- efectos sueltos ----------
function crearOnda(capa, punto, clase) {
    const onda = document.createElement('div')
    onda.className = clase
    onda.style.left = punto.x + 'px'
    onda.style.top = punto.y + 'px'
    capa.appendChild(onda)
    onda.addEventListener('animationend', function () { onda.remove() })
}

function crearChispa(capa, punto) {
    const chispa = document.createElement('div')
    chispa.className = 'dragon-chispa'
    const tamano = 4 + Math.random() * 8
    chispa.style.width = tamano + 'px'
    chispa.style.height = tamano + 'px'
    chispa.style.left = (punto.x + (Math.random() - 0.5) * 24) + 'px'
    chispa.style.top = (punto.y + (Math.random() - 0.5) * 24) + 'px'
    chispa.style.setProperty('--dx', ((Math.random() - 0.5) * 60) + 'px')
    chispa.style.setProperty('--dy', ((Math.random() - 0.2) * 60) + 'px')
    if (Math.random() < 0.4) {
        chispa.classList.add('rosa')
    }
    capa.appendChild(chispa)
    chispa.addEventListener('animationend', function () { chispa.remove() })
}

// Líneas de velocidad como en el animé
function crearLineaVelocidad(capa, punto, angulo) {
    const linea = document.createElement('div')
    linea.className = 'dragon-linea'
    linea.style.width = (60 + Math.random() * 90) + 'px'
    const desvio = (Math.random() - 0.5) * 50
    const x = punto.x + Math.cos(angulo + Math.PI / 2) * desvio
    const y = punto.y + Math.sin(angulo + Math.PI / 2) * desvio
    linea.style.left = x + 'px'
    linea.style.top = y + 'px'
    linea.style.setProperty('--angulo', (angulo + Math.PI) + 'rad')
    capa.appendChild(linea)
    linea.addEventListener('animationend', function () { linea.remove() })
}

// Cuadro de impacto: rayos alrededor del carrito y un destello
function crearImpacto(capa, punto) {
    const rayos = document.createElement('div')
    rayos.className = 'dragon-rayos'
    rayos.style.left = punto.x + 'px'
    rayos.style.top = punto.y + 'px'
    capa.appendChild(rayos)
    rayos.addEventListener('animationend', function () { rayos.remove() })

    const destello = document.createElement('div')
    destello.className = 'dragon-destello'
    destello.style.setProperty('--x', punto.x + 'px')
    destello.style.setProperty('--y', punto.y + 'px')
    capa.appendChild(destello)
    destello.addEventListener('animationend', function () { destello.remove() })
}

// Nubecitas que deja el dragón a su paso (como en las pinturas chinas)
function crearNube(capa, punto) {
    const nube = document.createElement('div')
    nube.className = 'dragon-nube'
    nube.style.left = punto.x + 'px'
    nube.style.top = punto.y + 'px'
    nube.style.setProperty('--escala', 0.6 + Math.random() * 0.6)
    capa.appendChild(nube)
    nube.addEventListener('animationend', function () { nube.remove() })
}

function mostrarMasUno(capa, punto) {
    const texto = document.createElement('div')
    texto.className = 'dragon-mas-uno'
    texto.textContent = '+1'
    texto.style.left = punto.x + 'px'
    texto.style.top = punto.y + 'px'
    capa.appendChild(texto)
    texto.addEventListener('animationend', function () { texto.remove() })
}

// ---------- animación principal ----------
// rectOrigen: getBoundingClientRect() del botón presionado
// imagen: ruta de la foto del producto
// alLlegar: función que se ejecuta cuando el dragón llega al carrito
function lanzarDragon(rectOrigen, imagen, alLlegar) {
    const botonCarrito = document.getElementById('abrir-carrito')
    const fin = centroDe(botonCarrito.getBoundingClientRect())
    const inicio = centroDe(rectOrigen)

    // Si el usuario pidió "reducir movimiento", no hay dragón
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        alLlegar()
        return
    }

    // Capa transparente encima de toda la página
    const capa = document.createElement('div')
    capa.className = 'dragon-capa'
    document.body.appendChild(capa)

    // Carga de energía en el botón
    crearOnda(capa, inicio, 'dragon-onda dragon-onda--inicio')

    // Cuerpo: anillos de mayor a menor
    const segmentos = []
    for (let i = 0; i < DRAGON_SEGMENTOS; i++) {
        const seg = document.createElement('div')
        seg.className = 'dragon-segmento'
        seg.classList.add('con-aleta') // púas en todo el lomo
        // melena que flamea en el cuello
        if (i < 12) {
            seg.classList.add('con-melena')
        }
        // cuatro patas con garras
        if (i === 6 || i === 14 || i === 27 || i === 35) {
            seg.innerHTML = '<div class="dragon-pata"><i></i><i></i><i></i></div>'
        }
        const tamano = 24 - (i / DRAGON_SEGMENTOS) * 17
        seg.style.width = tamano + 'px'
        seg.style.height = tamano + 'px'
        capa.appendChild(seg)
        segmentos.push(seg)
    }

    // Punta de la cola
    const cola = document.createElement('div')
    cola.className = 'dragon-cola'
    capa.appendChild(cola)

    // Cabeza
    const cabeza = document.createElement('div')
    cabeza.className = 'dragon-cabeza'
    if (dragonImagenDisponible) {
        cabeza.innerHTML = '<img src="' + DRAGON_IMAGEN + '" alt="">'
        cabeza.classList.add('con-imagen')
    } else {
        cabeza.innerHTML = DRAGON_CABEZA_SVG
    }
    capa.appendChild(cabeza)

    // Producto que lleva en la boca
    const carga = document.createElement('img')
    carga.className = 'dragon-carga'
    carga.src = imagen
    carga.alt = ''
    capa.appendChild(carga)

    const recorrido = crearRecorrido(inicio, fin)
    let comienzo = null

    function posicionar(elemento, punto, angulo, voltear) {
        elemento.style.transform =
            'translate(' + punto.x + 'px, ' + punto.y + 'px) translate(-50%, -50%) rotate(' + angulo + 'rad)' +
            (voltear ? ' scaleY(-1)' : '')
    }

    function cuadro(ahora) {
        if (comienzo === null) {
            comienzo = ahora
        }
        const progreso = Math.min((ahora - comienzo) / DRAGON_DURACION, 1)
        const t = suavizar(progreso)

        // Cabeza: posición actual y hacia dónde mira
        const p = recorrido(t)
        const antes = recorrido(Math.max(t - 0.01, 0))
        const angulo = Math.atan2(p.y - antes.y, p.x - antes.x)
        const mirandoIzquierda = Math.abs(angulo) > Math.PI / 2
        posicionar(cabeza, p, angulo, mirandoIzquierda)

        // La hamburguesa va delante de la boca
        const carga_x = p.x + Math.cos(angulo) * 50
        const carga_y = p.y + Math.sin(angulo) * 50
        carga.style.transform = 'translate(' + carga_x + 'px, ' + carga_y + 'px) translate(-50%, -50%) rotate(' + (progreso * 720) + 'deg)'

        // Cada anillo sigue a la cabeza con un pequeño retraso
        // (con una ondulación para que parezca una serpiente)
        let ultimo = p
        for (let i = 0; i < segmentos.length; i++) {
            const ti = Math.max(t - (i + 1) * DRAGON_SEPARACION, 0)
            const pi = recorrido(ti)
            const pa = recorrido(Math.max(ti - 0.01, 0))
            const ai = Math.atan2(pi.y - pa.y, pi.x - pa.x)
            const onda = Math.sin(ahora / 90 - i * 0.5) * (3 + i * 0.15)
            pi.x += Math.cos(ai + Math.PI / 2) * onda
            pi.y += Math.sin(ai + Math.PI / 2) * onda
            posicionar(segmentos[i], pi, ai, Math.abs(ai) > Math.PI / 2)
            ultimo = pi
        }
        posicionar(cola, ultimo, angulo, false)

        // Líneas de velocidad detrás de la cabeza y estela de chispas
        crearLineaVelocidad(capa, p, angulo)
        if (Math.random() < 0.6) {
            crearChispa(capa, recorrido(Math.max(t - 0.06, 0)))
        }
        if (Math.random() < 0.12) {
            crearNube(capa, ultimo)
        }

        // Al final la cabeza "entra" al carrito
        const desvanecer = progreso > 0.88 ? (1 - progreso) / 0.12 : 1
        cabeza.style.opacity = desvanecer
        carga.style.opacity = desvanecer
        for (const seg of segmentos) {
            seg.style.opacity = desvanecer
        }
        cola.style.opacity = desvanecer

        if (progreso < 1) {
            requestAnimationFrame(cuadro)
        } else {
            llegar()
        }
    }

    function llegar() {
        crearImpacto(capa, fin)
        crearOnda(capa, fin, 'dragon-onda')
        crearOnda(capa, fin, 'dragon-onda dragon-onda--retrasada')
        for (let i = 0; i < 18; i++) {
            crearChispa(capa, fin)
        }
        mostrarMasUno(capa, fin)

        botonCarrito.classList.remove('impacto')
        void botonCarrito.offsetWidth // reinicia la animación
        botonCarrito.classList.add('impacto')

        alLlegar()

        cabeza.remove()
        carga.remove()
        cola.remove()
        for (const seg of segmentos) {
            seg.remove()
        }
        // la capa se borra cuando terminan las chispas y ondas
        setTimeout(function () { capa.remove() }, 1200)
    }

    requestAnimationFrame(cuadro)
}
