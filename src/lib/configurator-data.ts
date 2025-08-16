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
  interiorFlooring: string;
  interiorKitchen: string;
  interiorBathroom: string;
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
        { id: 'simple-blanca', name: 'Simple blanca', price: 0 },
        { id: 'doble-blanca', name: 'Doble blanca', price: 500 },
        { id: 'negra-doble', name: 'Negra doble', price: 600 }
      ]
    },
    windows: {
      id: 'windows',
      name: 'Ventanas exteriores',
      options: [
        { id: 'blancas', name: 'Blancas', price: 0 },
        { id: 'abatibles', name: 'Abatibles', price: 300 },
        { id: 'negras', name: 'Negras', price: 200 }
      ]
    }
  },
  interior: {
    flooring: {
      id: 'flooring',
      name: 'Tarima',
      options: [
        { id: 'gris-claro', name: 'Gris claro', price: 0 },
        { id: 'gris-oscuro', name: 'Gris oscuro', price: 200 },
        { id: 'madera-clara', name: 'Madera clara', price: 400 },
        { id: 'madera-oscura', name: 'Madera oscura', price: 400 }
      ]
    },
    kitchen: {
      id: 'kitchen',
      name: 'Muebles de Cocina',
      options: [
        { id: 'madera-blanca', name: 'Madera blanca', price: 0 },
        { id: 'madera-gris', name: 'Madera gris', price: 300 },
        { id: 'madera-oscura', name: 'Madera oscura', price: 500 }
      ]
    },
    bathroom: {
      id: 'bathroom',
      name: 'Muebles de baño',
      options: [
        { id: 'blanco-basic', name: 'Blanco basic', price: 0 },
        { id: 'blanco-madera', name: 'Blanco madera', price: 200 },
        { id: 'blanco-moderno', name: 'Blanco moderno', price: 300 },
        { id: 'madera-clara', name: 'Madera clara', price: 400 }
      ]
    }
  }
};

export const getDefaultConfig = (): ConfiguratorState => ({
  exteriorCladding: 'terracota',
  exteriorDoors: 'simple-blanca',
  exteriorWindows: 'blancas',
  interiorFlooring: 'gris-claro',
  interiorKitchen: 'madera-blanca',
  interiorBathroom: 'blanco-basic'
});

const imageMapping: Record<string, string> = {
  // Base images
  'base-exterior': 'base.jpg',
  'base-interior': 'basecocina.jpg',
  
  // Exterior cladding variations - CORRECTED ALL MAPPINGS
  'cladding-terracota': 'terracota.jpg',
  'cladding-blanco': 'Blanca.png',  
  'cladding-gris-claro': 'Ladrillo-gris-blanco.png',
  'cladding-dorado': 'Ladrillo-amarillo.png',
  'cladding-gris-oscuro': 'Ladrillo gris.png',
  'cladding-antracita': 'Ladrillo-gris-varios.png',
  'cladding-rojo': 'Ladrillo-rojo-varios.png',
  'cladding-naranja': 'Ladrillo-rojo-varios.png',
  'cladding-madera-natural': 'Madera-media.png',
  'cladding-madera-chocolate': 'Madera-oscura.png',
  
  // Door variations - CORRECTED ALL MAPPINGS
  'doors-simple-blanca': 'Blanca-normal.png',
  'doors-doble-blanca': 'Blanca-dos-puertas.png',
  'doors-negra-doble': 'negra-dos-puertas.png',
  
  // Window variations - CORRECTED ALL MAPPINGS
  'windows-blancas': '',
  'windows-abatibles': 'hoja-abatible.png',
  'windows-negras': 'Negras.png',
  
  // Interior flooring variations - CORRECTED ALL MAPPINGS
  'flooring-gris-claro': 'Gris.png',
  'flooring-gris-oscuro': 'Gris-oscuro.png',
  'flooring-madera-clara': 'Tarima-1.png',
  'flooring-madera-oscura': 'Tarima-2.png',
  
  // Kitchen variations - CORRECTED ALL MAPPINGS
  'kitchen-madera-blanca': '',
  'kitchen-madera-gris': 'CocinaGris.png',
  'kitchen-madera-oscura': 'CocinaMadera.png',
  
  // Bathroom variations - CORRECTED ALL MAPPINGS
  'bathroom-blanco-basic': 'bañooriginal.jpg',
  'bathroom-blanco-madera': 'blanco-madera.png',
  'bathroom-blanco-moderno': 'blanco-moderno.png',
  'bathroom-madera-clara': 'blanco.png'
};

export const getImagePath = (category: string, option: string, view: 'exterior' | 'interior' = 'exterior'): string => {
  const imageKey = `${category}-${option}`;
  const fileName = imageMapping[imageKey];
  
  console.log(`🔍 Looking up image: ${imageKey} -> ${fileName}`);
  
  if (fileName === '') {
    console.log(`📝 Using base image for: ${imageKey}`);
    return '';
  }
  
  if (fileName) {
    const encodedFileName = encodeURI(fileName);
    const fullPath = `/configurator/nex-natura/${view}/${encodedFileName}`;
    console.log(`✅ Image path generated: ${fullPath}`);
    return fullPath;
  }
  
  console.warn(`❌ No image mapping found for: ${imageKey}`);
  return '';
};

export const getBaseImagePath = (view: 'exterior' | 'interior'): string => {
  const baseKey = `base-${view}`;
  const fileName = imageMapping[baseKey];
  
  if (fileName) {
    const fullPath = `/configurator/nex-natura/${view}/${fileName}`;
    console.log(`🏠 Base image path: ${fullPath}`);
    return fullPath;
  }
  
  console.warn(`❌ No base image found for view: ${view}`);
  return `/configurator/nex-natura/${view}/base.webp`;
};

export const getConfigurationLayers = (config: ConfiguratorState, view: 'exterior' | 'interior') => {
  const layers = [];
  
  console.log(`🎨 Generating layers for ${view} view:`, config);
  
  if (view === 'exterior') {
    layers.push({ 
      category: 'cladding', 
      option: config.exteriorCladding,
      zIndex: 1
    });
    
    layers.push({ 
      category: 'doors', 
      option: config.exteriorDoors,
      zIndex: 2
    });
    
    layers.push({ 
      category: 'windows', 
      option: config.exteriorWindows,
      zIndex: 3
    });
  } else if (view === 'interior') {
    layers.push({ 
      category: 'flooring', 
      option: config.interiorFlooring,
      zIndex: 1
    });
    
    layers.push({ 
      category: 'kitchen', 
      option: config.interiorKitchen,
      zIndex: 2
    });
    
    layers.push({ 
      category: 'bathroom', 
      option: config.interiorBathroom,
      zIndex: 3
    });
  }
  
  // Generate src paths for all layers
  const layersWithPaths = layers.map(layer => {
    const src = getImagePath(layer.category, layer.option, view);
    console.log(`🖼️ Layer generated: ${layer.category}-${layer.option} -> ${src || 'BASE IMAGE'}`);
    return {
      ...layer,
      src
    };
  });
  
  console.log(`📋 Total layers for ${view}:`, layersWithPaths);
  return layersWithPaths;
};

export const getConfigPrice = (config: ConfiguratorState): number => {
  const basePrice = 39990; // Precio base
  let extraPrice = 0;

  // Add prices for exterior doors
  const doorOption = configuratorData.exterior.doors.options.find(opt => opt.id === config.exteriorDoors);
  if (doorOption) {
    extraPrice += doorOption.price;
  }

  // Add prices for exterior windows
  const windowOption = configuratorData.exterior.windows.options.find(opt => opt.id === config.exteriorWindows);
  if (windowOption) {
    extraPrice += windowOption.price;
  }

  // Add prices for interior flooring
  const flooringOption = configuratorData.interior.flooring.options.find(opt => opt.id === config.interiorFlooring);
  if (flooringOption) {
    extraPrice += flooringOption.price;
  }

  // Add prices for interior kitchen
  const kitchenOption = configuratorData.interior.kitchen.options.find(opt => opt.id === config.interiorKitchen);
  if (kitchenOption) {
    extraPrice += kitchenOption.price;
  }

  // Add prices for interior bathroom
  const bathroomOption = configuratorData.interior.bathroom.options.find(opt => opt.id === config.interiorBathroom);
  if (bathroomOption) {
    extraPrice += bathroomOption.price;
  }

  return basePrice + extraPrice;
};

// Function to get selected option details
export const getSelectedOptions = (config: ConfiguratorState) => {
  return {
    exteriorCladding: configuratorData.exterior.cladding.options.find(opt => opt.id === config.exteriorCladding),
    exteriorDoors: configuratorData.exterior.doors.options.find(opt => opt.id === config.exteriorDoors),
    exteriorWindows: configuratorData.exterior.windows.options.find(opt => opt.id === config.exteriorWindows),
    interiorFlooring: configuratorData.interior.flooring.options.find(opt => opt.id === config.interiorFlooring),
    interiorKitchen: configuratorData.interior.kitchen.options.find(opt => opt.id === config.interiorKitchen),
    interiorBathroom: configuratorData.interior.bathroom.options.find(opt => opt.id === config.interiorBathroom),
  };
};
