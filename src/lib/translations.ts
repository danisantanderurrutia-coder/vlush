export type Language = "es" | "en" | "de";

export interface Translations {
  nav: {
    collections: string;
    story: string;
    sustainability: string;
    hub: string;
    preorder: string;
    tagline: string;
    menuLabel: string;
  };
  hero: {
    badge: string;
    headlinePart1: string;
    headlinePart2: string;
    subheadline: string;
    foundersBadge: string;
    foundersCreds: string;
    ctaPreorder: string;
    ctaExplore: string;
    registeredPattern: string;
    gussetFeatureTitle: string;
    gussetFeatureDesc: string;
  };
  batch: {
    pilotBadge: string;
    title: string;
    desc: string;
    reservedLabel: string;
    statusLabel: string;
    remainingLabel: string;
    perk1: string;
    perk2: string;
    perk3: string;
    ctaReserve: string;
    ctaCatalog: string;
  };
  fabric: {
    badge: string;
    title: string;
    desc: string;
    tabExterior: string;
    tabInterior: string;
    badgeExterior: string;
    badgeInterior: string;
    hotspotOverlay: string;
    photoRealNote: string;
    atelierNote: string;
    interiorTag: string;
    interiorTitle: string;
    interiorDesc: string;
    interiorPoint1Title: string;
    interiorPoint1Desc: string;
    interiorPoint2Title: string;
    interiorPoint2Desc: string;
    interiorPoint3Title: string;
    interiorPoint3Desc: string;
    exteriorTag: string;
    exteriorTitle: string;
    exteriorDesc: string;
    exteriorPoint1Title: string;
    exteriorPoint1Desc: string;
    exteriorPoint2Title: string;
    exteriorPoint2Desc: string;
    exteriorPoint3Title: string;
    exteriorPoint3Desc: string;
    tableClinical: string;
    tableConventional: string;
    tableVlush: string;
    tableRow1Name: string;
    tableRow1Conv: string;
    tableRow1Vlush: string;
    tableRow2Name: string;
    tableRow2Conv: string;
    tableRow2Vlush: string;
    tableRow3Name: string;
    tableRow3Conv: string;
    tableRow3Vlush: string;
  };
  catalog: {
    badge: string;
    title: string;
    desc: string;
    filterAll: string;
    filterFemale: string;
    filterUnisex: string;
    filterTrios: string;
    seeAllLink: string;
    sizeGuideBtn: string;
    sizeGuideHide: string;
    sizeGuideTitle: string;
    sizeGuideBadge: string;
    sizeGuideDesc: string;
    colSize: string;
    colHips: string;
    colWaist: string;
    colEu: string;
    colGusset: string;
  };
  product: {
    trioAhorro: string;
    infoBtn: string;
    closeBtn: string;
    outerLabel: string;
    gussetLabel: string;
    originLabel: string;
    selectSize: string;
    reserveBtn: string;
    lineFemale: string;
    lineUnisex: string;
  };
  quickModal: {
    badge: string;
    subhead: string;
    trioQuestion: string;
    trioSub: string;
    trioActivated: string;
    trioAdd: string;
    sizeLabel: string;
    nameLabel: string;
    namePlaceholder: string;
    emailLabel: string;
    emailPlaceholder: string;
    countryLabel: string;
    addressLabel: string;
    addressPlaceholder: string;
    totalLabel: string;
    confirmBtn: string;
    confirmingBtn: string;
    guaranteeNote: string;
    successTitle: string;
    successDesc: string;
    successDest: string;
    successTotal: string;
    successDelivery: string;
    closeModalBtn: string;
  };
  manifesto: {
    badge: string;
    quote: string;
    desc: string;
    point1: string;
    point2: string;
    point3: string;
  };
  sustainabilitySection: {
    badge: string;
    title: string;
    desc: string;
    check1Title: string;
    check1Desc: string;
    check2Title: string;
    check2Desc: string;
    check3Title: string;
    check3Desc: string;
    linkAudit: string;
  };
  footer: {
    badge1Title: string;
    badge1Desc: string;
    badge2Title: string;
    badge2Desc: string;
    badge3Title: string;
    badge3Desc: string;
    badge4Title: string;
    badge4Desc: string;
    tagline: string;
    bio: string;
    designIn: string;
    certifiedGots: string;
    exploreTitle: string;
    catalogLink: string;
    femaleLink: string;
    unisexLink: string;
    manifestoLink: string;
    sustainabilityLink: string;
    governanceTitle: string;
    hubLink: string;
    dossierLink: string;
    samplesLink: string;
    financesLink: string;
    newsletterTitle: string;
    newsletterDesc: string;
    newsletterSuccess: string;
    copyright: string;
    shippingEu: string;
    legalLink: string;
    privateLink: string;
  };
  storyPage: {
    badge: string;
    title: string;
    subtitle: string;
    photoLabel: string;
    intersectionBadge: string;
    intersectionTitle: string;
    p1: string;
    p2: string;
    p3: string;
    p4: string;
    quoteText: string;
    quoteAuthor: string;
    pillarsBadge: string;
    pillarsTitle: string;
    pillar1Title: string;
    pillar1Desc: string;
    pillar2Title: string;
    pillar2Desc: string;
    pillar3Title: string;
    pillar3Desc: string;
    pillar4Title: string;
    pillar4Desc: string;
    ctaBtn: string;
  };
  sustainabilityPage: {
    badge: string;
    title: string;
    desc: string;
    cottonBadge: string;
    cottonTitle: string;
    cottonP1: string;
    cottonBullet1: string;
    cottonBullet2: string;
    cottonBullet3: string;
    traceabilityBadge: string;
    traceabilityTitle: string;
    step1Title: string;
    step1Desc: string;
    step2Title: string;
    step2Desc: string;
    step3Title: string;
    step3Desc: string;
    step4Title: string;
    step4Desc: string;
    lcaBadge: string;
    lcaTitle: string;
    lcaDesc: string;
    ctaBtn: string;
  };
  checkoutPage: {
    badge: string;
    title: string;
    subtitle: string;
    step1: string;
    step2: string;
    step3: string;
    sizeLabel: string;
    qtyLabel: string;
    nameLabel: string;
    emailLabel: string;
    addressLabel: string;
    zipLabel: string;
    cityLabel: string;
    countryLabel: string;
    cardMethod: string;
    klarnaMethod: string;
    paypalMethod: string;
    securityNote: string;
    submitBtn: string;
    summaryTitle: string;
    gussetTag: string;
    shippingDeFree: string;
    totalLabel: string;
    timelineTitle: string;
    timelineOct: string;
    timelineNov: string;
    timelineDec: string;
    sizeExchangePerk: string;
    refundPerk: string;
    confirmedBadge: string;
    confirmedTitle: string;
    confirmedDesc: string;
    orderNumberLabel: string;
    reservedItemLabel: string;
    selectedSizeLabel: string;
    countryDestLabel: string;
    estimatedDeliveryLabel: string;
    estimatedDeliveryVal: string;
    totalPaidLabel: string;
    giftNote: string;
    returnHome: string;
    checkHub: string;
  };
  hub: {
    headerOverview: string;
    headerDesc: string;
    btnTasks: string;
    btnDossier: string;
    kpiRaised: string;
    kpiRaisedSub: string;
    kpiMoq: string;
    kpiMoqSub: string;
    kpiBudget: string;
    kpiBudgetSub: string;
    kpiCashflow: string;
    kpiOrders: string;
    kpiOrdersSub: string;
    thresholdTitle: string;
    thresholdDesc: string;
    thresholdBtn: string;
    sizesTitle: string;
    sizesDesc: string;
    sizesBadge: string;
    sizesTop: string;
    modelsTitle: string;
    modelsDesc: string;
    modelsBadgeF: string;
    modelsBadgeU: string;
    ordersTableTitle: string;
    ordersTableDesc: string;
    colCustomer: string;
    colItem: string;
    colSize: string;
    colQty: string;
    colAmount: string;
    colCountry: string;
    colStatus: string;
    statusConfirmed: string;
  };
}

export const translations: Record<Language, Translations> = {
  es: {
    nav: {
      collections: "Colecciones",
      story: "Manifiesto",
      sustainability: "Sostenibilidad",
      hub: "Founders Hub",
      preorder: "Reservar Preventa",
      tagline: "Pure & Sensual Atelier",
      menuLabel: "Abrir menú",
    },
    hero: {
      badge: "Alta Costura Íntima • Gyno-Safe & Body-Affirming",
      headlinePart1: "Pura donde importa.",
      headlinePart2: "Sensual en todo lo demás.",
      subheadline:
        "Lencería de diseño sensual europeo con un santuario interior: puente de 100% algodón orgánico crudo sin teñir ni clorar. La libertad de sentirte ardiente sin pagar el peaje de la irritación.",
      foundersBadge: "Creado por Marie & Socio",
      foundersCreds: "Psicología Conductual & Protección Ambiental",
      ctaPreorder: "Reservar Mi Prenda (Preventa)",
      ctaExplore: "Explorar Catálogo",
      registeredPattern: "Patrón Registrado",
      gussetFeatureTitle: "Innovación: Gyno-Safe Gusset",
      gussetFeatureDesc:
        "Puente ensanchado 8.2 cm de algodón virgen sin blanquear. Cero tintes, cero irritación.",
    },
    batch: {
      pilotBadge: "Campaña de Preventa Oficial • Lote Piloto #01",
      title: "Cofinancia la primera tirada artesanal europea",
      desc: "Producimos bajo demanda ética para evitar sobreproducción. Cada reserva asegura los metros de algodón crudo GOTS y el tiempo de confección de nuestras costureras en Braga y Łódź.",
      reservedLabel: "Unidades Reservadas",
      statusLabel: "Estado",
      remainingLabel: "Faltan solo",
      perk1: "Precio exclusivo con hasta 20% de descuento",
      perk2: "Caja kraft numerada 100% compostable",
      perk3: "Entrega prioritaria DHL GoGreen (Diciembre)",
      ctaReserve: "Reservar Mi Talla Ahora",
      ctaCatalog: "Ver Catálogo Completo",
    },
    fabric: {
      badge: "Innovación Técnica Textil",
      title: "Pura donde importa. Sensual en todo lo demás.",
      desc: "La industria te obligó a elegir entre encajes sintéticos que provocan picor e infecciones, o braguitas de algodón aburridas. En V-Lush rompemos esa falsa dicotomía.",
      tabExterior: "Cara Exterior: Encaje Sensual",
      tabInterior: "Cara Interior: Gyno-Safe Zone",
      badgeExterior: "Encaje Satinado de Alta Recuperación",
      badgeInterior: "100% Algodón Virgen Crudo (GOTS)",
      hotspotOverlay: "Doble capa con costura plana invertida",
      photoRealNote: "Fotografía real del prototipo Muestra #01",
      atelierNote: "Taller de Confección: Braga, Portugal",
      interiorTag: "EL CORAZÓN DE V-LUSH",
      interiorTitle: "El Puente Íntimo «Gyno & Skin-Safe»",
      interiorDesc:
        "La flora íntima necesita transpiración y un pH equilibrado. Las telas teñidas y sintéticas atrapan el calor y alteran la microbiota. Nuestro puente es un santuario biológico.",
      interiorPoint1Title: "Ancho Ergonómico Extra (8.2 cm vs 4.5 cm)",
      interiorPoint1Desc:
        "Cubre por completo la zona vulvar y mucosa sin deslizarse hacia los lados, evitando que los encajes toquen directamente tu piel más delicada.",
      interiorPoint2Title: "Cero Blanqueadores, Cero Tintes Sintéticos",
      interiorPoint2Desc:
        "Algodón virgen en su tono crudo marfil natural (puedes ver diminutas motas de la planta de algodón en el tejido). Libre de químicos azoicos y formaldehídos.",
      interiorPoint3Title: "Costuras Planas Invertidas (Flatlock Seamless)",
      interiorPoint3Desc:
        "El borde del forro queda oculto y sellado hacia el exterior. Cero roces con la ingle al caminar, entrenar o sentarte.",
      exteriorTag: "DISEÑO Y ERGONOMÍA EXTERIOR",
      exteriorTitle: "Encajes Soft-Touch y Siluetas Esculturales",
      exteriorDesc:
        "El hecho de que sea saludable no significa que tenga que parecer una prenda ortopédica. Nuestras siluetas son sensuales, sofisticadas y celebran la diversidad corporal.",
      exteriorPoint1Title: "Encaje Geométrico y Floral Sin Picor",
      exteriorPoint1Desc:
        "Poliamida reciclada ultrafina con elastano de memoria que se adapta a las caderas sin clavarse ni provocar rojeces.",
      exteriorPoint2Title: "Línea Femenina + Línea Unisex / Fluid",
      exteriorPoint2Desc:
        "Patrones específicos para diferentes anatomías: desde cortes Cheeky y Thong de impacto, hasta bóxers translúcidos body-affirming.",
      exteriorPoint3Title: "Detalles Satinados y Herrajes Seguros",
      exteriorPoint3Desc:
        "Acentos en borgoña profundo y negro grafito con anillas hipoalergénicas 100% libres de níquel.",
      tableClinical: "Parámetro Clínico",
      tableConventional: "Convencional",
      tableVlush: "V-Lush Atelier",
      tableRow1Name: "Ancho del puente",
      tableRow1Conv: "4.0 - 5.0 cm",
      tableRow1Vlush: "8.2 - 9.5 cm",
      tableRow2Name: "Blanqueo de tejido",
      tableRow2Conv: "Cloro / Óptico sintético",
      tableRow2Vlush: "100% Crudo virgen",
      tableRow3Name: "Respeto al microbioma",
      tableRow3Conv: "Medio / Bajo",
      tableRow3Vlush: "Óptimo (pH 5.5)",
    },
    catalog: {
      badge: "Lanzamiento Limitado",
      title: "Catálogo de Preventa (Lote #01)",
      desc: "Precios especiales de co-fundación. Reserva ahora y recibe en Diciembre con packaging compostable de edición especial.",
      filterAll: "Todas las Siluetas",
      filterFemale: "Línea Femenina (Cheeky, Thong, Strappy)",
      filterUnisex: "Línea Unisex & Fluid (Anatomical)",
      filterTrios: "Packs Trío (75 € - 85 €)",
      seeAllLink: "Ver todas las especificaciones y guía de tallas",
      sizeGuideBtn: "Guía de Tallas & Ajuste Anatómico",
      sizeGuideHide: "Ocultar Guía de Tallas",
      sizeGuideTitle: "Guía Anatómica de Medidas V-Lush (XS - XXL)",
      sizeGuideBadge: "Elasticidad Multidireccional Soft-Touch",
      sizeGuideDesc:
        "Nuestras prendas cuentan con un 12-15% de elastano de alta memoria. Si estás entre dos tallas, recomendamos elegir la menor si prefieres un ajuste ceñido o la mayor para máxima holgura en descanso.",
      colSize: "Talla",
      colHips: "Cadera (cm)",
      colWaist: "Cintura (cm)",
      colEu: "Equivalencia UE",
      colGusset: "Ancho Puente Gusset",
    },
    product: {
      trioAhorro: "Ahorra en Trío",
      infoBtn: "Info",
      closeBtn: "Cerrar",
      outerLabel: "Exterior",
      gussetLabel: "Puente Interior",
      originLabel: "Origen",
      selectSize: "Seleccionar Talla",
      reserveBtn: "Reservar en Preventa",
      lineFemale: "Línea Femenina",
      lineUnisex: "Línea Unisex & Fluid",
    },
    quickModal: {
      badge: "Reserva de Lote Piloto • Entrega Diciembre",
      subhead: "Asegura tu talla antes de enviar las unidades a taller en Braga / Łódź.",
      trioQuestion: "¿Prefieres el Pack Trío?",
      trioSub: "3 piezas en caja kraft de regalo por solo",
      trioActivated: "Pack Trío Activado",
      trioAdd: "Añadir Trío",
      sizeLabel: "Talla deseada:",
      nameLabel: "Nombre Completo",
      namePlaceholder: "Ej. Marie Becker",
      emailLabel: "Correo Electrónico",
      emailPlaceholder: "marie@ejemplo.com",
      countryLabel: "País de Envío (UE)",
      addressLabel: "Dirección o Ciudad de Entrega",
      addressPlaceholder: "Calle, número, código postal y ciudad",
      totalLabel: "Total preventa:",
      confirmBtn: "Confirmar Reserva",
      confirmingBtn: "Confirmando...",
      guaranteeNote: "Garantía V-Lush: Sin cargos sorpresa, envío neutral en carbono.",
      successTitle: "¡Tu reserva está asegurada!",
      successDesc: "Muchas gracias. Hemos reservado tu unidad en el Lote Piloto #01.",
      successDest: "Destino:",
      successTotal: "Total de preventa:",
      successDelivery: "Entrega estimada: Diciembre 2026 (DHL GoGreen)",
      closeModalBtn: "Cerrar y seguir explorando",
    },
    manifesto: {
      badge: "El Manifiesto V-Lush",
      quote:
        "«Tu piel íntima absorbe químicos más rápido que cualquier otra parte de tu cuerpo. No aceptamos que debas elegir entre sentirte deseada o sentirte sana.»",
      desc: "Marie aplicó sus estudios en psicología del bienestar y experiencia en negocios para entender la relación íntima entre autoestima y salud corporal. Su socio aportó el rigor de la gestión ambiental: eliminar los microplásticos del packaging y confeccionar exclusivamente en la Unión Europea.",
      point1: "Talleres en Braga & Łódź",
      point2: "Algodón GOTS 100% Virgen",
      point3: "Packaging Sin Plástico",
    },
    sustainabilitySection: {
      badge: "Cadena de Suministro Consciente",
      title: "Empaquetado en la tierra, entregado sin huella",
      desc: "Cada pedido de preventa se entrega en nuestra caja kraft de cartón reciclado FSC con cintas de almidón de patata y papel de seda libre de ácido. 100% biodegradable en tu compost casero.",
      check1Title: "Producción ética en Europa",
      check1Desc: "Confección en Portugal y Polonia con salarios justos y condiciones de trabajo transparentes.",
      check2Title: "DHL GoGreen",
      check2Desc: "Cada gramo de CO2 emitido durante el envío dentro de la UE se compensa a través de proyectos climáticos certificados.",
      check3Title: "Cero sobreproducción",
      check3Desc: "Fabricamos exclusivamente lo que nuestra comunidad cofinancia en la preventa.",
      linkAudit: "Conoce los detalles de nuestra auditoría ecológica",
    },
    footer: {
      badge1Title: "Gyno & Skin-Safe",
      badge1Desc: "Algodón orgánico sin tintes",
      badge2Title: "Zero Plástico",
      badge2Desc: "Cajas kraft 100% compostables",
      badge3Title: "Confección Europea Ética",
      badge3Desc: "Talleres en Portugal & Polonia",
      badge4Title: "DHL GoGreen",
      badge4Desc: "Logística neutral en carbono",
      tagline: "Pure where it matters, sensual everywhere else.",
      bio: "Fundada por Marie (Gestión y Psicología) y su socio (Protección y Gestión Ambiental). Diseñamos la lencería que el mercado ignoró: la fusión honesta de alta sensualidad y cuidado ginecológico radical.",
      designIn: "Estudio de Diseño: Berlín / Confección: Braga & Łódź",
      certifiedGots: "Fibras Certificadas GOTS & OEKO-TEX Standard 100",
      exploreTitle: "Explorar",
      catalogLink: "Catálogo Preventa",
      femaleLink: "Línea Femenina",
      unisexLink: "Línea Unisex & Fluid",
      manifestoLink: "Manifiesto y Origen",
      sustainabilityLink: "Cadena de Suministro",
      governanceTitle: "Gobernanza",
      hubLink: "Portal Fundadores (/hub)",
      dossierLink: "Dossier del Proyecto",
      samplesLink: "Tracking de Muestras",
      financesLink: "Finanzas de Lanzamiento",
      newsletterTitle: "Acceso a Futuros Lotes",
      newsletterDesc: "Únete a nuestra lista íntima para recibir actualizaciones de la producción y lanzamientos de edición limitada.",
      newsletterSuccess: "¡Gracias! Te hemos añadido a la lista prioritaria de V-Lush.",
      copyright: "2026 V-Lush Lingerie UG. Todos los derechos reservados.",
      shippingEu: "Envíos a Alemania y Unión Europea",
      legalLink: "Aviso Legal & Privacidad",
      privateLink: "Acceso Privado",
    },
    storyPage: {
      badge: "Origen & Manifiesto",
      title: "Nacimos para desterrar el dolor de la sensualidad",
      subtitle: "Durante décadas, la industria de la lencería dividió el mundo en dos extremos crueles: prendas ortopédicas de algodón sin deseo, o piezas eróticas de plástico que arruinan la flora genital.",
      photoLabel: "Estudio de prototipado & patronaje anatómico • Berlín & Braga",
      intersectionBadge: "La Intersección Humana",
      intersectionTitle: "Psicología del Bienestar y Rigor Ambiental",
      p1: "Marie estudió Administración de Empresas y Psicología. En sus investigaciones y en conversaciones íntimas con amigas y compañeras, observó un patrón recurrente y silenciado: casi todas las personas que vestían lencería sexy de encaje sufrían dermatitis por contacto, infecciones recurrentes por cándida o rozaduras en los pliegues inguinales. La respuesta convencional era siempre la misma: «Usa solo braguitas básicas de algodón blanco».",
      p2: "Para Marie, eso significaba pedirle a las personas que renunciaran a su deseo, a su erotismo y a su autoestima.",
      p3: "Por su parte, su socio y cofundador, especialista en Gestión y Protección Ambiental, estaba cansado de la hipocresía del greenwashing: marcas que cobran 70 € por un conjunto de poliéster virgen fabricado en condiciones laborales precarias y envuelto en bolsas plásticas no biodegradables.",
      p4: "Juntos decidieron formular una regla inviolable: V-Lush sólo existiría si podíamos crear lencería visualmente arrebatadora con un puente anatómico 100% puro, hipoalergénico y con una cadena de custodia europea totalmente limpia.",
      quoteText: "«La piel vulvar tiene una tasa de absorción 5 veces más rápida que el resto del cuerpo. Lo que pones sobre ella no es solo moda: es salud biológica.»",
      quoteAuthor: "— Marie, Co-Fundadora de V-Lush",
      pillarsBadge: "Nuestros Pilares",
      pillarsTitle: "Los 4 Compromisos Inquebrantables",
      pillar1Title: "Gyno-Safe Zone",
      pillar1Desc: "Puente interior de 8.2 cm de algodón orgánico crudo GOTS, sin tintes químicos, sin blanqueadores clóricos y con pH neutro.",
      pillar2Title: "Inclusividad Real",
      pillar2Desc: "Línea femenina y línea unisex/fluid adaptada a cualquier corporalidad y expresión queer, sin clichés ni prendas incómodas.",
      pillar3Title: "Talleres Éticos",
      pillar3Desc: "Confección de alta costura en talleres tradicionales de Braga (Portugal) y Łódź (Polonia) con contratos justos y artesanía rigurosa.",
      pillar4Title: "Circularidad 100%",
      pillar4Desc: "Packaging 100% compostable sin plástico y envíos neutralizados en carbono a través de DHL GoGreen en toda la UE.",
      ctaBtn: "Descubre la Colección de Preventa",
    },
    sustainabilityPage: {
      badge: "Transparencia Radical",
      title: "La Cadena de Custodia Ética de V-Lush",
      desc: "Nuestra política ambiental no es un reclamo publicitario: es un diseño de producto auditado desde el cultivo del algodón hasta el buzón de tu casa.",
      cottonBadge: "1. EL ALGODÓN ORGÁNICO CRUDO (GOTS)",
      cottonTitle: "Sin lejía, sin pesticidas, sin tintes azoicos",
      cottonP1: "El algodón convencional requiere hasta 2.700 litros de agua por prenda y tratamientos con cloro químico para blanquear la fibra. Para nuestro puente interior, seleccionamos exclusivamente algodón orgánico virgen sin procesar químicamente.",
      cottonBullet1: "Certificación GOTS (Global Organic Textile Standard) Grado Médico.",
      cottonBullet2: "Gramaje denso de 180 gsm que asegura transpiración y durabilidad tras 100 lavados.",
      cottonBullet3: "Tono marfil crudo natural: cada pieza conserva la pureza botánica original de la fibra.",
      traceabilityBadge: "Trazabilidad Punto a Punto",
      traceabilityTitle: "De Europa para Europa: Nuestras 4 Estaciones",
      step1Title: "1. Hilatura Limpia",
      step1Desc: "EcoFabrics Iberia (Portugal): Cultivo regenerativo y tejido del algodón orgánico en máquinas impulsadas por energía solar.",
      step2Title: "2. Confección Artesanal",
      step2Desc: "Braga (Portugal) & Łódź (Polonia): Talleres con tradición centenaria en corsetería y patronaje flatlock, con auditorías laborales SMETA.",
      step3Title: "3. Packaging 100% Circular",
      step3Desc: "BioPack EU (Alemania): Cajas de cartón corrugado FSC sin laminado plástico. Precintos adhesivos de almidón vegetal solubles en agua.",
      step4Title: "4. DHL GoGreen",
      step4Desc: "Neutralización de Carbono: Entrega terrestre eficiente en Alemania (24-48h) y Unión Europea con compensación certificada de GEI.",
      lcaBadge: "Auditoría del Ciclo de Vida (LCA)",
      lcaTitle: "0 gramos de plástico de un solo uso por envío",
      lcaDesc: "El promedio de la industria del fast-fashion envía cada braguita envuelta en una bolsa individual de polietileno transparente que tarda 450 años en degradarse. En V-Lush, cada prenda viaja protegida por papel vegetal compostable y un estuche que puedes desechar con las cáscaras de tu cocina.",
      ctaBtn: "Reservar Mi Lote Ético",
    },
    checkoutPage: {
      badge: "Campaña Lote #01",
      title: "Reserva de Preventa",
      subtitle: "Cofinancia la producción europea y asegura tu talla a precio protegido.",
      step1: "Selecciona tu Prenda o Pack",
      step2: "Datos de Envío en la Unión Europea",
      step3: "Método de Pago Seguro",
      sizeLabel: "Talla Anatómica:",
      qtyLabel: "Cantidad:",
      nameLabel: "Nombre y Apellidos",
      emailLabel: "Correo Electrónico para Actualizaciones de Producción",
      addressLabel: "Dirección Postal (Calle y Número)",
      zipLabel: "Código Postal",
      cityLabel: "Ciudad",
      countryLabel: "País (Unión Europea)",
      cardMethod: "Tarjeta / Apple Pay",
      klarnaMethod: "Paga en Diciembre",
      paypalMethod: "Checkout Rápido",
      securityNote: "Pago encriptado SSL de 256 bits. Sin cobros sorpresa.",
      submitBtn: "Confirmar Reserva de Preventa",
      summaryTitle: "Resumen de tu Reserva",
      gussetTag: "Gyno-Safe Gusset 100% Algodón Crudo",
      shippingDeFree: "Gratis",
      totalLabel: "Total Garantizado:",
      timelineTitle: "Calendario de Producción Lote #01",
      timelineOct: "Octubre: Cierre de preventa y compra de metros de algodón GOTS.",
      timelineNov: "Noviembre: Confección en Braga (Portugal) y empaquetado.",
      timelineDec: "Diciembre: Despacho a tu puerta antes de las fiestas.",
      sizeExchangePerk: "Cambio de talla gratuito si no te queda perfecto.",
      refundPerk: "Garantía de reembolso íntegro si el lote no alcanza el MOQ.",
      confirmedBadge: "Reserva Oficial Confirmada",
      confirmedTitle: "¡Bienvenidx a la familia V-Lush!",
      confirmedDesc: "Hemos enviado la confirmación y el recibo digital de preventa a",
      orderNumberLabel: "Número de Pedido:",
      reservedItemLabel: "Artículo Reservado:",
      selectedSizeLabel: "Talla Seleccionada:",
      countryDestLabel: "País de Destino:",
      estimatedDeliveryLabel: "Fecha Estimada de Entrega:",
      estimatedDeliveryVal: "Diciembre 2026 (DHL GoGreen Neutral)",
      totalPaidLabel: "Total Abonado:",
      giftNote: "Tu pedido incluye de regalo la caja kraft numerada del Lote Piloto #01 y la bolsa de tela lavable para cuidar tu lencería.",
      returnHome: "Volver al Inicio",
      checkHub: "Ver Progreso en Founders Hub",
    },
    hub: {
      headerOverview: "FOUNDERS OVERVIEW • LOTE PILOTO #01",
      headerDesc: "Métricas de preventa, tracción comercial y umbral para activación de talleres en Braga y Łódź.",
      btnTasks: "Ver Tareas de Marie & Socio",
      btnDossier: "Dossier Técnico",
      kpiRaised: "Recaudado en Preventa",
      kpiRaisedSub: "+100% autofinanciado (Bootstrapped)",
      kpiMoq: "Meta Tirada Mínima (MOQ)",
      kpiMoqSub: "prendas",
      kpiBudget: "Presupuesto Semilla Inicial",
      kpiBudgetSub: "Gastos prototipado:",
      kpiCashflow: "Cashflow neto positivo",
      kpiOrders: "Pedidos Confirmados",
      kpiOrdersSub: "Ticket promedio:",
      thresholdTitle: "Objetivo de Producción Lote Piloto: 100 Unidades",
      thresholdDesc: "El taller Confeções do Norte (Braga) requiere un compromiso de 100 prendas para reservar la mesa de corte en Noviembre.",
      thresholdBtn: "Ver Tracking de Talleres",
      sizesTitle: "Distribución por Tallas Solicitadas",
      sizesDesc: "Plan de graduación de patrones para el taller",
      sizesBadge: "Curva de Demanda",
      sizesTop: "Talla más demandada: Talla M (42% de reservas)",
      modelsTitle: "Popularidad de Modelos & Líneas",
      modelsDesc: "Femenina vs Unisex & Fluid",
      modelsBadgeF: "Línea Femenina (71%)",
      modelsBadgeU: "Unisex / Fluid (29%)",
      ordersTableTitle: "Libro de Reservas de Preventa (Tiempo Real)",
      ordersTableDesc: "Registros sincronizados con la pasarela y la base de datos de V-Lush",
      colCustomer: "Cliente",
      colItem: "Artículo",
      colSize: "Talla",
      colQty: "Uds",
      colAmount: "Importe",
      colCountry: "País",
      colStatus: "Estado",
      statusConfirmed: "Confirmado",
    },
  },
  en: {
    nav: {
      collections: "Collections",
      story: "Manifesto",
      sustainability: "Sustainability",
      hub: "Founders Hub",
      preorder: "Pre-Order Now",
      tagline: "Pure & Sensual Atelier",
      menuLabel: "Open menu",
    },
    hero: {
      badge: "High-End Intimate Couture • Gyno-Safe & Body-Affirming",
      headlinePart1: "Pure where it matters.",
      headlinePart2: "Sensual everywhere else.",
      subheadline:
        "Sensual European lingerie designed with an intimate biological sanctuary: an inner gusset of 100% raw, unbleached, undyed organic cotton. The freedom to feel incandescent without paying the toll of irritation.",
      foundersBadge: "Created by Marie & Partner",
      foundersCreds: "Behavioral Psychology & Environmental Protection",
      ctaPreorder: "Reserve My Piece (Pre-Order)",
      ctaExplore: "Explore Collection",
      registeredPattern: "Proprietary Pattern",
      gussetFeatureTitle: "Innovation: Gyno-Safe Gusset",
      gussetFeatureDesc:
        "Expanded 8.2 cm width of raw unbleached cotton. Zero synthetic dyes, zero irritation.",
    },
    batch: {
      pilotBadge: "Official Pre-Order Campaign • Pilot Batch #01",
      title: "Co-fund our first European artisanal production",
      desc: "We produce on an ethical on-demand basis to prevent overproduction. Every pledge reserves the meters of GOTS raw cotton and sewing time with our seamstresses in Braga and Łódź.",
      reservedLabel: "Units Reserved",
      statusLabel: "Status",
      remainingLabel: "Only",
      perk1: "Exclusive pre-order pricing with up to 20% discount",
      perk2: "Numbered 100% home-compostable kraft box",
      perk3: "Priority DHL GoGreen climate-neutral delivery (December)",
      ctaReserve: "Reserve My Size Now",
      ctaCatalog: "View Full Catalog",
    },
    fabric: {
      badge: "Textile Technical Innovation",
      title: "Pure where it matters. Sensual everywhere else.",
      desc: "The industry forced you to pick between synthetic itch-inducing lace or uninspiring granny panties. At V-Lush, we dismantle that false dichotomy.",
      tabExterior: "Outer Face: Sensual Lace",
      tabInterior: "Inner Sanctuary: Gyno-Safe Zone",
      badgeExterior: "High-Recovery Italian Satin Lace",
      badgeInterior: "100% Raw Virgin Organic Cotton (GOTS)",
      hotspotOverlay: "Double-layered with inverted flatlock seams",
      photoRealNote: "Actual photograph of Sample #01 prototype",
      atelierNote: "Atelier: Braga, Northern Portugal",
      interiorTag: "THE HEART OF V-LUSH",
      interiorTitle: "The «Gyno & Skin-Safe» Intimate Gusset",
      interiorDesc:
        "Intimate flora requires breathability and a balanced pH. Synthetic dyed fabrics trap heat and disrupt the microbiome. Our gusset is a biological sanctuary.",
      interiorPoint1Title: "Extra Ergonomic Width (8.2 cm vs 4.5 cm)",
      interiorPoint1Desc:
        "Fully shields the vulvar and mucosal zone without sliding sideways, preventing coarse lace from coming into direct contact with sensitive skin.",
      interiorPoint2Title: "Zero Chlorine Bleach, Zero Synthetic Dyes",
      interiorPoint2Desc:
        "Virgin cotton in its natural raw ivory hue (you can spot tiny natural specks of the cotton plant). Free from azo compounds and formaldehyde.",
      interiorPoint3Title: "Inverted Flatlock Seamless Seaming",
      interiorPoint3Desc:
        "The seam edge is sealed facing outwards. Zero friction in the inguinal folds while walking, sitting, or working out.",
      exteriorTag: "EXTERIOR DESIGN & ERGONOMICS",
      exteriorTitle: "Soft-Touch Geometric Lace & Sculptural Silhouettes",
      exteriorDesc:
        "Health-first lingerie does not have to resemble orthopedic garments. Our silhouettes are bold, sophisticated, and celebrate full anatomical diversity.",
      exteriorPoint1Title: "Itch-Free Geometric and Floral Lace",
      exteriorPoint1Desc:
        "Ultra-fine recycled polyamide with shape-memory elastane that embraces your curves without digging in or leaving red pressure marks.",
      exteriorPoint2Title: "Feminine Line + Unisex / Fluid Line",
      exteriorPoint2Desc:
        "Patterns engineered for diverse anatomies: from provocative Cheeky and Thong cuts to body-affirming sheer neutral boxer briefs.",
      exteriorPoint3Title: "Satin Trims and Nickel-Free Hardware",
      exteriorPoint3Desc:
        "Accents in deep burgundy and obsidian graphite with 100% hypoallergenic, nickel-free brass rings.",
      tableClinical: "Clinical Parameter",
      tableConventional: "Conventional",
      tableVlush: "V-Lush Atelier",
      tableRow1Name: "Gusset Width",
      tableRow1Conv: "4.0 - 5.0 cm",
      tableRow1Vlush: "8.2 - 9.5 cm",
      tableRow2Name: "Fabric Bleaching",
      tableRow2Conv: "Chlorine / Optical brighteners",
      tableRow2Vlush: "100% Raw unbleached",
      tableRow3Name: "Microbiome Friendly",
      tableRow3Conv: "Low / Moderate",
      tableRow3Vlush: "Optimal (pH 5.5)",
    },
    catalog: {
      badge: "Limited Release",
      title: "Pre-Order Catalog (Batch #01)",
      desc: "Special co-founding prices. Reserve now to receive in December inside our limited edition compostable packaging.",
      filterAll: "All Silhouettes",
      filterFemale: "Feminine Line (Cheeky, Thong, Strappy)",
      filterUnisex: "Unisex & Fluid Line (Anatomical)",
      filterTrios: "3-Packs (75 € - 85 €)",
      seeAllLink: "View all technical specs and size guide",
      sizeGuideBtn: "Size Guide & Anatomical Fit",
      sizeGuideHide: "Hide Size Guide",
      sizeGuideTitle: "V-Lush Anatomical Measurement Guide (XS - XXL)",
      sizeGuideBadge: "Multi-directional Soft-Touch Stretch",
      sizeGuideDesc:
        "Our garments feature 12-15% memory elastane. If you fall between two sizes, choose the smaller size for a snug fit or the larger size for relaxed everyday comfort.",
      colSize: "Size",
      colHips: "Hips (cm)",
      colWaist: "Waist (cm)",
      colEu: "EU Equivalent",
      colGusset: "Gusset Width",
    },
    product: {
      trioAhorro: "Save with Trio",
      infoBtn: "Info",
      closeBtn: "Close",
      outerLabel: "Outer",
      gussetLabel: "Inner Gusset",
      originLabel: "Origin",
      selectSize: "Select Size",
      reserveBtn: "Pre-Order Now",
      lineFemale: "Feminine Line",
      lineUnisex: "Unisex & Fluid Line",
    },
    quickModal: {
      badge: "Pilot Batch Reservation • December Delivery",
      subhead: "Secure your size before we send cut orders to Braga & Łódź ateliers.",
      trioQuestion: "Upgrade to the 3-Pack Bundle?",
      trioSub: "3 signature pieces in a luxury gift box for only",
      trioActivated: "3-Pack Activated",
      trioAdd: "Add 3-Pack",
      sizeLabel: "Selected Size:",
      nameLabel: "Full Name",
      namePlaceholder: "e.g. Marie Becker",
      emailLabel: "Email Address",
      emailPlaceholder: "marie@example.com",
      countryLabel: "Shipping Country (EU)",
      addressLabel: "Delivery Address & City",
      addressPlaceholder: "Street, number, postal code, and city",
      totalLabel: "Pre-order Total:",
      confirmBtn: "Confirm Pre-Order",
      confirmingBtn: "Confirming...",
      guaranteeNote: "V-Lush Guarantee: No hidden charges, carbon-neutral shipping.",
      successTitle: "Your Pre-Order is Secured!",
      successDesc: "Thank you so much. We have secured your piece in Pilot Batch #01.",
      successDest: "Destination:",
      successTotal: "Pre-order Total:",
      successDelivery: "Estimated Delivery: December 2026 (DHL GoGreen)",
      closeModalBtn: "Close & Continue Exploring",
    },
    manifesto: {
      badge: "The V-Lush Manifesto",
      quote:
        "«Your intimate skin absorbs chemicals five times faster than the rest of your body. We refuse to accept that you must choose between feeling desired and feeling healthy.»",
      desc: "Marie combined her background in psychology and business to analyze the connection between body confidence and physical well-being. Her partner brought environmental engineering rigor: eliminating plastic from packaging and manufacturing solely in the European Union.",
      point1: "Ateliers in Braga & Łódź",
      point2: "100% Raw Virgin GOTS Cotton",
      point3: "Plastic-Free Packaging",
    },
    sustainabilitySection: {
      badge: "Conscious Supply Chain",
      title: "Born from the earth, delivered without footprint",
      desc: "Each pre-order ships in our FSC recycled kraft box sealed with water-activated potato-starch tape and acid-free tissue paper. 100% home-compostable with your organic food scraps.",
      check1Title: "Ethical European Manufacturing",
      check1Desc: "Crafted in Portugal and Poland under fair living wages and transparent working conditions.",
      check2Title: "DHL GoGreen",
      check2Desc: "Every gram of CO2 emitted during transit across the EU is audited and compensated through verified climate projects.",
      check3Title: "Zero Overproduction",
      check3Desc: "We only manufacture the exact pieces our community co-funds during the pre-order campaign.",
      linkAudit: "Read our full ecological supply chain audit",
    },
    footer: {
      badge1Title: "Gyno & Skin-Safe",
      badge1Desc: "Undyed organic cotton",
      badge2Title: "Zero Plastic",
      badge2Desc: "100% compostable kraft boxes",
      badge3Title: "Ethical European Make",
      badge3Desc: "Ateliers in Portugal & Poland",
      badge4Title: "DHL GoGreen",
      badge4Desc: "Carbon-neutral logistics",
      tagline: "Pure where it matters, sensual everywhere else.",
      bio: "Founded by Marie (Business Management & Psychology) and her partner (Environmental Protection & Sourcing). We craft the lingerie the industry ignored: authentic high sensuality married to radical gynecological care.",
      designIn: "Design Studio: Berlin / Manufacturing: Braga & Łódź",
      certifiedGots: "GOTS & OEKO-TEX Standard 100 Certified Fibers",
      exploreTitle: "Explore",
      catalogLink: "Pre-Order Catalog",
      femaleLink: "Feminine Line",
      unisexLink: "Unisex & Fluid Line",
      manifestoLink: "Manifesto & Origin",
      sustainabilityLink: "Supply Chain",
      governanceTitle: "Governance",
      hubLink: "Founders Hub (/hub)",
      dossierLink: "Project Dossier",
      samplesLink: "Sample Tracking",
      financesLink: "Launch Finances",
      newsletterTitle: "Access Future Batches",
      newsletterDesc: "Join our intimate circle for production updates, behind-the-scenes glimpses, and limited capsule releases.",
      newsletterSuccess: "Thank you! You have been added to the V-Lush priority list.",
      copyright: "2026 V-Lush Lingerie UG. All rights reserved.",
      shippingEu: "Shipping across Germany and the European Union",
      legalLink: "Legal Notice & Privacy",
      privateLink: "Private Access",
    },
    storyPage: {
      badge: "Origin & Manifesto",
      title: "Born to banish pain from sensuality",
      subtitle: "For decades, the lingerie market offered two cruel extremes: bland orthopedic cotton or toxic plastic lace that wrecks genital flora.",
      photoLabel: "Design & anatomical prototyping studio • Berlin & Braga",
      intersectionBadge: "The Human Intersection",
      intersectionTitle: "Well-Being Psychology Meets Environmental Rigor",
      p1: "Marie studied Business Management and Behavioral Psychology. In her research and intimate conversations with friends and peers, she identified a silent epidemic: nearly everyone wearing attractive lace lingerie suffered from contact dermatitis, recurrent yeast infections, or painful chafing in the groin. The medical advice was always the same: «Just stick to oversized plain white cotton briefs».",
      p2: "To Marie, that meant asking individuals to sacrifice their desire, confidence, and erotic self-expression.",
      p3: "Meanwhile, her partner, an environmental management engineer, was appalled by the greenwashing in fashion: luxury brands charging €70 for virgin polyester sets sewn in precarious conditions and wrapped in single-use plastic.",
      p4: "Together they established an inviolable rule: V-Lush would only launch if we could engineer show-stopping luxury lingerie with a 100% pure, hypoallergenic sanctuary gusset and an ethical, transparent European supply chain.",
      quoteText: "«Vulvar skin absorbs environmental substances five times faster than the rest of the body. What touches it isn't just fashion—it is biological health.»",
      quoteAuthor: "— Marie, Co-Founder of V-Lush",
      pillarsBadge: "Our Pillars",
      pillarsTitle: "The 4 Inviolable Commitments",
      pillar1Title: "Gyno-Safe Zone",
      pillar1Desc: "An 8.2 cm inner gusset of GOTS certified raw organic cotton with no synthetic dyes, zero chlorine bleach, and neutral pH.",
      pillar2Title: "Authentic Inclusivity",
      pillar2Desc: "Feminine and Unisex/Fluid lines created for diverse gender identities and pelvic anatomies with body-affirming comfort.",
      pillar3Title: "Ethical Ateliers",
      pillar3Desc: "Artisanal craftsmanship in historic ateliers in Braga (Portugal) and Łódź (Poland) with living wages and SMETA audits.",
      pillar4Title: "100% Circularity",
      pillar4Desc: "Zero-plastic packaging, compostable paper tape, and carbon-neutral deliveries across Europe via DHL GoGreen.",
      ctaBtn: "Explore the Pre-Order Collection",
    },
    sustainabilityPage: {
      badge: "Radical Transparency",
      title: "The V-Lush Ethical Custody Chain",
      desc: "Our environmental commitment is not marketing copy—it is an audited design standard from organic farming to your doorstep.",
      cottonBadge: "1. RAW ORGANIC COTTON (GOTS CERTIFIED)",
      cottonTitle: "No bleach, no toxic pesticides, no azo dyes",
      cottonP1: "Conventional cotton consumes up to 2,700 liters of water per garment and relies on harsh chlorine bleaching. For our intimate gusset, we exclusively source virgin raw cotton that remains completely untreated by synthetic chemicals.",
      cottonBullet1: "GOTS (Global Organic Textile Standard) Medical Grade Certification.",
      cottonBullet2: "Substantial 180 gsm weight ensuring breathability and resilience over 100+ wash cycles.",
      cottonBullet3: "Raw unbleached ivory hue: you can observe subtle natural botanical specks from the organic cotton plant.",
      traceabilityBadge: "End-to-End Traceability",
      traceabilityTitle: "From Europe for Europe: Our 4 Milestones",
      step1Title: "1. Clean Spinning & Weaving",
      step1Desc: "EcoFabrics Iberia (Portugal): Regenerative organic farming spun in solar-powered textile mills.",
      step2Title: "2. Artisanal Tailoring",
      step2Desc: "Braga (Portugal) & Łódź (Poland): Century-old workshops specializing in corsetry and flatlock seaming.",
      step3Title: "3. 100% Circular Packaging",
      step3Desc: "BioPack EU (Germany): FSC micro-flute kraft mailers with potato-starch adhesive tape. Fully home-compostable.",
      step4Title: "4. DHL GoGreen Logistics",
      step4Desc: "Carbon-Neutral Delivery: Rapid ground transit in Germany (24-48h) and across Europe with audited GHG offset.",
      lcaBadge: "Life Cycle Assessment (LCA)",
      lcaTitle: "0 grams of single-use plastic per shipment",
      lcaDesc: "The fast-fashion industry packages every brief in a polyethylene pouch that takes 450 years to break down. At V-Lush, every order arrives swaddled in plant-based parchment and a kraft box that biodegrades in your backyard compost.",
      ctaBtn: "Reserve My Ethical Batch",
    },
    checkoutPage: {
      badge: "Batch #01 Campaign",
      title: "Pre-Order Reservation",
      subtitle: "Co-fund European manufacturing and lock in protected early-bird pricing.",
      step1: "Select Your Piece or Pack",
      step2: "European Union Shipping Details",
      step3: "Secure Payment Method",
      sizeLabel: "Anatomical Size:",
      qtyLabel: "Quantity:",
      nameLabel: "Full Name",
      emailLabel: "Email Address for Production Updates",
      addressLabel: "Street Address and Number",
      zipLabel: "Postal Code",
      cityLabel: "City",
      countryLabel: "Country (European Union)",
      cardMethod: "Credit Card / Apple Pay",
      klarnaMethod: "Pay in December",
      paypalMethod: "Express PayPal",
      securityNote: "256-bit SSL encrypted checkout. No surprise fees.",
      submitBtn: "Confirm Pre-Order Reservation",
      summaryTitle: "Your Reservation Summary",
      gussetTag: "Gyno-Safe Gusset 100% Raw Cotton",
      shippingDeFree: "Free",
      totalLabel: "Guaranteed Total:",
      timelineTitle: "Batch #01 Production Timeline",
      timelineOct: "October: Pre-order close and GOTS raw cotton mill order.",
      timelineNov: "November: Tailoring in Braga (Portugal) and inspection.",
      timelineDec: "December: Shipped to your doorstep before the holidays.",
      sizeExchangePerk: "Free size exchange if your fit isn't immaculate.",
      refundPerk: "Full refund guarantee if the batch doesn't meet the production MOQ.",
      confirmedBadge: "Official Pre-Order Secured",
      confirmedTitle: "Welcome to the V-Lush Circle!",
      confirmedDesc: "We have emailed your digital pre-order receipt and certificate to",
      orderNumberLabel: "Order Number:",
      reservedItemLabel: "Reserved Piece:",
      selectedSizeLabel: "Selected Size:",
      countryDestLabel: "Destination Country:",
      estimatedDeliveryLabel: "Estimated Delivery:",
      estimatedDeliveryVal: "December 2026 (DHL GoGreen Neutral)",
      totalPaidLabel: "Total Paid:",
      giftNote: "Your order includes the complimentary numbered Pilot Batch #01 kraft keepsake box and washable lingerie pouch.",
      returnHome: "Return to Homepage",
      checkHub: "View Progress in Founders Hub",
    },
    hub: {
      headerOverview: "FOUNDERS OVERVIEW • PILOT BATCH #01",
      headerDesc: "Pre-order momentum, sales metrics, and thresholds to activate Braga and Łódź ateliers.",
      btnTasks: "View Tasks (Marie & Partner)",
      btnDossier: "Technical Dossier",
      kpiRaised: "Pre-Order Revenue",
      kpiRaisedSub: "+100% Bootstrapped without debt",
      kpiMoq: "Factory MOQ Progress",
      kpiMoqSub: "pieces",
      kpiBudget: "Initial Seed Capital",
      kpiBudgetSub: "Prototyping spend:",
      kpiCashflow: "Net positive cashflow",
      kpiOrders: "Confirmed Orders",
      kpiOrdersSub: "Average order value:",
      thresholdTitle: "Pilot Batch Production Target: 100 Units",
      thresholdDesc: "Confeções do Norte (Braga) requires a 100-unit commitment to reserve the cutting table for November.",
      thresholdBtn: "View Atelier Tracking",
      sizesTitle: "Demand by Size Distribution",
      sizesDesc: "Grading blueprint for atelier pattern makers",
      sizesBadge: "Demand Curve",
      sizesTop: "Top Requested Size: Size M (42% of pledges)",
      modelsTitle: "Model & Line Popularity",
      modelsDesc: "Feminine vs Unisex & Fluid",
      modelsBadgeF: "Feminine Line (71%)",
      modelsBadgeU: "Unisex / Fluid (29%)",
      ordersTableTitle: "Pre-Order Ledger (Real-Time)",
      ordersTableDesc: "Directly synced with database and customer checkout records",
      colCustomer: "Customer",
      colItem: "Item",
      colSize: "Size",
      colQty: "Qty",
      colAmount: "Amount",
      colCountry: "Country",
      colStatus: "Status",
      statusConfirmed: "Confirmed",
    },
  },
  de: {
    nav: {
      collections: "Kollektionen",
      story: "Manifest",
      sustainability: "Nachhaltigkeit",
      hub: "Gründer-Hub",
      preorder: "Vorbestellen",
      tagline: "Pure & Sensual Atelier",
      menuLabel: "Menü öffnen",
    },
    hero: {
      badge: "Sinnliche Haute Couture • Gyno-Safe & Body-Affirming",
      headlinePart1: "Rein, wo es zählt.",
      headlinePart2: "Sinnlich überall sonst.",
      subheadline:
        "Sinnliche europäische Lingerie mit einem biologischen Schutzraum: Ein Inneneinsatz aus 100% ungebleichter, unbedruckter Bio-Baumwolle. Die Freiheit, sich begehrenswert zu fühlen, ohne den Preis von Hautirritationen zu zahlen.",
      foundersBadge: "Gegründet von Marie & Partner",
      foundersCreds: "Verhaltenspsychologie & Umweltschutz (Berlin)",
      ctaPreorder: "Mein Modell vorbestellen",
      ctaExplore: "Kollektion entdecken",
      registeredPattern: "Geschütztes Schnittmuster",
      gussetFeatureTitle: "Innovation: Gyno-Safe Zwickel",
      gussetFeatureDesc:
        "Auf 8,2 cm verbreiterter Steg aus ungebleichter Bio-Baumwolle. Ohne Chemiefarben, ohne Brennen.",
    },
    batch: {
      pilotBadge: "Offizielle Vorbestellung • Pilot-Charge #01",
      title: "Kofinanziere unsere erste europäische Kleinserie",
      desc: "Wir fertigen auf ethische Nachfrage (On-Demand), um Überproduktion zu verhindern. Jede Vorbestellung sichert GOTS-Rohbaumwolle und Nähkapazitäten in unseren Partnerateliers in Braga und Łódź.",
      reservedLabel: "Reservierte Einheiten",
      statusLabel: "Status",
      remainingLabel: "Es fehlen nur noch",
      perk1: "Exklusiver Vorbestellpreis mit bis zu 20% Ersparnis",
      perk2: "Nummerierte, 100% kompostierbare Kraftbox",
      perk3: "Priorisierter DHL GoGreen CO2-neutraler Versand (Dezember)",
      ctaReserve: "Jetzt meine Größe sichern",
      ctaCatalog: "Katalog ansehen",
    },
    fabric: {
      badge: "Technische Textilinnovation",
      title: "Rein, wo es zählt. Sinnlich überall sonst.",
      desc: "Die Unterwäsche-Industrie zwang dich, zwischen juckender Synthetikspitze oder formloser Baumwollunterwäsche zu wählen. Bei V-Lush überwinden wir diesen falschen Kompromiss.",
      tabExterior: "Außenseite: Sinnliche Spitze",
      tabInterior: "Innenseite: Gyno-Safe Zone",
      badgeExterior: "Italienische Soft-Touch Spitze",
      badgeInterior: "100% Ungebleichte Roh-Biobaumwolle (GOTS)",
      hotspotOverlay: "Doppellagig mit umgekehrten Flachnähten",
      photoRealNote: "Echtes Foto des Musters #01",
      atelierNote: "Atelier: Braga, Nordportugal",
      interiorTag: "DAS HERZSTÜCK VON V-LUSH",
      interiorTitle: "Der «Gyno & Skin-Safe» Zwickel",
      interiorDesc:
        "Die Intimflora benötigt Atmungsaktivität und einen ausgeglichenen pH-Wert. Synthetische gefärbte Stoffe stauen Wärme und schädigen das Mikrobiom. Unser Zwickel ist ein biologischer Schutzraum.",
      interiorPoint1Title: "Ergonomische Überbreite (8,2 cm vs. 4,5 cm)",
      interiorPoint1Desc:
        "Bedeckt den gesamten Vulvabereich zuverlässig, ohne zu verrutschen, sodass raue Spitze niemals die empfindliche Schleimhaut berührt.",
      interiorPoint2Title: "Ohne Chlorbleiche, Ohne Chemische Farbstoffe",
      interiorPoint2Desc:
        "Reine Bio-Baumwolle im natürlichen Rohweiß (feine Spuren der Baumwollpflanze sind sichtbar). Frei von krebserregenden Azofarben und Formaldehyd.",
      interiorPoint3Title: "Umgekehrte Flachnähte (Flatlock)",
      interiorPoint3Desc:
        "Die Nahtkante ist nach außen verlegt. Absolut kein Scheuern in den Leistenbeugen beim Gehen, Sitzen oder Sport.",
      exteriorTag: "DESIGN & ÄSTHETIK",
      exteriorTitle: "Weiche geometrische Spitze & skulpturale Schnitte",
      exteriorDesc:
        "Dass Unterwäsche gesund ist, bedeutet nicht, dass sie wie ein Sanitätsartikel aussehen muss. Unsere Silhouetten zelebrieren pure Erotik und körperliche Vielfalt.",
      exteriorPoint1Title: "Kratzfreie geometrische & florale Spitze",
      exteriorPoint1Desc:
        "Feinstes recyceltes Polyamid mit hochelastischem Elasthan, das sich sanft an die Hüften schmiegt, ohne einzuschneiden.",
      exteriorPoint2Title: "Linie Für Frauen + Unisex / Fluid Linie",
      exteriorPoint2Desc:
        "Maßgeschneiderte Schnitte für unterschiedliche Körperformen: Von Cheeky und Thong bis hin zu körperbejahenden transparenten Boxershorts.",
      exteriorPoint3Title: "Satindetails & Nickelfreie Beschläge",
      exteriorPoint3Desc:
        "Nuancen in tiefem Burgunderrot und Graphitschwarz mit 100% hypoallergenen, nickelfreien Ringen.",
      tableClinical: "Klinischer Parameter",
      tableConventional: "Herkömmlich",
      tableVlush: "V-Lush Atelier",
      tableRow1Name: "Stegbreite (Zwickel)",
      tableRow1Conv: "4,0 - 5,0 cm",
      tableRow1Vlush: "8,2 - 9,5 cm",
      tableRow2Name: "Stoffbehandlung",
      tableRow2Conv: "Chlor / Optische Aufheller",
      tableRow2Vlush: "100% Roh & ungebleicht",
      tableRow3Name: "Mikrobiom-Freundlichkeit",
      tableRow3Conv: "Mäßig / Gering",
      tableRow3Vlush: "Optimal (pH 5.5)",
    },
    catalog: {
      badge: "Limitierte Edition",
      title: "Vorbestell-Katalog (Charge #01)",
      desc: "Exklusive Gründerpreise. Jetzt reservieren und im Dezember in unserer nachhaltigen Geschenkbox erhalten.",
      filterAll: "Alle Modelle",
      filterFemale: "Linie für Frauen (Cheeky, Thong, Strappy)",
      filterUnisex: "Unisex & Fluid Linie (Anatomisch)",
      filterTrios: "3er-Packs (75 € - 85 €)",
      seeAllLink: "Alle Maße & Größentabelle einsehen",
      sizeGuideBtn: "Größentabelle & Passform",
      sizeGuideHide: "Tabelle schließen",
      sizeGuideTitle: "V-Lush Anatomische Maßtabelle (XS - XXL)",
      sizeGuideBadge: "Multidirektionaler Soft-Touch Stretch",
      sizeGuideDesc:
        "Unsere Stoffe besitzen 12-15% Memory-Elasthan. Wenn du zwischen zwei Größen liegst, wähle die kleinere für eng anliegenden Sitz oder die größere für entspannten Komfort.",
      colSize: "Größe",
      colHips: "Hüfte (cm)",
      colWaist: "Taille (cm)",
      colEu: "EU-Größe",
      colGusset: "Zwickelbreite",
    },
    product: {
      trioAhorro: "3er-Vorteil",
      infoBtn: "Details",
      closeBtn: "Schließen",
      outerLabel: "Außen",
      gussetLabel: "Zwickel",
      originLabel: "Herkunft",
      selectSize: "Größe wählen",
      reserveBtn: "Vorbestellen",
      lineFemale: "Linie für Frauen",
      lineUnisex: "Unisex & Fluid Linie",
    },
    quickModal: {
      badge: "Reservierung Pilot-Charge • Lieferung Dezember",
      subhead: "Sichere dir deine Größe vor Zuschnittbeginn in Braga & Łódź.",
      trioQuestion: "Möchtest du das 3er-Sparpaket?",
      trioSub: "3 Modelle in edler Kraftbox für nur",
      trioActivated: "3er-Paket gewählt",
      trioAdd: "3er-Paket wählen",
      sizeLabel: "Gewünschte Größe:",
      nameLabel: "Vollständiger Name",
      namePlaceholder: "z.B. Marie Becker",
      emailLabel: "E-Mail-Adresse",
      emailPlaceholder: "marie@beispiel.de",
      countryLabel: "Lieferland (EU)",
      addressLabel: "Lieferadresse (Straße, Hausnr., PLZ, Stadt)",
      addressPlaceholder: "Kastanienallee 12, 10119 Berlin",
      totalLabel: "Gesamtbetrag Vorbestellung:",
      confirmBtn: "Vorbestellung Bestätigen",
      confirmingBtn: "Wird bestätigt...",
      guaranteeNote: "V-Lush Garantie: Keine versteckten Kosten, klimaneutraler Versand.",
      successTitle: "Deine Reservierung ist bestätigt!",
      successDesc: "Vielen Dank. Deine Bestellung für die Pilot-Charge #01 wurde gesichert.",
      successDest: "Lieferziel:",
      successTotal: "Vorbestellsumme:",
      successDelivery: "Voraussichtliche Lieferung: Dezember 2026 (DHL GoGreen)",
      closeModalBtn: "Schließen & Weiterstöbern",
    },
    manifesto: {
      badge: "Das V-Lush Manifest",
      quote:
        "«Deine Intimhaut nimmt chemische Substanzen fünfmal schneller auf als der Rest deines Körpers. Wir akzeptieren nicht, dass du zwischen Erotik und Gesundheit wählen musst.»",
      desc: "Marie nutzte ihr Studium der Wirtschaftspsychologie, um den Zusammenhang zwischen Körpervertrauen und Wohlbefinden zu erforschen. Ihr Partner brachte Umwelt-Engineering ein: Verzicht auf Plastik und konsequente Fertigung in der Europäischen Union.",
      point1: "Ateliers in Braga & Łódź",
      point2: "100% GOTS Roh-Biobaumwolle",
      point3: "100% Plastikfreie Verpackung",
    },
    sustainabilitySection: {
      badge: "Verantwortungsvolle Lieferkette",
      title: "Aus der Natur geschaffen, ohne Fußabdruck geliefert",
      desc: "Jede Bestellung wird in unserer FSC-zertifizierten Kraftpapierbox mit Kartoffelstärke-Klebeband und säurefreiem Seidenpapier versendet. 100% im eigenen Hausmüll kompostierbar.",
      check1Title: "Ethische Fertigung in Europa",
      check1Desc: "Produktion in Portugal und Polen mit fairen Löhnen und transparenten Arbeitsbedingungen.",
      check2Title: "DHL GoGreen",
      check2Desc: "Jedes Gramm CO2, das beim Transport innerhalb der EU entsteht, wird durch zertifizierte Klimaschutzprojekte ausgeglichen.",
      check3Title: "Null Überproduktion",
      check3Desc: "Wir produzieren ausschließlich die Stückzahlen, die unsere Community in der Vorbestellung kofinanziert.",
      linkAudit: "Lies unseren vollständigen Umwelt-Auditbericht",
    },
    footer: {
      badge1Title: "Gyno & Skin-Safe",
      badge1Desc: "Ungefärbte Bio-Baumwolle",
      badge2Title: "Ohne Plastik",
      badge2Desc: "100% kompostierbare Kraftboxen",
      badge3Title: "Faire Fertigung in Europa",
      badge3Desc: "Ateliers in Portugal & Polen",
      badge4Title: "DHL GoGreen",
      badge4Desc: "CO2-neutraler EU-Versand",
      tagline: "Pure where it matters, sensual everywhere else.",
      bio: "Gegründet von Marie (Betriebswirtschaft & Psychologie) und ihrem Partner (Umweltschutz & Sourcing). Wir schaffen die Dessous, die der Markt vergaß: Kompromisslose Sinnlichkeit vereint mit gynäkologischem Schutz.",
      designIn: "Designstudio: Berlin / Fertigung: Braga & Łódź",
      certifiedGots: "GOTS & OEKO-TEX Standard 100 zertifizierte Fasern",
      exploreTitle: "Entdecken",
      catalogLink: "Vorbestell-Katalog",
      femaleLink: "Linie für Frauen",
      unisexLink: "Unisex & Fluid Linie",
      manifestoLink: "Manifest & Ursprung",
      sustainabilityLink: "Lieferkette",
      governanceTitle: "Unternehmensführung",
      hubLink: "Gründer-Hub (/hub)",
      dossierLink: "Projektdossier",
      samplesLink: "Muster-Tracking",
      financesLink: "Finanzübersicht",
      newsletterTitle: "Zugang zu künftigen Chargen",
      newsletterDesc: "Melde dich an für Updates zur Produktion, Einblicke in die Ateliers und limitierte Kapsel-Kollektionen.",
      newsletterSuccess: "Danke! Du wurdest auf die V-Lush Prioritätsliste gesetzt.",
      copyright: "2026 V-Lush Lingerie UG. Alle Rechte vorbehalten.",
      shippingEu: "Versand nach Deutschland und in die gesamte EU",
      legalLink: "Impressum & Datenschutz",
      privateLink: "Interner Zugang",
    },
    storyPage: {
      badge: "Ursprung & Manifest",
      title: "Entstanden, um den Schmerz aus der Sinnlichkeit zu verbannen",
      subtitle: "Seit Jahrzehnten zwang die Modeindustrie zu zwei grausamen Extremen: Frustrierende Sanitätshaus-Baumwolle oder hautschädigende Plastikspitze.",
      photoLabel: "Design- & Prototyping-Studio • Berlin & Braga",
      intersectionBadge: "Die Menschliche Schnittstelle",
      intersectionTitle: "Psychologie des Wohlbefindens trifft auf Umweltpräzision",
      p1: "Marie studierte Betriebswirtschaft und Psychologie. In ihrer Forschung und in vertrauten Gesprächen mit Freundinnen stieß sie auf ein verschwiegenes Dauerthema: Fast jede Person, die verführerische Spitzenwäsche trug, litt unter Kontaktdermatitis, Pilzinfektionen oder Scheuerstellen. Die ärztliche Empfehlung lautete stets: «Tragen Sie einfach nur weiße Baumwollslips».",
      p2: "Für Marie bedeutete das: Man verlangte von Menschen, auf ihr Begehren, ihre Erotik und ihr Selbstwertgefühl zu verzichten.",
      p3: "Ihr Partner und Mitgründer, Experte für Umweltmanagement, hatte genug vom Greenwashing: Modemarken, die 70 € für ein Polyester-Set verlangen, das unter prekären Bedingungen genäht und in Plastikbeutel verpackt wird.",
      p4: "Gemeinsam stellten sie eine unumstößliche Regel auf: V-Lush existiert nur dann, wenn wir atemberaubende Luxus-Dessous mit einem 100% hautgesunden, hypoallergenen Zwickel und einer transparenten europäischen Lieferkette fertigen können.",
      quoteText: "«Die Haut im Intimbereich absorbiert Stoffe fünfmal schneller als jede andere Körperstelle. Was sie berührt, ist keine Nebensache—es ist biologische Gesundheit.»",
      quoteAuthor: "— Marie, Mitgründerin von V-Lush",
      pillarsBadge: "Unsere Säulen",
      pillarsTitle: "Die 4 Unverhandelbaren Versprechen",
      pillar1Title: "Gyno-Safe Zone",
      pillar1Desc: "8,2 cm breiter Inneneinsatz aus GOTS-zertifizierter Roh-Biobaumwolle ohne Farbstoffe, Chlor oder synthetische Zusätze.",
      pillar2Title: "Echte Inklusion",
      pillar2Desc: "Frauen- und Unisex/Fluid-Linien, passend für verschiedene Geschlechter und Beckenanatomien, frei von Tabus.",
      pillar3Title: "Ethische Ateliers",
      pillar3Desc: "Traditionsreiche Handwerksbetriebe in Braga (Portugal) und Łódź (Polen) mit fairen Löhnen und geprüften Arbeitsstandards.",
      pillar4Title: "100% Zirkularität",
      pillar4Desc: "Kompostierbare Kartonagen, Verzicht auf Plastikfolien und klimaneutraler Versand mit DHL GoGreen.",
      ctaBtn: "Kollektion zur Vorbestellung ansehen",
    },
    sustainabilityPage: {
      badge: "Radikale Transparenz",
      title: "Die ethische Lieferkette von V-Lush",
      desc: "Unsere Umweltverantwortung ist kein Werbeversprechen, sondern ein überprüfter Designstandard vom Baumwollfeld bis zu deiner Haustür.",
      cottonBadge: "1. ROH-BIOBAUMWOLLE (GOTS-ZERTIFIZIERT)",
      cottonTitle: "Ohne Bleiche, ohne Pestizide, ohne Chemiefarben",
      cottonP1: "Konventionelle Baumwolle verbraucht bis zu 2.700 Liter Wasser pro Stück und wird mit aggressiven Chemikalien gebleicht. Für unseren Zwickel nutzen wir ausschließlich naturbelassene Rohbaumwolle, die chemisch völlig unbehandelt bleibt.",
      cottonBullet1: "GOTS (Global Organic Textile Standard) Medizingrad-Zertifizierung.",
      cottonBullet2: "Dichtes 180 gsm Gewebe für maximale Atmungsaktivität und Haltbarkeit über 100+ Waschgänge.",
      cottonBullet3: "Naturbelassener Elfenbeinton: Feine pflanzliche Spuren der Bio-Baumwolle bleiben im Stoff sichtbar.",
      traceabilityBadge: "Lückenlose Rückverfolgbarkeit",
      traceabilityTitle: "Aus Europa für Europa: Unsere 4 Stationen",
      step1Title: "1. Saubere Spinnerei",
      step1Desc: "EcoFabrics Iberia (Portugal): Regenerativer Anbau und Spinnen mit Solarenergie.",
      step2Title: "2. Handwerkliche Konfektion",
      step2Desc: "Braga (Portugal) & Łódź (Polen): Ateliers mit jahrzehntelanger Tradition in Miederwaren und Flachnahttechnik.",
      step3Title: "3. 100% Zirkuläre Verpackung",
      step3Desc: "BioPack EU (Deutschland): FSC-Wellpappe ohne Kunststoffbeschichtung mit Kartoffelstärkeklebeband. Zu 100% kompostierbar.",
      step4Title: "4. DHL GoGreen",
      step4Desc: "CO2-Neutraler Transport: Zuverlässige Zustellung in Deutschland (24-48h) und EU-weit mit zertifiziertem Emissionsausgleich.",
      lcaBadge: "Lebenszyklus-Audit (LCA)",
      lcaTitle: "0 Gramm Einwegplastik pro Sendung",
      lcaDesc: "In der Fast-Fashion-Branche wird jedes Wäschestück in Plastikbeuteln versandt, die 450 Jahre zum Verrotten brauchen. Bei V-Lush reist jedes Stück in pflanzlichem Seidenpapier und einem Karton, den du auf dem Balkon kompostieren kannst.",
      ctaBtn: "Mein ethisches Set sichern",
    },
    checkoutPage: {
      badge: "Kampagne Charge #01",
      title: "Vorbestellung & Reservierung",
      subtitle: "Kofinanziere die europäische Produktion und sichere dir deinen Vorzugspreis.",
      step1: "Wähle dein Modell oder Sparpaket",
      step2: "Lieferadresse in der Europäischen Union",
      step3: "Sichere Zahlungsmethode",
      sizeLabel: "Größe:",
      qtyLabel: "Menge:",
      nameLabel: "Vor- und Nachname",
      emailLabel: "E-Mail-Adresse für Produktionsupdates",
      addressLabel: "Straße und Hausnummer",
      zipLabel: "Postleitzahl",
      cityLabel: "Stadt",
      countryLabel: "Land (Europäische Union)",
      cardMethod: "Kreditkarte / Apple Pay",
      klarnaMethod: "Zahlung im Dezember",
      paypalMethod: "PayPal Express",
      securityNote: "256-Bit SSL-verschlüsselte Bezahlung. Keine Überraschungskosten.",
      submitBtn: "Vorbestellung Bestätigen",
      summaryTitle: "Zusammenfassung deiner Reservierung",
      gussetTag: "Gyno-Safe Zwickel aus 100% Rohbaumwolle",
      shippingDeFree: "Kostenlos",
      totalLabel: "Garantierter Gesamtbetrag:",
      timelineTitle: "Produktionszeitplan Charge #01",
      timelineOct: "Oktober: Abschluss der Vorbestellungen & Kauf der GOTS-Stoffrollen.",
      timelineNov: "November: Konfektion im Atelier in Braga (Portugal) & Qualitätsprüfung.",
      timelineDec: "Dezember: Lieferung zu dir nach Hause rechtzeitig vor den Feiertagen.",
      sizeExchangePerk: "Kostenloser Größenumtausch, falls die Passform nicht perfekt ist.",
      refundPerk: "Volle Geld-zurück-Garantie, falls die Mindestmenge nicht erreicht wird.",
      confirmedBadge: "Offizielle Vorbestellung Bestätigt",
      confirmedTitle: "Willkommen im V-Lush Kreis!",
      confirmedDesc: "Wir haben deine digitale Bestellbestätigung gesendet an",
      orderNumberLabel: "Bestellnummer:",
      reservedItemLabel: "Reservierter Artikel:",
      selectedSizeLabel: "Gewählte Größe:",
      countryDestLabel: "Lieferland:",
      estimatedDeliveryLabel: "Voraussichtliche Lieferung:",
      estimatedDeliveryVal: "Dezember 2026 (DHL GoGreen CO2-neutral)",
      totalPaidLabel: "Bezahlter Betrag:",
      giftNote: "Deiner Bestellung liegt die nummerierte Kraftbox der Pilot-Charge #01 sowie ein waschbarer Wäschebeutel als Geschenk bei.",
      returnHome: "Zur Startseite",
      checkHub: "Fortschritt im Gründer-Hub ansehen",
    },
    hub: {
      headerOverview: "GRÜNDER-ÜBERSICHT • CHARGE #01",
      headerDesc: "Vorbestellungs-Dynamik, Kennzahlen und Schwellenwerte zur Aktivierung der Ateliers in Braga und Łódź.",
      btnTasks: "Aufgaben ansehen (Marie & Partner)",
      btnDossier: "Technisches Dossier",
      kpiRaised: "Vorbestell-Umsatz",
      kpiRaisedSub: "+100% Eigenfinanziert (Bootstrapped)",
      kpiMoq: "Mindestbestellmenge (MOQ)",
      kpiMoqSub: "Stück",
      kpiBudget: "Startkapital der Gründer",
      kpiBudgetSub: "Prototypenkosten:",
      kpiCashflow: "Positiver Netto-Cashflow",
      kpiOrders: "Bestätigte Bestellungen",
      kpiOrdersSub: "Durchschnittlicher Warenkorb:",
      thresholdTitle: "Produktionsziel der Pilot-Charge: 100 Stück",
      thresholdDesc: "Das Atelier Confeções do Norte (Braga) benötigt 100 Stück, um den Zuschnitttisch für November zu reservieren.",
      thresholdBtn: "Atelier-Tracking öffnen",
      sizesTitle: "Nachfrage nach Größenverteilung",
      sizesDesc: "Gradierungsplan für die Schnittmacher im Atelier",
      sizesBadge: "Nachfragekurve",
      sizesTop: "Meistgefragte Größe: Größe M (42% aller Reservierungen)",
      modelsTitle: "Beliebtheit der Modelle & Linien",
      modelsDesc: "Frauenlinie vs. Unisex & Fluid",
      modelsBadgeF: "Frauenlinie (71%)",
      modelsBadgeU: "Unisex / Fluid (29%)",
      ordersTableTitle: "Vorbestellungsbuch (Echtzeit)",
      ordersTableDesc: "Direkt synchronisiert mit Datenbank und Checkout",
      colCustomer: "Kunde",
      colItem: "Artikel",
      colSize: "Größe",
      colQty: "Menge",
      colAmount: "Betrag",
      colCountry: "Land",
      colStatus: "Status",
      statusConfirmed: "Bestätigt",
    },
  },
};
