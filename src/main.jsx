import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';

// Importações do contexto e da snackbar
import { NotificationProvider } from './context/NotificationContext.jsx';
import SnackBarComponent from './components/SnackBar.jsx';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <NotificationProvider>
      <App />
      <SnackBarComponent />
    </NotificationProvider>
  </StrictMode>,
);
