import { Input } from "@/components/ui/input";
import { Search } from "lucide-react"; // Note: ShoppingBasket is removed
import bigBasketLogoUrl from "@/assets/bigbasket-logo.svg"; // <-- Import the logo URL
import { CartSidebar } from "./CartSidebar";
import { CartState, Product } from "@/types/product";

interface HeaderProps {
  cart: CartState;
  onUpdateQuantity: (productId: string, quantity: number) => void;
  onRemoveItem: (productId: string) => void;
  suggestedProducts: Product[];
  onAddToCart: (product: Product) => void;
}

export const Header = ({ 
  cart, 
  onUpdateQuantity, 
  onRemoveItem, 
  suggestedProducts,
  onAddToCart 
}: HeaderProps) => {
  return (
    <header className="bg-gradient-to-r from-fresh-green to-warm-yellow shadow-lg">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* This is the new logo implementation */}
          <div className="flex items-center ml-12">
            <img src={bigBasketLogoUrl} alt="BigBasket Logo" className="h-12" />
          </div>
          
          <div className="flex-1 max-w-lg mx-6">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input
                placeholder="Search for groceries..."
                className="pl-10 bg-white/90 border-0 focus:bg-white"
              />
            </div>
          </div>
          
          <CartSidebar
            cart={cart}
            onUpdateQuantity={onUpdateQuantity}
            onRemoveItem={onRemoveItem}
            suggestedProducts={suggestedProducts}
            onAddToCart={onAddToCart}
          />
        </div>
      </div>
    </header>
  );
};