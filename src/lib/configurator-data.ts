

export interface ConfigOption {
  id: string;
  name: string;
  price: number;
  image?: string;
  color?: string;
}

export interface ConfigCategory {
  id: string;
  name: string;
  options: ConfigOption[];
}

export interface ConfiguratorState {
  exteriorCladding: string;
  exteriorDoors: string;
  exteriorWindows: string;
}

export const configuratorData = {
  exterior: {
    cladding: {
      id: 'cladding',
      name: 'Revestimiento exterior',
      options: [
        { id: 'terracota', name: 'Terracota Clásica', price: 0, color: '#CD853F' },
        { id: 'blanco', name: 'Composite Blanco', price: 0, color: '#FFFFFF' },
        { id: 'gris-claro', name: 'Piedra Gris Clara', price: 0, color: '#D3D3D3' },
        { id: 'dorado', name: 'Ladrillo Dorado', price: 0, color: '#DAA520' },
        { id: 'gris-oscuro', name: 'Ladrillo Gris', price: 0, color: '#696969' },
        { id: 'antracita', name: 'Piedra Antracita', price: 0, color: '#2F4F4F' },
        { id: 'rojo', name: 'Ladrillo Rojo', price: 0, color: '#B22222' },
        { id: 'naranja', name: 'Terracota Moderna', price: 0, color: '#FF6347' },
        { id: 'madera-natural', name: 'Madera Natural', price: 0, color: '#DEB887' },
        { id: 'madera-chocolate', name: 'Madera Premium', price: 0, color: '#8B4513' }
      ]
    },
    doors: {
      id: 'doors',
      name: 'Puertas exteriores',
      options: [
        { id: 'puerta-simple-blanca', name: 'Puerta Simple Blanca', price: 0 },
        { id: 'puerta-doble-blanca', name: 'Puerta Doble Blanca', price: 500 },
        { id: 'puerta-doble-negra', name: 'Puerta Doble Negra', price: 500 }
      ]
    },
    windows: {
      id: 'windows',
      name: 'Ventanas exteriores',
      options: [
        { id: 'ventanas-estandar', name: 'Ventanas Estándar', price: 0 },
        { id: 'ventanas-abatibles', name: 'Ventanas Abatibles', price: 300 },
        { id: 'ventanas-negras', name: 'Ventanas Negras', price: 200 }
      ]
    }
  }
};

export const getDefaultConfig = (): ConfiguratorState => ({
  exteriorCladding: 'terracota',
  exteriorDoors: 'puerta-simple-blanca',
  exteriorWindows: 'ventanas-estandar'
});

// Image path mapping using correct file names from /public/configurator/nex-natura/exterior/
const imageMapping: Record<string, string> = {
  // Base image (terracota default)
  'base': 'base.jpg',
  
  // Cladding variations
  'cladding-blanco': 'Blanca.png',
  'cladding-gris-claro': 'Ladrillo-gris-blanco.png',
  'cladding-dorado': 'Ladrillo-amarillo.png',
  'cladding-gris-oscuro': 'Ladrillo gris.png',
  'cladding-antracita': 'Ladrillo-gris-varios.png',
  'cladding-rojo': 'Ladrillo-rojo-varios.png',
  'cladding-naranja': 'Ladrillo-rojo-varios.png', // Fallback to red brick
  'cladding-madera-natural': 'Madera-media.png',
  'cladding-madera-chocolate': 'Madera-oscura.png',
  
  // Door variations
  'doors-puerta-simple-blanca': 'Blanca-normal.png',
  'doors-puerta-doble-blanca': 'Blanca-dos-puertas.png',
  'doors-puerta-doble-negra': 'negra-dos-puertas.png',
  
  // Window variations
  'windows-ventanas-estandar': 'base.jpg', // Use base image for standard windows
  'windows-ventanas-abatibles': 'hoja-abatible.png',
  'windows-ventanas-negras': 'Negras.png'
};

// Enhanced image path function using uploaded images
export const getImagePath = (category: string, option: string, view: 'exterior' | 'interior' = 'exterior'): string => {
  const imageKey = `${category}-${option}`;
  const fileName = imageMapping[imageKey];
  
  if (fileName && view === 'exterior') {
    return `/configurator/nex-natura/exterior/${fileName}`;
  }
  
  // Fallback to original naming convention
  const basePath = `/configurator/nex-natura/${view}`;
  return `${basePath}/${category}-${option}.webp`;
};

// Get base image for each view
export const getBaseImagePath = (view: 'exterior' | 'interior'): string => {
  if (view === 'exterior') {
    const fileName = imageMapping['base'];
    if (fileName) {
      return `/configurator/nex-natura/exterior/${fileName}`;
    }
  }
  
  // Fallback to original path
  const basePath = `/configurator/nex-natura/${view}`;
  return `${basePath}/base.webp`;
};

// Get all layer images for current configuration
export const getConfigurationLayers = (config: ConfiguratorState, view: 'exterior' | 'interior') => {
  const layers = [];
  
  if (view === 'exterior') {
    // Add cladding layer if not default
    if (config.exteriorCladding !== 'terracota') {
      layers.push({ category: 'cladding', option: config.exteriorCladding });
    }
    
    // Add doors layer if not default
    if (config.exteriorDoors !== 'puerta-simple-blanca') {
      layers.push({ category: 'doors', option: config.exteriorDoors });
    }
    
    // Add windows layer if not default
    if (config.exteriorWindows !== 'ventanas-estandar') {
      layers.push({ category: 'windows', option: config.exteriorWindows });
    }
  }
  // Interior view currently has no configurable options
  
  return layers.map(layer => ({
    ...layer,
    src: getImagePath(layer.category, layer.option, view)
  }));
};

export const getConfigPrice = (config: ConfiguratorState): number => {
  const basePrice = 39990; // Precio base
  let extraPrice = 0;

  // Add prices for doors
  const doorOption = configuratorData.exterior.doors.options.find(opt => opt.id === config.exteriorDoors);
  if (doorOption) {
    extraPrice += doorOption.price;
  }

  // Add prices for windows
  const windowOption = configuratorData.exterior.windows.options.find(opt => opt.id === config.exteriorWindows);
  if (windowOption) {
    extraPrice += windowOption.price;
  }

  return basePrice + extraPrice;
};

