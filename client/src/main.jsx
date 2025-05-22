import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ModalProvider } from './providers/modalProvider.jsx';
import App from './App.jsx';
import './index.css';
import { BrowserRouter } from 'react-router-dom';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <ModalProvider>
        <App />
      </ModalProvider>
    </BrowserRouter>
  </StrictMode>
);
