// --- CATÁLOGO DE PRODUCTOS ---
const products = [
  // --- LÍNEA AMINOKER ---
  {
    id: 1,
    name: "Kit Aminoker Profesional 2.000 ml (Shampoo + Alisador + Sellante)",
    cat: "AMINOKER",
    img: "imagen21.jpeg",
    desc: "Tratamiento alisador capilar de 2 Litros. Paso 1 Shampoo (dilata cutícula), Paso 2 Alisador con aminoácidos y proteínas (libre de formol e hidróxido de sodio) y Paso 3 Sellante hidratante."
  },
  {
    id: 2,
    name: "Kit Aminoker Profesional Paso 1, 2 y 3 (1.000 ml)",
    cat: "AMINOKER",
    img: "imagen16.jpeg",
    desc: "Formato profesional de 1 litro. Alisado con ácidos, aminoácidos y proteínas que hidratan y alisan todo tipo de cabello."
  },
  {
    id: 3,
    name: "Kit Aminoker Sachet Paso 1, 2 y 3 (70ml / 90ml / 90ml)",
    cat: "AMINOKER",
    img: "imagen15.jpeg",
    desc: "Aminoácido + AMINOKER en sachet. Alisado profesional libre de formaldehído e hidróxido de sodio. Incluye Shampoo Dilatador, Aminoácido AMINOKER y Mascarilla Sellante."
  },

  // --- LÍNEA ADARA ---
  {
    id: 26,
    name: "Shampoo Adara Vinagre Capilar Frutos Rojos (300 ml)",
    cat: "Adara",
    img: "video2 (16).jpeg",
    desc: "Shampoo de uso diario a partir de 3 años. SIN SAL, SIN SULFATOS y SIN PARABENOS. Con Ácido Láctico y Vinagre de Frutos Rojos. Elimina la caspa, neutraliza olores, controla el pH y fortalece el cabello."
  },
  {
    id: 27,
    name: "Tratamiento 2 en 1 Adara Vinagre Capilar (300 ml)",
    cat: "Adara",
    img: "video2 (16).jpeg",
    desc: "Repolarizador y Termoprotector 2 en 1. Controla y neutraliza el pH del cuero cabelludo. Protege contra el calor de secadores/planchas, previene la caída y promueve el crecimiento."
  },
  {
    id: 28,
    name: "Dúo Kit Adara Vinagre Capilar (Shampoo + Tratamiento 300ml)",
    cat: "Adara",
    img: "video2 (16).jpeg",
    desc: "Kit completo Adara Luz de tu Belleza. Incluye Shampoo de uso diario y Tratamiento 2 en 1. Fórmula natural con Ácido Láctico y Frutos Rojos para cuidado integral capilar."
  },

  // --- LÍNEA JW ---
  {
    id: 29,
    name: "Tratamiento Capilar Keratina Líquida JW (500 ml)",
    cat: "Linea JW",
    img: "imagen0.jpeg",
    desc: "Fórmula exclusiva JW Distribuciones. Restaura la fibra capilar maltratada, controla el encrespamiento y devuelve el brillo natural con aminoácidos concentrados."
  },
  {
    id: 30,
    name: "Mascarilla Capilar Nutritiva e Hidratante JW (1.000 ml)",
    cat: "Linea JW",
    img: "imagen0.jpeg",
    desc: "Tratamiento intensivo con óleos finos y proteínas. Rellena la hebra porosa dejando el cabello suave, manejable y totalmente protegido."
  },
  {
    id: 31,
    name: "Gotas de Brillo & Termoprotección JW (120 ml)",
    cat: "Linea JW",
    img: "imagen0.jpeg",
    desc: "Protege contra las altas temperaturas de planchas y secadores. Sella las puntas abiertas dando un acabado sedoso y con brillo espejo."
  },

  // --- ACEITES ---
  {
    id: 4,
    name: "Kerasolis Serum Nutritivo 10 Óleos (60 ml)",
    cat: "Aceites",
    img: "imagen19.jpeg",
    desc: "Exclusiva mezcla de 10 aceites naturales: Argán, Macadamia, Aguacate, Coco, Almendras, Oliva, Ricino, Semilla de Uva, Linaza y Nutrición Intensa."
  },
  {
    id: 5,
    name: "Aceite Capilar Cebolla & Romero Nutribell",
    cat: "Aceites",
    img: "imagen0.jpeg",
    desc: "Fortalece, regenera, aporta brillo, suavidad y controla el frizz."
  },
  {
    id: 6,
    name: "Aceite Capilar Argán Nutribell",
    cat: "Aceites",
    img: "imagen0.jpeg",
    desc: "Hidrata, regenera y repara puntas abiertas retrasando el envejecimiento capilar."
  },

  // --- BOMBONERAS ---
  {
    id: 7,
    name: "Bombonera Kerasolis Bomba Rizos Activos 3 en 1 (3.200 ml)",
    cat: "Bomboneras",
    img: "imagen18.jpeg",
    desc: "Acondicionador, tratamiento y crema de peinar especializada para todo tipo de ondulación. Con Aceite de Aguacate, Aloe Vera y Linaza. Nutre, hidrata y define los rizos."
  },
  {
    id: 8,
    name: "Bomboneras Kerasolis Tratamientos Capilares Variedades (3.200 ml)",
    cat: "Bomboneras",
    img: "imagen17.jpeg",
    desc: "Línea completa de mascarillas de 3.200 ml disponibles en: Óleo de Argán, Cebolla, AMINOKER, Coco, Aguacate y Barro con Karité."
  },
  {
    id: 9,
    name: "Bombonera Células Madres & Aminoácidos (3.500 ml)",
    cat: "Bomboneras",
    img: "imagen0.jpeg",
    desc: "Tratamiento profesional para reparar profundamente el cabello maltratado por procesos químicos. Rellena la fibra capilar y aporta elasticidad."
  },
  {
    id: 10,
    name: "Bombonera Cebolla & Jengibre (3.500 ml)",
    cat: "Bomboneras",
    img: "imagen0.jpeg",
    desc: "Evita la caída del cabello, fortalece el folículo piloso y estimula el crecimiento con acción antiedad."
  },

  // --- AMPOLLAS ---
  {
    id: 11,
    name: "Shots Farma Belleza - Aminoácidos Reconstructores (20 ml)",
    cat: "Ampollas",
    img: "imagen8.jpeg",
    desc: "Reconstruye la fibra capilar desde la primera aplicación. Fortalece el cabello dañado por procesos químicos o calor aportando brillo instantáneo."
  },
  {
    id: 12,
    name: "Shots Farma Belleza - Cubre Canas (20 ml)",
    cat: "Ampollas",
    img: "imagen9.jpeg",
    desc: "Disimula las canas de manera natural logrando un color uniforme, fórmula ligera sin apelmazar ni dejar sensación grasa."
  },
  {
    id: 13,
    name: "Shots Farma Belleza - Ácido Hialurónico (20 ml)",
    cat: "Ampollas",
    img: "imagen10.jpeg",
    desc: "Hidratación profunda que retiene la humedad, regenera la fibra dañada y devuelve la elasticidad al cabello."
  },
  {
    id: 14,
    name: "Shots Farma Belleza - Semillas de Lino (20 ml)",
    cat: "Ampollas",
    img: "imagen11.jpeg",
    desc: "Nutrición profunda rica en ácidos grasos esenciales. Aporta elasticidad, suavidad y protección contra agentes externos."
  },
  {
    id: 15,
    name: "Shots Farma Belleza - Minoxidil Tónico Capilar (20 ml)",
    cat: "Ampollas",
    img: "imagen14.jpeg",
    desc: "Con Oxothiazolidinecarboxylate. Frena la caída, activa la circulación del cuero cabelludo y estimula el crecimiento."
  },
  {
    id: 16,
    name: "Ampolla Kerasol-liss Seda Hidrolizada Termoprotección (20 ml)",
    cat: "Ampollas",
    img: "imagen12.jpeg",
    desc: "Bioreparadora ultra con seda hidrolizada. Protege contra el calor de planchas y secadores aportando brillo radiante."
  },
  {
    id: 17,
    name: "Ampolla Kerasol-liss Murumuru & Semilla de Lino (20 ml)",
    cat: "Ampollas",
    img: "imagen13.jpeg",
    desc: "Nutrición e hidratación sin pesadez. Restaura el cabello desde adentro devolviendo la luminosidad instantánea."
  },
  {
    id: 18,
    name: "Ampolla Pearl Collection Placenta de Ovejo & Aceite de Coco (12 ml)",
    cat: "Ampollas",
    img: "imagen5.jpeg",
    desc: "Nutrición e hidratación intensa con placenta de ovejo. Actúa como un escudo protector contra la resequedad y el frizz."
  },

  // --- TRATAMIENTOS ---
  {
    id: 19,
    name: "Tratamiento Tono sobre Tono (Caja x 24 Sachets 30ml)",
    cat: "Tratamientos",
    img: "imagen0.jpeg",
    desc: "Aporta hidratación y brillo. Protege e intensifica el color del cabello tinturado. Disponibles en Cenizo, Chocolate, Rojo, Beige Perla y Negro."
  },
  {
    id: 20,
    name: "Shampoo + Tratamiento Repolarizador Zanahoria & Aguacate (1000ml)",
    cat: "Tratamientos",
    img: "imagen0.jpeg",
    desc: "Estimula el cuero cabelludo, nutre, combate la resequedad y puntas abiertas. Elaborado con jojoba, otoba y aceites naturales. 100% Natural."
  },
  {
    id: 21,
    name: "Shampoo + Tratamiento Nutritivo Banano & Miel (1000ml)",
    cat: "Tratamientos",
    img: "imagen0.jpeg",
    desc: "Explosión de vitaminas capilar a base de colágeno, AMINOKER, células madres, aloe vera, placenta, miel, biotina y argán."
  },
  {
    id: 22,
    name: "Shampoo + Tratamiento Reparador Coco & Argán (1000ml)",
    cat: "Tratamientos",
    img: "imagen0.jpeg",
    desc: "A base de coco, argán y leche de almendras. Nutrición, brillo y estímulo para el crecimiento capilar."
  },
  {
    id: 23,
    name: "Shampoo + Tratamiento Hidratante Células Madres (1000ml)",
    cat: "Tratamientos",
    img: "imagen0.jpeg",
    desc: "Limpia, suaviza y restaura daños ocasionados por agentes externos con aloe vera y aguacate."
  },

  // --- COLORACIÓN ---
  {
    id: 24,
    name: "Decolorante en Polvo Perfect Blond Belotti (450g)",
    cat: "Coloracion",
    img: "imagen0.jpeg",
    desc: "Polvo decolorante blanco con alto poder de aclaración. Mantiene la suavidad del cabello."
  },
  {
    id: 25,
    name: "Tinte Profesional Very Secret Colores & Sensaciones (Tubo 100 ml)",
    cat: "Coloracion",
    img: "imagen0.jpeg",
    desc: "Formulado en Italia. Excelente cobertura, tonos brillantes y duraderos. Variedad de tonos naturales, rubios y fantasía."
  }
];

// ESTADO DE LA TIENDA
let cart = [];
let productQuantities = {};
let selectedCategory = 'AMINOKER';

products.forEach(p => { productQuantities[p.id] = 1; });

// SELECCIÓN DE ELEMENTOS DOM
const nav = document.getElementById('nav');
const menu = document.getElementById('menu');
const searchInput = document.getElementById('search');
const productsGrid = document.getElementById('products');

const cartModal = document.getElementById('cart-modal');
const openCartNav = document.getElementById('open-cart-nav');
const openCartFloat = document.getElementById('open-cart-float');
const closeCartBtn = document.getElementById('close-cart');
const cartItemsContainer = document.getElementById('cart-items-container');
const cartCountNav = document.getElementById('cart-count-nav');
const cartCountFloat = document.getElementById('cart-count-float');
const cartTotalQty = document.getElementById('cart-total-qty');
const sendWhatsappBtn = document.getElementById('send-whatsapp-order');

// DETALLE DE PRODUCTO EXPANDIBLE
let currentDetailProduct = null;
let currentDetailQty = 1;

// CAMBIO DE VISTAS EN EL MENÚ PRINCIPAL
function switchSection(targetSectionId) {
  document.querySelectorAll('.page-section').forEach(sec => sec.classList.remove('active-section'));
  document.querySelectorAll('.nav-link').forEach(link => link.classList.remove('nav-active'));

  const targetSec = document.getElementById(`section-${targetSectionId}`);
  if (targetSec) targetSec.classList.add('active-section');

  const targetLink = document.querySelector(`.nav-link[data-sec="${targetSectionId}"]`);
  if (targetLink) targetLink.classList.add('nav-active');

  if (nav) nav.classList.remove('open');
  if (menu) menu.setAttribute('aria-expanded', 'false');

  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// MENÚ MÓVIL TOGGLE
if (menu) {
  menu.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('open');
    menu.setAttribute('aria-expanded', isOpen);
  });
}

// SELECCIÓN DE BURBUJAS DE CATEGORÍA
document.querySelectorAll('.cat-circle-item').forEach(item => {
  item.addEventListener('click', () => {
    document.querySelectorAll('.cat-circle-item').forEach(c => c.classList.remove('active'));
    item.classList.add('active');
    selectedCategory = item.dataset.cat;
    renderProducts();
  });
});

if (searchInput) searchInput.addEventListener('input', renderProducts);

function adjustCatalogQty(productId, delta, event) {
  if (event) event.stopPropagation();
  if (!productQuantities[productId]) productQuantities[productId] = 1;
  productQuantities[productId] += delta;
  if (productQuantities[productId] < 1) productQuantities[productId] = 1;

  const qtyElement = document.getElementById(`catalog-qty-${productId}`);
  if (qtyElement) qtyElement.textContent = productQuantities[productId];
}

function openProductDetail(productId) {
  const product = products.find(p => p.id === productId);
  if (!product) return;

  currentDetailProduct = product;
  currentDetailQty = productQuantities[productId] || 1;

  document.getElementById('detail-img').src = product.img;
  document.getElementById('detail-cat').textContent = product.cat;
  document.getElementById('detail-title').textContent = product.name;
  document.getElementById('detail-summary-text').textContent = product.desc;
  document.getElementById('detail-accordion-desc').textContent = product.desc;
  document.getElementById('detail-qty-val').textContent = currentDetailQty;

  const modal = document.getElementById('product-detail-modal');
  if (modal) modal.classList.add('active');
}

function renderProducts() {
  const q = searchInput ? searchInput.value.toLowerCase().trim() : '';
  const filtered = products.filter(p => {
    const matchesCategory = (p.cat === selectedCategory);
    const matchesSearch = (p.name + ' ' + p.desc + ' ' + p.cat).toLowerCase().includes(q);
    return matchesCategory && matchesSearch;
  });

  if (!productsGrid) return;

  let htmlContent = '';

  // INFOGRAFÍA DESTACADA PARA LA CATEGORÍA ADARA
  if (selectedCategory === 'Adara') {
    htmlContent += `
      <article class="card adara-info-card">
        <div class="card-visual">
          <img src="video2 (16).jpeg" alt="Adara Luz de tu Belleza Infografía" loading="lazy">
        </div>
        <div class="card-body">
          <span class="tag">INFOGRAFÍA DE LÍNEA</span>
          <h3>Adara - Luz de tu Belleza</h3>
          <p>Fórmula especializada para el cuidado integral del cuero cabelludo y la fibra capilar.</p>
          <ul class="adara-bullet-list">
            <li><i class="fa-solid fa-check"></i> Uso diario desde los 3 años de edad.</li>
            <li><i class="fa-solid fa-check"></i> SIN SAL, SIN SULFATOS, SIN PARABENOS.</li>
            <li><i class="fa-solid fa-check"></i> Con Ácido Láctico (elimina la caspa grasa/seca).</li>
            <li><i class="fa-solid fa-check"></i> Con Vinagre de Frutos Rojos (neutraliza olores).</li>
            <li><i class="fa-solid fa-check"></i> Controla el pH, previene la caída y promueve el crecimiento.</li>
          </ul>
        </div>
      </article>
    `;
  }

  if (filtered.length === 0 && htmlContent === '') {
    productsGrid.innerHTML = '<div style="grid-column:1/-1;text-align:center;padding:60px 20px;color:#888;">No se encontraron productos en esta categoría.</div>';
    return;
  }

  htmlContent += filtered.map(p => {
    const qty = productQuantities[p.id] || 1;
    return `
      <article class="card" onclick="openProductDetail(${p.id})">
        <div class="card-visual">
          <img src="${p.img}" alt="${p.name}" loading="lazy">
        </div>
        <div class="card-body">
          <span class="tag">${p.cat}</span>
          <h3>${p.name}</h3>
          <p>${p.desc}</p>
          
          <div class="catalog-qty-box">
            <span class="qty-label">Cantidad a pedir:</span>
            <div class="qty-controls">
              <button onclick="adjustCatalogQty(${p.id}, -1, event)">-</button>
              <span id="catalog-qty-${p.id}">${qty}</span>
              <button onclick="adjustCatalogQty(${p.id}, 1, event)">+</button>
            </div>
          </div>

          <button class="card-link" onclick="addToCart(${p.id}, event)">
            <i class="fa-solid fa-cart-plus"></i> Agregar al Carrito
          </button>
        </div>
      </article>
    `;
  }).join('');

  productsGrid.innerHTML = htmlContent;
}

function addToCart(productId, event) {
  if (event) event.stopPropagation();
  const product = products.find(p => p.id === productId);
  if (!product) return;

  const qtyToAdd = productQuantities[productId] || 1;
  const existing = cart.find(item => item.id === productId);

  if (existing) {
    existing.qty += qtyToAdd;
  } else {
    cart.push({ ...product, qty: qtyToAdd });
  }

  productQuantities[productId] = 1;
  const qtyElement = document.getElementById(`catalog-qty-${productId}`);
  if (qtyElement) qtyElement.textContent = 1;

  updateCartUI();
  openCart();
}

function changeCartQty(productId, delta) {
  const item = cart.find(i => i.id === productId);
  if (!item) return;

  item.qty += delta;
  if (item.qty <= 0) {
    cart = cart.filter(i => i.id !== productId);
  }

  updateCartUI();
}

function removeFromCart(productId) {
  cart = cart.filter(i => i.id !== productId);
  updateCartUI();
}

function updateCartUI() {
  const totalQty = cart.reduce((sum, item) => sum + item.qty, 0);

  if (cartCountNav) cartCountNav.textContent = totalQty;
  if (cartCountFloat) cartCountFloat.textContent = totalQty;
  if (cartTotalQty) cartTotalQty.textContent = totalQty;

  if (!cartItemsContainer) return;

  if (cart.length === 0) {
    cartItemsContainer.innerHTML = '<div class="empty-cart-msg">Tu carrito está vacío.<br>Selecciona productos e indica la cantidad.</div>';
    return;
  }

  cartItemsContainer.innerHTML = cart.map(item => `
    <div class="cart-item">
      <img src="${item.img}" alt="${item.name}">
      <div class="cart-item-details">
        <h4>${item.name}</h4>
        <div class="cart-item-actions">
          <div class="qty-controls">
            <button onclick="changeCartQty(${item.id}, -1)">-</button>
            <span>${item.qty}</span>
            <button onclick="changeCartQty(${item.id}, 1)">+</button>
          </div>
          <button class="btn-remove" onclick="removeFromCart(${item.id})">
            <i class="fa-solid fa-trash-can"></i>
          </button>
        </div>
      </div>
    </div>
  `).join('');
}

function openCart() { if (cartModal) cartModal.classList.add('active'); }
function closeCart() { if (cartModal) cartModal.classList.remove('active'); }

if (openCartNav) openCartNav.addEventListener('click', openCart);
if (openCartFloat) openCartFloat.addEventListener('click', openCart);
if (closeCartBtn) closeCartBtn.addEventListener('click', closeCart);

// EVENTOS DE CONTROL DEL MODAL DETALLE
document.getElementById('close-product-detail')?.addEventListener('click', () => {
  document.getElementById('product-detail-modal')?.classList.remove('active');
});

document.getElementById('detail-qty-minus')?.addEventListener('click', () => {
  if (currentDetailQty > 1) {
    currentDetailQty--;
    document.getElementById('detail-qty-val').textContent = currentDetailQty;
  }
});

document.getElementById('detail-qty-plus')?.addEventListener('click', () => {
  currentDetailQty++;
  document.getElementById('detail-qty-val').textContent = currentDetailQty;
});

document.getElementById('detail-add-to-cart')?.addEventListener('click', () => {
  if (currentDetailProduct) {
    productQuantities[currentDetailProduct.id] = currentDetailQty;
    addToCart(currentDetailProduct.id);
    document.getElementById('product-detail-modal')?.classList.remove('active');
  }
});

if (cartModal) {
  cartModal.addEventListener('click', (e) => {
    if (e.target === cartModal) closeCart();
  });
}

if (sendWhatsappBtn) {
  sendWhatsappBtn.addEventListener('click', () => {
    if (cart.length === 0) {
      alert("Tu carrito está vacío. Agrega productos antes de enviar la orden.");
      return;
    }

    let message = "Hola JW Distribuciones, deseo solicitar los siguientes productos:\n\n";
    cart.forEach((item, idx) => {
      message += `${idx + 1}. *${item.name}* — Cantidad: ${item.qty} unidad(es)\n`;
    });

    const totalItems = cart.reduce((sum, item) => sum + item.qty, 0);
    message += `\n*Unidades Totales:* ${totalItems}\n`;
    message += "\nPor favor confírmenme disponibilidad y precio total. ¡Muchas gracias!";

    const waUrl = `https://wa.me/573046573720?text=${encodeURIComponent(message)}`;
    window.open(waUrl, '_blank');
  });
}

renderProducts();
updateCartUI();
