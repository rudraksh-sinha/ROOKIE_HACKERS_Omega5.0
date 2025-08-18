import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ShoppingCart, Plus, Minus, Trash2 } from "lucide-react";
import { CartState, Product } from "@/types/product";

interface CartSidebarProps {
  cart: CartState;
  onUpdateQuantity: (productId: string, quantity: number) => void;
  onRemoveItem: (productId: string) => void;
  suggestedProducts: Product[];
  onAddToCart: (product: Product) => void;
}

export const CartSidebar = ({ 
  cart, 
  onUpdateQuantity, 
  onRemoveItem, 
  suggestedProducts,
  onAddToCart 
}: CartSidebarProps) => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" className="relative bg-cart-bg text-cart-text hover:bg-cart-bg/90 border-cart-bg">
          <ShoppingCart className="w-5 h-5 mr-2" />
          Cart
          {cart.itemCount > 0 && (
            <Badge className="absolute -top-2 -right-2 bg-orange-accent text-orange-accent-foreground min-w-5 h-5 flex items-center justify-center p-0 text-xs">
              {cart.itemCount}
            </Badge>
          )}
        </Button>
      </SheetTrigger>
      
      <SheetContent className="w-full sm:max-w-lg">
        <SheetHeader>
          <SheetTitle className="flex items-center gap-2">
            <ShoppingCart className="w-5 h-5" />
            Your Cart ({cart.itemCount} items)
          </SheetTitle>
        </SheetHeader>
        
        <div className="flex flex-col h-full">
          <div className="flex-1 overflow-y-auto space-y-4 mt-6">
            {cart.items.length === 0 ? (
              <div className="text-center py-8">
                <ShoppingCart className="w-12 h-12 mx-auto text-muted-foreground mb-4" />
                <p className="text-muted-foreground">Your cart is empty</p>
              </div>
            ) : (
              cart.items.map((item) => (
                <div key={item.product.id} className="flex items-center gap-3 p-3 border rounded-lg">
                  <img
                    src={item.product.image}
                    alt={item.product.name}
                    className="w-12 h-12 object-cover rounded"
                  />
                  <div className="flex-1">
                    <h4 className="font-medium text-sm">{item.product.name}</h4>
                    <p className="text-sm text-muted-foreground">₹{item.product.price}/{item.product.unit}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button
                      variant="outline"
                      size="icon"
                      className="w-8 h-8"
                      onClick={() => onUpdateQuantity(item.product.id, item.quantity - 1)}
                    >
                      <Minus className="w-3 h-3" />
                    </Button>
                    <span className="w-8 text-center text-sm font-medium">{item.quantity}</span>
                    <Button
                      variant="outline"
                      size="icon"
                      className="w-8 h-8"
                      onClick={() => onUpdateQuantity(item.product.id, item.quantity + 1)}
                    >
                      <Plus className="w-3 h-3" />
                    </Button>
                    <Button
                      variant="outline"
                      size="icon"
                      className="w-8 h-8 ml-2 text-destructive hover:text-destructive"
                      onClick={() => onRemoveItem(item.product.id)}
                    >
                      <Trash2 className="w-3 h-3" />
                    </Button>
                  </div>
                </div>
              ))
            )}
            
            {suggestedProducts.length > 0 && (
              <>
                <Separator className="my-6" />
                <div>
                  <h3 className="font-semibold mb-3 text-fresh-green">You might also like</h3>
                  <div className="space-y-3">
                    {suggestedProducts.map((product) => (
                      <div key={product.id} className="flex items-center gap-3 p-3 border rounded-lg bg-fresh-green-light/20">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-10 h-10 object-cover rounded"
                        />
                        <div className="flex-1">
                          <h4 className="font-medium text-sm">{product.name}</h4>
                          <p className="text-sm text-muted-foreground">₹{product.price}/{product.unit}</p>
                        </div>
                        <Button 
                          size="sm" 
                          variant="outline"
                          onClick={() => onAddToCart(product)}
                          className="text-fresh-green border-fresh-green hover:bg-fresh-green hover:text-white"
                        >
                          <Plus className="w-3 h-3 mr-1" />
                          Add
                        </Button>
                      </div>
                    ))}
                  </div>
                </div>
              </>
            )}
          </div>
          
          {cart.items.length > 0 && (
            <div className="border-t pt-4 space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-lg font-semibold">Total:</span>
                <span className="text-xl font-bold text-fresh-green">₹{cart.total}</span>
              </div>
              <Button className="w-full bg-fresh-green hover:bg-fresh-green/90 text-white">
                Proceed to Checkout
              </Button>
            </div>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
};