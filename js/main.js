const products = [
  {name: "Kit Aminoker Sachet Paso 1, 2 y 3 (70ml / 90ml / 90ml)", cat: "Keratinas", img: "imagen15.jpeg", desc: "Aminoácido + Keratina en sachet. Alisado profesional libre de formaldehído e hidróxido de sodio."},
  {name: "Kit Aminoker Profesional Paso 1, 2 y 3 (1.000 ml)", cat: "Keratinas", img: "imagen16.jpeg", desc: "Formato profesional de 1 litro. Alisado con ácidos, aminoácidos y proteínas."},
  {name: "Shots Farma Belleza - Aminoácidos Reconstructores (20 ml)", cat: "Ampollas", img: "imagen8.jpeg", desc: "Reconstruye la fibra capilar desde la primera aplicación."},
  {name: "Shots Farma Belleza - Cubre Canas (20 ml)", cat: "Ampollas", img: "imagen9.jpeg", desc: "Disimula las canas de manera natural logrando un color uniforme."},
  {name: "Shots Farma Belleza - Ácido Hialurónico (20 ml)", cat: "Ampollas", img: "imagen10.jpeg", desc: "Hidratación profunda que retiene la humedad y devuelve la elasticidad."},
  {name: "Shots Farma Belleza - Semillas de Lino (20 ml)", cat: "Ampollas", img: "imagen11.jpeg", desc: "Nutrición profunda rica en ácidos grasos esenciales."},
  {name: "Shots Farma Belleza - Minoxidil Tónico Capilar (20 ml)", cat: "Ampollas", img: "imagen14.jpeg", desc: "Frena la caída, activa la circulación y estimula el crecimiento."},
  {name: "Ampolla Kerasol-liss Seda Hidrolizada Termoprotección (20 ml)", cat: "Ampollas", img: "imagen12.jpeg", desc: "Bioreparadora ultra con seda hidrolizada y protección térmica."},
  {name: "Ampolla Kerasol-liss Murumuru & Semilla de Lino (20 ml)", cat: "Ampollas", img: "imagen13.jpeg", desc: "Nutrición e hidratación sin pesadez."},
  {name: "Ampolla Pearl Collection Placenta de Ovejo & Aceite de Coco (12 ml)", cat: "Ampollas", img: "imagen5.jpeg", desc: "Nutrición e hidratación intensa con placenta de ovejo."},
  {name: "Tratamiento Tono sobre Tono (Caja x 24 Sachets 30ml)", cat: "Tratamientos", img: "imagen0.jpeg", desc: "Aporta hidratación y brillo. Protege e intensifica el color."},
  {name: "Shampoo + Tratamiento Repolarizador Zanahoria & Aguacate (1000ml)", cat: "Tratamientos", img: "imagen0.jpeg", desc: "Estimula el cuero cabelludo y combate la resequedad."},
  {name: "Shampoo + Tratamiento Nutritivo Banano & Miel (1000ml)", cat: "Tratamientos", img: "imagen0.jpeg", desc: "Explosión de vitaminas capilar a base de colágeno y keratina."},
  {name: "Shampoo + Tratamiento Reparador Coco & Argán (1000ml)", cat: "Tratamientos", img: "imagen0.jpeg", desc: "A base de coco, argán y leche de almendras."},
  {name: "Shampoo + Tratamiento Hidratante Células Madres (1000ml)", cat: "Tratamientos", img: "imagen0.jpeg", desc: "Limpia, suaviza y restaura daños ocasionados por agentes externos."},
  {name: "Bombonera Células Madres & Aminoácidos (3.500 ml)", cat: "Bomboneras", img: "imagen0.jpeg", desc: "Repara profundamente el cabello maltratado por procesos químicos."},
  {name: "Bombonera Cebolla & Jengibre (3.500 ml)", cat: "Bomboneras", img: "imagen0.jpeg", desc: "Evita la caída del cabello y fortalece el folículo piloso."},
  {name: "Aceite Capilar Cebolla & Romero Nutribell", cat: "Aceites", img: "imagen0.jpeg", desc: "Fortalece, regenera, aporta brillo, suavidad y controla el frizz."},
  {name: "Aceite Capilar Argán Nutribell", cat: "Aceites", img: "imagen0.jpeg", desc: "Hidrata, regenera y repara puntas abiertas."},
  {name: "Decolorante en Polvo Perfect Blond Belotti (450g)", cat: "Coloracion", img: "imagen0.jpeg", desc: "Polvo decolorante blanco con alto poder de aclaración."},
  {name: "Tinte Profesional Very Secret (Tubo 100 ml)", cat: "Coloracion", img: "imagen0.jpeg", desc: "Formulado en Italia. Excelente cobertura y tonos brillantes."}
];

let selectedCategory = 'Todos';
const searchInput = document.getElementById('search');
const productsGrid = document.getElementById('products');

document.querySelectorAll('.filter').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.filter').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    selectedCategory = btn.dataset.cat;
    renderProducts();
  });
});

if(searchInput) searchInput.addEventListener('input', renderProducts);

function renderProducts() {
  const q = searchInput ? searchInput.value.toLowerCase().trim() : '';
  const filtered = products.filter(p => {
    const matchesCategory = (selectedCategory === 'Todos' || p.cat === selectedCategory);
    const matchesSearch = (p.name + ' ' + p.desc + ' ' + p.cat).toLowerCase().includes(q);
    return matchesCategory && matchesSearch;
  });

  if (filtered.length === 0) {
    productsGrid.innerHTML = '<div style="grid-column:1/-1;text-align:center;padding:60px 20px;color:#888;">No se encontraron productos.</div>';
    return;
  }

  productsGrid.innerHTML = filtered.map(p => {
    const waUrl = `https://wa.me/573046573720?text=${encodeURIComponent('Hola JW Distribuciones, quiero consultar precio de: ' + p.name)}`;
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
