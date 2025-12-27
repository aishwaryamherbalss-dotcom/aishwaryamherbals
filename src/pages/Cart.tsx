import { Link } from "react-router-dom";
import { PageLayout } from "@/components/layout/PageLayout";
import { Button } from "@/components/ui/button";
import { useCart } from "@/contexts/CartContext";
import { ShoppingBag, Plus, Minus, Trash2, ArrowRight } from "lucide-react";

const Cart = () => {
  const { items, updateQuantity, removeFromCart, getSubtotal, getItemCount } = useCart();

  if (items.length === 0) {
    return (
      <PageLayout
        title="Your Cart - Aishwaryam Herbals"
        description="Your shopping cart is empty. Browse our herbal products and add items to your cart."
      >
        <section className="py-16 md:py-24">
          <div className="container text-center">
            <div className="w-20 h-20 bg-sage-light rounded-full flex items-center justify-center mx-auto mb-6">
              <ShoppingBag className="w-10 h-10 text-primary" />
            </div>
            <h1 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mb-4">
              Your Cart is Empty
            </h1>
            <p className="text-muted-foreground mb-6 max-w-md mx-auto">
              Looks like you haven't added any products yet. Browse our herbal collection and find something you love.
            </p>
            <Button asChild variant="hero">
              <Link to="/shop">Browse Products</Link>
            </Button>
          </div>
        </section>
      </PageLayout>
    );
  }

  return (
    <PageLayout
      title="Your Cart - Aishwaryam Herbals"
      description="Review your cart items and proceed to checkout."
    >
      {/* Header */}
      <section className="py-8 md:py-12 bg-hero-gradient">
        <div className="container">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
            <ShoppingBag className="w-4 h-4" />
            {getItemCount()} {getItemCount() === 1 ? "Item" : "Items"}
          </span>
          <h1 className="font-serif text-2xl md:text-3xl lg:text-4xl font-semibold text-foreground">
            Your Cart
          </h1>
        </div>
      </section>

      {/* Cart Content */}
      <section className="py-8 md:py-12">
        <div className="container">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-4">
              {items.map((item) => (
                <div
                  key={item.product.id}
                  className="bg-background p-4 md:p-6 rounded-2xl shadow-soft flex gap-4"
                >
                  <Link to={`/product/${item.product.slug}`} className="flex-shrink-0">
                    <div className="w-20 h-24 md:w-24 md:h-28 rounded-xl overflow-hidden bg-sage-light">
                      <img
                        src={item.product.image}
                        alt={item.product.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </Link>

                  <div className="flex-1 min-w-0">
                    <Link to={`/product/${item.product.slug}`}>
                      <h3 className="font-serif text-base md:text-lg font-semibold text-foreground hover:text-primary transition-colors">
                        {item.product.name}
                      </h3>
                    </Link>
                    <p className="text-sm text-muted-foreground mb-2">
                      {item.product.size}
                    </p>
                    <p className="font-serif text-lg font-bold text-primary">
                      ₹{item.product.price}
                    </p>
                  </div>

                  <div className="flex flex-col items-end justify-between">
                    {/* Quantity Controls */}
                    <div className="flex items-center gap-2 bg-sage-light rounded-lg p-1">
                      <button
                        onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                        className="w-8 h-8 flex items-center justify-center rounded-md hover:bg-background transition-colors"
                        aria-label="Decrease quantity"
                      >
                        <Minus className="w-4 h-4" />
                      </button>
                      <span className="w-8 text-center font-medium">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                        className="w-8 h-8 flex items-center justify-center rounded-md hover:bg-background transition-colors"
                        aria-label="Increase quantity"
                      >
                        <Plus className="w-4 h-4" />
                      </button>
                    </div>

                    {/* Remove Button */}
                    <button
                      onClick={() => removeFromCart(item.product.id)}
                      className="text-muted-foreground hover:text-destructive transition-colors p-2"
                      aria-label="Remove item"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-background p-6 rounded-2xl shadow-soft sticky top-24">
                <h2 className="font-serif text-xl font-semibold text-foreground mb-4">
                  Order Summary
                </h2>

                <div className="space-y-3 mb-6">
                  <div className="flex justify-between text-muted-foreground">
                    <span>Subtotal ({getItemCount()} items)</span>
                    <span>₹{getSubtotal()}</span>
                  </div>
                  <div className="flex justify-between text-muted-foreground">
                    <span>Shipping</span>
                    <span className="text-primary">Free</span>
                  </div>
                  <div className="border-t border-border pt-3 flex justify-between">
                    <span className="font-semibold text-foreground">Total</span>
                    <span className="font-serif text-xl font-bold text-primary">
                      ₹{getSubtotal()}
                    </span>
                  </div>
                </div>

                <Button asChild variant="hero" className="w-full mb-3">
                  <Link to="/checkout">
                    Proceed to Checkout
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>

                <Button asChild variant="outline" className="w-full">
                  <Link to="/shop">Continue Shopping</Link>
                </Button>

                {/* Trust Text */}
                <div className="mt-6 p-3 bg-cream rounded-xl text-center">
                  <p className="text-sage-dark text-xs font-medium">
                    வீட்டில் எல்லோருக்கும் ஏற்றது • Safe for the whole family
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Cart;
