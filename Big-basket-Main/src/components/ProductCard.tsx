import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Plus } from "lucide-react";
import { Product } from "@/types/product";

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

export const ProductCard = ({ product, onAddToCart }: ProductCardProps) => {
  return (
    <Card className="group overflow-hidden transition-all duration-300 hover:shadow-card hover:-translate-y-1 bg-gradient-to-b from-card to-fresh-green-light/20">
      <CardContent className="p-4">
        <div className="aspect-square relative mb-4 bg-fresh-green-light/30 rounded-lg overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <Badge 
            variant="secondary" 
            className="absolute top-2 right-2 bg-orange-accent text-orange-accent-foreground"
          >
            {product.category}
          </Badge>
        </div>
        
        <div className="space-y-2">
          <h3 className="font-semibold text-lg text-card-foreground line-clamp-1">
            {product.name}
          </h3>
          <p className="text-sm text-muted-foreground line-clamp-2">
            {product.description}
          </p>
          <div className="flex items-center justify-between">
            <div>
              <span className="text-xl font-bold text-fresh-green">₹{product.price}</span>
              <span className="text-sm text-muted-foreground ml-1">/{product.unit}</span>
            </div>
          </div>
        </div>
      </CardContent>
      
      <CardFooter className="p-4 pt-0">
        <Button 
          onClick={() => onAddToCart(product)}
          className="w-full bg-fresh-green hover:bg-fresh-green/90 text-white transition-all duration-200 hover:shadow-cart"
          size="sm"
        >
          <Plus className="w-4 h-4 mr-2" />
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
  );
};