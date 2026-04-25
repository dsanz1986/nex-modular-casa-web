## Plan: Actualizar tiempos de entrega, transporte y casas piloto

### 1. Cambiar plazos de entrega a 180 días (5 idiomas)

En las características de **Nex Natura** y **Nex Nido** (`src/translations/{es,en,fr,de,it}.ts`):
- ES: "Entrega e instalación en 3-4 meses..." y "Entrega rápida en 3-4 meses..." → "Entrega e instalación en 180 días sin necesidad de obra" / "Entrega rápida en 180 días sin necesidad de obra"
- EN/FR/DE/IT: equivalentes "180 days / 180 jours / 180 Tagen / 180 giorni"

En la **FAQ "¿Cuánto tardan en entregarla?"**:
- ES: "Entre 8 y 12 semanas..." → "180 días desde la confirmación del pedido, dependiendo del nivel de personalización."
- Misma actualización en EN/FR/DE/IT.

### 2. Cambiar transporte a "150 Km de Madrid" (5 idiomas)

En las features de Nex Natura y Nex Nido:
- ES: "Transporte e instalación incluidos en toda España" → "Transporte e Instalación incluido en el precio a 150 Km de Madrid"
- EN: "Transport and installation included within 150 km of Madrid"
- FR: "Transport et installation inclus dans un rayon de 150 km de Madrid"
- DE: "Transport und Installation im Preis enthalten im Umkreis von 150 km um Madrid"
- IT: "Trasporto e installazione inclusi nel prezzo entro 150 km da Madrid"

### 3. Añadir direcciones a las fichas de los modelos

En `src/components/ModelsSection.tsx`, mostrar bajo el nombre/dimensiones de cada modelo su ubicación:
- **Nex Natura** → "Ubicación: P.º de Pozuelo, 24, 28510 Campo Real, Madrid"
- **Nex Nido** → "Ubicación: C/ Ebro 37, 28840 Mejorada del Campo, Madrid"

Se añadirán dos claves nuevas en cada idioma:
- `models.nexNatura.location`
- `models.nexNido.location`

### 4. Sección "Visita nuestra casa piloto" — añadir Nex Nido

Refactorizar `src/components/PilotHouseSection.tsx` para mostrar **dos casas piloto** en lugar de una sola, con un layout de 2 columnas (responsive a 1 columna en móvil). Cada tarjeta tendrá:
- Imagen (Nex Natura: imagen actual `c6c6f354-...png`; Nex Nido: nueva imagen subida `fotonexnido.jpeg` copiada a `public/lovable-uploads/nex-nido-pilot.jpeg`)
- Nombre del modelo
- Dirección completa
- Botón de WhatsApp (mensaje específico mencionando qué casa visitar)
- Enlace a Google Maps con la dirección correcta

Datos:
- **Nex Natura** — P.º de Pozuelo, 24, 28510 Campo Real, Madrid (mantener Google Maps actual)
- **Nex Nido** — Calle Ebro 37, 28840 Mejorada del Campo, Madrid (nuevo enlace a Google Maps con esa dirección)

Nuevas claves de traducción en `pilotHouse`:
- `pilotHouse.nexNatura.{name,address,location,cta}`
- `pilotHouse.nexNido.{name,address,location,cta}`
Mantener `pilotHouse.title`, descripción general y teléfono/email comunes.

También actualizar la pequeña descripción en `advantages.items.pilotHouse.description`:
- ES: "Ven a Campo Real o Mejorada del Campo (Madrid) y experimenta cómo se vive" (y equivalentes en otros idiomas).

### Archivos modificados

- `src/translations/es.ts`, `en.ts`, `fr.ts`, `de.ts`, `it.ts` — strings de modelos, FAQ entrega, sección pilotHouse, advantages
- `src/components/ModelsSection.tsx` — añadir ubicación bajo dimensiones
- `src/components/PilotHouseSection.tsx` — refactor a dos casas piloto
- `public/lovable-uploads/nex-nido-pilot.jpeg` — nueva imagen (copiada del upload)
