import React, { useMemo, useState, useContext, useCallback, createContext } from 'react';

const NotificationContext = createContext();

export const NotificationProvider = ({ children }) => {
  const [notifications, setNotifications] = useState([]);

  const removeNotification = useCallback((id) => {
    setNotifications((prev) => prev.filter((notification) => notification.id !== id));
  }, []);

  const addNotification = useCallback((message, type) => {
    const id = Date.now(); // ID único baseado no timestamp
    setNotifications((prev) => [...prev, { id, message, type }]);

    // Remove automaticamente após 5 segundos
    setTimeout(() => removeNotification(id), 5000);
  }, [removeNotification]);

  const memorizedValue = useMemo(() => ({
    notifications,
    addNotification,
    removeNotification
  }), [notifications, addNotification, removeNotification]);

  return (
    <NotificationContext.Provider value={memorizedValue}>
      {children}
    </NotificationContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useNotification = () => {
  const context = useContext(NotificationContext);
  if (!context) {
    throw new Error('useNotification deve ser usado dentro de um NotificationProvider');
  }
  return context;
};
