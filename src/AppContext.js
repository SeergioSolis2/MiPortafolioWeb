// src/context/AppContext.js
import React, { createContext, useContext, useReducer } from 'react';

// Definir el estado inicial
const initialState = {
  language: 'es', // Estado inicial en español
  selectedOption: 'Option1', // Añadir la opción seleccionada en el navbar
};

// Crear el contexto
const AppContext = createContext();

// Definir el proveedor del contexto
const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

// Crear un hook personalizado para acceder al contexto
const useAppContext = () => {
  return useContext(AppContext);
};

// Reducer (puedes expandirlo según tus necesidades)
const appReducer = (state, action) => {
  switch (action.type) {
    case 'CHANGE_LANGUAGE':
      return { ...state, language: action.payload };
    case 'SELECT_NAVBAR_OPTION':
      return { ...state, selectedOption: action.payload };
    default:
      return state;
  }
};

export { AppProvider, useAppContext };
