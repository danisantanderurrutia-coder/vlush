export interface Product {
  id: string;
  name: string;
  tagline: string;
  line: "female" | "unisex";
  price: number;
  trioPrice?: number;
  badge?: string;
  image: string;
  images: string[];
  description: string;
  gussetSpecs: string;
  materials: {
    outer: string;
    gusset: string;
    origin: string;
  };
  sizes: ("XS" | "S" | "M" | "L" | "XL" | "XXL")[];
  availableForTrio: boolean;
  stockGoal: number;
  reserved: number;
}

export const INITIAL_PRODUCTS: Product[] = [
  {
    id: "cheeky-burgundy",
    name: "Cheeky Burgundy Lace",
    tagline: "Encaje floral geométrico en tono vino con puente ultra-ancho de algodón virgen crudo.",
    line: "female",
    price: 32,
    trioPrice: 79,
    badge: "Bestseller Preventa",
    image: "/images/products/cheeky-burgundy.jpg",
    images: [
      "/images/products/cheeky-burgundy.jpg",
      "/images/editorial/editorial-burgundy-bed.jpg",
      "/images/craft/craft-editorial-morning-robe.jpg",
      "/images/craft/craft-lace-cotton-texture.jpg"
    ],
    description: "Diseñado para abrazar las curvas sin marcar la cadera. El interior cuenta con nuestra firma 'Gyno-Safe Zone': 100% algodón orgánico crudo sin blanquear ni teñir que previene rozaduras y cuida tu microbiota íntima.",
    gussetSpecs: "Puente interior de 8.2 cm de ancho (vs 4.5 cm en lencería convencional). Algodón GOTS 180 gsm sin tintes sintéticos.",
    materials: {
      outer: "88% Poliamida reciclada soft-touch, 12% Elastano de alta recuperación (OEKO-TEX 100)",
      gusset: "100% Algodón orgánico crudo sin teñir ni clorar (GOTS Certified)",
      origin: "Confección artesanal ética en Braga, Portugal",
    },
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    availableForTrio: true,
    stockGoal: 40,
    reserved: 28,
  },
  {
    id: "nocturne-noir-thong",
    name: "Nocturne Noir Thong",
    tagline: "El tanga que nunca te molestará: suavidad total, sensualidad oscura y puente hipoalergénico.",
    line: "female",
    price: 28,
    trioPrice: 75,
    badge: "Sensorial & Invisible",
    image: "/images/products/nocturne-noir-thong.jpg",
    images: [
      "/images/products/nocturne-noir-thong.jpg",
      "/images/editorial/editorial-black-set.jpg",
      "/images/craft/craft-seamstress-lace.jpg"
    ],
    description: "La silueta más atrevida con la máxima protección dermatológica. Sin costuras rígidas en los bordes y con doble capa de algodón natural crudo que neutraliza la humedad sin irritación.",
    gussetSpecs: "Puente con costura plana invertida flatlock. Cero fricción con la mucosa genital.",
    materials: {
      outer: "Encaje plano satinado italiano, microfibra reciclada transpirable",
      gusset: "100% Algodón orgánico sin blanquear (pH neutro 5.5)",
      origin: "Braga, Portugal",
    },
    sizes: ["XS", "S", "M", "L", "XL"],
    availableForTrio: true,
    stockGoal: 30,
    reserved: 19,
  },
  {
    id: "strappy-sensual-set",
    name: "Hot & Spicy Strappy Set",
    tagline: "Cortes arquitectónicos, transparencias sugerentes y máxima caricia a tu piel.",
    line: "female",
    price: 52,
    badge: "Edición Limitada",
    image: "/images/products/strappy-sensual-set.jpg",
    images: [
      "/images/products/strappy-sensual-set.jpg",
      "/images/editorial/editorial-lace-top.jpg",
      "/images/editorial/editorial-black-set.jpg"
    ],
    description: "Para esas noches donde el juego visual es protagonista, pero te niegas a tolerar materiales plásticos que piquen o asfixien tu piel íntima. Bralette y braguita combinados con herrajes dorados libres de níquel.",
    gussetSpecs: "Zona íntima reforzada con algodón orgánico crudo de textura nube.",
    materials: {
      outer: "Tulle elástico ultra-fino y tirantes de satén suave regulables",
      gusset: "100% Algodón puro sin químicos",
      origin: "Norte de Portugal",
    },
    sizes: ["S", "M", "L", "XL"],
    availableForTrio: false,
    stockGoal: 20,
    reserved: 12,
  },
  {
    id: "fluid-geometric-boxer",
    name: "Fluid Geometric Boxers",
    tagline: "Línea Unisex & Queer: corte anatómico neutro, encaje geométrico elástico y libertad absoluta.",
    line: "unisex",
    price: 34,
    trioPrice: 85,
    badge: "Línea Unisex / Body-Affirming",
    image: "/images/products/fluid-geometric-boxer.jpg",
    images: [
      "/images/products/fluid-geometric-boxer.jpg",
      "/images/editorial/editorial-unisex-fluid.jpg",
      "/images/editorial/editorial-balcony-robe.jpg"
    ],
    description: "Ropa interior creada para cualquier corporalidad que desee sentirse sexy, estilizada y cómoda. Patrón neutro con espacio anatómico flexible y forro integral de algodón orgánico crudo.",
    gussetSpecs: "Panel central expandido de 9.5 cm de ancho con soporte suave y transpirable.",
    materials: {
      outer: "Encaje geométrico mate de alta elasticidad multidireccional",
      gusset: "100% Algodón crudo orgánico sin pesticidas ni lejías",
      origin: "Łódź, Polonia",
    },
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    availableForTrio: true,
    stockGoal: 35,
    reserved: 18,
  },
  {
    id: "soft-mesh-fluid-brief",
    name: "Fluid Sheer High-Waist Brief",
    tagline: "Talle alto envolvente, malla translúcida y tacto ultrasuave para el día y la noche.",
    line: "unisex",
    price: 30,
    trioPrice: 79,
    badge: "Unisex Versátil",
    image: "/images/products/soft-mesh-fluid-brief.jpg",
    images: [
      "/images/products/soft-mesh-fluid-brief.jpg",
      "/images/editorial/editorial-balcony-robe.jpg",
      "/images/editorial/editorial-unisex-fluid.jpg"
    ],
    description: "Una prenda escultórica que abraza la pelvis con suavidad. Su cintura de banda ancha no aprieta ni enrolla, brindando una experiencia sensual y respetuosa con cualquier silueta.",
    gussetSpecs: "Forro interior extra largo para máxima protección en cualquier postura.",
    materials: {
      outer: "Malla micromodal elástica reciclada",
      gusset: "100% Algodón crudo certificado GOTS",
      origin: "Łódź, Polonia",
    },
    sizes: ["S", "M", "L", "XL", "XXL"],
    availableForTrio: true,
    stockGoal: 25,
    reserved: 14,
  },
  {
    id: "trio-bundle-female",
    name: "Trío Signature V-Lush (Línea Femenina)",
    tagline: "Pack de 3 braguitas a elegir (Cheeky Borgoña, Negro Nocturne y Nude Crudo).",
    line: "female",
    price: 79,
    badge: "Ahorra 17 € en Preventa",
    image: "/images/products/trio-bundle-box.jpg",
    images: [
      "/images/products/trio-bundle-box.jpg",
      "/images/craft/craft-vlush-luxury-box.jpg",
      "/images/craft/craft-raw-organic-cotton.jpg"
    ],
    description: "El fondo de armario íntimo definitivo para toda la semana. Empaquetado en nuestra caja kraft de diseño 100% compostable con papel de seda vegetal.",
    gussetSpecs: "Todas las piezas incorporan la Gyno-Safe Zone de algodón orgánico crudo.",
    materials: {
      outer: "Encajes y mallas seleccionadas con certificado OEKO-TEX",
      gusset: "100% Algodón orgánico crudo sin teñir",
      origin: "Hecho a mano en Europa",
    },
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    availableForTrio: false,
    stockGoal: 30,
    reserved: 21,
  },
];

export interface Task {
  id: string;
  title: string;
  description: string;
  status: "todo" | "in_progress" | "review" | "done";
  owner: "Marie" | "Partner" | "Both";
  priority: "low" | "medium" | "high";
  deadline: string;
  createdAt: string;
}

export const INITIAL_TASKS: Task[] = [
  {
    id: "task-1",
    title: "Validación médica del corte del puente higiénico",
    description: "Consultar con ginecóloga asesora las dimensiones óptimas del puente (mínimo 7.5cm ancho en zona media).",
    status: "done",
    owner: "Marie",
    priority: "high",
    deadline: "2026-09-15",
    createdAt: "2026-09-02",
  },
  {
    id: "task-2",
    title: "Auditoría del Ciclo de Vida (LCA) del packaging",
    description: "Calcular reducción de huella plástica respecto a bolsas convencionales de polietileno.",
    status: "done",
    owner: "Partner",
    priority: "medium",
    deadline: "2026-09-20",
    createdAt: "2026-09-08",
  },
  {
    id: "task-3",
    title: "Aprobación de la Muestra #2 de Encaje Borgoña",
    description: "Testear elasticidad, resistencia al lavado a 40°C y suavidad al tacto en piel hipersensible.",
    status: "in_progress",
    owner: "Marie",
    priority: "high",
    deadline: "2026-10-22",
    createdAt: "2026-10-01",
  },
  {
    id: "task-4",
    title: "Negociación de MOQ mínimo con taller de Braga",
    description: "Cerrar lote inicial de 100-200 unidades mixtas entre línea femenina y línea unisex/fluid.",
    status: "in_progress",
    owner: "Partner",
    priority: "high",
    deadline: "2026-10-25",
    createdAt: "2026-10-05",
  },
  {
    id: "task-5",
    title: "Sesión fotográfica editorial con modelos de la comunidad",
    description: "Casting diverso y fotografía de producto resaltando el detalle macro del puente de algodón natural.",
    status: "review",
    owner: "Marie",
    priority: "medium",
    deadline: "2026-11-02",
    createdAt: "2026-10-10",
  },
  {
    id: "task-6",
    title: "Configuración de Pasarela Stripe en modo Pre-Order",
    description: "Configurar pre-autorizaciones o depósitos del 100% para la preventa con entregas en Diciembre.",
    status: "todo",
    owner: "Both",
    priority: "high",
    deadline: "2026-11-05",
    createdAt: "2026-10-12",
  },
  {
    id: "task-7",
    title: "Despacho de Kits de Muestras a Ginecólogas e Influencers Educativas",
    description: "Preparar 15 kits en cajas de muestra con carta de Marie explicando la innovación del puente sano.",
    status: "todo",
    owner: "Marie",
    priority: "medium",
    deadline: "2026-11-12",
    createdAt: "2026-10-14",
  },
];

export interface SupplyMilestone {
  id: string;
  stageName: string;
  partnerName: string;
  country: string;
  costEstimate: number;
  status: "planned" | "in_sampling" | "approved" | "delayed" | "completed";
  notes: string;
  updatedAt: string;
}

export const INITIAL_MILESTONES: SupplyMilestone[] = [
  {
    id: "ms-1",
    stageName: "Sourcing de Algodón Crudo GOTS",
    partnerName: "EcoFabrics Iberia (GOTS Certified)",
    country: "Portugal",
    costEstimate: 350,
    status: "approved",
    notes: "Algodón 100% virgen sin blanqueamiento químico ni tintes sintéticos. Hipoalergénico certificado.",
    updatedAt: "2026-10-02",
  },
  {
    id: "ms-2",
    stageName: "Prototipado Físico Muestra 01 (Cheeky Lace)",
    partnerName: "Atelier Confeções do Norte (Braga)",
    country: "Portugal",
    costEstimate: 420,
    status: "approved",
    notes: "Primera muestra validada con éxito. Excelente unión plana de costura y tacto de encaje suave.",
    updatedAt: "2026-10-08",
  },
  {
    id: "ms-3",
    stageName: "Muestra Línea Unisex Anatómica (Muestra 02)",
    partnerName: "Lodz Textile Studio (Łódź)",
    country: "Polonia",
    costEstimate: 380,
    status: "in_sampling",
    notes: "Ajuste de banda elástica y confort inguinal en evaluación física.",
    updatedAt: "2026-10-12",
  },
  {
    id: "ms-4",
    stageName: "Packaging Compostable y Libre de Plástico",
    partnerName: "BioPack EU (FSC Kraft + Almidón vegetal)",
    country: "Alemania",
    costEstimate: 210,
    status: "approved",
    notes: "Cajas automontables certificadas libres de celofán y plásticos. Tintas con base vegetal.",
    updatedAt: "2026-10-14",
  },
  {
    id: "ms-5",
    stageName: "Acuerdo Logístico Neutral en Carbono",
    partnerName: "DHL GoGreen Solutions",
    country: "Alemania / UE",
    costEstimate: 150,
    status: "planned",
    notes: "Rastreo de envíos con compensación de emisiones en toda la Unión Europea.",
    updatedAt: "2026-10-15",
  },
];

export interface Campaign {
  id: string;
  title: string;
  audience: "female_daily" | "hot_spicy" | "queer_unisex";
  channel: string;
  promptReference: string;
  status: "draft" | "scheduled" | "active" | "completed";
  launchDate: string;
}

export const INITIAL_CAMPAIGNS: Campaign[] = [
  {
    id: "camp-1",
    title: "Manifiesto: Sensualidad sin Irritación",
    audience: "female_daily",
    channel: "Instagram Reels & TikTok",
    promptReference: "Editorial macro shot of delicate sheer lace meeting raw unbleached cotton gusset, warm morning golden hour, natural skin texture, 35mm film grain, elegant burgundy and ivory palette, intimate documentary feeling.",
    status: "active",
    launchDate: "2026-10-10",
  },
  {
    id: "camp-2",
    title: "Spicy Nights, Pure Touch: Línea Hot & Spicy",
    audience: "hot_spicy",
    channel: "Editorial Lookbook & Newsletter",
    promptReference: "High-contrast editorial fashion photography, models wearing black strappy lingerie with sheer geometric patterns, soft shadows, luxurious European apartment balcony background, empowered, body-positive luxury.",
    status: "scheduled",
    launchDate: "2026-10-24",
  },
  {
    id: "camp-3",
    title: "Body-Affirming Comfort: Línea Unisex & Queer",
    audience: "queer_unisex",
    channel: "Community Substack & Pop-Up Berlin",
    promptReference: "Gender-fluid editorial portrait, comfortable anatomical fit, geometric sheer black lace boxer briefs, natural confident pose, warm minimalist ivory interior, sensual inclusivity without clichés.",
    status: "scheduled",
    launchDate: "2026-11-01",
  },
];

export interface FinancialEntry {
  id: string;
  description: string;
  category: "prototype" | "marketing" | "platform" | "legal" | "packaging" | "seed_capital";
  type: "expense" | "income_preorder" | "capital_injection";
  amount: number;
  currency: "EUR";
  date: string;
}

export const INITIAL_FINANCIALS: FinancialEntry[] = [
  {
    id: "fin-1",
    description: "Capital Semilla Inicial Aportado por Fundadores (Marie & Partner)",
    category: "seed_capital",
    type: "capital_injection",
    amount: 1000,
    currency: "EUR",
    date: "2026-09-01",
  },
  {
    id: "fin-2",
    description: "Dominio vlush-lingerie.com + Infraestructura Vercel & Supabase",
    category: "platform",
    type: "expense",
    amount: 48,
    currency: "EUR",
    date: "2026-09-05",
  },
  {
    id: "fin-3",
    description: "Muestras de Algodón Orgánico Crudo Sin Teñir GOTS (180 gsm)",
    category: "prototype",
    type: "expense",
    amount: 115,
    currency: "EUR",
    date: "2026-09-12",
  },
  {
    id: "fin-4",
    description: "Patronaje y Graduación de Tallas XS-XXL (Cheeky + Línea Unisex)",
    category: "prototype",
    type: "expense",
    amount: 260,
    currency: "EUR",
    date: "2026-09-22",
  },
  {
    id: "fin-5",
    description: "Registro de Marca Comercial en EUIPO (Protección preliminar)",
    category: "legal",
    type: "expense",
    amount: 180,
    currency: "EUR",
    date: "2026-09-28",
  },
  {
    id: "fin-6",
    description: "Prototipos de Caja Kraft Compostable + Tintas al agua",
    category: "packaging",
    type: "expense",
    amount: 85,
    currency: "EUR",
    date: "2026-10-04",
  },
  {
    id: "fin-7",
    description: "Ingresos Preventa Lote #1 (45 Unidades confirmadas)",
    category: "marketing",
    type: "income_preorder",
    amount: 1420,
    currency: "EUR",
    date: "2026-10-14",
  },
];

export interface PreorderItem {
  id: string;
  customerName: string;
  email: string;
  shippingAddress: string;
  country: string;
  productLine: "female" | "unisex";
  itemName: string;
  size: "XS" | "S" | "M" | "L" | "XL" | "XXL";
  quantity: number;
  totalAmount: number;
  paymentStatus: "paid" | "pending";
  createdAt: string;
}

export const INITIAL_PREORDERS: PreorderItem[] = [
  {
    id: "ord-1",
    customerName: "Elena Rostova",
    email: "elena.rostova@berlin-mail.de",
    shippingAddress: "Kastanienallee 42, 10119 Berlin",
    country: "Alemania",
    productLine: "female",
    itemName: "Cheeky Burgundy Lace (Gyno-Safe)",
    size: "M",
    quantity: 2,
    totalAmount: 64,
    paymentStatus: "paid",
    createdAt: "2026-10-11T10:14:00Z",
  },
  {
    id: "ord-2",
    customerName: "Sophie Meyer",
    email: "sophie.m@hamburg-design.de",
    shippingAddress: "Neuer Wall 18, 20354 Hamburg",
    country: "Alemania",
    productLine: "female",
    itemName: "Trío Signature V-Lush (Línea Femenina)",
    size: "S",
    quantity: 1,
    totalAmount: 79,
    paymentStatus: "paid",
    createdAt: "2026-10-11T14:32:00Z",
  },
  {
    id: "ord-3",
    customerName: "Luca Fernández",
    email: "luca.fernandez@queerart.es",
    shippingAddress: "Carrer de Mallorca 112, 08029 Barcelona",
    country: "España",
    productLine: "unisex",
    itemName: "Fluid Geometric Boxers",
    size: "L",
    quantity: 2,
    totalAmount: 68,
    paymentStatus: "paid",
    createdAt: "2026-10-12T09:18:00Z",
  },
  {
    id: "ord-4",
    customerName: "Hannah Weber",
    email: "hannah.w@munich-med.de",
    shippingAddress: "Leopoldstraße 77, 80802 München",
    country: "Alemania",
    productLine: "female",
    itemName: "Hot & Spicy Strappy Set",
    size: "M",
    quantity: 1,
    totalAmount: 52,
    paymentStatus: "paid",
    createdAt: "2026-10-13T18:22:00Z",
  },
  {
    id: "ord-5",
    customerName: "Camille Dupont",
    email: "camille.dupont@paris-studio.fr",
    shippingAddress: "Rue de Turenne 54, 75003 Paris",
    country: "Francia",
    productLine: "female",
    itemName: "Trío Signature V-Lush (Línea Femenina)",
    size: "M",
    quantity: 2,
    totalAmount: 158,
    paymentStatus: "paid",
    createdAt: "2026-10-14T11:05:00Z",
  },
  {
    id: "ord-6",
    customerName: "Jan Van Der Berg",
    email: "jan.vdb@amsterdam-tech.nl",
    shippingAddress: "Prinsengracht 310, 1016 HX Amsterdam",
    country: "Países Bajos",
    productLine: "unisex",
    itemName: "Fluid Sheer High-Waist Brief",
    size: "M",
    quantity: 1,
    totalAmount: 30,
    paymentStatus: "paid",
    createdAt: "2026-10-14T16:45:00Z",
  },
];
