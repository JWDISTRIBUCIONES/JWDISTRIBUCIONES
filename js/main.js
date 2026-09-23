const products = [
  // --- LÍNEA AMINOKER (NUEVA IMAGEN 21) ---
  {
    name: "Kit Aminoker Profesional 2.000 ml (Shampoo + Alisador + Sellante)",
    cat: "Keratinas",
    img: "imagen21.jpeg",
    desc: "Tratamiento alisador capilar de 2 Litros. Paso 1 Shampoo (dilata cutícula), Paso 2 Alisador con aminoácidos y proteínas (libre de formol e hidróxido de sodio) y Paso 3 Sellante hidratante."
  },
  {
    name: "Kit Aminoker Sachet Paso 1, 2 y 3 (70ml / 90ml / 90ml)",
    cat: "Keratinas",
    img: "imagen15.jpeg",
    desc: "Aminoácido + Keratina en sachet. Alisado profesional libre de formaldehído e hidróxido de sodio. Incluye Shampoo Dilatador, Aminoácido Keratina y Mascarilla Sellante."
  },
  {
    name: "Kit Aminoker Profesional Paso 1, 2 y 3 (1.000 ml)",
    cat: "Keratinas",
    img: "imagen16.jpeg",
    desc: "Formato profesional de 1 litro. Alisado con ácidos, aminoácidos y proteínas que hidratan y alisan todo tipo de cabello."
  },

  // --- LÍNEA ACEITES Y SERUMS (NUEVA IMAGEN 19) ---
  {
    name: "Kerasolis Serum Nutritivo 10 Óleos (60 ml)",
    cat: "Aceites",
    img: "imagen19.jpg",
    desc: "Exclusiva mezcla de 10 aceites naturales: Argán, Macadamia, Aguacate, Coco, Almendras, Oliva, Ricino, Semilla de Uva, Linaza y Nutrición Intensa."
  },
  {
    name: "Aceite Capilar Cebolla & Romero Nutribell",
    cat: "Aceites",
    img: "imagen0.jpeg",
    desc: "Fortalece, regenera, aporta brillo, suavidad y controla el frizz."
  },
  {
    name: "Aceite Capilar Argán Nutribell",
    cat: "Aceites",
    img: "imagen0.jpeg",
    desc: "Hidrata, regenera y repara puntas abiertas retrasando el envejecimiento capilar."
  },

  // --- LÍNEA BOMBONERAS Y TRATAMIENTOS (NUEVAS IMÁGENES 18 Y 17) ---
  {
    name: "Bombonera Kerasolis Bomba Rizos Activos 3 en 1 (3.200 ml)",
    cat: "Bomboneras",
    img: "imagen18.jpeg",
    desc: "Acondicionador, tratamiento y crema de peinar especializada para todo tipo de ondulación. Con Aceite de Aguacate, Aloe Vera y Linaza. Nutre, hidrata y define los rizos."
  },
  {
    name: "Bomboneras Kerasolis Tratamientos Capilares Variedades (3.200 ml)",
    cat: "Bomboneras",
    img: "imagen17.jpeg",
    desc: "Línea completa de mascarillas de 3.200 ml disponibles en: Óleo de Argán, Cebolla, Keratina, Coco, Aguacate y Barro con Karité."
  },
  {
    name: "Bombonera Células Madres & Aminoácidos (3.500 ml)",
    cat: "Bomboneras",
    img: "imagen0.jpeg",
    desc: "Tratamiento profesional para reparar profundamente el cabello maltratado por procesos químicos. Rellena la fibra capilar y aporta elasticidad."
  },

  // --- SHOTS Y AMPOLLAS FARMA BELLEZA ---
  {
    name: "Shots Farma Belleza - Aminoácidos Reconstructores (20 ml)",
    cat: "Ampollas",
    img: "imagen8.jpeg",
    desc: "Reconstruye la fibra capilar desde la primera aplicación. Fortalece el cabello dañado por procesos químicos o calor aportando brillo instantáneo."
  },
  {
    name: "Shots Farma Belleza - Cubre Canas (20 ml)",
    cat: "Ampollas",
    img: "imagen9.jpeg",
    desc: "Disimula las canas de manera natural logrando un color uniforme, fórmula ligera sin apelmazar ni dejar sensación grasa."
  },
  {
    name: "Shots Farma Belleza - Ácido Hialurónico (20 ml)",
    cat: "Ampollas",
    img: "imagen10.jpeg",
    desc: "Hidratación profunda que retiene la humedad, regenera la fibra dañada y devuelve la elasticidad al cabello."
  },
  {
    name: "Shots Farma Belleza - Semillas de Lino (20 ml)",
    cat: "Ampollas",
    img: "imagen11.jpeg",
    desc: "Nutrición profunda rica en ácidos grasos esenciales. Aporta elasticidad, suavidad y protección contra agentes externos."
  },
  {
    name: "Shots Farma Belleza - Minoxidil Tónico Capilar (20 ml)",
    cat: "Ampollas",
    img: "imagen14.jpeg",
    desc: "Con Oxothiazolidinecarboxylate. Frena la caída, activa la circulación del cuero cabelludo y estimula el crecimiento."
  },
  {
    name: "Ampolla Kerasol-liss Seda Hidrolizada Termoprotección (20 ml)",
    cat: "Ampollas",
    img: "imagen12.jpeg",
    desc: "Bioreparadora ultra con seda hidrolizada. Protege contra el calor de planchas y secadores aportando brillo radiante."
  },
  {
    name: "Ampolla Kerasol-liss Murumuru & Semilla de Lino (20 ml)",
    cat: "Ampollas",
    img: "imagen13.jpeg",
    desc: "Nutrición e hidratación sin pesadez. Restaura el cabello desde adentro devolviendo la luminosidad instantánea."
  },
  {
    name: "Ampolla Pearl Collection Placenta de Ovejo & Aceite de Coco (12 ml)",
    cat: "Ampollas",
    img: "imagen5.jpeg",
    desc: "Nutrición e hidratación intensa con placenta de ovejo. Actúa como un escudo protector contra la resequedad y el frizz."
  },

  // --- TRATAMIENTOS Y COLORACIÓN ---
  {
    name: "Tratamiento Tono sobre Tono (Caja x 24 Sachets 30ml)",
    cat: "Tratamientos",
    img: "imagen0.jpeg",
    desc: "Aporta hidratación y brillo. Protege e intensifica el color del cabello tinturado. Disponibles en Cenizo, Chocolate, Rojo, Beige Perla y Negro."
  },
  {
    name: "Shampoo + Tratamiento Repolarizador Zanahoria & Aguacate (1000ml)",
    cat: "Tratamientos",
    img: "imagen0.jpeg",
    desc: "Estimula el cuero cabelludo, nutre, combate la resequedad y puntas abiertas. Elaborado con jojoba, otoba y aceites naturales. 100% Natural."
  },
  {
    name: "Shampoo + Tratamiento Nutritivo Banano & Miel (1000ml)",
    cat: "Tratamientos",
    img: "imagen0.jpeg",
    desc: "Explosión de vitaminas capilar a base de colágeno, keratina, células madres, aloe vera, placenta, miel, biotina y argán."
  },
  {
    name: "Decolorante en Polvo Perfect Blond Belotti (450g)",
    cat: "Coloracion",
    img: "imagen0.jpeg",
    desc: "Polvo decolorante blanco con alto poder de aclaración. Mantiene la suavidad del cabello."
  },
  {
    name: "Tinte Profesional Very Secret Colores & Sensaciones (Tubo 100 ml)",
    cat: "Coloracion",
    img: "imagen0.jpeg",
    desc: "Formulado en Italia. Excelente cobertura, tonos brillantes y duraderos. Variedad de tonos naturales, rubios y fantasía."
  }
];

let selectedCategory = 'Todos';

const nav = document.getElementById('nav');
const menu = document.getElementById('menu');
const searchInput = document.getElementById('search');
const productsGrid = document.getElementById('products');

if (menu) {
  menu.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('open');
    menu.setAttribute('aria-expanded', isOpen);
  });
}

if (nav) {
  nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    nav.classList.remove('open');
    if (menu) menu.setAttribute('aria-expanded', 'false');
  }));
}

window.addEventListener('scroll', () => {
  const h = document.documentElement;
  const pct = (h.scrollTop / (h.scrollHeight - h.clientHeight)) * 100;
  const progress = document.getElementById('progress');
  if (progress) progress.style.width = pct + '%';
});

document.querySelectorAll('.filter').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.filter').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    selectedCategory = btn.dataset.cat;
    renderProducts();
  });
});

if (searchInput) searchInput.addEventListener('input', renderProducts);

function renderProducts() {
  const q = searchInput ? searchInput.value.toLowerCase().trim() : '';
  const filtered = products.filter(p => {
    const matchesCategory = (selectedCategory === 'Todos' || p.cat === selectedCategory);
    const matchesSearch = (p.name + ' ' + p.desc + ' ' + p.cat).toLowerCase().includes(q);
    return matchesCategory && matchesSearch;
  });

  if (!productsGrid) return;

  if (filtered.length === 0) {
    productsGrid.innerHTML = '<div style="grid-column:1/-1;text-align:center;padding:60px 20px;color:#888;">No se encontraron productos que coincidan con la búsqueda.</div>';
    return;
  }

  productsGrid.innerHTML = filtered.map(p => {
    const waUrl = `https://wa.me/573046573720?text=${encodeURIComponent('Hola JW Distribuciones, quiero consultar precio e información sobre: ' + p.name)}`;
    return `
      <article class="card">
        <div class="card-visual">
          <img src="${p.img}" alt="${p.name}" loading="lazy">
        </div>
        <div class="card-body">
          <span class="tag">${p.cat}</span>
          <h3>${p.name}</h3>
          <p>${p.desc}</p>
          <a class="card-link" href="${waUrl}" target="_blank" rel="noopener">
            <i class="fa-brands fa-whatsapp"></i> Consultar por WhatsApp <span>→</span>
          </a>
        </div>
      </article>
    `;
  }).join('');
}

renderProducts();
