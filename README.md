# BurgerMax — Landing Page

Landing page de una página para **BurgerMax**, hamburguesería en Ciudad del Este, Paraguay (Cruz del Eje, L. Echenique y Sarmiento, frente a Ruta 38). El sitio muestra la carta, la ubicación/horarios y deriva todos los pedidos y consultas a WhatsApp — **no se muestran precios** en ningún lugar de la página, la negociación de precio y el armado del pedido se hacen por chat.

## Estructura del proyecto

```
BurgerMax Landing page/
├── index.html                     # Punto de entrada para hosting estático (Vercel, Netlify, etc.)
├── BurgerMax Landing.dc.html      # Versión actual del sitio (idéntica a index.html)
├── BurgerMax Landing v1.dc.html   # Versión anterior (referencia/histórico)
├── support.js                     # Runtime que interpreta las etiquetas x-dc/x-import/sc-for/sc-if
├── _ds/
│   └── burgermax-design-system-.../
│       ├── tokens/                # fonts.css, colors.css, typography.css, spacing.css, effects.css
│       ├── styles.css
│       ├── _ds_bundle.js          # Componentes del design system (Button, Pill, MenuCard, NavBar, etc.)
│       └── readme.md              # Documentación del design system
├── assets/
│   ├── images/                    # Fotos usadas en la página (carta, hero, galería, fachada)
│   ├── logos/                     # Logo de BurgerMax
│   └── video/                     # Video del hero (hero-burger.mp4)
├── uploads/                       # Material fuente/de referencia (no todo se usa en el sitio final)
└── .thumbnail                     # Miniatura de preview del proyecto
```

## Cómo verlo localmente

Es un HTML estático, no requiere build. Basta con servirlo con cualquier servidor estático (abrirlo con `file://` puede fallar por CORS en el `<script src>` del bundle del design system):

```bash
npx serve .
# o
python -m http.server 8080
```

Luego abrir `index.html` en el navegador.

## Deploy en Vercel

Vercel (y cualquier host estático) sirve `/` buscando un `index.html` en la raíz — por eso existe `index.html` (copia exacta de `BurgerMax Landing.dc.html`, que se mantiene como el archivo "fuente" del editor que generó el sitio). Al importar el repo en Vercel, dejar el framework preset en "Other"/estático, sin build command ni output directory: solo tiene que servir los archivos tal cual están.

**Importante:** si editás el contenido en `BurgerMax Landing.dc.html`, hay que replicar el cambio en `index.html` (o reemplazar `index.html` por una copia actualizada) para que el deploy lo refleje.

## Secciones de la página

- **Header / nav** — sticky, con logo y links a Carta, Ubicación y Contacto, más botón "Pedir".
- **Hero** — video en loop a pantalla completa con título y CTA a WhatsApp.
- **Galería** — carrusel tipo marquee con fotos de producto.
- **Carta** (`#carta`) — grilla de productos filtrable por categoría (hamburguesas, pollo, bebidas, acompañar). Cada tarjeta agrega el ítem a un carrito flotante; el carrito arma un mensaje de WhatsApp con el pedido (sin precios).
- **Ubicación** (`#ubicacion`) — dirección, horarios (martes a viernes 11 AM a 2 AM; fines de semana/feriados por WhatsApp), opciones (salón/take away/delivery) y botón "Cómo llegar" a Google Maps.
- **Contacto** (`#contacto`) — CTA principal a WhatsApp y bloque de promos de Instagram (@burgermaxcde).
- **Footer** — links a WhatsApp, Instagram y "Cómo llegar".
- **Botón flotante de WhatsApp** y **carrito flotante** (aparece solo si hay ítems agregados).

## Configuración rápida

Todo el contenido editable vive dentro del `<script type="text/x-dc">` al final de `BurgerMax Landing.dc.html`:

- **Número de WhatsApp**: constante `WA_NUMBER`. Los links de CTA usan además el shortlink `https://wa.link/glqbbq`.
- **Menú**: array `MENU` (imagen, título, nota, categoría).
- **Galería**: array `GALLERY`.

Los textos de ubicación, horarios y redes están escritos directamente en el HTML de la sección correspondiente (`#ubicacion` y `#contacto`).

## Design system

`_ds/burgermax-design-system-.../` contiene los tokens (colores, tipografía, espaciado, efectos) y componentes (Button, Pill, MenuCard, NavBar, CategorySelect, WhatsAppFloat) que consume la página vía `x-import`. Paleta "fuego" (rojo/naranja/amarillo) sobre fondo blanco/crema, tipografía Plus Jakarta Sans. Ver `_ds/.../readme.md` para el detalle completo de guidelines visuales y de copy.

## Notas

- `BurgerMax Landing v1.dc.html` se conserva como referencia de una iteración previa del diseño (hero estático sin video, nav distinto); el sitio vigente es `BurgerMax Landing.dc.html`.
- `uploads/` contiene fotos y videos de referencia/prueba que no necesariamente están enlazados desde la página final — las imágenes realmente usadas están en `assets/`.
