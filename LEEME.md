# 📱 Menú digital con pedidos por WhatsApp

Una página web para tu cafetería donde los clientes eligen productos,
ven el total, y al dar "Enviar por WhatsApp" te llega el pedido completo
a tu chat, listo para que solo le den enviar.

---

## 🗂️ Los archivos

| Archivo | Para qué sirve | ¿Lo tocas tú? |
|---------|----------------|----------------|
| `config.js`  | Tu nombre, tu WhatsApp, colores y **todos los productos y precios** | ✅ **SÍ, este es el tuyo** |
| `index.html` | El diseño y el funcionamiento de la página | ❌ No hace falta |

**Regla de oro:** para el día a día solo editas **`config.js`**.

---

## ✏️ Cómo cambiar productos y precios

1. Abre `config.js` con el Bloc de notas (o cualquier editor).
2. Cada producto se ve así:
   ```js
   { nombre: "Latte", precio: 7500, descripcion: "Suave y cremoso.", imagen: "" },
   ```
   - **nombre** y **descripcion**: van entre comillas `" "`.
   - **precio**: solo números, sin puntos ni comas → `7500`, no `7.500`.
   - **imagen**: pega un link a una foto entre las comillas, o déjalo vacío `""`.
   - Al final de cada producto va una coma `,`.
3. Para **agregar** un producto: copia una línea completa y pégala debajo.
4. Para **quitar** uno: borra su línea completa.
5. Guarda el archivo. ¡Listo!

> 💡 Antes de nada, cambia el número de WhatsApp en `config.js`
> (línea `whatsapp:`). Va con código de país, sin `+` ni espacios.
> Ejemplo Colombia: `"573001234567"`.

---

## 🐝 El logo

Para que salga tu abejita arriba, guarda tu imagen del logo en esta
carpeta con el nombre exacto **`logo.png`** (se recomienda la versión
de solo la abejita, sin letras, porque el nombre ya sale escrito debajo).
Si no pones ningún archivo, simplemente no se muestra logo, sin errores.

---

## 🌐 Cómo publicarlo GRATIS (para tenerlo en internet)

La forma más fácil es **Netlify Drop**:

1. Entra a **https://app.netlify.com/drop**
2. Arrastra la carpeta completa (`menu para whatsapp`) a esa página.
3. En segundos te da un link público, por ejemplo:
   `https://mi-cafeteria.netlify.app`
4. ¡Ese es el link que pones en tu Instagram!

> Cada vez que cambies el menú, vuelves a arrastrar la carpeta para actualizar.
> (Más adelante se puede automatizar o ponerle tu propio dominio.)

---

## 📸 Ponerlo en Instagram

1. Ve a tu perfil → **Editar perfil**.
2. En el campo **Sitio web** pega tu link (el de Netlify o tu dominio).
3. Listo: aparecerá como enlace clickeable en tu bio, como el que viste.

También puedes ponerlo en tus historias con el sticker de "Enlace".

---

## ❓ Preguntas comunes

**¿El pedido se envía solo a mi WhatsApp?**
El mensaje llega ya escrito con todo el pedido y el total. El cliente
solo tiene que darle "Enviar" en su WhatsApp (así lo exige WhatsApp).

**¿Necesito WhatsApp Business?**
No es obligatorio, pero se recomienda: te da catálogo, respuestas rápidas
y horario de atención. Funciona igual con el WhatsApp normal.

**¿Cobra pagos la página?**
No. Coordinas el pago y la entrega por el chat, como ya lo haces.
Si algún día quieres cobrar en línea, se puede agregar después.

**¿Puedo probarlo en mi computador antes de publicar?**
Sí: solo abre el archivo `index.html` con doble clic.
