import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ModalProvider } from './providers/modalProvider.jsx';
import App from './App.jsx';
import './index.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ModalProvider>
      <App />
    </ModalProvider>
  </StrictMode>
);
