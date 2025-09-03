import React, { createContext, useContext, useState, ReactNode } from 'react';
import { toast } from '@/hooks/use-toast';

export interface CartItem {
    id: string;
    name: string;
    price: string;
    quantity: number;
    category:
        | 'karahi'
        | 'handi'
        | 'barbq'
        | 'biryani'
        | 'chinese'
        | 'naan'
        | 'beverage';
}

interface CartContextType {
    items: CartItem[];
    addToCart: (item: Omit<CartItem, 'quantity'>) => void;
    removeFromCart: (id: string) => void;
    updateQuantity: (id: string, quantity: number) => void;
    clearCart: () => void;
    totalItems: number;
    totalPrice: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const useCart = () => {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error('useCart must be used within a CartProvider');
    }
    return context;
};

export const CartProvider = ({ children }: { children: ReactNode }) => {
    const [items, setItems] = useState<CartItem[]>([]);

    const addToCart = (newItem: Omit<CartItem, 'quantity'>) => {
        setItems((prevItems) => {
            const existingItem = prevItems.find(
                (item) => item.id === newItem.id,
            );

            if (existingItem) {
                toast({
                    title: 'Updated Cart',
                    description: `Increased ${newItem.name} quantity`,
                });
                return prevItems.map((item) =>
                    item.id === newItem.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item,
                );
            } else {
                toast({
                    title: 'Added to Cart',
                    description: `${newItem.name} added successfully`,
                });
                return [...prevItems, { ...newItem, quantity: 1 }];
            }
        });
    };

    const removeFromCart = (id: string) => {
        setItems((prevItems) => prevItems.filter((item) => item.id !== id));
        toast({
            title: 'Removed from Cart',
            description: 'Item removed successfully',
        });
    };

    const updateQuantity = (id: string, quantity: number) => {
        if (quantity <= 0) {
            removeFromCart(id);
            return;
        }

        setItems((prevItems) =>
            prevItems.map((item) =>
                item.id === id ? { ...item, quantity } : item,
            ),
        );
    };

    const clearCart = () => {
        setItems([]);
        toast({
            title: 'Cart Cleared',
            description: 'All items removed from cart',
        });
    };

    const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);

    const totalPrice = items.reduce((sum, item) => {
        // Extract the full price (second number) from price string like "1320 / 2580"
        const fullPrice = parseInt(
            item.price.split(' / ')[1] || item.price.split(' / ')[0],
        );
        return sum + fullPrice * item.quantity;
    }, 0);

    return (
        <CartContext.Provider
            value={{
                items,
                addToCart,
                removeFromCart,
                updateQuantity,
                clearCart,
                totalItems,
                totalPrice,
            }}
        >
            {children}
        </CartContext.Provider>
    );
};
