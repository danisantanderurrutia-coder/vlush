# V-Lush • Pure where it matters, sensual everywhere else.

> **Plataforma Web Completa (Tienda D2C & Campaña de Preventa + Hub Interno de Fundadores)**  
> Diseñada para la marca de lencería de alta gama sensorial, inclusiva y dermatológicamente segura **V-Lush**, fundada por **Marie** (Business Management & Psicología) y su **Socio** (Gestión & Protección Ambiental).

---

## 🌟 Valor Diferencial y Propuesta de Marca

* **Innovación Técnica ("Gyno & Skin-Safe Zone"):** Puente interior ancho (8.2 cm a 9.5 cm) confeccionado en 100% algodón orgánico crudo sin blanqueadores clóricos ni tintes sintéticos (GOTS Certified), con costuras planas invertidas *flatlock* para proteger el microbioma y evitar rozaduras.
* **Estética Exterior de Alta Costura:** Encaje suave geométrico/floral italiano, mallas translúcidas y detalles satinados en siluetas sugerentes (Línea Femenina *Daily & Hot/Spicy* y Línea Unisex/Fluid *Body-Affirming*).
* **Sostenibilidad Circular Auditada:** Confección ética en talleres europeos (Braga, Portugal y Łódź, Polonia), packaging 100% libre de plásticos (cajas compostables BioPack) y logística neutral en carbono con DHL GoGreen en toda la UE.

---

## 🧭 Arquitectura de Rutas del Sistema

### 1. Cara Pública (Customer-Facing & Pre-Order)
| Ruta | Descripción |
| :--- | :--- |
| `/` | **Hero Landing:** Concepto editorial *"Pure Touch, Raw Sensuality"*, comparador interactivo de telas (encaje vs. algodón crudo) y barra de progreso en tiempo real del Lote Piloto (45/100 uds.). |
| `/collections` | **Catálogo de Preventa:** Línea Femenina (Cheeky, Thong, Hot & Spicy), Línea Unisex / Fluid anatómica, Packs Trío (75 € - 85 €) y guía de tallas anatómica. |
| `/story` | **Manifiesto y Origen:** Filosofía de salud íntima sin renunciar a lo sexy y trasfondo de los fundadores (Psicología + Gestión Ambiental). |
| `/sustainability` | **Cadena de Suministro:** Trazabilidad punto a punto (algodón GOTS, talleres en Braga y Łódź, cajas compostables y DHL GoGreen). |
| `/preorder-checkout` | **Checkout de Reserva Simplificado:** Selector de prenda y talla, cálculo dinámico de envío en la UE y confirmación con efecto confeti. |

### 2. Hub Interno Privado (`/hub` - Protegido por Middleware)
| Ruta | Descripción |
| :--- | :--- |
| `/hub` | **Panel Ejecutivo:** KPIs en tiempo real (recaudado en preventa, meta de 100 uds. para taller, desglose de tallas/modelos y libro de reservas). |
| `/hub/dossier` | **Dossier Maestro Interactivo:** Resumen ejecutivo, anatomía técnica del gusset, operaciones en Portugal/Polonia y unit economics (~68.5% margen bruto). |
| `/hub/supply-chain` | **Pipeline de Producción:** Tracking de muestras físicas, compra de algodón crudo y matriz comparativa de talleres europeos. |
| `/hub/campaigns` | **Gestor de Marketing & Prompts IA:** Repositorio de directivas para Midjourney/Flux, copys por audiencia y calendario de lanzamientos. |
| `/hub/finances` | **Control Presupuestario:** Control del presupuesto inicial de 1.000 €, registro de gastos de prototipado/web y capital levantado en preventa. |
| `/hub/tasks` | **Tablero Kanban Interactivo:** Columnas de Backlog, En Progreso, En Revisión y Hecho, con filtro por responsable (Marie / Socio). |
| `/hub/login` | **Portal de Acceso de Fundadores:** Validación de PIN por fundador con sesiones seguras vía cookies. |

---

## 📂 Árbol de Carpetas del Proyecto

```
Vlush/
├── supabase/
│   └── schema.sql                # Script SQL completo: tablas, RLS y datos semilla
├── public/
│   └── images/
│       └── brand/
│           ├── vlush-hero-grid.jpg   # Fotografías editoriales reales de producto
│           └── vlush-moodboard.png   # Muestras de algodón crudo y packaging kraft
├── src/
│   ├── app/
│   │   ├── layout.tsx            # Tipografía Cormorant Garamond & Inter + Metadatos
│   │   ├── globals.css           # Estilos de marca (Marfil #F5F2EB, Borgoña #4A1521, etc.)
│   │   ├── page.tsx              # Landing Page pública principal
│   │   ├── collections/page.tsx  # Catálogo interactivo de preventa
│   │   ├── story/page.tsx        # Manifiesto y visión de los fundadores
│   │   ├── sustainability/page.tsx# Transparencia ecológica y cadena de suministro
│   │   ├── preorder-checkout/page.tsx # Pasarela de reserva simplificada
│   │   ├── hub/
│   │   │   ├── layout.tsx        # Layout con barra de fundadores y modo oscuro
│   │   │   ├── page.tsx          # Dashboard ejecutivo con métricas
│   │   │   ├── dossier/page.tsx  # Lector del dossier interactivo
│   │   │   ├── supply-chain/page.tsx # Tracking de muestras y talleres
│   │   │   ├── campaigns/page.tsx # Gestor de campañas y prompts de IA
│   │   │   ├── finances/page.tsx # Control del presupuesto de 1.000 €
│   │   │   ├── tasks/page.tsx    # Tablero Kanban interactivo
│   │   │   └── login/page.tsx    # Portal de acceso privado
│   │   └── api/
│   │       ├── auth/route.ts     # Endpoint de sesión para fundadores
│   │       └── preorders/route.ts# Endpoint para guardar y consultar preventas
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx        # Navegación editorial de lujo
│   │   │   ├── Footer.tsx        # Pie con certificaciones y newsletter
│   │   │   └── HubSidebar.tsx    # Barra lateral de navegación del Hub
│   │   ├── ui/
│   │   │   └── FabricComparator.tsx # Comparador interactivo (Encaje vs. Algodón crudo)
│   │   └── ecommerce/
│   │       ├── BatchProgress.tsx # Barra de progreso del lote piloto
│   │       ├── ProductCard.tsx   # Tarjeta de producto con selector de talla
│   │       └── QuickPreorderModal.tsx # Modal de reserva rápida con confeti
│   ├── lib/
│   │   ├── initial-data.ts       # Datos semilla iniciales de V-Lush
│   │   ├── supabase.ts           # Cliente Supabase y almacén local de contingencia
│   │   └── utils.ts              # Formateadores de moneda EUR, fechas y clases
│   └── middleware.ts             # Protección por ruta para /hub/*
├── .env.example
├── package.json
└── README.md
```

---

## 🗄️ Esquema Supabase (Base de Datos)

El script SQL completo se encuentra en `supabase/schema.sql` e incluye:
1. **`preorders`**: Órdenes de preventa con datos de cliente, talla, producto y total.
2. **`tasks`**: Tareas Kanban asignables a Marie, Socio o Ambos con prioridades y fechas límite.
3. **`supply_chain_milestones`**: Fases de producción, costes estimados y seguimiento de muestras.
4. **`campaigns`**: Repositorio de campañas y prompts generativos de IA clasificados por audiencia.
5. **`financials`**: Asientos contables para el control del presupuesto semilla de 1.000 € y preventas.
6. **`dossier_sections`**: Secciones en formato JSON con la documentación del proyecto.
7. **Políticas RLS (Row Level Security)** que permiten inserción pública para reservas y acceso restringido para fundadores.

### Para ejecutar en Supabase:
1. Abre tu panel de **Supabase** y ve al **SQL Editor**.
2. Copia y pega el contenido de `supabase/schema.sql`.
3. Haz clic en **Run**. Se crearán todas las tablas y se cargarán los datos semilla automáticamente.

---

## 🚀 Puesta en Marcha Local

### Requisitos
* Node.js 18+ (recomendado Node 20+)
* npm o pnpm

### Pasos
```bash
# 1. Clonar el repositorio y entrar en la carpeta
cd Vlush

# 2. Instalar dependencias
npm install

# 3. Configurar variables de entorno
cp .env.example .env.local

# 4. Iniciar el servidor de desarrollo
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador para ver la tienda pública.

### 🔑 Credenciales de Acceso al Hub (`/hub`)
* **Portal de Acceso:** [http://localhost:3000/hub/login](http://localhost:3000/hub/login)
* **PIN Maestro Único:** `vlush2026`
*(La pantalla de login incluye también un botón directo de autocompletado para pruebas rápidas).*

---

## ☁️ Despliegue en Producción (Vercel)

1. Sube el código a tu repositorio de GitHub, GitLab o Bitbucket:
   ```bash
   git add .
   git commit -m "feat: complete V-Lush e-commerce & founders hub"
   git push origin main
   ```
2. Entra en [Vercel](https://vercel.com/) e importa el repositorio `Vlush`.
3. En **Environment Variables**, añade:
   * `NEXT_PUBLIC_SUPABASE_URL`: URL de tu proyecto Supabase.
   * `NEXT_PUBLIC_SUPABASE_ANON_KEY`: Clave anónima pública de Supabase.
   * `SUPABASE_SERVICE_ROLE_KEY`: Clave de servicio para operaciones de administración.
   * `HUB_SECRET_KEY`: Una cadena segura para firma de sesiones.
   * `NEXT_PUBLIC_APP_URL`: La URL pública de tu dominio en Vercel (ej. `https://vlush.vercel.app`).
4. Haz clic en **Deploy**. El proyecto compilará en segundos utilizando Turbopack y estará disponible globalmente con CDN y Serverless Functions.

---

## ⚖️ Licencia y Propiedad
© 2026 V-Lush Lingerie UG. Todos los derechos reservados.
Desarrollado para el lanzamiento europeo de la marca.
