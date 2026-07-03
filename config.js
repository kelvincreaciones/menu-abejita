/* ============================================================
   👇 ESTE ES EL ÚNICO ARCHIVO QUE NECESITAS EDITAR 👇
   ============================================================
   Aquí cambias: el nombre de tu cafetería, tu número de
   WhatsApp, los colores, y TODOS los productos con sus precios.

   Reglas simples para no romper nada:
   - Cada línea que tenga un texto va SIEMPRE entre comillas "asi".
   - Los precios van SIN comillas y SIN puntos ni comas. Ej: 125
   - Cada producto termina con una coma  },
   - No borres las llaves { } ni los corchetes [ ]
   ============================================================ */

const CONFIG = {

  // ---- DATOS DE TU NEGOCIO ----
  nombreNegocio: "Cafetería La Abejita",       // El nombre que sale arriba
  eslogan: "",                                 // Frase corta debajo del nombre (vacío = no se muestra nada)
  logo: "assets/logo.png",                     // Tu logo (la abejita). Para usar otra imagen, guárdala en la carpeta "assets" y pon aquí su nombre. Vacío "" = sin logo.

  // Tu número de WhatsApp CON código de país, SIN el signo + y SIN espacios.
  // República Dominicana: 1 + 8099615994  ->  "18099615994"
  // ⚠️ Por ahora es tu WhatsApp PERSONAL (modo prueba).
  whatsapp: "18099615994",

  // Moneda que se muestra junto a los precios
  moneda: "RD$",

  // Colores de tu marca (formato #RRGGBB)
  colorPrincipal: "#1A1A1A",   // Negro (encabezado y textos de precio)
  colorAcento:    "#F5C518",   // Amarillo abejita (botones + / -)
  colorFondo:     "#FFFDF6",   // Fondo crema muy suave

  // Mensaje corto que aparece antes del pedido en WhatsApp
  saludoPedido: "¡Hola La Abejita! 🐝 Quiero hacer este pedido:",
};


/* ============================================================
   👇 AQUÍ VAN TUS PRODUCTOS 👇
   Agrupados por categorías. Copia y pega un bloque { ... },
   para agregar más productos.
   ============================================================ */

const MENU = [

  {
    categoria: "☕ Cafés",
    productos: [
      { nombre: "Café Grande",              precio: 40,  descripcion: "", icono: "☕" },
      { nombre: "Café Mediano",             precio: 20,  descripcion: "", icono: "☕" },
      { nombre: "Café Pequeño",             precio: 15,  descripcion: "", icono: "☕" },
      { nombre: "Café Negro",               precio: 25,  descripcion: "", icono: "☕" },
      { nombre: "Café con Leche Grande",    precio: 60,  descripcion: "", icono: "☕" },
      { nombre: "Café con Leche Pequeño",   precio: 30,  descripcion: "", icono: "☕" },
      { nombre: "Café con Cremola Grande",  precio: 50,  descripcion: "", icono: "☕" },
      { nombre: "Café con Cremola Mediano", precio: 30,  descripcion: "", icono: "☕" },
      { nombre: "Café con Cremola Pequeño", precio: 20,  descripcion: "", icono: "☕" },
    ],
  },

  {
    categoria: "🥪 Sándwiches",
    productos: [
      { nombre: "Sándwich Completo",  precio: 80,  descripcion: "", icono: "🥪" },
      { nombre: "Sándwich Derretido", precio: 60,  descripcion: "", icono: "🥪" },
      { nombre: "Sándwich Doble",     precio: 120, descripcion: "", icono: "🥪" },
      { nombre: "Sándwich Integral",  precio: 90,  descripcion: "", icono: "🥪" },
    ],
  },

  {
    categoria: "🥐 Tostadas y Panes",
    productos: [
      { nombre: "Pan de Huevo",                    precio: 70,  descripcion: "", icono: "🥐" },
      { nombre: "Pan de Huevo y Queso",            precio: 75,  descripcion: "", icono: "🥐" },
      { nombre: "Pan de Huevo y Jamón",            precio: 75,  descripcion: "", icono: "🥐" },
      { nombre: "Pan de Huevo, Jamón y Queso",     precio: 100, descripcion: "", icono: "🥐" },
      { nombre: "Pan de Carne",                    precio: 75,  descripcion: "", icono: "🥐" },
      { nombre: "Pan de Carne y Huevo",            precio: 85,  descripcion: "", icono: "🥐" },
      { nombre: "Pan de Carne y Queso",            precio: 90,  descripcion: "", icono: "🥐" },
      { nombre: "Pan de Carne, Jamón y Queso",     precio: 100, descripcion: "", icono: "🥐" },
      { nombre: "Pan Carne y Queso Danés",         precio: 95,  descripcion: "", icono: "🥐" },
      { nombre: "Pan de Pollo",                    precio: 110, descripcion: "", icono: "🥐" },
      { nombre: "Pan de Pollo y Huevo",            precio: 115, descripcion: "", icono: "🥐" },
      { nombre: "Pan de Pollo y Queso",            precio: 120, descripcion: "", icono: "🥐" },
      { nombre: "Pan Pollo y Carne",               precio: 125, descripcion: "", icono: "🥐" },
      { nombre: "Pollo, Jamón y Queso",            precio: 140, descripcion: "", icono: "🥐" },
      { nombre: "Pollo, Carne y Huevo",            precio: 140, descripcion: "", icono: "🥐" },
      { nombre: "Pollo, Huevo, Jamón y Queso",     precio: 160, descripcion: "", icono: "🥐" },
      { nombre: "Pollo y Queso Danés",             precio: 125, descripcion: "", icono: "🥐" },
      { nombre: "Pan de Jamón y Queso",            precio: 65,  descripcion: "", icono: "🥐" },
      { nombre: "Pan Jamón y Mantequilla",         precio: 50,  descripcion: "", icono: "🥐" },
      { nombre: "Pan Queso y Mantequilla",         precio: 50,  descripcion: "", icono: "🥐" },
      { nombre: "Jamón",                           precio: 50,  descripcion: "", icono: "🥐" },
      { nombre: "Queso",                           precio: 50,  descripcion: "", icono: "🥐" },
      { nombre: "Derretido en Pan de Agua",        precio: 70,  descripcion: "", icono: "🥐" },
      { nombre: "Completo en Pan de Agua",         precio: 90,  descripcion: "", icono: "🥐" },
      { nombre: "Pan Especial",                    precio: 150, descripcion: "", icono: "🥐" },
    ],
  },

  {
    categoria: "🥤 Jugos",
    productos: [
      { nombre: "Jugo de Avena Grande",          precio: 70,  descripcion: "", icono: "🥤" },
      { nombre: "Jugo de Avena Pequeño",         precio: 60,  descripcion: "", icono: "🥤" },
      { nombre: "Avena con Leche",               precio: 100, descripcion: "", icono: "🥤" },
      { nombre: "Jugo de Cereza Grande",         precio: 70,  descripcion: "", icono: "🥤" },
      { nombre: "Jugo de Cereza Pequeño",        precio: 60,  descripcion: "", icono: "🥤" },
      { nombre: "Jugo de Chinola Grande",        precio: 70,  descripcion: "", icono: "🥤" },
      { nombre: "Jugo de Chinola Pequeño",       precio: 60,  descripcion: "", icono: "🥤" },
      { nombre: "Jugo de Granadillo Grande",     precio: 70,  descripcion: "", icono: "🥤" },
      { nombre: "Jugo de Granadillo Pequeño",    precio: 60,  descripcion: "", icono: "🥤" },
      { nombre: "Jugo de Guanábana Grande",      precio: 70,  descripcion: "", icono: "🥤" },
      { nombre: "Jugo de Guanábana Pequeño",     precio: 60,  descripcion: "", icono: "🥤" },
      { nombre: "Jugo de Guanábana con Leche",   precio: 80,  descripcion: "", icono: "🥤" },
      { nombre: "Jugo de Guayaba Grande",        precio: 70,  descripcion: "", icono: "🥤" },
      { nombre: "Jugo de Guayaba Pequeño",       precio: 60,  descripcion: "", icono: "🥤" },
      { nombre: "Jugo de Limón Grande",          precio: 70,  descripcion: "", icono: "🥤" },
      { nombre: "Jugo de Limón Pequeño",         precio: 60,  descripcion: "", icono: "🥤" },
      { nombre: "Jugo de Mango Grande",          precio: 70,  descripcion: "", icono: "🥤" },
      { nombre: "Jugo de Mango Pequeño",         precio: 60,  descripcion: "", icono: "🥤" },
      { nombre: "Jugo de Mango con Leche",       precio: 80,  descripcion: "", icono: "🥤" },
      { nombre: "Jugo de Melón Grande",          precio: 70,  descripcion: "", icono: "🥤" },
      { nombre: "Jugo de Melón Pequeño",         precio: 60,  descripcion: "", icono: "🥤" },
      { nombre: "Jugo de Naranja Grande",        precio: 70,  descripcion: "", icono: "🥤" },
      { nombre: "Jugo de Naranja Pequeño",       precio: 60,  descripcion: "", icono: "🥤" },
      { nombre: "Jugo de Naranja Agria Grande",  precio: 70,  descripcion: "", icono: "🥤" },
      { nombre: "Jugo de Naranja Agria Pequeño", precio: 60,  descripcion: "", icono: "🥤" },
      { nombre: "Jugo de Piña Grande",           precio: 70,  descripcion: "", icono: "🥤" },
      { nombre: "Jugo de Piña Pequeño",          precio: 60,  descripcion: "", icono: "🥤" },
      { nombre: "Jugo de Remolacha Grande",      precio: 70,  descripcion: "", icono: "🥤" },
      { nombre: "Jugo de Remolacha Pequeño",     precio: 60,  descripcion: "", icono: "🥤" },
      { nombre: "Jugo de Sandía Grande",         precio: 70,  descripcion: "", icono: "🥤" },
      { nombre: "Jugo de Sandía Pequeño",        precio: 60,  descripcion: "", icono: "🥤" },
      { nombre: "Jugo de Tamarindo Grande",      precio: 70,  descripcion: "", icono: "🥤" },
      { nombre: "Jugo de Tamarindo Pequeño",     precio: 60,  descripcion: "", icono: "🥤" },
      { nombre: "Jugo de Zanahoria Grande",      precio: 70,  descripcion: "", icono: "🥤" },
      { nombre: "Jugo de Zanahoria Pequeño",     precio: 60,  descripcion: "", icono: "🥤" },
    ],
  },

  {
    categoria: "🧋 Batidas",
    productos: [
      { nombre: "Batida de Guineo",  precio: 125, descripcion: "", icono: "🧋" },
      { nombre: "Batida de Lechosa", precio: 125, descripcion: "", icono: "🧋" },
      { nombre: "Batida de Mango",   precio: 125, descripcion: "", icono: "🧋" },
      { nombre: "Batida de Piña",    precio: 125, descripcion: "", icono: "🧋" },
      { nombre: "Batida de Fresa",   precio: 150, descripcion: "", icono: "🧋" },
      { nombre: "Batida de Zapote",  precio: 150, descripcion: "", icono: "🧋" },
    ],
  },

  {
    categoria: "🥛 Leches",
    productos: [
      { nombre: "Leche Blanca Grande",   precio: 60, descripcion: "", icono: "🥛" },
      { nombre: "Leche Blanca Pequeña",  precio: 25, descripcion: "", icono: "🥛" },
      { nombre: "Leche con Cocoa Grande",  precio: 60, descripcion: "", icono: "🥛" },
      { nombre: "Leche con Cocoa Pequeño", precio: 30, descripcion: "", icono: "🥛" },
    ],
  },

  {
    categoria: "🧃 Refrescos y Agua",
    productos: [
      { nombre: "Refresco Coca Cola", precio: 30, descripcion: "", icono: "🧃" },
      { nombre: "Refresco Pepsi",     precio: 25, descripcion: "", icono: "🧃" },
      { nombre: "Agua",               precio: 15, descripcion: "", icono: "💧" },
    ],
  },

];
