```javascript
/* =========================================================
   JW DISTRIBUCIONES
   CATÁLOGO DIGITAL
========================================================= */

const WHATSAPP_NUMBER = "573046573720";

const products = [

  /* =========================
     AMINOKER
  ========================= */

  {
    name: "Kit Aminoker Sachet Paso 1, 2 y 3",
    presentation: "70 ml / 90 ml / 90 ml",
    cat: "Aminoker",
    img: "imagen15.jpeg",
    desc: "Sistema profesional Aminoker en sachet. Incluye Shampoo Dilatador, Aminoácido + Keratina y Mascarilla Sellante.",
    availableImage: true
  },

  {
    name: "Kit Aminoker Profesional Paso 1, 2 y 3",
    presentation: "1.000 ml",
    cat: "Aminoker",
    img: "imagen16.jpeg",
    desc: "Sistema profesional Aminoker con ácidos, aminoácidos y proteínas para el cuidado y transformación del cabello.",
    availableImage: true
  },


  /* =========================
     AMPOLLAS
  ========================= */

  {
    name: "Shots Farma Belleza - Aminoácidos Reconstructores",
    presentation: "20 ml",
    cat: "Ampollas",
    img: "imagen8.jpeg",
    desc: "Tratamiento reconstructivo para cabello debilitado por procesos químicos, calor y factores externos.",
    availableImage: true
  },

  {
    name: "Shots Farma Belleza - Cubre Canas",
    presentation: "20 ml",
    cat: "Ampollas",
    img: "imagen9.jpeg",
    desc: "Producto diseñado para ayudar a disimular las canas y mejorar la apariencia uniforme del cabello.",
    availableImage: true
  },

  {
    name: "Shots Farma Belleza - Ácido Hialurónico",
    presentation: "20 ml",
    cat: "Ampollas",
    img: "imagen10.jpeg",
    desc: "Fórmula enfocada en hidratación y cuidado de la fibra capilar.",
    availableImage: true
  },

  {
    name: "Shots Farma Belleza - Semillas de Lino",
    presentation: "20 ml",
    cat: "Ampollas",
    img: "imagen11.jpeg",
    desc: "Tratamiento nutritivo para aportar suavidad, elasticidad y cuidado al cabello.",
    availableImage: true
  },

  {
    name: "Shots Farma Belleza - Minoxidil Tónico Capilar",
    presentation: "20 ml",
    cat: "Ampollas",
    img: "imagen14.jpeg",
    desc: "Tónico capilar con Oxothiazolidinecarboxylate para el cuidado del cuero cabelludo y cabello.",
    availableImage: true
  },

  {
    name: "Ampolla Kerasol-liss Seda Hidrolizada Termoprotección",
    presentation: "20 ml",
    cat: "Ampollas",
    img: "imagen12.jpeg",
    desc: "Tratamiento con seda hidrolizada para el cuidado del cabello expuesto a herramientas térmicas.",
    availableImage: true
  },

  {
    name: "Ampolla Kerasol-liss Murumuru & Semilla de Lino",
    presentation: "20 ml",
    cat: "Ampollas",
    img: "imagen13.jpeg",
    desc: "Fórmula nutritiva e hidratante para ayudar a mejorar la apariencia y suavidad del cabello.",
    availableImage: true
  },

  {
    name: "Ampolla Pearl Collection Placenta de Ovejo & Aceite de Coco",
    presentation: "12 ml",
    cat: "Ampollas",
    img: "imagen5.jpeg",
    desc: "Tratamiento nutritivo e hidratante con ingredientes destinados al cuidado de la fibra capilar.",
    availableImage: true
  },


  /* =========================
     TRATAMIENTOS
  ========================= */

  {
    name: "Tratamiento Tono sobre Tono",
    presentation: "Caja x 24 Sachets de 30 ml",
    cat: "Tratamientos",
    desc: "Tratamiento para aportar brillo, hidratación y realce visual del color del cabello. Disponible en diferentes tonos.",
    availableImage: false
  },

  {
    name: "Shampoo + Tratamiento Repolarizador Zanahoria & Aguacate",
    presentation: "1.000 ml",
    cat: "Tratamientos",
    desc: "Línea nutritiva para el cuidado del cabello y cuero cabelludo con ingredientes de origen natural.",
    availableImage: false
  },

  {
    name: "Shampoo + Tratamiento Nutritivo Banano & Miel",
    presentation: "1.000 ml",
    cat: "Tratamientos",
    desc: "Tratamiento nutritivo con una combinación de ingredientes destinados al cuidado y acondicionamiento capilar.",
    availableImage: false
  },

  {
    name: "Shampoo + Tratamiento Reparador Coco & Argán",
    presentation: "1.000 ml",
    cat: "Tratamientos",
    desc: "Fórmula con coco, argán y leche de almendras para el cuidado, nutrición y brillo del cabello.",
    availableImage: false
  },

  {
    name: "Shampoo + Tratamiento Hidratante Células Madres",
    presentation: "1.000 ml",
    cat: "Tratamientos",
    desc: "Tratamiento hidratante para limpiar, suavizar y cuidar el cabello expuesto a factores externos.",
    availableImage: false
  },


  /* =========================
     BOMBONERAS
  ========================= */

  {
    name: "Bombonera Células Madres & Aminoácidos",
    presentation: "3.500 ml",
    cat: "Bomboneras",
    desc: "Tratamiento profesional de gran formato para el cuidado intensivo del cabello.",
    availableImage: false
  },

  {
    name: "Bombonera Cebolla & Jengibre",
    presentation: "3.500 ml",
    cat: "Bomboneras",
    desc: "Tratamiento profesional de gran formato orientado al cuidado y fortalecimiento capilar.",
    availableImage: false
  },


  /* =========================
     ACEITES
  ========================= */

  {
    name: "Aceite Capilar Cebolla & Romero Nutribell",
    presentation: "Presentación profesional",
    cat: "Aceites",
    desc: "Aceite capilar para complementar la rutina de cuidado, nutrición y brillo del cabello.",
    availableImage: false
  },

  {
    name: "Aceite Capilar Argán Nutribell",
    presentation: "Presentación profesional",
    cat: "Aceites",
    desc: "Aceite capilar con argán destinado al cuidado, hidratación y apariencia saludable del cabello.",
    availableImage: false
  },


  /* =========================
     COLORACIÓN
  ========================= */

  {
    name: "Decolorante en Polvo Perfect Blond Belotti",
    presentation: "450 g",
    cat: "Coloracion",
    desc: "Polvo decolorante profesional para procesos de aclaración del cabello.",
    availableImage: false
  },

  {
    name: "Tinte Profesional Very Secret Colores & Sensaciones",
    presentation: "Tubo de 100 ml",
    cat: "Coloracion",
    desc: "Coloración profesional formulada para ofrecer diferentes tonalidades y opciones de color.",
    availableImage: false
  }

];


/* =========================================================
   ESTADO
========================================================= */

let selectedCategory = "Todos";


/* =========================================================
   ELEMENTOS
========================================================= */

const nav = document.getElementById("nav");
const menu = document.getElementById("menu");
const searchInput = document.getElementById("search");
const productsGrid = document.getElementById("products");
const progress = document.getElementById("progress");
const header = document.getElementById("header");
const clearSearch = document.getElementById("clearSearch");
const catalogStatus = document.getElementById("catalogStatus");


/* =========================================================
   MENÚ MOBILE
========================================================= */

if (menu && nav) {

  menu.addEventListener("click", () => {

    const isOpen =
      nav.classList.toggle("open");

    menu.setAttribute(
      "aria-expanded",
      isOpen
    );

  });

}


if (nav) {

  nav.querySelectorAll("a").forEach(link => {

    link.addEventListener("click", () => {

      nav.classList.remove("open");

      if (menu) {
        menu.setAttribute(
          "aria-expanded",
          "false"
        );
      }

    });

  });

}


/* =========================================================
   SCROLL
========================================================= */

window.addEventListener(
  "scroll",
  () => {

    if (header) {

      header.classList.toggle(
        "scrolled",
        window.scrollY > 30
      );

    }

    if (progress) {

      const documentHeight =
        document.documentElement.scrollHeight;

      const windowHeight =
        document.documentElement.clientHeight;

      const scrollTop =
        document.documentElement.scrollTop;

      const maxScroll =
        documentHeight - windowHeight;

      const percentage =
        maxScroll > 0
          ? (scrollTop / maxScroll) * 100
          : 0;

      progress.style.width =
        percentage + "%";

    }

  },
  { passive: true }
);


/* =========================================================
   FILTROS
========================================================= */

document
  .querySelectorAll(".filter")
  .forEach(button => {

    button.addEventListener(
      "click",
      () => {

        document
          .querySelectorAll(".filter")
          .forEach(btn =>
            btn.classList.remove("active")
          );

        button.classList.add("active");

        selectedCategory =
          button.dataset.cat;

        renderProducts();

      }
    );

  });


/* =========================================================
   BUSCADOR
========================================================= */

if (searchInput) {

  searchInput.addEventListener(
    "input",
    () => {

      updateClearButton();

      renderProducts();

    }
  );

}


if (clearSearch) {

  clearSearch.addEventListener(
    "click",
    () => {

      searchInput.value = "";

      updateClearButton();

      renderProducts();

      searchInput.focus();

    }
  );

}


function updateClearButton() {

  if (!clearSearch || !searchInput) {
    return;
  }

  clearSearch.classList.toggle(
    "visible",
    searchInput.value.trim().length > 0
  );

}


/* =========================================================
   WHATSAPP
========================================================= */

function createWhatsAppUrl(productName) {

  const message =
    `Hola JW Distribuciones, quiero consultar precio, disponibilidad e información sobre: ${productName}`;

  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

}


/* =========================================================
   TARJETA SIN FOTO
========================================================= */

function createNoImage() {

  return `
    <div class="no-image">

      <div class="no-image-icon">
        <i class="fa-solid fa-image"></i>
      </div>

      <strong>Fotografía próximamente</strong>

      <span>
        Consulta disponibilidad por WhatsApp
      </span>

    </div>
  `;

}


/* =========================================================
   TARJETA DE PRODUCTO
========================================================= */

function createProductCard(product) {

  const whatsappUrl =
    createWhatsAppUrl(product.name);

  const imageHTML =
    product.availableImage && product.img
      ? `
        <img
          src="${product.img}"
          alt="${product.name}"
          loading="lazy"
          onerror="this.parentElement.innerHTML = '${createNoImage().replace(/'/g, "\\'")}'"
        >
      `
      : createNoImage();

  return `
    <article class="card">

      <div class="card-visual">

        ${imageHTML}

      </div>

      <div class="card-body">

        <span class="tag">
          ${product.cat}
        </span>

        <h3>
          ${product.name}
        </h3>

        <p class="presentation">
          <strong>${product.presentation || ""}</strong>
        </p>

        <p>
          ${product.desc}
        </p>

        <a
          class="card-link"
          href="${whatsappUrl}"
          target="_blank"
          rel="noopener"
        >
          <i class="fa-brands fa-whatsapp"></i>

          Consultar por WhatsApp

          <span>→</span>

        </a>

      </div>

    </article>
  `;

}


/* =========================================================
   RENDER PRODUCTOS
========================================================= */

function renderProducts() {

  if (!productsGrid) {
    return;
  }

  const query =
    searchInput
      ? searchInput.value
          .toLowerCase()
          .trim()
      : "";


  const filtered =
    products.filter(product => {

      const matchesCategory =
        selectedCategory === "Todos" ||
        product.cat === selectedCategory;

      const searchableText =
        [
          product.name,
          product.presentation,
          product.desc,
          product.cat
        ]
          .join(" ")
          .toLowerCase();

      const matchesSearch =
        searchableText.includes(query);

      return (
        matchesCategory &&
        matchesSearch
      );

    });


  /* =========================
     ESTADO VACÍO
  ========================= */

  if (filtered.length === 0) {

    productsGrid.innerHTML = `
      <div
        style="
          grid-column:1/-1;
          text-align:center;
          padding:80px 20px;
        "
      >

        <div
          style="
            width:70px;
            height:70px;
            border:1px solid rgba(215,173,75,.4);
            border-radius:50%;
            display:grid;
            place-items:center;
            margin:0 auto 20px;
            color:#f4d986;
            font-size:1.4rem;
          "
        >
          <i class="fa-solid fa-magnifying-glass"></i>
        </div>

        <h3
          style="
            font-family:'Playfair Display',serif;
            font-size:1.5rem;
            margin-bottom:10px;
          "
        >
          No encontramos ese producto
        </h3>

        <p
          style="
            color:#777;
            font-size:.85rem;
          "
        >
          Intenta con otro nombre, categoría o ingrediente.
        </p>

      </div>
    `;

  } else {

    productsGrid.innerHTML =
      filtered
        .map(createProductCard)
        .join("");

  }


  /* =========================
     CONTADOR
  ========================= */

  if (catalogStatus) {

    const total =
      filtered.length;

    catalogStatus.textContent =
      `${total} producto${total !== 1 ? "s" : ""} disponible${total !== 1 ? "s" : ""} en el catálogo`;

  }

}


/* =========================================================
   INICIO
========================================================= */

updateClearButton();

renderProducts();
```
