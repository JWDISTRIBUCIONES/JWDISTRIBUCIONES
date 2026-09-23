const products = [
  {name: "Kit Aminoker Sachet Paso 1, 2 y 3 (70ml / 90ml / 90ml)", cat: "Keratinas", img: "imagen15.jpeg", desc: "Aminoácido + Keratina en sachet. Alisado profesional libre de formaldehído e hidróxido de sodio. Incluye Shampoo Dilatador, Aminoácido Keratina y Mascarilla Sellante."},
  {name: "Kit Aminoker Profesional Paso 1, 2 y 3 (1.000 ml)", cat: "Keratinas", img: "imagen16.jpeg", desc: "Formato profesional de 1 litro. Alisado con ácidos, aminoácidos y proteínas que hidratan y alisan todo tipo de cabello."},
  {name: "Shots Farma Belleza - Aminoácidos Reconstructores (20 ml)", cat: "Ampollas", img: "imagen8.jpeg", desc: "Reconstruye la fibra capilar desde la primera aplicación. Fortalece el cabello dañado por procesos químicos o calor aportando brillo instantáneo."},
  {name: "Shots Farma Belleza - Cubre Canas (20 ml)", cat: "Ampollas", img: "imagen9.jpeg", desc: "Disimula las canas de manera natural logrando un color uniforme, fórmula ligera sin apelmazar ni dejar sensación grasa."},
  {name: "Shots Farma Belleza - Ácido Hialurónico (20 ml)", cat: "Ampollas", img: "imagen10.jpeg", desc: "Hidratación profunda que retiene la humedad, regenera la fibra dañada y devuelve la elasticidad al cabello."},
  {name: "Shots Farma Belleza - Semillas de Lino (20 ml)", cat: "Ampollas", img: "imagen11.jpeg", desc: "Nutrición profunda rica en ácidos grasos esenciales. Aporta elasticidad, suavidad y protección contra agentes externos."},
  {name: "Shots Farma Belleza - Minoxidil Tónico Capilar (20 ml)", cat: "Ampollas", img: "imagen14.jpeg", desc: "Con Oxothiazolidinecarboxylate. Frena la caída, activa la circulación del cuero cabelludo y estimula el crecimiento."},
  {name: "Ampolla Kerasol-liss Seda Hidrolizada Termoprotección (20 ml)", cat: "Ampollas", img: "imagen12.jpeg", desc: "Bioreparadora ultra con seda hidrolizada. Protege contra el calor de planchas y secadores aportando brillo radiante."},
  {name: "Ampolla Kerasol-liss Murumuru & Semilla de Lino (20 ml)", cat: "Ampollas", img: "imagen13.jpeg", desc: "Nutrición e hidratación sin pesadez. Restaura el cabello desde adentro devolviendo la luminosidad instantánea."},
  {name: "Ampolla Pearl Collection Placenta de Ovejo & Aceite de Coco (12 ml)", cat: "Ampollas", img: "imagen5.jpeg", desc: "Nutrición e hidratación intensa con placenta de ovejo. Actúa como un escudo protector contra la resequedad y el frizz."},
  {name: "Tratamiento Tono sobre Tono (Caja x 24 Sachets 30ml)", cat: "Tratamientos", img: "imagen0.jpeg", desc: "Aporta hidratación y brillo. Protege e intensifica el color del cabello tinturado. Disponibles en Cenizo, Chocolate, Rojo, Beige Perla y Negro."},
  {name: "Shampoo + Tratamiento Repolarizador Zanahoria & Aguacate (1000ml / 500ml)", cat: "Tratamientos", img: "imagen0.jpeg", desc: "Estimula el cuero cabelludo, nutre, combate la resequedad y puntas abiertas. Elaborado con jojoba, otoba y aceites naturales. 100% Natural."},
  {name: "Shampoo + Tratamiento Nutritivo Banano & Miel (1000ml / 500ml)", cat: "Tratamientos", img: "imagen0.jpeg", desc: "Explosión de vitaminas capilar a base de colágeno, keratina, células madres, aloe vera, placenta, miel, biotina y argán."},
  {name: "Shampoo + Tratamiento Reparador Coco & Argán (1000ml / 500ml)", cat: "Tratamientos", img: "imagen0.jpeg", desc: "A base de coco, argán y leche de almendras. Nutrición, brillo y estímulo para el crecimiento capilar."},
  {name: "Shampoo + Tratamiento Hidratante Células Madres & Té Verde (1000ml / 500ml)", cat: "Tratamientos", img: "imagen0.jpeg", desc: "Limpia, suave y restaura daños ocasionados por agentes externos con aloe vera y aguacate."},
  {name: "Shampoo Sellante de Cutícula + Tratamiento (1000ml / 500ml)", cat: "Tratamientos", img: "imagen0.jpeg", desc: "Con extracto de biotina y aloe vera. Sin sal. Combate resequedad y sella la fibra capilar."},
  {name: "Shampoo + Tratamiento Ajo & Cebolla Morada (1000ml / 500ml)", cat: "Tratamientos", img: "imagen0.jpeg", desc: "Previene la caída y estimula el crecimiento capilar. Enriquecido con keratina y vitamina E."},
  {name: "Shampoo Profesional JW (Pote 4.000 ml)", cat: "Tratamientos", img: "imagen0.jpeg", desc: "Uso profesional en gran formato. Libre de sal. Limpia, nutre, suaviza y restaura."},
  {name: "Bombonera Células Madres & Aminoácidos (3.500 ml)", cat: "Bomboneras", img: "imagen0.jpeg", desc: "Tratamiento profesional para reparar profundamente el cabello maltratado por procesos químicos. Rellena la fibra capilar y aporta elasticidad."},
  {name: "Bombonera Cebolla & Jengibre (3.500 ml)", cat: "Bomboneras", img: "imagen0.jpeg", desc: "Evita la caída del cabello, fortalece el folículo piloso y estimula el crecimiento con acción antiedad."},
  {name: "Bombonera La Crespa Crespísima 2 en 1 (3.500 ml)", cat: "Bomboneras", img: "imagen0.jpeg", desc: "Crema 2 en 1 con óleo de coco, manteca de karité y semillas de linaza para definir y humectar rizos."},
  {name: "Bombonera Coco & Argán (3.500 ml)", cat: "Bomboneras", img: "imagen0.jpeg", desc: "Tratamiento intensivo reparador e hidratante con vitamina E y colágeno para cabellos secos y rebeldes."},
  {name: "Bombonera Cebolla Morada (3.500 ml)", cat: "Bomboneras", img: "imagen0.jpeg", desc: "Fórmula fortificante antiquiebre para un cabello largo, fuerte y resistente."},
  {name: "Bombonera Mantequilla para el Pelo (3.500 ml)", cat: "Bomboneras", img: "imagen0.jpeg", desc: "Con proteína de huevo, almidón de maíz y mantequilla. Nutre e hidrata profundamente cabellos procesados."},
  {name: "Bombonera Bomba de Vitaminas (3.500 ml)", cat: "Bomboneras", img: "imagen0.jpeg", desc: "Cóctel de miel, colágeno, henna, placenta, aloe vera, ginseng, avena y nutrimax."},
  {name: "Aceite Capilar Cebolla & Romero Nutribell (Caja x 24 Sachets / 240ml / 35ml)", cat: "Aceites", img: "imagen0.jpeg", desc: "Fortalece, regenera, aporta brillo, suavidad y controla el frizz."},
  {name: "Aceite Capilar Argán Nutribell (Caja x 24 Sachets / 240ml / 35ml)", cat: "Aceites", img: "imagen0.jpeg", desc: "Hidrata, regenera y repara puntas abiertas retrasando el envejecimiento capilar."},
  {name: "Aceite Capilar Coco Nutribell (Caja x 24 Sachets / 240ml / 35ml)", cat: "Aceites", img: "imagen0.jpeg", desc: "Termoprotector, revitalizante e hidratante para la fibra capilar."},
  {name: "Laca Extrafuerte Color-1 (125 ml / 255 ml)", cat: "Tratamientos", img: "imagen0.jpeg", desc: "Excelente fijación, brillo y resistencia a la humedad para conservar el peinado por más tiempo."},
  {name: "Silicona Capilar Interbel con Colágeno (Caja x 30/36 Sachets / Pote 120ml / 60ml)", cat: "Aceites", img: "imagen0.jpeg", desc: "Regenera y suaviza las puntas abiertas. Protege contra el sol, el aire y el calor térmico."},
  {name: "Tintura en Crema Color-Liquid Argán & Oliva (Caja x 36 Sachets 30ml)", cat: "Coloracion", img: "imagen0.jpeg", desc: "Tintura exprés en 5 minutos con Tecnología Plex. Disponibles en Castaño y Negro."},
  {name: "Oxigenta en Crema Belotti Professional (90 ml / 1.000 ml)", cat: "Coloracion", img: "imagen0.jpeg", desc: "Oxidante en crema para decoloración y coloración. Volúmenes 10, 20, 30 y 40."},
  {name: "Decolorante en Polvo Perfect Blond con Argán Belotti (Pote 450g / Caja x 12 Sobres 50g)", cat: "Coloracion", img: "imagen0.jpeg", desc: "Polvo decolorante blanco con alto poder de aclaración. Mantiene la suavidad del cabello."},
  {name: "Decolorante en Polvo Easy Blond con Proteína de Trigo Belotti (Pote 450g / Caja x 12 Sobres 50g)", cat: "Coloracion", img: "imagen0.jpeg", desc: "Polvo decolorante azul con acción protectora de proteína de trigo."},
  {name: "Shampoo & Tratamiento Vinagre Capilar Frutos Rojos Adara (Pote 300ml / Caja x 24 Sachets 30ml)", cat: "Tratamientos", img: "imagen0.jpeg", desc: "Mantiene el pH óptimo del cuero cabelludo, controla la grasa, previene la caspa y sella cutículas."},
  {name: "Shampoo & Tratamiento Leche de Zanahoria & Chontaduro Adara (Pote 300ml / Caja x 24 Sachets 30ml)", cat: "Tratamientos", img: "imagen0.jpeg", desc: "Termoprotector y repolarizador 2 en 1 con aceite de lino y vitamina E. Efecto antifrizz."},
  {name: "Shampoo & Tratamiento Cabellos Rizos Adara (Pote 300ml / Caja x 24 Sachets 30ml)", cat: "Tratamientos", img: "imagen0.jpeg", desc: "Ideal para definir gajos y rizos, aporta hidratación y disminuye el volumen."},
  {name: "Línea Infantil Chikileche de Zanahoria Adara (Pote 300ml / Caja x 24 Sachets 30ml)", cat: "Ninos", img: "imagen0.jpeg", desc: "Especial para niños mayores de 3 años. No irrita los ojos, contiene desenredante y proteína de chontaduro."},
  {name: "Tinte Profesional Very Secret Colores & Sensaciones (Tubo 100 ml)", cat: "Coloracion", img: "imagen0.jpeg", desc: "Formulado en Italia. Excelente cobertura, tonos brillantes y duraderos. Variedad de tonos naturales, rubios y fantasía."}
];

let selectedCategory = 'Todos';

const nav = document.getElementById('nav');
const menu = document.getElementById('menu');
const searchInput = document.getElementById('search');
const productsGrid = document.getElementById('products');

menu.addEventListener('click', () => nav.classList.toggle('open'));
nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => nav.classList.remove('open')));

window.addEventListener('scroll', () => {
  const header = document.getElementById('header');
  header.classList.toggle('scrolled', window.scrollY > 30);
  const h = document.documentElement;
  const pct = (h.scrollTop / (h.scrollHeight - h.clientHeight)) * 100;
  document.getElementById('progress').style.width = pct + '%';
});

document.querySelectorAll('.filter').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.filter').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    selectedCategory = btn.dataset.cat;
    renderProducts();
  });
});

searchInput.addEventListener('input', renderProducts);

function renderProducts() {
  const q = searchInput.value.toLowerCase().trim();
  const filtered = products.filter(p => {
    const matchesCategory = (selectedCategory === 'Todos' || p.cat === selectedCategory);
    const matchesSearch = (p.name + ' ' + p.desc + ' ' + p.cat).toLowerCase().includes(q);
    return matchesCategory && matchesSearch;
  });

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
