-- ==============================================================================
-- V-LUSH DATABASE SCHEMA & SEED DATA (Supabase / PostgreSQL)
-- Brand: V-Lush ("Pure where it matters, sensual everywhere else.")
-- Founders: Marie (Business & Psychology) & Partner (Environmental Protection)
-- ==============================================================================

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- ------------------------------------------------------------------------------
-- 1. PREORDERS TABLE
-- Customer-facing orders and pre-order reservation pledges
-- ------------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS preorders (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    customer_name TEXT NOT NULL,
    email TEXT NOT NULL,
    shipping_address TEXT NOT NULL,
    country TEXT NOT NULL DEFAULT 'DE', -- Target: Germany / EU
    product_line TEXT NOT NULL CHECK (product_line IN ('female', 'unisex')),
    item_name TEXT NOT NULL,
    size TEXT NOT NULL CHECK (size IN ('XS', 'S', 'M', 'L', 'XL', 'XXL')),
    quantity INTEGER NOT NULL DEFAULT 1 CHECK (quantity > 0),
    total_amount NUMERIC(10, 2) NOT NULL,
    payment_status TEXT NOT NULL DEFAULT 'pending' CHECK (payment_status IN ('pending', 'paid', 'refunded', 'cancelled')),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Index for analytics and email search
CREATE INDEX IF NOT EXISTS idx_preorders_email ON preorders(email);
CREATE INDEX IF NOT EXISTS idx_preorders_created_at ON preorders(created_at);
CREATE INDEX IF NOT EXISTS idx_preorders_product_line ON preorders(product_line);

-- ------------------------------------------------------------------------------
-- 2. TASKS TABLE (Hub Kanban Board)
-- ------------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS tasks (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    title TEXT NOT NULL,
    description TEXT,
    status TEXT NOT NULL DEFAULT 'todo' CHECK (status IN ('todo', 'in_progress', 'review', 'done')),
    owner TEXT NOT NULL CHECK (owner IN ('Marie', 'Partner', 'Both')),
    priority TEXT NOT NULL DEFAULT 'medium' CHECK (priority IN ('low', 'medium', 'high')),
    deadline DATE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- ------------------------------------------------------------------------------
-- 3. SUPPLY CHAIN MILESTONES TABLE
-- Tracking physical prototypes, fabrics (GOTS raw cotton), atelier evaluations
-- ------------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS supply_chain_milestones (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    stage_name TEXT NOT NULL,
    partner_name TEXT NOT NULL,
    country TEXT NOT NULL, -- e.g., 'Portugal', 'Poland', 'Germany'
    cost_estimate NUMERIC(10, 2) NOT NULL DEFAULT 0.00,
    status TEXT NOT NULL DEFAULT 'planned' CHECK (status IN ('planned', 'in_sampling', 'approved', 'delayed', 'completed')),
    notes TEXT,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- ------------------------------------------------------------------------------
-- 4. CAMPAIGNS TABLE (Marketing & AI Prompts Hub)
-- ------------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS campaigns (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    title TEXT NOT NULL,
    audience TEXT NOT NULL CHECK (audience IN ('female_daily', 'hot_spicy', 'queer_unisex')),
    channel TEXT NOT NULL, -- 'Instagram Reels', 'TikTok', 'Substack Editorial', 'Pop-Up Berlin'
    prompt_reference TEXT, -- Stored Midjourney/Flux/Claude prompt for copy & creative
    status TEXT NOT NULL DEFAULT 'draft' CHECK (status IN ('draft', 'scheduled', 'active', 'completed')),
    launch_date DATE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- ------------------------------------------------------------------------------
-- 5. FINANCIALS TABLE
-- Initial launch budget (€1,000) & cashflow management
-- ------------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS financials (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    description TEXT NOT NULL,
    category TEXT NOT NULL CHECK (category IN ('prototype', 'marketing', 'platform', 'legal', 'packaging', 'seed_capital')),
    type TEXT NOT NULL CHECK (type IN ('expense', 'income_preorder', 'capital_injection')),
    amount NUMERIC(10, 2) NOT NULL,
    currency TEXT NOT NULL DEFAULT 'EUR',
    date DATE NOT NULL DEFAULT CURRENT_DATE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- ------------------------------------------------------------------------------
-- 6. DOSSIER SECTIONS TABLE
-- Project documentation, executive pitch, technical specifications
-- ------------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS dossier_sections (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    section_slug TEXT UNIQUE NOT NULL,
    title TEXT NOT NULL,
    content JSONB NOT NULL,
    order_index INTEGER NOT NULL DEFAULT 0,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- ==============================================================================
-- ROW LEVEL SECURITY (RLS) POLICIES
-- ==============================================================================

-- Enable RLS on all tables
ALTER TABLE preorders ENABLE ROW LEVEL SECURITY;
ALTER TABLE tasks ENABLE ROW LEVEL SECURITY;
ALTER TABLE supply_chain_milestones ENABLE ROW LEVEL SECURITY;
ALTER TABLE campaigns ENABLE ROW LEVEL SECURITY;
ALTER TABLE financials ENABLE ROW LEVEL SECURITY;
ALTER TABLE dossier_sections ENABLE ROW LEVEL SECURITY;

-- 1. Preorders policies:
-- Anyone (public) can create a pre-order reservation
CREATE POLICY "Public can insert preorders" 
ON preorders FOR INSERT 
TO public 
WITH CHECK (true);

-- Authenticated founders can view and manage all preorders
CREATE POLICY "Founders can read and manage all preorders" 
ON preorders FOR ALL 
TO authenticated 
USING (true)
WITH CHECK (true);

-- 2. Internal Hub tables (tasks, supply_chain, campaigns, financials, dossier)
-- Restrict to authenticated founders / admin role
CREATE POLICY "Founders full access to tasks" 
ON tasks FOR ALL 
TO authenticated 
USING (true)
WITH CHECK (true);

CREATE POLICY "Founders full access to supply_chain_milestones" 
ON supply_chain_milestones FOR ALL 
TO authenticated 
USING (true)
WITH CHECK (true);

CREATE POLICY "Founders full access to campaigns" 
ON campaigns FOR ALL 
TO authenticated 
USING (true)
WITH CHECK (true);

CREATE POLICY "Founders full access to financials" 
ON financials FOR ALL 
TO authenticated 
USING (true)
WITH CHECK (true);

-- Dossier can be read by authenticated users, or public if shared with investors
CREATE POLICY "Dossier read access" 
ON dossier_sections FOR SELECT 
TO public 
USING (true);

CREATE POLICY "Founders manage dossier" 
ON dossier_sections FOR ALL 
TO authenticated 
USING (true)
WITH CHECK (true);

-- Allow service_role key to bypass RLS for administrative operations
CREATE POLICY "Service role bypass all" ON preorders FOR ALL TO service_role USING (true);
CREATE POLICY "Service role bypass tasks" ON tasks FOR ALL TO service_role USING (true);
CREATE POLICY "Service role bypass supply_chain" ON supply_chain_milestones FOR ALL TO service_role USING (true);
CREATE POLICY "Service role bypass campaigns" ON campaigns FOR ALL TO service_role USING (true);
CREATE POLICY "Service role bypass financials" ON financials FOR ALL TO service_role USING (true);
CREATE POLICY "Service role bypass dossier" ON dossier_sections FOR ALL TO service_role USING (true);

-- ==============================================================================
-- SEED DATA (INITIAL VALUES FOR V-LUSH)
-- ==============================================================================

-- 1. Financials: Initial €1,000 Founder Capital & First Expenses
INSERT INTO financials (description, category, type, amount, currency, date) VALUES
('Capital Semilla Inicial Aportado por Fundadores', 'seed_capital', 'capital_injection', 1000.00, 'EUR', '2026-09-01'),
('Adquisición de Dominio web vlush-lingerie.com + Hosting Vercel Pro', 'platform', 'expense', 48.00, 'EUR', '2026-09-05'),
('Muestras iniciales de Algodón Orgánico Crudo Sin Teñir (GOTS 180gsm)', 'prototype', 'expense', 115.00, 'EUR', '2026-09-12'),
('Patronaje y Graduación de Tallas (XS-XXL) para Línea Cheeky y Unisex', 'prototype', 'expense', 260.00, 'EUR', '2026-09-22'),
('Registro Mercantil y Reserva de Marca Comunitaria (EUIPO preliminar)', 'legal', 'expense', 180.00, 'EUR', '2026-09-28'),
('Prototipos de Caja de Envíos Kraft 100% Compostable + Tintas al agua', 'packaging', 'expense', 85.00, 'EUR', '2026-10-04'),
('Preventas Lote #1 (45 Unidades confirmadas vía Campaña Temprana)', 'marketing', 'income_preorder', 1420.00, 'EUR', '2026-10-14')
ON CONFLICT DO NOTHING;

-- 2. Supply Chain Milestones: European Ateliers & Material Sourcing
INSERT INTO supply_chain_milestones (stage_name, partner_name, country, cost_estimate, status, notes) VALUES
('Sourcing de Algodón Crudo GOTS', 'EcoFabrics Iberia / GOTS Certified', 'Portugal', 350.00, 'approved', 'Algodón sin blanqueamiento químico ni tintes sintéticos. Hipoalergénico 100%, tacto ultrasuave para el puente íntimo.'),
('Prototipado Físico Muestra 01 (Cheeky Lace)', 'Atelier Confeções do Norte (Braga)', 'Portugal', 420.00, 'approved', 'Primera muestra recibida. Encaje suave sin rozadura; costura invertida plana en la zona del puente.'),
('Muestra Línea Unisex Anatómica (Muestra 02)', 'Lodz Textile Studio (Łódź)', 'Poland', 380.00, 'in_sampling', 'Ajuste de banda elástica suave sin opresión. Envío de muestra física esperado en 5 días.'),
('Packaging Compostable y Libre de Plástico', 'BioPack EU (FSC Kraft + Almidón de maíz)', 'Germany', 210.00, 'approved', 'Cajas automontables de cartón reciclado, papel de seda libre de ácido y precinto engomado biodegradable.'),
('Acuerdo Logístico Neutral en Carbono', 'DHL GoGreen Logistics Solutions', 'Germany', 150.00, 'planned', 'Tarifa negociada para entregas en Alemania (24-48h) y resto de Europa (3-5 días) con compensación verificada de emisiones.')
ON CONFLICT DO NOTHING;

-- 3. Kanban Tasks (Marie & Partner)
INSERT INTO tasks (title, description, status, owner, priority, deadline) VALUES
('Validación médica del corte del puente higiénico', 'Consultar con ginecóloga asesora las dimensiones óptimas del puente (mínimo 7.5cm ancho en zona media).', 'done', 'Marie', 'high', '2026-09-15'),
('Auditoría del Ciclo de Vida (LCA) del packaging', 'Calcular reducción de huella plástica respecto a bolsas convencionales de polietileno.', 'done', 'Partner', 'medium', '2026-09-20'),
('Aprobación de la Muestra #2 de Encaje Borgoña', 'Testear elasticidad, resistencia al lavado a 40°C y suavidad al tacto en piel hipersensible.', 'in_progress', 'Marie', 'high', '2026-10-22'),
('Negociación de MOQ mínimo con taller de Braga', 'Cerrar lote inicial de 100-200 unidades mixtas entre línea femenina y línea unisex/fluid.', 'in_progress', 'Partner', 'high', '2026-10-25'),
('Sesión fotográfica editorial con modelos de la comunidad', 'Casting diverso y fotografía de producto resaltando el detalle macro del puente de algodón natural.', 'review', 'Marie', 'medium', '2026-11-02'),
('Configuración de Pasarela Stripe en modo Pre-Order', 'Configurar pre-autorizaciones o depósitos del 100% para la preventa con entregas en Diciembre.', 'todo', 'Both', 'high', '2026-11-05'),
('Despacho de Kits de Muestras a Ginecólogas e Influencers Educativas', 'Preparar 15 kits en cajas de muestra con carta de Marie explicando la innovación del puente sano.', 'todo', 'Marie', 'medium', '2026-11-12')
ON CONFLICT DO NOTHING;

-- 4. Marketing Campaigns & AI Prompts
INSERT INTO campaigns (title, audience, channel, prompt_reference, status, launch_date) VALUES
('Manifiesto: Sensualidad sin Irritación', 'female_daily', 'Instagram Reels & TikTok', 'Editorial macro shot of delicate lace meeting raw unbleached cotton gusset, warm morning sunlight, natural skin textures, 35mm film grain, moody burgundy accents.', 'active', '2026-10-10'),
('Spicy Nights, Pure Touch: Línea Hot & Spicy', 'hot_spicy', 'Editorial Lookbook & Newsletter', 'High-contrast studio lighting, models wearing black sheer lace lingerie with strappy details, intimate and empowered mood, architectural backdrop, sensual elegance.', 'scheduled', '2026-10-24'),
('Body-Affirming Comfort: Línea Unisex & Queer', 'queer_unisex', 'Community Substack & Pop-Up Berlin', 'Gender-fluid intimate portrait, comfortable anatomical fit, geometric sheer black lace boxer briefs, natural poses, inclusive, body-positive luxury, warm warm ivory ambient.', 'scheduled', '2026-11-01')
ON CONFLICT DO NOTHING;

-- 5. Seed Preorders (45 units reserved)
INSERT INTO preorders (customer_name, email, shipping_address, country, product_line, item_name, size, quantity, total_amount, payment_status, created_at) VALUES
('Elena Rostova', 'elena.rostova@berlin-mail.de', 'Kastanienallee 42, 10119 Berlin', 'DE', 'female', 'Cheeky Burgundy Lace (Gyno-Safe)', 'M', 2, 64.00, 'paid', '2026-10-11 10:14:00+00'),
('Sophie Meyer', 'sophie.m@hamburg-design.de', 'Neuer Wall 18, 20354 Hamburg', 'DE', 'female', 'Pack Trío Esenciales (Negro, Vino, Crudo)', 'S', 1, 79.00, 'paid', '2026-10-11 14:32:00+00'),
('Luca Fernández', 'luca.fernandez@queerart.es', 'Carrer de Mallorca 112, 08029 Barcelona', 'ES', 'unisex', 'Fluid Geometric Boxers (Neutral Anatomical)', 'L', 2, 68.00, 'paid', '2026-10-12 09:18:00+00'),
('Hannah Weber', 'hannah.w@munich-med.de', 'Leopoldstraße 77, 80802 München', 'DE', 'female', 'Hot & Spicy Strappy Thong Set', 'M', 1, 34.00, 'paid', '2026-10-13 18:22:00+00'),
('Camille Dupont', 'camille.dupont@paris-studio.fr', 'Rue de Turenne 54, 75003 Paris', 'FR', 'female', 'Pack Trío Esenciales (Negro, Vino, Crudo)', 'M', 2, 158.00, 'paid', '2026-10-14 11:05:00+00'),
('Jan Van Der Berg', 'jan.vdb@amsterdam-tech.nl', 'Prinsengracht 310, 1016 HX Amsterdam', 'NL', 'unisex', 'Pack Trío Fluid Unisex (Anatomical Cut)', 'M', 1, 85.00, 'paid', '2026-10-14 16:45:00+00')
ON CONFLICT DO NOTHING;

-- 6. Dossier Sections (Executive Summary, Anatomy, Operations, Financial Plan)
INSERT INTO dossier_sections (section_slug, title, content, order_index) VALUES
('executive-summary', '1. Resumen Ejecutivo y Tesis de Inversión', '{
  "subtitle": "La revolución de la lencería sensual consciente y ginecológicamente segura",
  "highlights": [
    "Problema: El 78% de las mujeres y personas usuarias de lencería experimentan rozaduras, candidiasis o dermatitis por materiales sintéticos en ropa íntima de diseño sensual.",
    "Solución V-Lush: La fusión de encaje de alta costura europeo exterior con un puente ancho de 100% algodón orgánico crudo sin teñir ni blanquear (Gyno & Skin-Safe Zone).",
    "Tracción Temprana: Lote piloto en preventa con 45% reservado en los primeros 10 días sin gasto publicitario de pago.",
    "Fundadores: Marie (Gestión de Empresas & Psicología Conductual) y Socio (Ingeniería y Protección Ambiental)."
  ],
  "mission": "Empoderar el deseo y la estética íntima eliminando el peaje físico de la irritación."
}', 1),

('product-anatomy', '2. Definición Técnica del Producto ("Gyno-Safe Zone")', '{
  "core_innovation": "Gusset anatómico ensanchado (7.5 cm a 9.0 cm) con confección en sandwich de doble capa de algodón crudo orgánico GOTS de 180 gsm.",
  "differentiators": [
    {
      "element": "Puente Interior (Gusset)",
      "traditional": "Poliéster sintético teñido o algodón reciclado con tintes azoicos y puente estrecho (4.5 cm)",
      "vlush": "100% Algodón Virgen Orgánico Crudo, sin blanquear con cloro, sin tintes, pH neutro para la flora íntima."
    },
    {
      "element": "Encaje Exterior",
      "traditional": "Nylon rígido que genera microabrasiones en los pliegues inguinales.",
      "vlush": "Poliamida reciclada elastizada con acabado sedoso soft-touch con certificación OEKO-TEX Standard 100."
    },
    {
      "element": "Costuras Inguinales",
      "traditional": "Costuras con hilos de poliéster sobresalientes que rozan.",
      "vlush": "Costura plana flatlock invertida que no toca la piel en zonas mucosas."
    }
  ]
}', 2),

('supply-chain-strategy', '3. Cadena de Suministro y Sostenibilidad Circular', '{
  "ateliers": [
    {
      "region": "Norte de Portugal (Braga / Guimarães)",
      "specialty": "Confección de corsetería de alta gama con experiencia en costuras flatlock.",
      "moq": "100 unidades por modelo",
      "lead_time": "4 semanas tras aprobación de prototipo"
    },
    {
      "region": "Polonia (Łódź)",
      "specialty": "Corte de patrones neutros para la línea unisex/fluid y punto elástico.",
      "moq": "150 unidades",
      "lead_time": "5 semanas"
    }
  ],
  "packaging": "Cajas de cartón corrugado microcanal FSC 100% reciclables y compostables en casa. Cero plástico, cintas de almidón de patata y tinta al agua.",
  "logistics": "DHL GoGreen con neutralización auditada de huella de carbono en cada envío dentro de la UE."
}', 3),

('financial-roadmap', '4. Plan Financiero y Modelo de Unidad Económica (Unit Economics)', '{
  "initial_budget": "1.000 € (Bootstrapped con capital propio)",
  "burn_rate_launch": "395 € gastados en patronaje, muestras y hosting",
  "unit_economics": {
    "retail_price_single": "32.00 € (IVA incl.)",
    "production_cost_cogs": "8.40 € (Tejido + Confección + Gusset)",
    "packaging_shipping_box": "1.80 €",
    "gross_margin": "68.1%",
    "trio_pack_retail": "79.00 €",
    "trio_pack_cogs": "24.50 €",
    "trio_pack_margin": "68.9%"
  },
  "preorder_threshold": "100 unidades (3.000 € brutos) para financiar la tirada del Taller #1 sin necesidad de deuda bancaria."
}', 4)
ON CONFLICT (section_slug) DO UPDATE 
SET title = EXCLUDED.title, content = EXCLUDED.content, updated_at = now();
