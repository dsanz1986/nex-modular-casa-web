
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
    }
  }
};

export const getDefaultConfig = (): ConfiguratorState => ({
  exteriorCladding: 'terracota'
});

// Image path mapping to match uploaded files
const imageMapping: Record<string, string> = {
  // Base image (terracota default)
  'base': 'fe3d1060-0ef2-4564-9c30-b98d43c27356.png',
  
  // Cladding variations
  'cladding-blanco': '49a21b50-31bf-4b24-ab6b-d13ca1f6ae37.png',
  'cladding-gris-claro': '81f18258-549e-40ba-980c-8c359e18274a.png',
  'cladding-dorado': '79ca2d0d-0900-4bb6-abf8-e8b64454f4cb.png',
  'cladding-gris-oscuro': '806c2b8e-df1f-427b-bbb2-fd48460d4149.png',
  'cladding-antracita': 'bba57c36-edcb-45ac-ba78-1c52ea488f58.png',
  'cladding-rojo': '755573d9-3acd-45bd-8ce4-91598735c183.png',
  'cladding-naranja': '2dff8986-af57-4311-a724-1e6d41e0bc08.png',
  'cladding-madera-natural': '96abd6cd-722c-4b49-aa6e-28b7dac1a1c1.png',
  'cladding-madera-chocolate': '2c692612-5352-4091-9f9b-463d9521af51.png'
};

// Enhanced image path function using uploaded images
export const getImagePath = (category: string, option: string, view: 'exterior' | 'interior' = 'exterior'): string => {
  const imageKey = `${category}-${option}`;
  const fileName = imageMapping[imageKey];
  
  if (fileName) {
    return `/lovable-uploads/${fileName}`;
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
      return `/lovable-uploads/${fileName}`;
    }
  }
  
  // Fallback to original path
  const basePath = `/configurator/nex-natura/${view}`;
  return `${basePath}/base.webp`;
};

// Get all layer images for current configuration
export const getConfigurationLayers = (config: ConfiguratorState, view: 'exterior' | 'interior') => {
  const layers = [];
  
  if (view === 'exterior' && config.exteriorCladding !== 'terracota') {
    // Only add layer if it's not the default terracota (which is the base image)
    layers.push(
      { category: 'cladding', option: config.exteriorCladding }
    );
  }
  // Interior view currently has no configurable options
  
  return layers.map(layer => ({
    ...layer,
    src: getImagePath(layer.category, layer.option, view)
  }));
};

export const getConfigPrice = (config: ConfiguratorState): number => {
  const basePrice = 39990; // Precio base

  // Sin precios adicionales, todos los revestimientos están incluidos
  return basePrice;
};
