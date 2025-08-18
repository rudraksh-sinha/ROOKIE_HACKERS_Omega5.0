import { useState, useMemo } from "react";
import { Header } from "@/components/Header";
import { ProductCard } from "@/components/ProductCard";
import { useCart } from "@/hooks/useCart";
import { products } from "@/data/products";
import { Product } from "@/types/product";

const Index = () => {
  const { cart, addToCart, updateQuantity, removeFromCart } = useCart();

  // Generate suggested products based on cart contents
  const suggestedProducts = useMemo(() => {
    if (cart.items.length === 0) return [];

    // Get all related product IDs from cart items
    const relatedIds = cart.items.flatMap(item => item.product.relatedProducts);
    
    // Filter out products already in cart and get unique suggestions
    const suggestions = products.filter(product => 
      relatedIds.includes(product.id) && 
      !cart.items.some(item => item.product.id === product.id)
    );

    // Remove duplicates and return max 3 suggestions
    const uniqueSuggestions = suggestions.filter((product, index, self) => 
      index === self.findIndex(p => p.id === product.id)
    );

    return uniqueSuggestions.slice(0, 3);
  }, [cart.items]);

  return (
    <div className="min-h-screen bg-background">
      <Header
        cart={cart}
        onUpdateQuantity={updateQuantity}
        onRemoveItem={removeFromCart}
        suggestedProducts={suggestedProducts}
        onAddToCart={addToCart}
      />
      
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-foreground mb-2">Fresh Groceries</h2>
          <p className="text-muted-foreground">Discover fresh, quality products for your daily needs</p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={addToCart}
            />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Index;