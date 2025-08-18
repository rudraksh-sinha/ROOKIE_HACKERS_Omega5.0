import { useState, useCallback } from "react";
import { Product, CartItem, CartState } from "@/types/product";
import { toast } from "@/hooks/use-toast";

export const useCart = () => {
  const [cart, setCart] = useState<CartState>({
    items: [],
    total: 0,
    itemCount: 0
  });

  const calculateCartState = (items: CartItem[]): CartState => {
    const total = items.reduce((sum, item) => sum + (item.product.price * item.quantity), 0);
    const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);
    return { items, total, itemCount };
  };

  const addToCart = useCallback((product: Product, quantity: number = 1) => {
    setCart(prevCart => {
      const existingItemIndex = prevCart.items.findIndex(item => item.product.id === product.id);
      let newItems: CartItem[];

      if (existingItemIndex >= 0) {
        newItems = [...prevCart.items];
        newItems[existingItemIndex].quantity += quantity;
      } else {
        newItems = [...prevCart.items, { product, quantity }];
      }

      toast({
        title: "Added to cart",
        description: `${product.name} has been added to your cart`,
      });

      return calculateCartState(newItems);
    });
  }, []);

  const removeFromCart = useCallback((productId: string) => {
    setCart(prevCart => {
      const newItems = prevCart.items.filter(item => item.product.id !== productId);
      return calculateCartState(newItems);
    });
  }, []);

  const updateQuantity = useCallback((productId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }

    setCart(prevCart => {
      const newItems = prevCart.items.map(item =>
        item.product.id === productId
          ? { ...item, quantity }
          : item
      );
      return calculateCartState(newItems);
    });
  }, [removeFromCart]);

  const clearCart = useCallback(() => {
    setCart({
      items: [],
      total: 0,
      itemCount: 0
    });
  }, []);

  return {
    cart,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart
  };
};