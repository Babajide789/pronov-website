"use client";

import { useState, useEffect } from "react";
import { ShoppingCart, Search, Trash2, Plus, Minus } from "lucide-react";

// ✅ Define a type for each product item
type Product = {
  id: number;
  name: string;
  status: "In Stock" | "Out of Stock";
  price: number;
  qty?: number; // qty is optional for products but required in cart
};

export default function SalesCheckout() {
  const [loading, setLoading] = useState<boolean>(true);
  const [cart, setCart] = useState<Product[]>([]);

  const [products] = useState<Product[]>([
    {
      id: 1,
      name: "Agary Paracetamol A4-3549",
      status: "In Stock",
      price: 3500,
    },
    {
      id: 2,
      name: "Acepol Paracetamol Susp. A4-0704",
      status: "In Stock",
      price: 4000,
    },
    {
      id: 3,
      name: "Albemol Paracetamol Syrup 60ml: A4-7709",
      status: "Out of Stock",
      price: 5000,
    },
  ]);

  // Simulate delay before showing real data
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  // ✅ Add product to cart
  const handleAddToCart = (product: Product) => {
    if (product.status === "Out of Stock") return;
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, qty: (item.qty ?? 1) + 1 } : item
        );
      }
      return [...prev, { ...product, qty: 1 }];
    });
  };

  // ✅ Update quantity
  const updateQty = (id: number, change: number) => {
    setCart((prev) =>
      prev
        .map((item) =>
          item.id === id
            ? { ...item, qty: Math.max(1, (item.qty ?? 1) + change) }
            : item
        )
        .filter((item) => (item.qty ?? 1) > 0)
    );
  };

  // ✅ Remove from cart
  const removeFromCart = (id: number) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  // ✅ Calculate total
  const total = cart.reduce((sum, item) => sum + item.price * (item.qty ?? 1), 0);

  return (
    <div className="min-h-screen bg-gray-50 p-6 flex flex-col lg:flex-row gap-6">
      {/* LEFT: Sales Section */}
      <div className="lg:w-[70%] bg-white rounded-2xl shadow-md p-6 flex flex-col">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold text-green-600">Sales Checkout</h2>
          <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition">
            Add Sales
          </button>
        </div>

        {/* Search Bar */}
        <div className="relative mb-6">
          <Search className="absolute left-3 top-3 text-gray-400" size={20} />
          <input
            type="text"
            placeholder="Search for a product or scan a barcode"
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>

        {/* Product List */}
        <div className="space-y-4 flex-1 overflow-y-auto">
          {loading ? (
            Array(4)
              .fill(0)
              .map((_, i) => (
                <div
                  key={i}
                  className="animate-pulse flex justify-between items-center border border-gray-200 rounded-lg p-4"
                >
                  <div className="w-2/3 h-4 bg-gray-200 rounded"></div>
                  <div className="w-16 h-4 bg-gray-200 rounded"></div>
                  <div className="w-20 h-8 bg-gray-200 rounded"></div>
                </div>
              ))
          ) : (
            products.map((item) => (
              <div
                key={item.id}
                className="flex justify-between items-center border border-gray-200 rounded-lg p-4 hover:shadow-sm transition"
              >
                <div className="flex-1">
                  <p className="font-medium text-gray-800">{item.name}</p>
                  <p
                    className={`text-sm ${
                      item.status === "In Stock" ? "text-green-600" : "text-red-500"
                    }`}
                  >
                    {item.status}
                  </p>
                </div>

                <div className="w-24 text-center">
                  <p className="font-semibold text-gray-700">
                    ₦{item.price.toLocaleString()}
                  </p>
                </div>

                <button
                  disabled={item.status === "Out of Stock"}
                  onClick={() => handleAddToCart(item)}
                  className={`px-4 py-2 rounded-lg text-white font-medium ${
                    item.status === "Out of Stock"
                      ? "bg-gray-400 cursor-not-allowed"
                      : "bg-green-600 hover:bg-green-700"
                  }`}
                >
                  Add to cart
                </button>
              </div>
            ))
          )}
        </div>
      </div>

      {/* RIGHT: Cart Section */}
      <div className="lg:w-[30%] bg-white rounded-xl shadow p-6 flex flex-col justify-between">
        <div>
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center gap-2">
              <h2 className="text-lg font-semibold">Cart</h2>
              {/* Green badge beside Cart text */}
              {cart.length > 0 && (
                <span className="bg-green-600 text-white text-xs font-semibold rounded-full px-2 py-0.5">
                  {cart.reduce((total, item) => total + (item.qty ?? 1), 0)}
                </span>
              )}
            </div>
            <ShoppingCart className="text-green-600" size={22} />
          </div>

          {loading ? (
            <div className="space-y-3">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="h-8 bg-gray-100 animate-pulse rounded"></div>
              ))}
            </div>
          ) : cart.length === 0 ? (
            <div className="text-center text-gray-500 py-10">
              <p className="font-medium">Cart is empty</p>
              <p className="text-sm">Add products to your cart</p>
            </div>
          ) : (
            <div className="space-y-3 max-h-80 overflow-y-auto">
              {cart.map((item) => (
                <div
                  key={item.id}
                  className="flex justify-between items-center border-b pb-2"
                >
                  <div>
                    <p className="font-medium">{item.name}</p>
                    <p className="text-sm text-gray-500">₦{item.price}</p>
                  </div>

                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => updateQty(item.id, -1)}
                      className="p-1 rounded bg-gray-100 hover:bg-gray-200"
                    >
                      <Minus size={16} />
                    </button>
                    <span>{item.qty}</span>
                    <button
                      onClick={() => updateQty(item.id, 1)}
                      className="p-1 rounded bg-gray-100 hover:bg-gray-200"
                    >
                      <Plus size={16} />
                    </button>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-red-500 hover:text-red-600"
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer Section */}
        {!loading && (
          <div className="border-t pt-4 mt-4">
            <div className="flex justify-between items-center mb-3 text-lg font-semibold">
              <p>Total</p>
              <p className="text-green-600">
                ₦{total.toLocaleString(undefined, { minimumFractionDigits: 0 })}
              </p>
            </div>
            <button
              disabled={cart.length === 0}
              className={`w-full py-3 rounded-lg font-semibold transition ${
                cart.length === 0
                  ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                  : "bg-green-600 text-white hover:bg-green-700"
              }`}
            >
              Checkout
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
