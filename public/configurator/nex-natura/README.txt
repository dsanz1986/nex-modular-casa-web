
# Configurador de Imágenes - Nex Natura

## Estructura de Carpetas

Este directorio contiene todas las imágenes necesarias para el configurador 3D de Nex Natura.

### Carpetas:
- `exterior/` - Imágenes para la vista exterior
- `interior/` - Imágenes para la vista interior

## Especificaciones de Imágenes

- **Formato:** .webp (recomendado) con fallback a .png/.jpg
- **Resolución:** Consistente en todas las imágenes (recomendado: 1200x900px o 4:3)
- **Fondo:** Transparente para las capas de opciones
- **Calidad:** Alta calidad para una buena experiencia de usuario

## Naming Convention

### Exterior (/exterior/):
- `base.webp` - Imagen base de la casa (OBLIGATORIO)
- `coating-wood.webp` - Revestimiento madera
- `coating-composite.webp` - Revestimiento composite
- `coating-metal.webp` - Revestimiento metal
- `color-natural.webp` - Color natural
- `color-white.webp` - Color blanco
- `color-gray.webp` - Color gris
- `color-black.webp` - Color negro
- `doors-standard.webp` - Puertas estándar
- `doors-premium.webp` - Puertas premium
- `doors-luxury.webp` - Puertas de lujo
- `windows-standard.webp` - Ventanas estándar
- `windows-large.webp` - Ventanas grandes
- `windows-panoramic.webp` - Ventanas panorámicas

### Interior (/interior/):
- `base.webp` - Imagen base del interior (OBLIGATORIO)
- `flooring-wood.webp` - Suelo de madera
- `flooring-laminate.webp` - Suelo laminado
- `flooring-vinyl.webp` - Suelo vinílico
- `kitchen-basic.webp` - Cocina básica
- `kitchen-modern.webp` - Cocina moderna
- `kitchen-premium.webp` - Cocina premium
- `bathroom-standard.webp` - Baño estándar
- `bathroom-modern.webp` - Baño moderno
- `bathroom-luxury.webp` - Baño de lujo
- `interior-doors-white.webp` - Puertas interiores blancas
- `interior-doors-wood.webp` - Puertas interiores madera
- `interior-doors-modern.webp` - Puertas interiores modernas

## Notas Importantes

1. Las imágenes base (`base.webp`) son OBLIGATORIAS en ambas carpetas
2. Las capas se superponen sobre la imagen base en el orden especificado
3. Usar fondos transparentes para todas las capas (excepto la base)
4. Mantener dimensiones consistentes para evitar problemas de alineación
5. El sistema incluye fallbacks automáticos si no se encuentra una imagen
