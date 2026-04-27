## Plan: Direcciones con enlace a Google Maps + dirección de Mejorada en el footer

### 1. Footer (`src/components/Footer.tsx`)
Añadir un segundo bloque de dirección debajo del actual (Campo Real), con la dirección de Nex Nido en Mejorada del Campo. Ambas direcciones se convierten en enlaces clicables que abren Google Maps en una pestaña nueva.

- Nex Natura: `P.º de Pozuelo, 24, 28510 Campo Real, Madrid` → https://maps.app.goo.gl/iUWkZ5LaFUCkBY417
- Nex Nido: `C/ Ebro 37, 28840 Mejorada del Campo, Madrid` → https://www.google.com/maps/search/?api=1&query=Calle+Ebro+37,+28840+Mejorada+del+Campo,+Madrid

Cada dirección tendrá su propio icono `MapPin` y enlace, manteniendo el estilo actual (`text-white/80 hover:text-white`).

### 2. Sección de Modelos (`src/components/ModelsSection.tsx`)
Convertir la línea de dirección de cada modelo (líneas 90-93) en un enlace `<a>` a Google Maps:
- `nexNatura` → URL de Campo Real
- `nexNido` → URL de Mejorada del Campo

Se mantiene el icono `MapPin` y el texto con la dirección. Se añade `hover:text-nex-primary transition-colors` y `target="_blank" rel="noopener noreferrer"`.

Para mapear modelo → URL se usa un objeto local `MAPS_URLS` dentro del componente.

### 3. Sección Casa Piloto (`src/components/PilotHouseSection.tsx`)
Ya existe el botón con `MapPin` sobre la imagen que abre Maps. Adicionalmente, convertir también la línea de dirección de debajo del título (`{t(\`pilotHouse.${house.id}.address\`)}`) en un enlace a Google Maps usando la misma `house.mapsUrl`, para consistencia.

### Archivos modificados
- `src/components/Footer.tsx`
- `src/components/ModelsSection.tsx`
- `src/components/PilotHouseSection.tsx`
