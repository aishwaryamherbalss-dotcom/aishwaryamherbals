import { useState } from "react";
import { Link } from "react-router-dom";
import { PageLayout } from "@/components/layout/PageLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useCart } from "@/contexts/CartContext";
import { MessageCircle, ShoppingBag, ArrowLeft } from "lucide-react";

const Checkout = () => {
  const { items, getSubtotal, getItemCount, clearCart } = useCart();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    city: "",
    pincode: "",
    notes: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handlePlaceOrder = () => {
    // Create cart summary for WhatsApp
    const cartItems = items
      .map((item) => `• ${item.product.name} (${item.product.size}) x${item.quantity} - ₹${item.product.price * item.quantity}`)
      .join("\n");

    const message = `🛒 *New Order from Aishwaryam Herbals*

*Customer Details:*
Name: ${formData.name}
Phone: ${formData.phone}
Email: ${formData.email || "Not provided"}

*Delivery Address:*
${formData.address}
${formData.city} - ${formData.pincode}

*Order Items:*
${cartItems}

*Total: ₹${getSubtotal()}*

${formData.notes ? `*Notes:* ${formData.notes}` : ""}`;

    const whatsappMessage = encodeURIComponent(message);
    const whatsappLink = `https://wa.me/919843398171?text=${whatsappMessage}`;

    window.open(whatsappLink, "_blank");
  };

  if (items.length === 0) {
    return (
      <PageLayout
        title="Checkout - Aishwaryam Herbals"
        description="Complete your order at Aishwaryam Herbals."
      >
        <section className="py-16 md:py-24">
          <div className="container text-center">
            <div className="w-20 h-20 bg-sage-light rounded-full flex items-center justify-center mx-auto mb-6">
              <ShoppingBag className="w-10 h-10 text-primary" />
            </div>
            <h1 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mb-4">
              Your Cart is Empty
            </h1>
            <p className="text-muted-foreground mb-6">
              Add some products to your cart before checking out.
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
      title="Checkout - Aishwaryam Herbals"
      description="Complete your order at Aishwaryam Herbals."
    >
      {/* Header */}
      <section className="py-8 md:py-12 bg-hero-gradient">
        <div className="container">
          <Link
            to="/cart"
            className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors mb-4"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Cart
          </Link>
          <h1 className="font-serif text-2xl md:text-3xl lg:text-4xl font-semibold text-foreground">
            Checkout
          </h1>
        </div>
      </section>

      {/* Checkout Content */}
      <section className="py-8 md:py-12">
        <div className="container">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Delivery Details Form */}
            <div className="lg:col-span-2">
              <div className="bg-background p-6 md:p-8 rounded-2xl shadow-soft">
                <h2 className="font-serif text-xl font-semibold text-foreground mb-6">
                  Delivery Details
                </h2>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-1.5">
                      Full Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your full name"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-1.5">
                      Phone Number *
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Enter your phone number"
                      required
                    />
                  </div>

                  <div className="md:col-span-2">
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1.5">
                      Email (Optional)
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter your email"
                    />
                  </div>

                  <div className="md:col-span-2">
                    <label htmlFor="address" className="block text-sm font-medium text-foreground mb-1.5">
                      Delivery Address *
                    </label>
                    <Textarea
                      id="address"
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      placeholder="Enter your full address"
                      rows={3}
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="city" className="block text-sm font-medium text-foreground mb-1.5">
                      City *
                    </label>
                    <Input
                      id="city"
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      placeholder="Enter your city"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="pincode" className="block text-sm font-medium text-foreground mb-1.5">
                      Pincode *
                    </label>
                    <Input
                      id="pincode"
                      name="pincode"
                      value={formData.pincode}
                      onChange={handleChange}
                      placeholder="Enter your pincode"
                      required
                    />
                  </div>

                  <div className="md:col-span-2">
                    <label htmlFor="notes" className="block text-sm font-medium text-foreground mb-1.5">
                      Order Notes (Optional)
                    </label>
                    <Textarea
                      id="notes"
                      name="notes"
                      value={formData.notes}
                      onChange={handleChange}
                      placeholder="Any special instructions for delivery?"
                      rows={2}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-background p-6 rounded-2xl shadow-soft sticky top-24">
                <h2 className="font-serif text-xl font-semibold text-foreground mb-4">
                  Order Summary
                </h2>

                {/* Cart Items */}
                <div className="space-y-3 mb-4 max-h-60 overflow-y-auto">
                  {items.map((item) => (
                    <div key={item.product.id} className="flex gap-3 p-2 bg-cream/50 rounded-lg">
                      <div className="w-12 h-14 rounded-lg overflow-hidden bg-sage-light flex-shrink-0">
                        <img
                          src={item.product.image}
                          alt={item.product.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-foreground truncate">
                          {item.product.name}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          {item.product.size} × {item.quantity}
                        </p>
                      </div>
                      <p className="text-sm font-semibold text-primary">
                        ₹{item.product.price * item.quantity}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="space-y-3 mb-6 pt-4 border-t border-border">
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

                <Button
                  onClick={handlePlaceOrder}
                  variant="hero"
                  className="w-full"
                  disabled={!formData.name || !formData.phone || !formData.address || !formData.city || !formData.pincode}
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Place Order on WhatsApp
                </Button>

                <p className="text-xs text-muted-foreground text-center mt-4">
                  Your order will be confirmed via WhatsApp. No payment gateway required.
                </p>

                {/* Trust Text */}
                <div className="mt-4 p-3 bg-cream rounded-xl text-center">
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

export default Checkout;
