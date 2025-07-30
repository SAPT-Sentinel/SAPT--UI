import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';

// Importações do contexto e da snackbar
import { NotificationProvider } from './context/NotificationContext';
import SnackBarComponent from './components/SnackBarComponent'; // ajuste o caminho conforme necessário

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <NotificationProvider>
      <App />
      <SnackBarComponent />
    </NotificationProvider>
  </StrictMode>,
);
