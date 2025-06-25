
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

console.log('Iniciando aplicación Nex Modular Homes...');
console.log('URL actual:', window.location.href);
console.log('Protocolo:', window.location.protocol);
console.log('Host:', window.location.host);

const rootElement = document.getElementById("root");

if (!rootElement) {
  console.error('No se encontró el elemento root');
  document.body.innerHTML = '<div style="padding: 20px; text-align: center; color: red;"><h1>Error: No se pudo cargar la aplicación</h1><p>Elemento root no encontrado</p></div>';
} else {
  console.log('Elemento root encontrado, creando aplicación React...');
  
  try {
    const root = createRoot(rootElement);
    root.render(<App />);
    console.log('Aplicación React renderizada exitosamente');
    
    // Remove loading indicator
    setTimeout(() => {
      const loadingIndicator = document.getElementById('loading-indicator');
      if (loadingIndicator) {
        loadingIndicator.style.display = 'none';
      }
    }, 1000);
    
  } catch (error) {
    console.error('Error al renderizar la aplicación:', error);
    rootElement.innerHTML = `
      <div style="padding: 20px; text-align: center; color: red; font-family: Arial, sans-serif;">
        <h1>Error al cargar Nex Modular Homes</h1>
        <p>Hubo un problema al inicializar la aplicación.</p>
        <p><small>Error: ${error.message}</small></p>
        <button onclick="window.location.reload()" style="padding: 10px 20px; margin-top: 10px; background: #3498db; color: white; border: none; border-radius: 5px; cursor: pointer;">
          Recargar página
        </button>
      </div>
    `;
  }
}
