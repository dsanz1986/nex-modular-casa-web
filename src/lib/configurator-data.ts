
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
  exteriorCoating: string;
  exteriorColor: string;
  doors: string;
  windows: string;
  interiorFlooring: string;
  kitchen: string;
  bathroom: string;
  interiorDoors: string;
}

export const configuratorData = {
  exterior: {
    coating: {
      id: 'coating',
      name: 'Revestimiento exterior',
      options: [
        { id: 'wood', name: 'Madera', price: 0, color: '#8B4513' },
        { id: 'stone', name: 'Piedra', price: 1500, color: '#696969' },
        { id: 'composite', name: 'Composite', price: 1200, color: '#654321' },
        { id: 'metal', name: 'Metal', price: 800, color: '#708090' }
      ]
    },
    color: {
      id: 'color',
      name: 'Color exterior',
      options: [
        { id: 'natural', name: 'Natural', price: 0, color: '#D2B48C' },
        { id: 'white', name: 'Blanco', price: 0, color: '#FFFFFF' },
        { id: 'gray', name: 'Gris', price: 0, color: '#808080' },
        { id: 'black', name: 'Negro', price: 0, color: '#2F2F2F' },
        { id: 'green', name: 'Verde', price: 0, color: '#228B22' },
        { id: 'blue', name: 'Azul', price: 0, color: '#4682B4' }
      ]
    },
    doors: {
      id: 'doors',
      name: 'Puertas exteriores',
      options: [
        { id: 'standard', name: 'Estándar', price: 0 },
        { id: 'premium', name: 'Premium', price: 800 },
        { id: 'glass', name: 'Con cristal', price: 1200 }
      ]
    },
    windows: {
      id: 'windows',
      name: 'Ventanas',
      options: [
        { id: 'standard', name: 'Estándar', price: 0 },
        { id: 'large', name: 'Grandes', price: 1500 },
        { id: 'panoramic', name: 'Panorámicas', price: 2500 }
      ]
    }
  },
  interior: {
    flooring: {
      id: 'flooring',
      name: 'Suelo interior',
      options: [
        { id: 'laminate', name: 'Laminado', price: 0, color: '#DEB887' },
        { id: 'vinyl', name: 'Vinílico', price: 600, color: '#F5F5DC' },
        { id: 'wood', name: 'Madera', price: 1500, color: '#8B4513' },
        { id: 'tile', name: 'Baldosa', price: 1200, color: '#D3D3D3' }
      ]
    },
    kitchen: {
      id: 'kitchen',
      name: 'Cocina',
      options: [
        { id: 'basic', name: 'Básica', price: 0 },
        { id: 'modern', name: 'Moderna', price: 2500 },
        { id: 'luxury', name: 'Lujo', price: 5000 }
      ]
    },
    bathroom: {
      id: 'bathroom',
      name: 'Baño',
      options: [
        { id: 'standard', name: 'Estándar', price: 0 },
        { id: 'modern', name: 'Moderno', price: 1800 },
        { id: 'luxury', name: 'Lujo', price: 3500 }
      ]
    },
    interiorDoors: {
      id: 'interiorDoors',
      name: 'Puertas interiores',
      options: [
        { id: 'white', name: 'Blancas', price: 0 },
        { id: 'wood', name: 'Madera', price: 800 },
        { id: 'glass', name: 'Con cristal', price: 1200 }
      ]
    }
  }
};

export const getDefaultConfig = (): ConfiguratorState => ({
  exteriorCoating: 'wood',
  exteriorColor: 'natural',
  doors: 'standard',
  windows: 'standard',
  interiorFlooring: 'laminate',
  kitchen: 'basic',
  bathroom: 'standard',
  interiorDoors: 'white'
});

export const getImagePath = (category: string, option: string, view: 'exterior' | 'interior' = 'exterior'): string => {
  // Por ahora usamos placeholders, después se reemplazarán con las imágenes reales
  return `/configurator/nex-natura/${view}/${category}-${option}.jpg`;
};

export const getConfigPrice = (config: ConfiguratorState): number => {
  let totalPrice = 39990; // Precio base

  // Calcular extras
  const exterior = configuratorData.exterior;
  const interior = configuratorData.interior;

  totalPrice += exterior.coating.options.find(o => o.id === config.exteriorCoating)?.price || 0;
  totalPrice += exterior.color.options.find(o => o.id === config.exteriorColor)?.price || 0;
  totalPrice += exterior.doors.options.find(o => o.id === config.doors)?.price || 0;
  totalPrice += exterior.windows.options.find(o => o.id === config.windows)?.price || 0;
  totalPrice += interior.flooring.options.find(o => o.id === config.interiorFlooring)?.price || 0;
  totalPrice += interior.kitchen.options.find(o => o.id === config.kitchen)?.price || 0;
  totalPrice += interior.bathroom.options.find(o => o.id === config.bathroom)?.price || 0;
  totalPrice += interior.interiorDoors.options.find(o => o.id === config.interiorDoors)?.price || 0;

  return totalPrice;
};
