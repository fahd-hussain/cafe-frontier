import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { ShoppingCart, Plus, Minus, Trash2 } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import { Card, CardContent } from "@/components/ui/card";

const CartDrawer = () => {
  const { items, updateQuantity, removeFromCart, clearCart, totalItems, totalPrice } = useCart();

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button 
          variant="outline" 
          size="lg"
          className="fixed top-4 right-4 z-50 bg-accent text-accent-foreground hover:bg-accent/90 border-accent animate-appetite-pulse"
        >
          <ShoppingCart className="w-5 h-5 mr-2 animate-bounce-slow" />
          Cart ({totalItems})
        </Button>
      </SheetTrigger>
      <SheetContent className="w-[400px] sm:w-[540px] bg-card">
        <SheetHeader>
          <SheetTitle className="font-display text-2xl text-accent animate-spice-dance">Your Order</SheetTitle>
          <SheetDescription className="animate-float">
            Review your items and proceed to checkout
          </SheetDescription>
        </SheetHeader>
        
        <div className="mt-6 space-y-4 max-h-[60vh] overflow-y-auto">
          {items.length === 0 ? (
            <div className="text-center py-8">
              <ShoppingCart className="w-12 h-12 text-muted-foreground mx-auto mb-4 animate-sizzle" />
              <p className="text-muted-foreground animate-fade-in">Your cart is empty</p>
            </div>
          ) : (
            items.map((item) => (
              <Card key={item.id} className="border-primary/20">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <h4 className="font-semibold text-accent">{item.name}</h4>
                      <p className="text-sm text-muted-foreground">
                        Rs. {item.price.split(' / ')[1]} (Full)
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      >
                        <Minus className="w-3 h-3" />
                      </Button>
                      <span className="w-8 text-center">{item.quantity}</span>
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      >
                        <Plus className="w-3 h-3" />
                      </Button>
                      <Button
                        size="sm"
                        variant="destructive"
                        onClick={() => removeFromCart(item.id)}
                      >
                        <Trash2 className="w-3 h-3" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))
          )}
        </div>

        {items.length > 0 && (
          <div className="mt-6 space-y-4">
            <div className="border-t pt-4">
              <div className="flex justify-between text-lg font-semibold">
                <span>Total:</span>
                <span className="text-accent">Rs. {totalPrice.toLocaleString()}</span>
              </div>
            </div>
            
            <div className="space-y-2">
              <Button className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
                Proceed to Checkout
              </Button>
              <Button 
                variant="outline" 
                className="w-full border-destructive text-destructive hover:bg-destructive hover:text-destructive-foreground"
                onClick={clearCart}
              >
                Clear Cart
              </Button>
            </div>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
};

export default CartDrawer;