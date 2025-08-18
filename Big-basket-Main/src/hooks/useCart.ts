import { useState, useCallback } from "react";
import { Product, CartItem, CartState } from "@/types/product";
import { toast } from "@/hooks/use-toast";

const PAST_ORDERS_KEY = "past_orders";
const SUBSCRIPTION_DISCOUNT_PERCENTAGE = 5;

export const useCart = () => {
  const [cart, setCart] = useState<CartState>({
    items: [],
    total: 0,
    itemCount: 0
  });

  const calculateCartState = (items: CartItem[]): CartState => {
    const total = items.reduce((sum, item) => {
      let itemPrice = item.product.price;
      // Apply subscription discount if the item is subscribed
      if (item.isSubscribed) {
        const discount = (itemPrice * SUBSCRIPTION_DISCOUNT_PERCENTAGE) / 100;
        itemPrice -= discount;
      }
      return sum + (itemPrice * item.quantity);
    }, 0);

    const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);
    return { items, total: parseFloat(total.toFixed(2)), itemCount };
  };

  const addToCart = useCallback((product: Product, quantity: number = 1) => {
    setCart(prevCart => {
      const existingItemIndex = prevCart.items.findIndex(item => item.product.id === product.id);
      let newItems: CartItem[];

      if (existingItemIndex >= 0) {
        newItems = [...prevCart.items];
        newItems[existingItemIndex].quantity += quantity;
      } else {
        newItems = [...prevCart.items, { product, quantity, isSubscribed: false }];
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
        item.product.id === productId ? { ...item, quantity } : item
      );
      return calculateCartState(newItems);
    });
  }, [removeFromCart]);

  const toggleSubscription = useCallback((productId: string) => {
    setCart(prevCart => {
      const newItems = prevCart.items.map(item =>
        item.product.id === productId ? { ...item, isSubscribed: !item.isSubscribed } : item
      );
      return calculateCartState(newItems);
    });
  }, []);

  // This function now saves past orders and then clears the cart
  const checkout = useCallback(() => {
    if (cart.items.length === 0) return;

    try {
      const storedItems = localStorage.getItem(PAST_ORDERS_KEY);
      const pastOrders: Product[] = storedItems ? JSON.parse(storedItems) : [];
      
      const newItems = cart.items.map(item => item.product);
      // Add new items and remove duplicates
      const updatedOrders = [...pastOrders, ...newItems];
      const uniqueOrders = updatedOrders.filter((product, index, self) =>
        index === self.findIndex(p => p.id === product.id)
      );
      
      localStorage.setItem(PAST_ORDERS_KEY, JSON.stringify(uniqueOrders));
      
      toast({
        title: "Checkout Successful!",
        description: "Your order has been placed.",
      });

    } catch (error) {
      console.error("Failed to save past orders:", error);
      toast({
        variant: "destructive",
        title: "Error",
        description: "Could not save your order history.",
      });
    }

    // Clear the cart
    setCart({ items: [], total: 0, itemCount: 0 });
  }, [cart.items]);

  return {
    cart,
    addToCart,
    removeFromCart,
    updateQuantity,
    toggleSubscription,
    checkout
  };
};