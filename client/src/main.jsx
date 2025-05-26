import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ModalProvider } from './providers/modalProvider.jsx';
import App from './App.jsx';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from './providers/authProvider.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <BrowserRouter>
        <ModalProvider>
          <App />
        </ModalProvider>
      </BrowserRouter>
    </AuthProvider>
  </StrictMode>
);
