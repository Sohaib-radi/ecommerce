"use client"
import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';

interface CartItem {
  id: number;
  name: string;
  quantity: number;
}

interface CartContextProps {
  cartItems: CartItem[];
  cartCount: number;
  addToCart: (item: CartItem) => void;
  resetCart:() => void;
}

const CartContext = createContext<CartContextProps | undefined>(undefined);

export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    // Check if window is defined before accessing localStorage
    const storedCartItems = typeof window !== 'undefined' ? JSON.parse(localStorage.getItem('cartItems') || '[]') : [];
    const [cartItems, setCartItems] = useState<CartItem[]>(storedCartItems);
    const [cartCount, setCartCount] = useState<number>(0);

    useEffect(() => {
        // Check if window is defined before accessing localStorage
        if (typeof window !== 'undefined') {
        setCartCount(calculateCartCount(cartItems));
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
        }
    }, [cartItems]);
    useEffect(() => {
        
        setCartCount(calculateCartCount(storedCartItems));
    }, []); 
    const addToCart = (item: CartItem) => {
        let updatedItems = [...cartItems];  
        let itemExists = false;
    
        for (let i = 0; i < updatedItems.length; i++) {
            if (updatedItems[i].id === item.id) {
                updatedItems[i].quantity = item.quantity;
                itemExists = true;
                break;  
            }
        }
    
        if (!itemExists) {
            updatedItems.push(item);
        }
    
        setCartItems(updatedItems);  
    };
    const resetCart = () => {
        setCartItems([]); // Clear cart items
        setCartCount(0); // Reset cart count
        localStorage.removeItem('cartItems'); // Clear localStorage
    };
    return (
        <CartContext.Provider value={{ cartItems, cartCount, addToCart,resetCart }}>
            {children}
        </CartContext.Provider>
    );
}; 
export const useCart = (): CartContextProps => {
    const context = useContext(CartContext);
    if (!context) {
    throw new Error('useCart must be used within a CartProvider');
}
    return context;
};

function calculateCartCount(items: CartItem[]): number {
  return items.reduce((total, cartItem) => total + cartItem.quantity, 0);
}
