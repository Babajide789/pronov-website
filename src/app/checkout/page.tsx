"use client";

import { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import MyDropdownMenu from "@/shadCN/Mydropdown-menu";
import { Bell, ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

type Product = {
  id: number;
  name: string;
  price: number;
  qty: number;
};

export default function CheckoutPage() {
  const [cart, setCart] = useState<Product[]>([]);
  const router = useRouter();

  useEffect(() => {
    const savedCart = localStorage.getItem("checkoutCart");
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      {/* HEADER SECTION */}
      <div className="flex justify-between items-center mb-8 border-b pb-4">
        <div
          onClick={() => router.back()}
          className="flex items-center gap-2 cursor-pointer hover:text-green-600 transition"
        >
          <ArrowLeft size={20} className="text-gray-700" />
          <h1 className="text-lg font-semibold text-gray-800">Checkout</h1>
        </div>

        <div className="flex items-center gap-4">
          <div className="relative">
            <Bell size={22} className="text-gray-700" />
            <span className="absolute top-0 right-0 w-2.5 h-2.5 bg-red-500 rounded-full border border-white"></span>
          </div>
          <MyDropdownMenu />
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* LEFT: CART ITEMS */}
        <div className="lg:col-span-2 bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <h2 className="text-base font-semibold text-gray-700 mb-4">
            Cart Summary
          </h2>

          <div className="grid grid-cols-4 text-sm font-medium text-gray-500 border-b pb-2">
            <p>Product Name</p>
            <p>Quantity</p>
            <p>Unit Price</p>
            <p>Sub-Total</p>
          </div>

          <div className="py-4 text-gray-600 text-sm space-y-3">
            {cart.length > 0 ? (
              cart.map((item) => (
                <div
                  key={item.id}
                  className="grid grid-cols-4 py-2 border-b last:border-none"
                >
                  <p>{item.name}</p>
                  <p>{item.qty}</p>
                  <p>₦{item.price.toLocaleString()}</p>
                  <p>₦{(item.price * item.qty).toLocaleString()}</p>
                </div>
              ))
            ) : (
              <p className="text-center py-6 text-gray-400">
                No items yet — data from Sales Page will display here
              </p>
            )}
          </div>

          {/* Total */}
          {cart.length > 0 && (
            <div className="flex justify-end border-t pt-3 mt-3 text-gray-800 font-semibold">
              <p>Total: ₦{total.toLocaleString()}</p>
            </div>
          )}
        </div>

        {/* RIGHT: CHECKOUT DETAILS */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <h2 className="text-base font-semibold text-gray-700 mb-4">
            Checkout Details
          </h2>

          <div className="space-y-2">
            <label
              htmlFor="deliveryDate"
              className="text-sm font-medium text-gray-600"
            >
              Date of Delivery
            </label>
            <Input
              id="deliveryDate"
              type="date"
              placeholder="Select Date"
              className="border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-green-500"
            />
          </div>

          <button className="w-full mt-6 bg-green-600 text-white font-semibold py-3 rounded-lg hover:bg-green-700 transition-all shadow-md hover:shadow-lg active:scale-95">
            Confirm Checkout
          </button>
        </div>
      </div>
    </div>
  );
}
