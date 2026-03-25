

## Plan: Reemplazar fotos del carrusel Nex Nido

### Cambios

**1. Copiar las 10 imágenes subidas a `public/lovable-uploads/`** con nombres descriptivos para Nex Nido:
- `nex-nido-dormitorio-individual.jpeg` (cama individual)
- `nex-nido-dormitorio-principal.jpeg` (cama doble)
- `nex-nido-bano.jpeg` (baño)
- `nex-nido-cocina-1.jpeg` (cocina con mesa)
- `nex-nido-cocina-2.jpeg` (cocina vista frontal)
- `nex-nido-exterior-frontal.jpeg` (vista exterior completa)
- `nex-nido-escritorio.jpeg` (escritorio)
- `nex-nido-terraza.jpeg` (terraza)
- `nex-nido-entrada.jpeg` (puerta entrada)
- `nex-nido-salon.jpeg` (salon)

**2. Actualizar `src/components/ModelsSection.tsx`** (lineas 31-42): Reemplazar el array `images` del modelo `nexNido` con las rutas de las nuevas imagenes.

### Archivo modificado
- `src/components/ModelsSection.tsx` - Solo el array de imagenes de nexNido

