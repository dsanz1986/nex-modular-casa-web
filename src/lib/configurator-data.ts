
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
        { id: 'blanco', name: 'Composite Blanco', price: 1200, color: '#FFFFFF' },
        { id: 'gris-claro', name: 'Piedra Gris Clara', price: 1800, color: '#D3D3D3' },
        { id: 'dorado', name: 'Ladrillo Dorado', price: 2100, color: '#DAA520' },
        { id: 'gris-oscuro', name: 'Ladrillo Gris', price: 1900, color: '#696969' },
        { id: 'antracita', name: 'Piedra Antracita', price: 2500, color: '#2F4F4F' },
        { id: 'rojo', name: 'Ladrillo Rojo', price: 1600, color: '#B22222' },
        { id: 'naranja', name: 'Terracota Moderna', price: 1400, color: '#FF6347' },
        { id: 'madera-natural', name: 'Madera Natural', price: 2800, color: '#DEB887' },
        { id: 'madera-chocolate', name: 'Madera Premium', price: 3000, color: '#8B4513' }
      ]
    }
  }
};

export const getDefaultConfig = (): ConfiguratorState => ({
  exteriorCladding: 'terracota'
});

// Enhanced image path function with multiple format support
export const getImagePath = (category: string, option: string, view: 'exterior' | 'interior' = 'exterior'): string => {
  const basePath = `/configurator/nex-natura/${view}`;
  const extensions = ['webp', 'png', 'jpg'];
  
  // Return the first format, browser will fallback automatically
  return `${basePath}/${category}-${option}.${extensions[0]}`;
};

// Get base image for each view
export const getBaseImagePath = (view: 'exterior' | 'interior'): string => {
  const basePath = `/configurator/nex-natura/${view}`;
  return `${basePath}/base.webp`;
};

// Get all layer images for current configuration
export const getConfigurationLayers = (config: ConfiguratorState, view: 'exterior' | 'interior') => {
  const layers = [];
  
  if (view === 'exterior') {
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
  let totalPrice = 39990; // Precio base

  // Calcular extras del revestimiento exterior
  const exterior = configuratorData.exterior;
  totalPrice += exterior.cladding.options.find(o => o.id === config.exteriorCladding)?.price || 0;

  return totalPrice;
};
