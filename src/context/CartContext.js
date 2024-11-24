import { createContext, useContext} from 'react';

// Create Context
export const CartContext = createContext();

// Create custom hook for using cart context
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};